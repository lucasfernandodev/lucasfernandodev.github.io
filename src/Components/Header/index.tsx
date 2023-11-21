import style from './style.module.css';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { ToggleLanguage } from '../ToggleLanguage';
import { Title } from '../Title';

export const Header = () => {
  const { pathname } = useLocation()

  return (
    <header className={style.header}>
      <Title tag={pathname === '/' ? 'h2' : 'h1'} className={style.brand}>
        <Link to="/" title="Lucas Fernando"><img src="/brand.svg" alt="Brand - Lucas Fernando" /></Link>
      </Title>
      <Navbar />
      <ToggleLanguage />
    </header>
  )
}