import SkipToContent from '@/components/UI/Atoms/SkipToContent';
import Header from '@/components/UI/Organisms/Header';
import Main from '@/components/UI/Organisms/Main';
import styles from './style.module.css';

interface Layout{
  skipToContentId?: string
}

const Layout: React.FC<Layout> = ({ children,skipToContentId }) => {
  return (
    <div className={styles.content}>
      <Header />
      <SkipToContent contentId={skipToContentId} />
      <Main>
        {children}
      </Main>
    </div>
  );
};

export default Layout;
