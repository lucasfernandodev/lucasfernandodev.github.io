import { useEffect, useRef } from 'react';
import { Card } from './Card';
import style from './style.module.css';
import { useTransitionHook } from '../../Hooks/useTransitionHook';
import projects from '../../projects.json';

interface ICardProps {
  _id: number,
  color: 'black' | 'pink' | 'blue',
  title: string,
  description: string,
  category: string,
  url: string;
}

const contents = projects as ICardProps[]

export const Slider = () => {

  const ref = useRef<HTMLDivElement>(null);

  const { positions, isLoading } = useTransitionHook({ sliderRef: ref, style })

  useEffect(() => {
    if(!isLoading && ref.current){
      ref.current.classList.add(style.transitionOn)
    }
  }, [isLoading])
  
  return (
    <div className={style.slider} ref={ref}>
      {
        contents.map((content, index) =>
          <Card
            {...content}
            key={content._id}
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