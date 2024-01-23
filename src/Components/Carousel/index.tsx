import style from './style.module.css';
import React, { useRef } from 'react';
import { Card } from './Card';
import { useTranslation } from 'react-i18next';
import { useCarouselTransition } from '../../Hooks/useCarouselTransition';

interface ICarouselProps {
  onClick: (id: number) => void
}

const Carousel: React.FC<ICarouselProps> = ({ onClick }) => {

  const ref = useRef<HTMLDivElement>(null);

  useCarouselTransition({ carouselRef: ref })
  const { t } = useTranslation(["translation", "projects"])
  const ids = [1, 2, 3, 4, 5, 6]

  function handleOnClick(event: React.MouseEvent<HTMLElement, MouseEvent>, id: number) {
    event.stopPropagation()
    const target = event.target as HTMLAnchorElement;
    if (target.tagName !== 'svg' && target.closest('a') || target.tagName !== 'svg') {
      onClick(id)
    }
  }

  return (
    <div className={style.carroucel} ref={ref}>
      {
        ids.map((_id) =>
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

export { Carousel }