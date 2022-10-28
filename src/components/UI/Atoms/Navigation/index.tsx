import style from "./style.module.css";
import Link from "@/infra/Link";
import { Home, User, Code, Send } from "umbrella-icons-library";

type NavigationProps = {
  visibility?: boolean;
};

const Navigation: React.FC<NavigationProps> = ({ visibility }) => {
  return (
    <nav className={style.navigation} data-show={visibility}>
      <ul>
        <li>
          <Link href="/" aria-label="Home" data-active="false">
            <Home className={style.icon}/>
          </Link>
        </li>

        <li>
          <Link href="/me" aria-label="Sobre mim" data-active="false">
            <User className={style.icon}/>
          </Link>
        </li>

        <li>
          <Link href="/projects" aria-label="Projetos" data-active="false">
            <Code className={style.icon}/>
          </Link>
        </li>
        <li>
          <Link href="/contact" aria-label="Contato" data-active="false">
            <Send className={style.icon}/>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
