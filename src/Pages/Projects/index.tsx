import { IconArrowUpRight, IconChevronRight } from '@tabler/icons-react';
import { Button } from '../../Components/Button';
import { Layout } from '../../Components/Layout';
import { Paragraph } from '../../Components/Paragraph';
import { Slider } from '../../Components/Slider';
import { Title } from '../../Components/Title';
import style from './style.module.css';
import { Modal } from '../../Components/Modal';
import { useState } from 'react';
import projects from '../../projects.json';
import { Link } from '../../Infra/Link';
import { useTranslation } from 'react-i18next';
import { GroupButton } from '../../Components/GroupButton';

interface IModal {
  title: string,
  description: string,
  thumbnail: string,
  url: string,
  url_project: string,
}

const Projects = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [content, setContent] = useState({} as IModal)

  const { t } = useTranslation()

  function selectContent(id: number) {
    const item = projects.filter(project => project._id === id) as any
    setContent(item[0])
    setIsModalShow(!isModalShow)
  }

  function toggleVisibility() {
    setIsModalShow(false)
  }

  return (
    <Layout className={style.layout}>
      {isModalShow && <Modal
        title={content.title}
        description={content.description}
        thumbnail={content.thumbnail}
        url={content.url}
        url_project={content.url_project}
        closeModal={toggleVisibility}
      />}

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
          <Link href="#github"><Button type="secondary">Github <IconArrowUpRight /></Button></Link>
        </GroupButton>
      </div>


      <div className={style.container}>
        <Slider onClick={selectContent} />
      </div>
    </Layout>
  )
}

export { Projects }
