import { Header } from '../Header'
import style from './style.module.css'

interface ILayout {
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
