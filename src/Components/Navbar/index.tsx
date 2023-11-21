import { IconCode, IconComponents, IconHome, IconUser } from '@tabler/icons-react';
import style from './style.module.css';
import { IconSend } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export const Navbar = () => {

  const refMenu = useRef<HTMLUListElement>(null)
  const refBtn = useRef<HTMLButtonElement>(null)
  const [visibility, setVisibility] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    if (refMenu.current) {
      const item = refMenu.current.querySelector(`a[href="${pathname}"]`);
      if (item) {
        item.setAttribute('data-active', "true")
      }
    }

  }, [])


  useEffect(() => {
    if(visibility){
      (document.querySelector('body') as HTMLElement).style.overflow = 'hidden';
    }else{
      (document.querySelector('body') as HTMLElement).style.overflow = 'auto';
    }
  }, [visibility])

  function toggleVisibility() {
    setVisibility(!visibility)
  }

  return (
    <nav className={style.navbar}>
      <button
        onClick={toggleVisibility}
        ref={refBtn}
        className={style.toggleMenu}
        data-isOpen={visibility}
        >
        <span>toggle nenu</span>
      </button>
      <ul className={style.menu} ref={refMenu} data-visibility={visibility}>
        <li className={style.item}>
          <Link to="/" title="Pagina inicial" className={style.Link}><IconHome /></Link>
        </li>
        <li className={style.item}>
          <Link to="/sobremim" title="Sobre mim" className={style.Link}><IconUser /></Link>
        </li>
        <li className={style.item}>
          <Link to="/tecnologias" title="tecnologias" className={style.Link}><IconCode /></Link>
        </li>
        <li className={style.item}>
          <Link to="/projetos" title="Projetos" className={style.Link}><IconComponents /></Link>
        </li>
        <li className={style.item}>
          <Link to="/contato" title="contato" className={style.Link}><IconSend /></Link>
        </li>
      </ul>
    </nav>
  )
}