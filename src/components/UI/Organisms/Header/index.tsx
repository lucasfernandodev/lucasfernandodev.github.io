import Icon from '@/components/Utils/Icon';
import Link from '@/infra/Link';
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
    <header className={styles.header} tabIndex={2}>
      <Brand />

      <button
        className={styles.buttonNavigation}
        data-show={showMenuNavigation}
        onClick={handleToggleVisibilityMenu}
        aria-label='Abrir Menu'
      >
        <Icon icon={showMenuNavigation !== false ? 'close' : 'menu'} />
      </button>

      <Navigation visibility={showMenuNavigation} />
    </header>
  );
}
