import style from './style.module.css';

const Title: React.FC =  ({children}) => {
  return (
    <h2 className={style.title}>
      {children}
    </h2>
  )
};

export default Title;