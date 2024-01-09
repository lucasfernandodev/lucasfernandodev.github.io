import style from './style.module.css';
import { Layout } from '../../Components/Layout';
import { Title } from '../../Components/Title';
import { Paragraph } from '../../Components/Paragraph';
import { Button } from '../../Components/Button';
import { IconChevronLeft } from '@tabler/icons-react';
import { Link } from '../../Infra/Link';
import { useTranslation } from 'react-i18next';


const Error404 = () => {
  const { t } = useTranslation()

  return (
    <Layout id={style.pageError} className={style.layout}>
      <Title>{t('error404.title')}</Title>
      <div className={style.container}>
        <Paragraph>{t('error404.paragraph_zero')}</Paragraph>
        <Paragraph>{t('error404.paragraph_one')}</Paragraph>
        <div className={style.containerButtons}>
          <Link href="/"><Button><IconChevronLeft />
            {t('error404.button_content')}</Button>
          </Link>
        </div>
      </div>
      <div className={style.container}>
        <img src="/404.svg" alt="Astronauta segurando um doginho" />
      </div>
    </Layout>
  )
}

export { Error404 }
