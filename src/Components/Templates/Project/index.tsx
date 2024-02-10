import { IconChevronRight, IconArrowUpRight } from '@tabler/icons-react';
import { t } from 'i18next';
import { Button } from '../../Button';
import { Carousel } from '../../Carousel';
import { GroupButton } from '../../GroupButton';
import { Layout } from '../../Layout';
import { Paragraph } from '../../Paragraph';
import { Title } from '../../Title';
import style from './style.module.css';
import { Link } from '../../../Infra/Link';

export const ProjectTemplate = () => {
  return (
    <Layout className={style.layout}>

      <Title>{t('projects.title')}</Title>
      <div className={style.container}>
        <Paragraph>{t('projects.paragraph_zero')}</Paragraph>
        <Paragraph>{t('projects.paragraph_one')}</Paragraph>
        <GroupButton>
          <Link href="/contato">
            <Button>
              {t('projects.button_content')} <IconChevronRight />
            </Button>
          </Link>
          <Link href="https://github.com/lucasfernandodev">
            <Button type="secondary">Github <IconArrowUpRight /></Button>
          </Link>
        </GroupButton>
      </div>


      <div className={style.container}>
        <Carousel />
      </div>
    </Layout>
  )
}