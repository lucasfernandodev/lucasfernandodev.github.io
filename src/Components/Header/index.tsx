import style from './style.module.css';
import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { ToggleLanguage } from '../ToggleLanguage';
import { useMemo } from 'react';

export const Header = () => {
  const Brand = useMemo(() => (
    <Link to="/" title="Lucas Fernando" className={style.brand}>
      <img src="/brand.svg" alt="Lucas Fernando - Portfolio" />
      <span>Lucas Fernando</span>
    </Link>
  ), [])
  return (
    <header className={style.header}>
      {Brand}
      <Navbar />
      <ToggleLanguage />
    </header>
  )
}