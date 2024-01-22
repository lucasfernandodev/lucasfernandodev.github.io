import React, { useEffect, useRef } from 'react';
import { Card } from './Card';
import style from './style.module.css';
import { useTransitionHook } from '../../Hooks/useTransitionHook';
import { useTranslation } from 'react-i18next';

interface ISlider {
  onClick: (id: number) => void
}

export const Slider: React.FC<ISlider> = ({ onClick }) => {

  const ref = useRef<HTMLDivElement>(null);

  const { isLoading } = useTransitionHook({ sliderRef: ref })
  const { t } = useTranslation(["translation", "projects"])
  const ids = [1, 2, 3, 4, 5, 6]

  useEffect(() => {
    if (!isLoading && ref.current) {
      ref.current.classList.add(style.transitionOn)
    }
  }, [isLoading])

  function handleOnClick(event: React.MouseEvent<HTMLElement, MouseEvent>, id: number) {
    event.stopPropagation()
    const target = event.target as HTMLAnchorElement;
    if(target.tagName !== 'svg' && target.closest('a') || target.tagName !== 'svg'){
      onClick(id)
    }
  }

  return (
    <div className={style.slider} ref={ref}>
      {
        ids.map((_id, index) =>
          <Card
          key={_id}
            color={t(`projects:${_id}.color`)}
            title={t(`projects:${_id}.title`)}
            description={t(`projects:${_id}.description`)}
            preview_url={t(`projects:${_id}.preview_url`)}
            github_url={t(`projects:${_id}.github_url`)}
            data-pos={0}
            onClick={(event) => handleOnClick(event, _id)}
          />
        )
      }
    </div>
  )
}