import me from "./style.module.css";
import Layout from "src/components/UI/Organisms/Layout";
import Paragraph from "src/components/UI/Atoms/Paragraph";
import Image from 'next/image';
import ResizeScreen from 'src/components/Utils/resizeScreen';
import { useEffect, useState } from "react";
import Title from "@/components/UI/Atoms/Title";
import Avatar from "@/components/UI/Atoms/Avatar";

const MeTemplate = () => {


  const [ScreenSize, setScreenSize] = useState(null);
  useEffect(() => {
    setScreenSize(ResizeScreen() !== null ? ResizeScreen() : null)
  }, [])

  return (
    <>
    <a href="#mainContent" className="skip-to-content-link" tabIndex={1}>Pular direto para conteúdo</a>
    <Layout>
      <section className={me.section}>
        <div className={me.me__text} id="mainContent">
          <Title>Sobre mim</Title>

          { ScreenSize === 'small' && <Avatar /> }

          <Paragraph>
          Olá meu nome é Lucas Fernando, tenho 21 anos, estou morando em Goiás e sou apaixonando por tecnologia.
          </Paragraph>

          <Paragraph>
          Sou desenvolvedor Front-end, realmente apaixonado por essa área por isso sempre procurei me desenvolver e melhorar, estudando e constantemente resolvendo problemas com programação.
          </Paragraph>
          <Paragraph>
            Tecnologias que estou usando
          </Paragraph>

          <div className={me.tech} tabIndex={0}>
            <div className={me.card_tech} tabIndex={1} aria-label="HTML5">
              <Image src="/imagens/html5.svg" alt="html5" width={100} height={40} layout="responsive" />
            </div>
            <div className={me.card_tech} tabIndex={2} aria-label="Javascript">
              <Image src="/imagens/js.svg" alt="Javascript" width={100} height={40} layout="responsive" />
            </div>
            <div className={me.card_tech} tabIndex={3} aria-label="CSS3">
              <Image src="/imagens/css3.svg" alt="css3" width={100} height={40} layout="responsive" />
            </div>
            <div className={me.card_tech} tabIndex={4} aria-label="Nextjs">
              <Image src="/imagens/nextjs.svg" alt="Nextjs" width={100} height={40} layout="responsive" />
            </div>
          </div>
        </div>


        { ScreenSize !== 'small' && <Avatar /> }

      </section>
    </Layout>
    </>
  );
};

export default MeTemplate;
