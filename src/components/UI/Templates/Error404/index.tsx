import {ButtonRoot} from '@/components/UI/Atoms/Button/root';
import Layout from '@/infra/Layout';
import Link from '@/infra/Link';
import Image from 'next/image';
import style from './style.module.css';

const Error404Template: React.FC = () => {
  return (
    <Layout>
      <section className={style.errorPage}>
        <div className={style.text}>
          <span>Oops..</span>
          <h2>
          404
          </h2>
          <span>Pagina não encontrada!</span>
          <ButtonRoot asChild className={style.button}>
            <Link href='/'>
              Voltar para home
            </Link>
          </ButtonRoot>
        </div>
      </section>
    </Layout>
  );
}

export default Error404Template;