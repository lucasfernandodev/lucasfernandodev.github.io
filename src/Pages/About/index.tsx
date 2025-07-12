import style from './style.module.css';
import { IconArrowUpRight, IconChevronRight } from '@tabler/icons-react';
import { Button } from '../../Components/Atoms/Button';
import { Layout } from '../../Components/Templates/Layout';
import { Paragraph } from '../../Components/Molecules/Paragraph';
import { Title } from '../../Components/Molecules/Title';
import { Link } from '../../Infra/Link';
import { useTranslation } from 'react-i18next';
import { GroupButton } from '../../Components/Molecules/GroupButton';

const About = () => {

  const { t } = useTranslation()

  return (
    <Layout>
      <div className={style.layout}>
        <Title>{t('about_me.title')}</Title>
        <div className={style.wrapper}>
          <div className={style.container}>
            <Paragraph>{t('about_me.paragraph_zero')}</Paragraph>
            <Paragraph>{t('about_me.paragraph_one')}</Paragraph>
            <GroupButton>
              <Link href="/tecnologias">
                <Button>
                  {t('about_me.button_content')}<IconChevronRight />
                </Button>
              </Link>

              <Link href="https://www.linkedin.com/in/frontlucasfernandodev">
                <Button type="secondary">LinkedIn <IconArrowUpRight /></Button>
              </Link>
            </GroupButton>
          </div>

          <div className={[style.container, style.profile].join(" ")}>
            <div className={style.profile__image}>
              <img src="/profile.jpg" alt="Lucas Fernando" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export { About }
