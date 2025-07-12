import style from './style.module.css';
import { HTMLAttributes } from 'react';
import React from 'react';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>{
  children: React.ReactNode
}

export const Paragraph: React.FC<ParagraphProps> = ({children, ...rest}) => {
  return (
    <p {...rest} className={[style.paragraph, rest.className].join(" ")}>{children}</p>
  )
}