import Button from '@/components/UI/Atoms/Button/root';
import Layout from '@/infra/Layout';
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
          <Button to='/home'>Retornar ao Inicio</Button>
        </div>
      </section>
    </Layout>
  );
}

export default Error404Template;