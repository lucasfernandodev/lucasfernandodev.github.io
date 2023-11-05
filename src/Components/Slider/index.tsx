import { useEffect, useRef, useState } from 'react';
import { Card } from './Card';
import style from './style.module.css';

interface ICardProps {
  uud: number,
  color: 'black' | 'pink' | 'blue',
  title: string,
  description: string,
  category: string,
  url: string;
}

const contents: ICardProps[] = [
  {
    uud: 1,
    category: 'project',
    title: 'space travel',
    description: 'Esse é um site de turismo espacial, ele foi desenvolvido usando vite com react.js e typescript.',
    url: '',
    color: 'blue'
  },
  {
    uud: 2,
    category: 'project',
    title: 'E-commerce product page',
    description: 'Neste projeto eu desenvolvi um site responsivo com galeria de imagem de produtos e função de adicionar ou remover itens do carrinho.',
    url: '',
    color: 'black'
  },
  {
    uud: 3,
    category: 'project',
    title: 'Country search',
    description: 'Esse é um site de turismo espacial, ele foi desenvolvido usando vite com react.js e typescript.',
    url: '',
    color: 'pink'
  },
  {
    uud: 4,
    category: 'project',
    title: 'space travel',
    description: 'Esse é um site de turismo espacial, ele foi desenvolvido usando vite com react.js e typescript.',
    url: '',
    color: 'black'
  },
  {
    uud: 5,
    category: 'project',
    title: 'E-commerce product page',
    description: 'Neste projeto eu desenvolvi um site responsivo com galeria de imagem de produtos e função de adicionar ou remover itens do carrinho.',
    url: '',
    color: 'pink'
  },
  {
    uud: 6,
    category: 'project',
    title: 'Country search',
    description: 'Esse é um site de turismo espacial, ele foi desenvolvido usando vite com react.js e typescript.',
    url: '',
    color: 'black'
  }
]

export const Slider = () => {

  const ref = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<number[]>([])
  const [sizeTotal, setSizeTotal] = useState(1)
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const [isActive, setIsActive] = useState(false)

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

    const slider = ref.current
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
        if(pos > _max){
          _max = pos
        }

        if(pos < _min){
          _min = pos
        }
      }

      setMin(_min)
      setMax(_max)
      setPositions(_positions)
      setSizeTotal(withTotal)
    }
  }, [ref.current])



  useEffect(() => {
    const slider = ref.current

    function handleWheel(ev: WheelEvent) {
      ev.preventDefault()

      const _moving = () => {
        ev.deltaY > 0 && changePosition(1)
        ev.deltaY < 0 && changePosition(-1)
      }

      if(!isActive){
        clearTimeout(timer as number)
        timer = setTimeout(_moving, 100)
      }
    }

    function onTransitionEnd(ev: TransitionEvent) {
      const target = ev.target as HTMLElement;
      target.style.opacity = '1'
      const pos = parseInt(target.dataset.pos as string)
      if(pos === max || pos === min){
        target.style.opacity = '0'
      }
      
      isActive !== false && setIsActive(false)
    }

    function onTransitionRun(ev: TransitionEvent) {
      const target = ev.target as HTMLElement;
      const pos = parseInt(target.dataset.pos as string)
      if(pos >= max){
        target.style.opacity = '0'
      }
      if(pos === 0){
        target.style.opacity = '1'
      }
    }


    if (slider) {
      slider.addEventListener('wheel', handleWheel)
      slider.addEventListener('transitionrun', onTransitionRun)
      slider.addEventListener('transitionend', onTransitionEnd)
    }

    return () => {
      slider && slider.removeEventListener('wheel', handleWheel)
      slider && slider.removeEventListener('transitionrun', onTransitionRun)
      slider && slider.removeEventListener('transitionend', onTransitionEnd)
    }
  }, [isActive, min, max])


  return (
    <div className={style.slider} ref={ref}>
      {
        contents.map((content, index) =>
          <Card
            {...content}
            key={content.uud}
            data-pos={positions[index]}
            style={{
              left: `${positions.length <= 0 ? 0 : positions[index]}px`,
            }}
          />
        )
      }
    </div>
  )
}