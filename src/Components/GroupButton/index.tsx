import React, { ComponentProps } from 'react';
import style from './style.module.css';

interface IGroupButton extends ComponentProps<'div'>{
  children: React.ReactNode
}

export const GroupButton: React.FC<IGroupButton> = ({ children, ...rest }) => {
  return (
    <div {...rest} className={[style.groupButton, rest.className].join(" ")}>
      {children}
    </div>
  )
}