import { IconArrowUpRight } from '@tabler/icons-react';
import style from './style.module.css'; 
import { Link } from '../../../../../Infra/Link';

interface ICardProps {
  title: string,
  description: string,
  category: string,
  preview_url: string;
  github_url: string;
}

export const CardBlack: React.FC<ICardProps> = ({ title, description, category, preview_url }) => {
  return (
    <div className={style.cardblack}>
      <p className={style.category}>{category}</p>
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
      <Link href={preview_url} className={style.url}>
        <IconArrowUpRight />
      </Link> 
    </div>
  )
}