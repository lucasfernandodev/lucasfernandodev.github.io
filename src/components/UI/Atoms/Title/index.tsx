import style from './style.module.css';

interface TitleProps {
  appearance?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Title: React.FC<TitleProps> =  ({children, appearance = 'h2'}) => {
  const Tag = appearance;

  return (
    <Tag className={style.title}>
      {children}
    </Tag>
  )
};

export default Title;