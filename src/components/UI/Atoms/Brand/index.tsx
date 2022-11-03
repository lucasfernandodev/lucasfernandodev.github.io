import Link from '@/infra/Link';
import style from './style.module.css';

const Brand = () => {
  return (
    <h1 className={style.brand}>
      <Link href='/'>
        <img src='/imagens/logo.svg' alt='Logo - Portifolio Lucas Fernando' />
      </Link>
    </h1>
  );
};

export default Brand;
