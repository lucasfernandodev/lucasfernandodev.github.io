import style from './style.module.css'

interface ILayout {
  children: React.ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className={style.layout}>
      {children}
    </div>
  )
}

export { Layout }
