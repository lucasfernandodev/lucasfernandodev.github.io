import styles from "./style.module.css";
import Link from "../../../../Utils/Link";
import Icon from "../../../../Utils/Icon";

type NavigationProps = {
  show?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({show}) => {

  return (
    <nav className={styles.navigation} data-show={show}>
      <ul>
        <li>
          <Link href="/" aria-label="Home">
            <Icon icon="home"/>
          </Link>
        </li>

        <li>
          <Link href="/projects" aria-label="projects">
            <Icon icon="projects" />
          </Link>
        </li>
        <li>
          <Link href="/contact" aria-label="contact">
            <Icon icon="contact" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
