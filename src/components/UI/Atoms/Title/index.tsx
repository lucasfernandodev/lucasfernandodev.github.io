import style from './style.module.css';

interface TitleProps {
  apparence?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Title: React.FC<TitleProps> =  ({children, apparence = 'h2'}) => {
  const Tag = apparence;

  return (
    <Tag className={style.title}>
      {children}
    </Tag>
  )
};

export default Title;