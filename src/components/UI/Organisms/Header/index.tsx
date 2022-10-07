import Icon from '@/components/Utils/Icon';
import Link from '@/components/Utils/Link';
import { useState } from 'react';
import Brand from '../../Atoms/Brand';
import Navigation from '../../Atoms/Navigation';
import styles from './style.module.css';

export default function Header() {
  const [showMenuNavigation, setShowMenuNavigation] = useState<boolean>(false);

  function handleToggleVisibilityMenu() {
    if (showMenuNavigation === false) {
      setShowMenuNavigation(true);
    } else {
      setShowMenuNavigation(false);
    }
  }

  return (
    <header className={styles.header}>
      <button
        className={styles.buttonNavigation}
        data-show={showMenuNavigation}
        onClick={handleToggleVisibilityMenu}
        aria-label='Abrir Menu'
      >
        <Icon icon={showMenuNavigation !== false ? 'close' : 'menu'} />
      </button>

      <Brand />

      <Navigation visibility={showMenuNavigation} />

      <Link href='https://www.linkedin.com/in/lucasfernandodevfront'>
        <a className={styles.link} aria-label='Link para o meu LinkedIn'>
          <Icon icon='linkedin' />
        </a>
      </Link>
    </header>
  );
}
