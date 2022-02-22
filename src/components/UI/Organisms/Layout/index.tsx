import styles from "./style.module.css";
import Brand from "src/components/UI/Atoms/Brand";
import Navigation from "src/components/UI/Atoms/Navigation";
import Icon from "src/components/Utils/Icon";
import Link from 'next/link';
import { useState } from 'react';



const Layout: React.FC = ({ children }) => {

  const [showMenuNavigation, setShowMenuNavigation] = useState<boolean>(false);

  function handleToggleVisibilityMenu() {
    
    if (showMenuNavigation === false) {
      setShowMenuNavigation(true);
    } else {
      setShowMenuNavigation(false)
    }
  }

  return (
    <div className={styles.content}>

      <header className={styles.header}>
        <button 
        className={styles.buttonNavigation} 
        data-show={showMenuNavigation} 
        onClick={handleToggleVisibilityMenu}
        aria-label="Abrir Menu"
        >
          <Icon icon={showMenuNavigation !== false ? "close" : 'menu'} />
        </button>

        <Brand />
        
        
        <Navigation visibility={showMenuNavigation} />

        <Link href="https://www.linkedin.com/in/lucasfernandodevfront">
          <a className={styles.link} aria-label="Link para o meu LinkedIn">
            <Icon icon="linkedin" />
          </a>
        </Link>
      </header>

      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
