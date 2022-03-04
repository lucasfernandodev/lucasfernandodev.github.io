import Button from '@/components/UI/Atoms/Button';
import Layout from '@/components/UI/Organisms/Layout';
import Image from 'next/image';
import style from './style.module.css';

const Error404Template: React.FC = () => {
  return (
    <>
    <a href="#mainContent" className="skip-to-content-link" tabIndex={1}>Pular direto para conteúdo</a>
    <Layout>
      <section className={style.errorPage}>
        <div className={style.image}>
        <Image src="/imagens/errorIllustration.svg" alt="Error" width={440} height={500} layout="responsive"/>
        </div>
        <div className={style.text}>
          <h2>
            Infelizmente, a pagina não foi encontrada.
          </h2>
          <Button to='/home'>Retornar ao Inicio</Button>
        </div>
      </section>
    </Layout>
    </>
  );
}

export default Error404Template;