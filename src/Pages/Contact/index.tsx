import { IconArrowUpRight, IconChevronRight } from '@tabler/icons-react';
import { Button } from '../../Components/Button';
import { Layout } from '../../Components/Layout';
import { Paragraph } from '../../Components/Paragraph';
import { Title } from '../../Components/Title';
import style from './style.module.css';

const Contact = () => {
  return <Layout className={style.layout}>
    <div className={style.container}>
      <Title>contato</Title>
      <Paragraph>Se você está procurando um desenvolvedor front-end dedicado e motivado, entre em contato comigo pelo e-mail lucasfernando.dev@gmail.com. </Paragraph>
      <Paragraph>Estou animado para colaborar em projetos emocionantes.</Paragraph>
      <div className={style.containerButtons}>
        <Button>Entrar em contato <IconChevronRight /></Button>
      </div>
    </div>
    <div className={style.container}>
      <ul className={style.sociais}>
        <li className={style.item}><a href="#" className={style.link}>
          LinkedIn  <IconArrowUpRight />
        </a></li>
        <li className={style.item}><a href="#" className={style.link}>
          Dribbble  <IconArrowUpRight />
        </a></li>
        <li className={style.item}><a href="#" className={style.link}>
          Github  <IconArrowUpRight />
        </a></li>
        <li className={style.item}><a href="#" className={style.link}>
          Instagram <IconArrowUpRight />
        </a></li>
      </ul>
    </div>
  </Layout>
}

export { Contact }
