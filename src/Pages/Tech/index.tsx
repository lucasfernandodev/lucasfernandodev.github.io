import { IconArrowUpRight, IconChevronRight } from '@tabler/icons-react';
import { Button } from '../../Components/Atoms/Button';
import { Layout } from '../../Components/Templates/Layout';
import { Paragraph } from '../../Components/Molecules/Paragraph';
import { Title } from '../../Components/Molecules/Title';
import style from './style.module.css';
import { TechPanel } from '../../Components/Organisms/TechPanel';
import { Link } from '../../Infra/Link';
import { useTranslation } from 'react-i18next';
import { GroupButton } from '../../Components/Molecules/GroupButton';

export const Tech = () => {

  const { t } = useTranslation()

  return (
    <Layout >
      <div className={style.layout}>
        <Title className={style.title}>{t('tech.title')}</Title>
        <div className={style.wrapper}>
          <div className={style.container}>
            <Paragraph>{t('tech.paragraph_zero')}</Paragraph>
            <Paragraph>{t('tech.paragraph_one')}</Paragraph>
            <GroupButton>
              <Link href="/projetos">
                <Button>{t('tech.button_content')}<IconChevronRight />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/frontlucasfernandodev">
                <Button type='secondary'>LinkedIn <IconArrowUpRight /></Button>
              </Link>
            </GroupButton>
          </div>
          <div className={[style.container, style.panel].join(" ")}>
            <TechPanel />
          </div>
        </div>
      </div>
    </Layout>
  )
}

