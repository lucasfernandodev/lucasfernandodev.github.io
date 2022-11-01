import {ButtonRoot} from '@/components/UI/Atoms/Button/root';
import Layout from '@/infra/Layout';
import Link from '@/infra/Link';
import Image from 'next/image';
import style from './style.module.css';

const Error404Template: React.FC = () => {
  return (
    <Layout>
      <section className={style.errorPage}>
        <div className={style.image}>
        <Image src="/imagens/errorIllustration.svg" alt="Error" width={440} height={500} />
        </div>
        <div className={style.text}>
          <h2>
            Infelizmente, a pagina não foi encontrada.
          </h2>
          <ButtonRoot>
            <Link href='/'>
              Retornar ao Inicio
            </Link>
          </ButtonRoot>
        </div>
      </section>
    </Layout>
  );
}

export default Error404Template;