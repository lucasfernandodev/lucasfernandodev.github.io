import React from 'react';
import style from './style.module.css';

interface IGroupButton {
  children: React.ReactNode
}

export const GroupButton: React.FC<IGroupButton> = ({ children }) => {
  return (
    <div className={style.groupButton}>
      {children}
    </div>
  )
}