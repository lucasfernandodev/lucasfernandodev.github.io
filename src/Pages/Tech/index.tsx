import { IconArrowUpRight, IconChevronRight } from '@tabler/icons-react';
import { Button } from '../../Components/Button';
import { Layout } from '../../Components/Layout';
import { Paragraph } from '../../Components/Paragraph';
import { Title } from '../../Components/Title';
import style from './style.module.css';
import { TechPanel } from '../../Components/TechPanel';

export const Tech = () => {
  return (
    <Layout className={style.layout}>
      <div className={style.container}>
        <Title>Tecnologias</Title>
        <Paragraph>Como desenvolvedor front-end, ofereço soluções completas para aplicações web. Tenho habilidades em desenvolvimento de sites responsivos, seguindo as melhores práticas.</Paragraph>
        <Paragraph>Utilizo HTML, CSS e JavaScript para criar interfaces atraentes e funcionais.</Paragraph>
        <div className={style.containerButtons}>
          <Button>Explorar projetos <IconChevronRight /></Button>
          <Button type='secondary'>LinkedIn <IconArrowUpRight /></Button>
        </div>
      </div>
      <div className={style.container}>
        <TechPanel />
      </div>
    </Layout>
  )
}

