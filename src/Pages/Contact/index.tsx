import style from './style.module.css';
import { IconArrowUpRight, IconChevronRight } from '@tabler/icons-react';
import { Button } from '../../Components/Button';
import { Layout } from '../../Components/Layout';
import { Paragraph } from '../../Components/Paragraph';
import { Title } from '../../Components/Title';
import { Link } from '../../Infra/Link';

const Contact = () => {
  return <Layout className={style.layout}>
    <Title>contato</Title>
    <div className={style.container}>
      <Paragraph>Se você está procurando um desenvolvedor front-end dedicado e motivado, entre em contato comigo pelo e-mail lucasfernando.dev@gmail.com. </Paragraph>
      <Paragraph>Estou animado para colaborar em projetos emocionantes.</Paragraph>
      <div className={style.containerButtons}>
        <Button>Entrar em contato <IconChevronRight /></Button>
      </div>
    </div>
    <div className={style.container}>
      <ul className={style.sociais}>
        <li className={style.item}>
          <Link href="#" className={style.link}>
            LinkedIn  <IconArrowUpRight />
          </Link>
        </li>
        <li className={style.item}>
          <Link href="#" className={style.link}>
            Dribbble  <IconArrowUpRight />
          </Link>
        </li>
        <li className={style.item}>
          <Link href="#" className={style.link}>
            Github  <IconArrowUpRight />
          </Link>
        </li>
        <li className={style.item}>
          <Link href="#" className={style.link}>
            Instagram <IconArrowUpRight />
          </Link>
        </li>
      </ul>
    </div>
  </Layout>
}

export { Contact }
