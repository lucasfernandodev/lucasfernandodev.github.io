import style from "./style.module.css";
import Paragraph from "src/components/UI/Atoms/Paragraph";
import List from 'src/infra/Store/websites/list';
import Title from "@/Atoms/Title";
import Layout from "@/infra/Layout";
import Icon from "@/components/Utils/Icon";
import Image from "next/image";
import { Button } from "../../Atoms/Button";
import { Linkedin } from "umbrella-icons-library";
import { Painel } from "../../Organisms/Painel";
import Link from "@/infra/Link";

interface cardType {
  link: string;
  image: string;
  title: string;
  description: string;
}


const ProjectsTemplate = () => {
  return (
     <Layout>
      <section className={style.projects}>
        <div className={style.text} id="mainContent">
          <Title>Habilidades</Title>
          <div className={style.content}>
            <Paragraph>
            Trabalho como desenvolvedor front-end oferecendo soluções completas para sua aplicação.
            </Paragraph>
            <Paragraph>
            Crio sites responsivos, sempre utilizando as melhores práticas. Meu foco é no desenvolvimento, utilizando HTML, CSS, JS ou framework com React.js ou Next.js.
            </Paragraph>
            <Button.Root size="lg">
              <Button.Icon>
                <Linkedin />
              </Button.Icon>
            Ver mais detalhes
            </Button.Root>
          </div>
        </div>

        <div className={style.static}>

          <Image width={570} height={300} src="/imagens/Ability - Image.svg" alt="Ability image" />

        </div>
        <div className={style.icon}>
          <Icon icon="arrowDown"/>
        </div>
      </section>


      <section className={style.projects__cards}>
        <div className={style.header}>
          <Title>Algumas coisas que Construí</Title>
          <p className={style.description}>
            Esses são alguns dos meus projetos desenvolvidos recentemente.
          </p>
        </div>
       
        <div className={style.groupPanels}>
        {
          List.map((item: cardType) => {
            return <Painel 
              key={item.title} 
              description={item.description} 
              imageSource={item.image} 
              preview={item.link} 
              repository=''
              title={item.title} 
            />})
        }
        </div>

        <div className={style.footer}>
          <h2 className={style.title}>
          Vamos conversar?
          </h2>
          <p className={style.description}>
            Quer entrar em contato ou falar sobre um projeto? Sinta-se à vontade para entrar em contato comigo através do e-mail <Link href="maito:lucasfernando.dev@gmail.com">lucasfernando.dev@gmail.com</Link>.
          </p>
        </div>
      </section>

    </Layout>
  );
};

export default ProjectsTemplate;
