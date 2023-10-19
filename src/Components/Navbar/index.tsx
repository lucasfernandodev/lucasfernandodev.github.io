import { IconCode, IconComponents, IconHome, IconUser } from '@tabler/icons-react';
import style from './style.module.css';
import { IconSend } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export const Navbar = () => {

  const refMenu = useRef<HTMLUListElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    if(refMenu.current){
      const item = refMenu.current.querySelector(`a[href="${pathname}"]`);
      if (item) {
        item.setAttribute('data-active', "true")
      }
    }

  }, [])

  return (
    <nav className={style.navbar}>
      <ul className={style.menu} ref={refMenu}>
        <li className={style.item}><Link to="/" className={style.Link}><IconHome /></Link></li>
        <li className={style.item}><Link to="/sobremim" className={style.Link}><IconUser /></Link></li>
        <li className={style.item}><Link to="/tecnologias" className={style.Link}><IconCode /></Link></li>
        <li className={style.item}><Link to="/projetos" className={style.Link}><IconComponents /></Link></li>
        <li className={style.item}><Link to="/contato" className={style.Link}><IconSend /></Link></li>
      </ul>
    </nav>
  )
}