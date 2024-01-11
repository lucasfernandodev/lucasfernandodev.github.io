import style from './style.module.css';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Layout } from '../../Components/Layout';
import { Paragraph } from '../../Components/Paragraph';
import { Title } from '../../Components/Title';
import { Link } from '../../Infra/Link';
import { useTranslation } from 'react-i18next';

const Contact = () => {

  const { t } = useTranslation()

  return <Layout className={style.layout}>
    <Title>{t('contact.title')}</Title>
    <div className={style.container}>
      <Paragraph>{t('contact.paragraph_zero')}</Paragraph>
      <a 
        target="_blank" 
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
