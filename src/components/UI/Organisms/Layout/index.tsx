import styles from './style.module.css';
import Header from '../Header';
import Main from '../Main';


const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.content}>
      <Header />
      <Main>
        {children}
      </Main>
    </div>
  );
};

export default Layout;
