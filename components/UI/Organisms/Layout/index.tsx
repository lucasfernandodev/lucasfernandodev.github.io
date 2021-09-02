import styles from "./style.module.css";
import Brand from "@/Atoms/Brand";
import Navigation from "@/Atoms/Navigation";
import Icon from "@/Utils/Icon";
import Link from 'next/link';
import {useState} from 'react';

const Layout: React.FC = ({ children }) => {
  const [navigation, setNavigation] = useState<boolean>(false);

  function handlerNavigation (e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();
    if(navigation === false){
      setNavigation(true);
    }else{
      setNavigation(false)
    }
  }

  return (
    <div className={styles.content}>

      <header className={styles.header}>
        <button className={styles.buttonNavigation} data-show={navigation} onClick={e => handlerNavigation(e)}>
          <Icon icon={navigation !== false ? "close" : 'menu'} />
        </button>
        <Brand />
        <Navigation show={navigation}/>

        <Link href="https://www.linkedin.com/in/lucasfernandodevfront">
          <a className={styles.link}><Icon icon="email" /></a>
        </Link>
      </header>

      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
