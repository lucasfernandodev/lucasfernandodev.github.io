import React, { useEffect, useState } from "react";

interface useTransitionHookProps {
  sliderRef: React.RefObject<HTMLDivElement>
  style: any
}

type TUseTransitionHook = (props: useTransitionHookProps) => { positions: number[], isLoading: boolean }

export const useTransitionHook: TUseTransitionHook = ({ sliderRef, style }) => {
  const [positions, setPositions] = useState<number[]>([])
  const [sizeTotal, setSizeTotal] = useState(1)
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const [isActive, setIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [countTransitioned, setCountTransitioned] = useState(0);

  let transitionTime = 0;
  let startDistance = 0

  useEffect(() => {
    if (countTransitioned !== 0 && (countTransitioned % 6) === 0) {
      setIsActive(false)
    }
  }, [countTransitioned])

  function changePosition(dir: number) {
    if (dir !== -1 && dir !== 1) return
    setIsActive(true)

    if (dir === -1) {

      setPositions(prev => {
        return prev.map(item => {
          const newPos = item - sizeTotal
          return newPos < min ? max : newPos
        })
      })
    }

    if (dir === 1) {
      setPositions(prev => {
        return prev.map(item => {
          const newPos = item + sizeTotal
          return newPos > max ? min : newPos
        })
      })
    }
  }

  useEffect(() => {

    const slider = sliderRef.current

    if (slider) {

      let endItem = 0;
      let startItem = 0
      const cards = slider.children as unknown as HTMLElement[]
      const cardWidth = cards[0].getBoundingClientRect().width
      const gap = parseInt(window.getComputedStyle(slider).gap.replace("px", ""))
      const cardWithTotal = cardWidth + gap
      const positionsArray: number[] = [];


      for (let i = 0; i < cards.length; i++) {
        const pos = positionsArray.length === 0 ? cardWithTotal * -1 : (cardWithTotal * i) - cardWithTotal
        positionsArray[i] = pos
        if (pos > endItem) {
          endItem = pos
        }

        if (pos < startItem) {
          startItem = pos
        }
      }

      setMin(startItem)
      setMax(endItem)
      setPositions(positionsArray)
      setSizeTotal(cardWithTotal)
    }
  }, [sliderRef.current])




  useEffect(() => {

    let touchEl: EventTarget | null = null;
    let timer: number | null = null
    let swapDistance = 0
    const slider = sliderRef.current


    function handleWheel(ev: WheelEvent) {
      ev.preventDefault()
      const _moving = () => {
        ev.deltaY > 0 && changePosition(1)
        ev.deltaY < 0 && changePosition(-1)
      }

      if (!isActive) {
        clearTimeout(timer as number)
        timer = window.setTimeout(_moving, 500)
      }
    }

    const onTounchStart = (e: TouchEvent) => {
      startDistance = e.changedTouches[0].clientX;
    }

    const onTouchMove = (e: TouchEvent) => {
      const newSwapDistance = e.touches[0].clientX;
      swapDistance = newSwapDistance - startDistance;
    }

    function onTouchEnd(ev: TouchEvent) {
      clearTimeout(timer as number)
      touchEl = ev.target;
      timer = window.setTimeout(() => {
        if (isActive && ((new Date()).getTime() - transitionTime) >= 500) {
          setIsActive(false)
        }

        touchEl && !isActive && swapDistance > 0 && changePosition(1)
        touchEl && !isActive && swapDistance < 0 && changePosition(-1)
      }, 150)
    }

    function onTransitionEnd(ev: TransitionEvent) {

      slider?.classList.remove(style.active)
      const target = ev.target as HTMLElement;
      target.style.opacity = '1'
      const pos = parseInt(target.dataset.pos as string)
      if (pos === max || pos === min) {
        target.style.opacity = '0'
      }

      transitionTime = (new Date()).getTime()
      setCountTransitioned(prev => prev + 1)
    }

    function onTransitionRun(ev: TransitionEvent) {
      if (isActive) {
        slider?.classList.add(style.active)
        const target = ev.target as HTMLElement;
        const pos = parseInt(target.dataset.pos as string)
        if (pos >= max) {
          target.style.opacity = '0'
        }
        if (pos === 0) {
          target.style.opacity = '1'
        }
      }
    }


    function inTransitionCancel(ev: TransitionEvent) {
      const target = ev.target as HTMLElement;
      const pos = parseInt(target.dataset.pos as string)

      if (pos === 0) {
        target.style.opacity = '1'
      }
      if (pos >= max || pos === min) {
        target.style.opacity = '0'
      }

      slider?.classList.remove(style.active)
    }

    function onTransitionStarted() {
      slider?.classList.add(style.active)
    }


    if (slider) {
      slider.addEventListener('wheel', handleWheel)
      slider.addEventListener('transitioncancel', inTransitionCancel)
      slider.addEventListener('transitionstart', onTransitionStarted)
      slider.addEventListener('transitionrun', onTransitionRun)
      slider.addEventListener('transitionend', onTransitionEnd)
      slider.addEventListener('click', () => null, false)
      slider.addEventListener('touchstart', onTounchStart, false)
      slider.addEventListener('touchmove', onTouchMove, false)
      slider.addEventListener('touchend', onTouchEnd, false)
    }

    return () => {
      slider && slider.removeEventListener('transitioncancel', inTransitionCancel)
      slider && slider.removeEventListener('transitionstart', onTransitionStarted)
      slider && slider.removeEventListener('wheel', handleWheel)
      slider && slider.removeEventListener('transitionrun', onTransitionRun)
      slider && slider.removeEventListener('transitionend', onTransitionEnd)
      slider && slider.removeEventListener('click', () => null, false)
      slider && slider.removeEventListener('touchstart', onTounchStart, false)
      slider && slider.removeEventListener('touchmove', onTouchMove, false)
      slider && slider.removeEventListener('touchend', onTouchEnd, false)
    }
  }, [isActive, min, max])


  useEffect(() => {
    if (min !== 0 && max !== 0 && positions.length !== 0 && sizeTotal !== 1) {
      isLoading !== false && setIsLoading(false)
    }

  }, [min, max, positions, sizeTotal])

  return {
    positions,
    isLoading
  }
}