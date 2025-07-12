import { ComponentProps } from 'react';
import style from './style.module.css';

interface ButtonProps extends Omit<ComponentProps<'button'>, 'type'> {
  type?: 'primary' | 'secondary';
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, type, ...rest }) => {
  return (
    <button
      data-type={type ?? 'primary'}
      {...rest}
      className={[style.btn, rest.className].join(" ")}
    >
      {children}
    </button>)
}