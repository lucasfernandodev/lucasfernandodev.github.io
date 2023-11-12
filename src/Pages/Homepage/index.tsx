import style from './style.module.css';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconChevronRight } from '@tabler/icons-react';
import { Layout } from '../../Components/Layout';
import { Title } from '../../Components/Title';
import { IconBrandDribbble } from '@tabler/icons-react';
import { Link } from '../../Infra/Link';

const Homepage = () => {
  return (
    <Layout className={style.layout}>
      <Title tag="h1">Lucas Fernando.</Title>
      <p className={style.description}>
        Desenvolvedor Front-end
      </p>

      <Link href="/contato">
        <button className={style.btn}>
          Vamos conversar
          <IconChevronRight />
        </button>
      </Link>

      <ul className={style.social}>
        <li className={style.item}><Link href="#" className={style.Link}><IconBrandGithub /></Link></li>
        <li className={style.item}><Link href="#" className={style.Link}><IconBrandInstagram /></Link></li>
        <li className={style.item}><Link href="#" className={style.Link}><IconBrandLinkedin /></Link></li>
        <li className={style.item}><Link href="#" className={style.Link}><IconBrandDribbble /></Link></li>
      </ul>
    </Layout>
  )
}

export { Homepage }
