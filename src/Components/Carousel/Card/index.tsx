import style from './style.module.css';
import { CardPink } from './pink';
import { CardBlack } from './black';
import { CardBlue } from './blue';
import { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export interface ICardProps extends HTMLAttributes<HTMLElement> {
  color: 'black' | 'pink' | 'blue',
  title: string,
  description: string,
  preview_url: string;
  github_url: string;
  index_id: number
}

export const Card: React.FC<ICardProps> = ({
  index_id,
  color,
  title,
  description,
  preview_url,
  github_url,
  ...rest }) => {
  
  const { t } = useTranslation()
  const category = t('projects.carousel.card_title');
  const cardProps = { title, description, color, category, preview_url, github_url }

  const navigate = useNavigate()

  function navigateTo(){
    navigate(`/projetos?id=${index_id}`)
  }

  return (
    <div onClick={navigateTo}className={style.card} data-type="card" {...rest}>
      {color === 'pink' && <CardPink {...cardProps} />}
      {color === 'black' && <CardBlack {...cardProps} />}
      {color === 'blue' && <CardBlue {...cardProps} />}
    </div>
  )
}