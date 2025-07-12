import style from './style.module.css';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Layout } from '../../Components/Templates/Layout';
import { Paragraph } from '../../Components/Molecules/Paragraph';
import { Title } from '../../Components/Molecules/Title';
import { Link } from '../../Infra/Link';
import { useTranslation } from 'react-i18next';
import { socialLinks } from '../../social-links';

const Contact = () => {

  const { t } = useTranslation()

  return (
    <Layout>
      <div className={style.layout}>
        <Title className={style.title}>{t('contact.title')}</Title>
        <div className={style.wrapper}>
          <div className={style.container}>
            <Paragraph>{t('contact.paragraph_zero')}</Paragraph>
            <a
              target="_blank"
              rel="noreferrer"
              data-hover={t('contact.email')}
              className={style.contact_email}
              href="mailto:lucasfernando.dev@gmail.com"
            >
              {t('contact.email')}
            </a>
          </div>

          <div className={style.container}>
            <ul className={style.sociais}>
              <li className={style.item}>
                <Link href={socialLinks.dribbble} className={style.link}>
                  Dribbble  <IconArrowUpRight />
                </Link>
              </li>
              <li className={style.item}>
                <Link href={socialLinks.github} className={style.link}>
                  Github  <IconArrowUpRight />
                </Link>
              </li>
              <li className={style.item}>
                <Link href={socialLinks.instagram} className={style.link}>
                  Instagram <IconArrowUpRight />
                </Link>
              </li>
              <li className={style.item}>
                <Link href={socialLinks.linkedin} className={style.link}>
                  LinkedIn  <IconArrowUpRight />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export { Contact }
