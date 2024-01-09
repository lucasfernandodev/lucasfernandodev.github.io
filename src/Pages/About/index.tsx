import { IconArrowUpRight, IconChevronRight } from '@tabler/icons-react';
import { Button } from '../../Components/Button';
import { Layout } from '../../Components/Layout';
import { Paragraph } from '../../Components/Paragraph';
import { Title } from '../../Components/Title';
import style from './style.module.css';
import { Link } from '../../Infra/Link';
import { useTranslation } from 'react-i18next';
import { GroupButton } from '../../Components/GroupButton';

const About = () => {

  const { t } = useTranslation()

  return (
    <Layout className={style.layout}>
      <Title>{t('about_me.title')}</Title>
      <div className={style.container}>
        <Paragraph>{t('about_me.paragraph_zero')}</Paragraph>
        <Paragraph>{t('about_me.paragraph_one')}</Paragraph>

        <GroupButton>
          <Link href="/tecnologias">
            <Button>
              {t('about_me.button_content')}<IconChevronRight />
            </Button>
          </Link>

          <Link href="#linkedin">
            <Button type="secondary">LinkedIn <IconArrowUpRight /></Button>
          </Link>
        </GroupButton>
      </div>
      
      <div className={[style.container, style.profile].join(" ")}>
        <div className={style.profile__image}></div>
      </div>
    </Layout>
  )
}

export { About }
