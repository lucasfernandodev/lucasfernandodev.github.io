import style from './style.module.css';
import { Layout } from '../../Components/Layout';
import { Title } from '../../Components/Title';
import { Paragraph } from '../../Components/Paragraph';
import { Button } from '../../Components/Button';
import { IconChevronLeft } from '@tabler/icons-react';


const Error404 = () => {

  return (
    <Layout className={style.layout}>
      <div className={style.container}>
        <Title>Oops! Página não encontrada.</Title>
        <Paragraph>Infelismente não foi possivel encontrar a pagina que você está procurando.</Paragraph>
        <Paragraph>Volte para a página inicial e continue explorando.</Paragraph>
        <div className={style.containerButtons}>
          <Button><IconChevronLeft />Voltar para a pagina inicial</Button>
        </div>
      </div>
      <div className={style.container}>
        <img src="/404.svg" alt="Astronauta segurando um doginho" />
      </div>
    </Layout>
  )
}

export { Error404 }
