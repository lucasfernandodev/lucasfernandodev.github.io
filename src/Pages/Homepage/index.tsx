import style from './style.module.css';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconChevronRight } from '@tabler/icons-react';
import { Layout } from '../../Components/Layout';
import { Title } from '../../Components/Title';
import { IconBrandDribbble } from '@tabler/icons-react';
import { Link } from '../../Infra/Link';
import { useTranslation } from 'react-i18next';

const Homepage = () => {

  const { t } = useTranslation()

  return (
    <Layout id={style.homepage} className={style.layout}>
      <div className={style.container}>
        <Title tag="h1">{t('homepage.title')}</Title>
        <p className={style.description}>
          {t('homepage.subtitle')}
        </p>

        <Link href="/contato">
          <button className={style.btn}>
            {t('homepage.button_content')}
            <IconChevronRight />
          </button>
        </Link>
      </div>

      <ul className={style.social}>
        <li className={style.item}>
          <Link target="_blank" href="https://dribbble.com/lucasfernandodev" className={style.Link}>
            <IconBrandDribbble />
          </Link>
        </li>
        <li className={style.item}>
          <Link target="_blank" href="https://github.com/lucasfernandodev" className={style.Link}>
            <IconBrandGithub />
          </Link>
        </li>
        <li className={style.item}>
          <Link target="_blank" href="https://www.instagram.com/lucasfernandodev/" className={style.Link}>
            <IconBrandInstagram />
          </Link>
        </li>
        <li className={style.item}>
          <Link target="_blank" href="https://www.linkedin.com/in/frontlucasfernandodev" className={style.Link}>
            <IconBrandLinkedin />
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export { Homepage }
