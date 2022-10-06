import Link from '@/components/Utils/Link';
import style from './style.module.css';

const Brand = () => {
  return (
    <h1 className={style.brand}>
      <Link href='/'>
        <img src='/imagens/logo.svg' alt='Logo - Portifolio' />
      </Link>
    </h1>
  );
};

export default Brand;
