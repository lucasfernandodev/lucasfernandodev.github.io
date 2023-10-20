import style from './style.module.css';
import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { ToggleLanguage } from '../ToggleLanguage';
import { Title } from '../Title';

export const Header = () => {
  return (
    <div className={style.header}>
      <Title tag="h1">
        <Link to="/"><img src="/brand.svg" alt="Brand - Lucas Fernando" /></Link>
      </Title>
      <Navbar />
      <ToggleLanguage />
    </div>
  )
}