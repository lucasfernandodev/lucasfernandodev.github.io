import {
  IconCode,
  IconComponents,
  IconHome,
  IconUser,
} from "@tabler/icons-react";
import style from "./style.module.css";
import { IconSend } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const refMenu = useRef<HTMLUListElement>(null);
  const refBtn = useRef<HTMLButtonElement>(null);
  const [visibility, setVisibility] = useState(false);
  const { pathname } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    if (refMenu.current) {
      const item = refMenu.current.querySelector(`a[href="${pathname}"]`);
      if (item) {
        item.setAttribute("data-active", "true");
      }
    }
  }, []);

  useEffect(() => {
    const body = document.querySelector("body") as HTMLElement;
    if(visibility){
      body.style.overflow = "hidden";
    }else{
      body.style.overflow = "auto";
    }
  }, [visibility])

  function toggleVisibility() {
    setVisibility(prev => !prev)
  }

  return (
    <nav className={style.navbar}>
      <button
        onClick={toggleVisibility}
        ref={refBtn}
        className={style.toggleMenu}
        data-open={visibility}
      >
        <span>toggle nenu</span>
      </button>
      <ul className={style.menu} ref={refMenu} data-visibility={visibility}>
        <li className={style.item}>
          <Link to="/" title={t("homepage.navTitle")} className={style.Link}>
            <IconHome/>
          </Link>
        </li>
        <li className={style.item}>
          <Link
            to="/sobremim"
            title={t("about_me.navTitle")}
            className={style.Link}
          >
            <IconUser />
          </Link>
        </li>
        <li className={style.item}>
          <Link
            to="/tecnologias"
            title={t("tech.navTitle")}
            className={style.Link}
          >
            <IconCode />
          </Link>
        </li>
        <li className={style.item}>
          <Link
            to="/projetos"
            title={t("projects.navTitle")}
            className={style.Link}
          >
            <IconComponents />
          </Link>
        </li>
        <li className={style.item}>
          <Link
            to="/contato"
            title={t("contact.navTitle")}
            className={style.Link}
          >
            <IconSend />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
