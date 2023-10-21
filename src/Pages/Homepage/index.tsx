import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconChevronRight } from '@tabler/icons-react';
import { Layout } from '../../Components/Layout';
import { Title } from '../../Components/Title';
import style from './style.module.css';
import { IconBrandDribbble } from '@tabler/icons-react';

const Homepage = () => {
  return (
    <Layout className={style.layout}>
      <Title tag="h1">Lucas Fernando.</Title>
      <p className={style.description}>
        Desenvolvedor Front-end
      </p>
      <button className={style.btn}>
        Vamos conversar
        <IconChevronRight />
      </button>
      <ul className={style.social}>
        <li className={style.item}><a href="#" className={style.Link}><IconBrandGithub /></a></li>
        <li className={style.item}><a href="#" className={style.Link}><IconBrandInstagram /></a></li>
        <li className={style.item}><a href="#" className={style.Link}><IconBrandLinkedin /></a></li>
        <li className={style.item}><a href="#" className={style.Link}><IconBrandDribbble/></a></li>
      </ul>
    </Layout>
  )
}

export { Homepage }
