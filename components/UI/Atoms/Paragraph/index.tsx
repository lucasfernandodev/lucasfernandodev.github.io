import style from './style.module.css';

const Paragraph: React.FC = ({children}) => {
  return (
    <p className={style.paragraph}>
      {children}
    </p>
  )
};

export default Paragraph;