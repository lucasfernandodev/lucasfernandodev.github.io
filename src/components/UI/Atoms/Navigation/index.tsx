import style from "./style.module.css";
import Link from "@/infra/Link";
import Icon from "src/components/Utils/Icon";
import { useEffect, useRef } from "react";

type NavigationProps = {
  visibility?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({visibility}) => {

  return (
    <nav className={style.navigation} data-show={visibility}>
      <ul>
        <li>
          <Link href="/" aria-label="Home" data-display="false">
            <Icon icon="home"/>
          </Link>
        </li>

        <li>
          <Link href="/me" aria-label="Sobre mim" data-display="false">
            <Icon icon="me"/>
          </Link>
        </li>

        <li>
          <Link href="/projects" aria-label="Projetos" data-display="false">
            <Icon icon="projects" />
          </Link>
        </li>
        <li>
          <Link href="/contact" aria-label="Contato" data-display="false">
            <Icon icon="contact" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
