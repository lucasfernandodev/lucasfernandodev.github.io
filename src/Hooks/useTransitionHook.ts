import React, { useEffect } from "react";

interface useTransitionHookProps {
  sliderRef: React.RefObject<HTMLDivElement>
}

type TUseTransitionHook = (props: useTransitionHookProps) => { isLoading: boolean }

export const useTransitionHook: TUseTransitionHook = ({ sliderRef }): { isLoading: boolean } => {

  useEffect(() => {
    if (!sliderRef.current) new Error('SliderRef do not exist')

    const slider = sliderRef.current as HTMLDivElement;
    const positions = [] as any[]
    const max_itens = slider.childNodes.length
    const cardSize = 220 + 15;
    const startCardPosition = cardSize * -1
    const lastCardPosition = startCardPosition + (max_itens - 1) * cardSize
    let countTransition = 6;

    function setPositions() {
      console.log(slider.childNodes)
      slider.childNodes.forEach((item, index) => {
        const position = startCardPosition + index * cardSize;
        (item as HTMLElement).style.setProperty('--card-position', `${position}px`)

        positions.push(position)
      })
    }

    function getPosition(el: HTMLElement) {
      return parseInt((window.getComputedStyle(el).getPropertyValue('--card-position')).replace("px", ""))
    }

    function updatePosition(direction: number) {
      if (direction === 1) {
        positions.unshift(positions.pop())
      }

      if (direction === -1) {
        positions.push(positions.shift())
      }

      console.log("position:::", positions)
      slider.childNodes.forEach((el: any, index) => {


        if (getPosition(el) === lastCardPosition || getPosition(el) === startCardPosition) {
          el.style.opacity = '0'
        }
        if (getPosition(el) === (lastCardPosition - cardSize)) {
          el.style.opacity = '1'
        }
        if (getPosition(el) === startCardPosition && positions[index] === 0) {
          el.style.opacity = '1'
        }
        setTimeout(() => {
          el.style.setProperty('--card-position', `${positions[index]}px`);
        }, 100)

      })
    }

    let timer: string | number | NodeJS.Timeout | undefined;
    function handleWheel(el: WheelEvent) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        if(countTransition % 6 === 0){
          console.log('executet')
          el.deltaY > 0 && updatePosition(1)
          el.deltaY < 0 && updatePosition(-1)
        }
      }, 350)
    }

    function handleTransitioned(){
      countTransition = countTransition++
    }

    slider.addEventListener('wheel', handleWheel, false)
    slider.addEventListener('transitionend', handleTransitioned, false)
    setPositions()

    return () => {
      slider.removeEventListener('wheel', handleWheel, false)
      slider.removeEventListener('transitionend', handleTransitioned, false)
    }
  }, [])

  return {
    isLoading: false
  }
}