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

export const CardOrange: React.FC<ICardProps> = ({ title, description, category, preview_url }) => {
  return (
    <div className={style.card_orange}>
      <p className={style.category}>{category}</p>
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
      <Link href={preview_url} className={style.url}>
        <IconArrowUpRight />
      </Link> 
    </div>
  )
}