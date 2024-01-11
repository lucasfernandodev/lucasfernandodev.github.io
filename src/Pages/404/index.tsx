import style from './style.module.css';
import { Layout } from '../../Components/Layout';
import { Title } from '../../Components/Title';
import { Paragraph } from '../../Components/Paragraph';
import { Button } from '../../Components/Button';
import { IconChevronLeft } from '@tabler/icons-react';
import { Link } from '../../Infra/Link';
import { useTranslation } from 'react-i18next';
import { GroupButton } from '../../Components/GroupButton';


const Error404 = () => {
  const { t } = useTranslation()

  return (
    <Layout id={style.pageError} className={style.layout}>
      <Title className={style.title}>{t('error404.title')}</Title>
      <div className={style.container}>
        <Paragraph>{t('error404.paragraph_zero')}</Paragraph>
        <GroupButton>
          <Link href="/">
            <Button>
              <IconChevronLeft />{t('error404.button_content')}
            </Button>
          </Link>
        </GroupButton>
      </div>
      
      <div className={style.container}>
        <img src="/404.svg" alt={t('error404.image_alt')} />
      </div>
    </Layout>
  )
}

export { Error404 }
