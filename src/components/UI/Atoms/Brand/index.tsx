import Link from '@/infra/Link';
import Logo from 'src/assets/images/logo';
import style from './style.module.css';

const Brand = () => {
  return (
    <h1 className={style.brand}>
      <Link href='/'>
        <Logo stroke='var(--brand-color)'/>
      </Link>
    </h1>
  );
};

export default Brand;
