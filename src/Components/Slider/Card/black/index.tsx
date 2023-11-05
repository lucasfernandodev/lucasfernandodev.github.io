import { IconArrowUpRight } from '@tabler/icons-react';
import style from './style.module.css';

interface ICardProps {
  title: string,
  description: string,
  category: string,
  url: string;
}

export const CardBlack: React.FC<ICardProps> = ({ title, description, category, url }) => {
  return (
    <div className={style.cardblack}>
      <p className={style.category}>{category}</p>
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
      <a href={url} className={style.url}>
        <IconArrowUpRight />
      </a>

      <svg className={style.svgOne} width="142" height="297" viewBox="0 0 142 297" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_f_551_621)">
    <circle cx="-12.5" cy="142.5" r="122.5" fill="url(#paint0_linear_551_621)"/>
  </g>
  <defs>
    <filter id="filter0_f_551_621" x="-167" y="-12" width="309" height="309" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="16" result="effect1_foregroundBlur_551_621"/>
    </filter>
    <linearGradient id="paint0_linear_551_621" x1="95.5" y1="142" x2="-12.5" y2="265" gradientUnits="userSpaceOnUse">
      <stop stopColor="#25B6FF" stopOpacity="0.1"/>
      <stop offset="1" stopColor="#D9D9D9" stopOpacity="0"/>
    </linearGradient>
  </defs>
</svg>

      <svg className={style.svgTwo} width="155" height="277" viewBox="0 0 155 277" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_551_622)">
          <circle cx="154.5" cy="154.5" r="122.5" transform="rotate(-180 154.5 154.5)" fill="url(#paint0_linear_551_622)" />
        </g>
        <defs>
          <filter id="filter0_f_551_622" x="0" y="0" width="309" height="309" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="16" result="effect1_foregroundBlur_551_622" />
          </filter>
          <linearGradient id="paint0_linear_551_622" x1="262.5" y1="154" x2="154.5" y2="277" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E5B1EE" stopOpacity="0.05" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <svg className={style.svgThree} width="220" height="277" viewBox="0 0 220 277" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_551_623)">
          <circle cx="97.5" cy="154.5" r="122.5" transform="rotate(-180 97.5 154.5)" fill="url(#paint0_linear_551_623)" />
        </g>
        <defs>
          <filter id="filter0_f_551_623" x="-57" y="0" width="309" height="309" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="16" result="effect1_foregroundBlur_551_623" />
          </filter>
          <linearGradient id="paint0_linear_551_623" x1="205.5" y1="154" x2="97.5" y2="277" gradientUnits="userSpaceOnUse">
            <stop stopColor="#121212" stopOpacity="0.05" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <svg className={style.svgFour} width="216" height="309" viewBox="0 0 216 309" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_551_624)">
          <circle cx="61.5" cy="154.5" r="122.5" fill="url(#paint0_linear_551_624)" />
        </g>
        <defs>
          <filter id="filter0_f_551_624" x="-93" y="0" width="309" height="309" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="16" result="effect1_foregroundBlur_551_624" />
          </filter>
          <linearGradient id="paint0_linear_551_624" x1="169.5" y1="154" x2="61.5" y2="277" gradientUnits="userSpaceOnUse">
            <stop stopColor="#121212" stopOpacity="0.1" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}