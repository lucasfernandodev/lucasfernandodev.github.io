import React from 'react';
import style from './style.module.css';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Link } from '../../../../Infra/Link';

interface ICardProps {
  title: string,
  description: string,
  category: string,
  preview_url: string;
  github_url: string;
}

export const CardPink: React.FC<ICardProps> = ({ title, description, category, preview_url }) => {
  return (
    <div className={style.cardpink}>
      <p className={style.category}>{category}</p>
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
      <Link href={preview_url} className={style.url}>
        <IconArrowUpRight />
      </Link>

      <svg width="175" height="277" viewBox="0 0 175 277" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_551_635)">
          <circle cx="154.5" cy="154.5" r="122.5" transform="rotate(-180 154.5 154.5)" fill="url(#paint0_linear_551_635)" />
        </g>
        <defs>
          <filter id="filter0_f_551_635" x="0" y="0" width="309" height="309" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="16" result="effect1_foregroundBlur_551_635" />
          </filter>
          <linearGradient id="paint0_linear_551_635" x1="262.5" y1="154" x2="154.5" y2="277" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F2D750" stopOpacity="0.54" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.18" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}