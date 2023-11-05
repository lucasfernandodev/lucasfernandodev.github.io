import { IconArrowUpRight, IconChevronRight } from '@tabler/icons-react';
import { Button } from '../../Components/Button';
import { Layout } from '../../Components/Layout';
import { Paragraph } from '../../Components/Paragraph';
import { Slider } from '../../Components/Slider';
import { Title } from '../../Components/Title';
import style from './style.module.css';

const Projects = () => {
  return <Layout className={style.layout}>
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
      <Slider />
    </div>
  </Layout>
}

export { Projects }
