import style from "./style.module.css";
import Paragraph from "src/components/UI/Atoms/Paragraph";
import Image from "next/image";
import Title from "@/components/UI/Atoms/Title";
import Layout from "@/infra/Layout";
import { Techs } from "@/components/Utils/techsLogos";

const MeTemplate = () => {
  return (
    <Layout>
      <section className={style.section}>
        <div className={style.content} id="mainContent">
          <Title>Sobre mim</Title>
          <Paragraph>
            Olá meu nome é Lucas Fernando, tenho 21 anos, moro em Goiás.
          </Paragraph>

          <Paragraph>
            Sou desenvolvedor web front-end, apaixonado por tecnologia, sempre
            explorando e testando novas tecnologias, buscando aprender e evoluir como programador.
          </Paragraph>
          <Paragraph>Tecnologias que estou usando:</Paragraph>

          <div className={style.tech} tabIndex={0}>
            <Techs tech="html5" title="HTML5"/>
            <Techs tech="js" title="Javascript"/>
            <Techs tech="css3" title="CSS3"/>
            <Techs tech="react" title="React.js"/>
            <Techs tech="nextJs" title="Next.js"/>
          </div>
        </div>
        <div className={style.image}>
          <div className={style.user}>
            <Image
              src="/imagens/Photo-Lucas-Fernando-Dev.png"
              width={340}
              height={350}
              alt="Imagem mostrando o rosto de Lucas Fernando"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MeTemplate;
