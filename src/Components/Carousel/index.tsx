import style from './style.module.css';
import React, { useRef } from 'react';
import { Card, ICardProps } from './Card';
import { useTranslation } from 'react-i18next';
import { useCarouselTransition } from '../../Hooks/useCarouselTransition';

const Carousel: React.FC = () => {

  const ref = useRef<HTMLDivElement>(null);

  useCarouselTransition({ carouselRef: ref })
  const { t } = useTranslation(["translation", "projects"])
  const ids = [1, 2, 3, 4, 5, 6]

  return (
    <div className={style.carroucel} ref={ref}>
      {
        ids.map((_id) =>
          <Card
            key={_id}
            index_id={_id}
            color={t(`projects:${_id}.color`) as ICardProps['color']}
            title={t(`projects:${_id}.title`)}
            description={t(`projects:${_id}.description`)}
            preview_url={t(`projects:${_id}.preview_url`)}
            github_url={t(`projects:${_id}.github_url`)}
            data-pos={0}
          />
        )
      }
    </div>
  )
}

export { Carousel }