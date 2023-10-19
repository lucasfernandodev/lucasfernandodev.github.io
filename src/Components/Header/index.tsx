import style from './style.module.css';
import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { ToggleLanguage } from '../ToggleLanguage';

export const Header = () => {
  return (
    <div className={style.header}>
      <h1>
        <Link to="/"><img src="/brand.svg" alt="Brand - Lucas Fernando" /></Link>
      </h1>
      <Navbar />
      <ToggleLanguage />
    </div>
  )
}