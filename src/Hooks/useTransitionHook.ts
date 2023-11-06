import React, { useEffect, useState } from "react";

interface useTransitionHookProps {
  sliderRef: React.RefObject<HTMLDivElement>
  style: any
}

type TUseTransitionHook =  (props: useTransitionHookProps) => { positions: number[], isLoading: boolean }

export const useTransitionHook: TUseTransitionHook = ({ sliderRef, style }) => {
  const [positions, setPositions] = useState<number[]>([])
  const [sizeTotal, setSizeTotal] = useState(1)
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const [isActive, setIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  let timer: number | null = null

  function changePosition(dir: number) {
    if (dir === -1) {
      setIsActive(true)
      setPositions(prev => {
        return prev.map(item => {
          const newPos = item - sizeTotal
          return newPos < min ? max : newPos
        })
      })
    }

    if (dir === 1) {
      setIsActive(true)
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
      const cards = slider.children
      const cardWidth = (cards.item(0) as HTMLElement).getBoundingClientRect().width
      const gap = parseInt(window.getComputedStyle(slider).gap.replace("px", ""))
      const withTotal = cardWidth + gap
      const _positions: number[] = [];
      let _max = 0;
      let _min = 0


      for (let i = 0; i < cards.length; i++) {
        const pos = _positions.length === 0 ? withTotal * -1 : (withTotal * i) - withTotal
        _positions[i] = pos
        if (pos > _max) {
          _max = pos
        }

        if (pos < _min) {
          _min = pos
        }
      }

      setMin(_min)
      setMax(_max)
      setPositions(_positions)
      setSizeTotal(withTotal)
    }
  }, [sliderRef.current])




  useEffect(() => {
    const slider = sliderRef.current

    function handleWheel(ev: WheelEvent) {
      ev.preventDefault()

      const _moving = () => {
        ev.deltaY > 0 && changePosition(1)
        ev.deltaY < 0 && changePosition(-1)
      }

      if (!isActive) {
        clearTimeout(timer as number)
        timer = setTimeout(_moving, 500)
      }
    }

    function onTransitionEnd(ev: TransitionEvent) {
      slider?.classList.remove(style.active)
      const target = ev.target as HTMLElement;
      target.style.opacity = '1'
      const pos = parseInt(target.dataset.pos as string)
      if (pos === max || pos === min) {
        target.style.opacity = '0'
      }

      isActive !== false && setIsActive(false)
    }

    function onTransitionRun(ev: TransitionEvent) {
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
    }

    return () => {
      slider && slider.addEventListener('transitioncancel', inTransitionCancel)
      slider && slider.addEventListener('transitionstart', onTransitionStarted)
      slider && slider.removeEventListener('wheel', handleWheel)
      slider && slider.removeEventListener('transitionrun', onTransitionRun)
      slider && slider.removeEventListener('transitionend', onTransitionEnd)
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