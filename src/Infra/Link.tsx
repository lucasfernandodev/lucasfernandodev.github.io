import { HTMLAttributes } from 'react'
import {Link as RLink} from 'react-router-dom'

interface Link extends HTMLAttributes<HTMLAnchorElement>{

}

export const Link = ({...rest}) => {
  return <RLink 
  rel='noreferrer' 
  {...rest} 
  target={rest.href[0] === "/" ||  rest.href[0] === "#"? '_self' : '_blank'}
  to={rest.href} 
  >
    {rest.children}
  </RLink>
}