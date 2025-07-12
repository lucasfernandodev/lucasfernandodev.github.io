import style from './style.module.css';
import { Layout } from '../../Components/Templates/Layout';
import { Title } from '../../Components/Molecules/Title';
import { Paragraph } from '../../Components/Molecules/Paragraph';
import { Button } from '../../Components/Atoms/Button';
import { Link } from '../../Infra/Link';
import { useTranslation } from 'react-i18next';
import { GroupButton } from '../../Components/Molecules/GroupButton';


const Error404 = () => {
  const { t } = useTranslation()

  return (
    <Layout >
      <div id={style.pageError} className={style.layout}>
        <Title className={style.title}>{t('error404.title')}</Title>
        <div className={style.wrapper}>
          <div className={style.container}>
            <Paragraph>{t('error404.paragraph_zero')}</Paragraph>
            <GroupButton className={style.groupButtons}>
              <Link href="/">
                <Button className={style.button}>
                  {t('error404.button_content')}
                </Button>
              </Link>
            </GroupButton>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export { Error404 }
