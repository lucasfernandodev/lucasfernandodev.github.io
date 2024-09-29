import { HTMLAttributes } from 'react'
import { Header } from '../Header'
import style from './style.module.css'

interface ILayout extends HTMLAttributes<HTMLElement>{
  children: React.ReactNode
}

const Layout: React.FC<ILayout> = ({ children, ...rest }) => {
  return (
    <div className={style.layout}>
      <Header />
      <main {...rest} className={[style.main, rest.className].join(" ")}>
        {children}
      </main>
    </div>
  )
}

export { Layout }
