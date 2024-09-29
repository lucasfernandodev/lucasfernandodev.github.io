import style from './style.module.css';
import { Layout } from "../../Layout"
import { GroupButton } from '../../GroupButton';
import { Link } from '../../../Infra/Link';
import { Button } from '../../Button';
import { IconArrowNarrowLeft, IconArrowUpRight, IconChevronRight } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react'; 

interface IProjectOpenTemplateProps {
  id: string
}

const ProjectOpenTemplate: React.FC<IProjectOpenTemplateProps> = ({ id }) => {
  

  const { t } = useTranslation()
  const backgroundImage = t(`projects:${id}.image_url`);


  const [isMobile, seIsMobile] = useState(
    window.matchMedia("(max-width: 510px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(max-width: 510px)")
      .addEventListener('change', e => seIsMobile(e.matches));
  }, []);

  useEffect(() => {
    if (isMobile) {
      document.documentElement.style.setProperty("--project-thumbnail", `url(${backgroundImage})`);
    }

  }, [isMobile])

  const textProcess = t(`projects:${id}.process`, { returnObjects: true }) as string[]
  const textContext = t(`projects:${id}.context`, { returnObjects: true }) as string[]

  return (
    <Layout className={style.layout}>
      <div className={style.thumbnail}>
        <h2>{t(`projects:${id}.title`)}</h2>
      </div>
      <div className={style.container}>
        <div className={style.col}>
          <div>
            <h3>{t('projects_open.what_was_done')}</h3>
            {textProcess.map((p, index) => <p key={index}>{p}</p>)}
          </div>
          <div>
            <h3>{t('projects_open.context')}</h3>
            {textContext.map((p, index) => <p key={index}>{p}</p>)}
          </div>
          <GroupButton>
            <Link href={t(`projects:${id}.preview_url`)}>
              <Button>
                {t('projects_open.button_preview')}
                <IconChevronRight />
              </Button>
            </Link>
            <Link href={t(`projects:${id}.github_url`)}>
              <Button type="secondary">Github <IconArrowUpRight /></Button>
            </Link>
          </GroupButton>
        </div>

        <div className={style.col}>
          <div className={style.col__thumbnail}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
        </div>
      </div>
      <div className={style.footer}>
        <Link href="/projetos">
          <IconArrowNarrowLeft />
          <span>{t('projects_open.button_back')}</span>
        </Link>
      </div>
    </Layout>
  )
}

export default ProjectOpenTemplate