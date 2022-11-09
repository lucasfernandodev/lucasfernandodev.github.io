import style from './style.module.css';

interface ParagraphProps{
  className?: string
}
const Paragraph: React.FC<ParagraphProps> = ({children, className}) => {
  return (
    <p className={[style.paragraph, className].join(" ")}>
      {children}
    </p>
  )
};

export default Paragraph;