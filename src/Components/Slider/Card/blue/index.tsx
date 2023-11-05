import { IconArrowUpRight } from '@tabler/icons-react';
import style from './style.module.css';

interface ICardProps {
  title: string,
  description: string,
  category: string,
  url: string;
}

export const CardBlue: React.FC<ICardProps> = ({ title, description, category, url }) => {
  return (
    <div className={style.cardblue}>
      <p className={style.category}>{category}</p>
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
      <a href={url} className={style.url}>
        <IconArrowUpRight />
      </a>

      <svg width="154" height="179" viewBox="0 0 154 179" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_551_607)">
          <circle cx="-0.5" cy="154.5" r="122.5" fill="url(#paint0_linear_551_607)" />
        </g>
        <defs>
          <filter id="filter0_f_551_607" x="-155" y="0" width="309" height="309" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="16" result="effect1_foregroundBlur_551_607" />
          </filter>
          <linearGradient id="paint0_linear_551_607" x1="107.5" y1="154" x2="-0.499996" y2="277" gradientUnits="userSpaceOnUse">
            <stop stopColor="#25B6FF" stopOpacity="0.45" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.12" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}