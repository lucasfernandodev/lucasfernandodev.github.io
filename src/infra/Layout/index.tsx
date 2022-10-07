import Header from '@/components/UI/Organisms/Header';
import Main from '@/components/UI/Organisms/Main';
import styles from './style.module.css';

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
