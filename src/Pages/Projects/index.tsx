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

  function selectContent(id: number){
    const item = projects.filter(project => project._id === id) as any
    setContent(item[0])
    setIsModalShow(!isModalShow)
  }

  function toggleVisibility(){
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
      <div className={style.container}>
        <Title>Projetos</Title>
        <Paragraph>Estou empenhado em aprimorar minhas habilidades e me manter atualizado com as tecnologias mais recentes.</Paragraph>
        <Paragraph>Embora não tenha experiência profissional, estou determinado a adquirir conhecimento e contribuir para projetos web.</Paragraph>
        <div className={style.containerButtons}>
          <Button>Entrara em contato <IconChevronRight /></Button>
          <Button type="secondary">Github <IconArrowUpRight /></Button>
        </div>
      </div>
      <div className={style.container}>
        <Slider onClick={selectContent}/>
      </div>
    </Layout>
  )
}

export { Projects }
