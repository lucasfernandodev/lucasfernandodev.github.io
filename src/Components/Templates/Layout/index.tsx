import { HTMLAttributes } from 'react'
import style from './style.module.css'
import { Header } from '../../Organisms/Header'

interface ILayout extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className={style.layout}>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}

export { Layout }
