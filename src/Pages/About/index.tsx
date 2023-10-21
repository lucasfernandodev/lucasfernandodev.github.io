import { IconArrowUpRight, IconChevronRight } from '@tabler/icons-react';
import { Button } from '../../Components/Button';
import { Layout } from '../../Components/Layout';
import { Paragraph } from '../../Components/Paragraph';
import { Title } from '../../Components/Title';
import style from './style.module.css';

const About = () => {
  return (
  <Layout className={style.layout}>
    <div className={style.container}>
      <Title>Sobre mim</Title>
      <Paragraph>Olá! Sou Lucas Fernando, um desenvolvedor front-end entusiasmado de Goiás, com 21 anos. </Paragraph>
      <Paragraph>Estou constantemente em busca de aprendizado e crescimento na área de programação.</Paragraph>
      <div className={style.containerButtons}>
        <Button>Explorar tecnologias <IconChevronRight /></Button>
        <Button type="secondary">LinkedIn <IconArrowUpRight /></Button>
      </div>
    </div>
    <div className={style.container}>
      <div className={style.profile}></div>
    </div>
  </Layout>
  )
}

export { About }
