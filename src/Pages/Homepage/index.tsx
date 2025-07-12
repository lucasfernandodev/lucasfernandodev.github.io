import style from './style.module.css';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconChevronRight } from '@tabler/icons-react';
import { Layout } from '../../Components/Templates/Layout';
import { Title } from '../../Components/Molecules/Title';
import { IconBrandDribbble } from '@tabler/icons-react';
import { Link } from '../../Infra/Link';
import { useTranslation } from 'react-i18next';
import { socialLinks } from '../../social-links';

const Homepage = () => {

  const { t } = useTranslation()

  return (
    <Layout >
      <div id={style.homepage} className={style.layout}>
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
            <Link target="_blank" href={socialLinks.dribbble} className={style.Link}>
              <IconBrandDribbble />
            </Link>
          </li>
          <li className={style.item}>
            <Link target="_blank" href={socialLinks.github} className={style.Link}>
              <IconBrandGithub />
            </Link>
          </li>
          <li className={style.item}>
            <Link target="_blank" href={socialLinks.instagram} className={style.Link}>
              <IconBrandInstagram />
            </Link>
          </li>
          <li className={style.item}>
            <Link target="_blank" href={socialLinks.linkedin} className={style.Link}>
              <IconBrandLinkedin />
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export { Homepage }
