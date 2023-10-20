import { HTMLAttributes } from "react"

interface TitleProps extends HTMLAttributes<HTMLHeadingElement>{
  children: React.ReactNode,
  tag?: 'h1' | 'h2' | 'h3'
}

export const Title: React.FC<TitleProps> = ({children, tag, ...rest}) => {
  const Tag = tag ? tag : 'h2'
  return (<Tag {...rest}>{children}</Tag>)
}