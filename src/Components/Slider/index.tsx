import React, { useEffect, useRef } from 'react';
import { Card } from './Card';
import style from './style.module.css';
import { useTransitionHook } from '../../Hooks/useTransitionHook';
import { useTranslation } from 'react-i18next';

interface ISlider{
  onClick: (id: number) => void
}

export const Slider: React.FC<ISlider> = ({onClick}) => {

  const ref = useRef<HTMLDivElement>(null);

  const { positions, isLoading } = useTransitionHook({ sliderRef: ref, style })
  const {t} = useTranslation(["translation", "projects"])
  const ids = [1,2,3,4,5,6]

  useEffect(() => {
    if(!isLoading && ref.current){
      ref.current.classList.add(style.transitionOn)
    }
  }, [isLoading])

  function handleOnClick(id: number){
    onClick(id)
  }
  
  return (
    <div className={style.slider} ref={ref}>
      {
        ids.map((_id, index) =>
          <Card
            color={t(`projects:${_id}.color`)}
            title={t(`projects:${_id}.title`)}
            description={t(`projects:${_id}.description`)}
            preview_url={t(`projects:${_id}.preview_url`)}
            github_url={t(`projects:${_id}.github_url`)}
            key={_id}
            data-pos={positions[index]}
            style={{
              left: `${positions.length <= 0 ? 0 : positions[index]}px`,
            }}
            onClick={() => handleOnClick(_id)}
          />
        )
      }
    </div>
  )
}