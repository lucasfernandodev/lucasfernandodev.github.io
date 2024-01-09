import style from './style.module.css';
import { IconArrowUpRight, IconChevronRight } from '@tabler/icons-react';
import { Button } from '../../Components/Button';
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
      <Paragraph>{t('contact.paragraph_one')}</Paragraph>
      <div className={style.containerButtons}>
        <Button>{t('contact.button_content')}<IconChevronRight /></Button>
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
