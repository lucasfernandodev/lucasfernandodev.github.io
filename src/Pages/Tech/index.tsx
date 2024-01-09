import { IconArrowUpRight, IconChevronRight } from '@tabler/icons-react';
import { Button } from '../../Components/Button';
import { Layout } from '../../Components/Layout';
import { Paragraph } from '../../Components/Paragraph';
import { Title } from '../../Components/Title';
import style from './style.module.css';
import { TechPanel } from '../../Components/TechPanel';
import { Link } from '../../Infra/Link';
import { useTranslation } from 'react-i18next';
import { GroupButton } from '../../Components/GroupButton';

export const Tech = () => {

  const { t } = useTranslation()

  return (
    <Layout className={style.layout}>
      <Title className={style.title}>{t('tech.title')}</Title>
      <div className={style.container}>
        <Paragraph>{t('tech.paragraph_zero')}</Paragraph>
        <Paragraph>{t('tech.paragraph_one')}</Paragraph>
        <GroupButton>
          <Link href="/projetos">
            <Button>{t('tech.button_content')}<IconChevronRight />
            </Button>
          </Link>
          <Link href="#linkedin"><Button type='secondary'>LinkedIn <IconArrowUpRight /></Button></Link>
        </GroupButton>
      </div>
      <div className={[style.container, style.panel].join(" ")}>
        <TechPanel />
      </div>
    </Layout>
  )
}

