import style from './style.module.css';

interface ButtonProps {
  type?: 'primary' | 'secondary';
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, type }) => {
  return <button data-type={type ?? 'primary'} className={style.btn}>{children}</button>
}