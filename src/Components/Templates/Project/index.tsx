import { IconChevronRight, IconArrowUpRight } from '@tabler/icons-react';
import { t } from 'i18next';
import { Button } from '../../Atoms/Button';
import { GroupButton } from '../../Molecules/GroupButton';
import { Layout } from '../Layout';
import { Paragraph } from '../../Molecules/Paragraph';
import { Title } from '../../Molecules/Title';
import style from './style.module.css';
import { Link } from '../../../Infra/Link';
import { Carousel } from '../../Organisms/Carousel';
import { socialLinks } from '../../../social-links';

export const ProjectTemplate = () => {
  return (
    <Layout>
      <div className={style.layout}>
        <Title>{t('projects.title')}</Title>
        <div className={style.wrapper}>
          <div className={style.container}>
            <Paragraph>{t('projects.paragraph_zero')}</Paragraph>
            <Paragraph>{t('projects.paragraph_one')}</Paragraph>
            <GroupButton>
              <Link href="/contato">
                <Button>
                  {t('projects.button_content')} <IconChevronRight />
                </Button>
              </Link>
              <Link href={socialLinks.github}>
                <Button type="secondary">Github <IconArrowUpRight /></Button>
              </Link>
            </GroupButton>
          </div>

          <div className={style.container}>
            <Carousel />
          </div>
        </div>
      </div>

    </Layout>
  )
}