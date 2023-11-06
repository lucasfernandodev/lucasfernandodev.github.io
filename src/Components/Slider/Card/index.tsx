import style from './style.module.css';
import { CardPink } from './pink';
import { CardBlack } from './black';
import { CardBlue } from './blue';
import { HTMLAttributes } from 'react';

interface ICardProps extends HTMLAttributes<HTMLElement>{
  _id: number,
  color: 'black' | 'pink' | 'blue',
  title: string,
  description: string,
  category: string,
  url: string;
}

export const Card: React.FC<ICardProps> = ({ color, title, description, category, url, ...rest }) => {

  const cardProps = {title, description, color, category, url}

  return (
    <div className={style.card} data-type="card" {...rest}>
      {color === 'pink' && <CardPink {...cardProps} />}
      {color === 'black' && <CardBlack {...cardProps} />}
      {color === 'blue' && <CardBlue {...cardProps} />}
    </div>
  )
}