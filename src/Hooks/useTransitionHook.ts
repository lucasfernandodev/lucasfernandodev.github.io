import React, { useEffect, useState } from "react";
import { cardPositionsCssVariable } from "../utils/cardPositionsCssVariable";

interface Iprops {
  sliderRef: React.RefObject<HTMLDivElement>
}

const useTransitionHook = ({ sliderRef }: Iprops): void => {

  let transitionTimeout: string | number | NodeJS.Timeout | undefined;
  let debounceTimeout: string | number | NodeJS.Timeout | undefined;

  const cardSize = 220 + 15;
  const startCardPosition = cardSize * -1

  const [touchDirectionMoving ,setTouchDirectionMoving] = useState<number>(0)

  let touchStart: number,touchEnded: number = 0
  let isTouch = false;

  useEffect(() => {
    if (!sliderRef.current) new Error('SliderRef do not exist')

    const slider = sliderRef.current as HTMLDivElement;
    const cards = Array.from(slider.childNodes) as HTMLElement[]
    const max_itens = cards.length

    const lastCardPosition = startCardPosition + (max_itens - 1) * cardSize
    let positions: number[] = cards.map((_, i) => startCardPosition + i * cardSize)
    let countTransition = max_itens;


    function updatePosition(elements: HTMLElement[], dir: number) {
      dir === 1 && positions.unshift(positions.pop() as number)
      dir === -1 && positions.push(positions.shift() as number)

      elements.forEach((card, index) => {
        const pos = cardPositionsCssVariable.get('--card-position', card)

        if (pos === lastCardPosition || pos === startCardPosition) {
          card.style.opacity = '0'
        }

        if (pos === (lastCardPosition - cardSize) || pos === startCardPosition && positions[index] === 0) {
          card.style.opacity = '1'
        }

        transitionTimeout = setTimeout(() => {
          card.style.setProperty('--card-position', `${positions[index]}px`);
        }, 50)
      })

    }


    // Event Handlers
    function handleWheel(el: WheelEvent) {
      clearTimeout(debounceTimeout)
      debounceTimeout = setTimeout(() => {
        if (countTransition % 6 === 0) {
          el.deltaY > 0 && updatePosition(cards, 1)
          el.deltaY < 0 && updatePosition(cards, -1)
        }
      }, 350)
    }

    function handleTransitioned() {
      countTransition = countTransition++
    }

    function handleTouchStart(event: TouchEvent){
      isTouch = true;
      touchStart = event.changedTouches[0].clientX
    }

    function handleTouchMoving(event: TouchEvent){
      touchEnded = event.changedTouches[0].clientX

      if(touchEnded > touchStart && isTouch !== false) {
        if(touchEnded - touchStart > 100){
          isTouch = false;
          touchStart = 0
          updatePosition(cards, -1)
        }
      }

      if(touchEnded < touchStart && isTouch !== false) {
        if(touchEnded - touchStart > -100){
          isTouch = false;
          touchStart = 0
          updatePosition(cards, 1)
        }
      }
    }



    // Set initial position
    cardPositionsCssVariable.set('--card-position', cards, positions)

    // Starting events
    slider.addEventListener('wheel', handleWheel, false)
    slider.addEventListener('transitionend', handleTransitioned, false)
    slider.addEventListener('touchstart', handleTouchStart, false)
    slider.addEventListener('touchmove', handleTouchMoving, false)

    return () => {
      slider.removeEventListener('wheel', handleWheel, false)
      slider.removeEventListener('transitionend', handleTransitioned, false)
      clearTimeout(transitionTimeout)
    }
  }, [])
}

export { useTransitionHook }