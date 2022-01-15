import me from "../../styles/Templates/me.module.css";
import Layout from "@/Organisms/Layout";
import Paragraph from "@/Atoms/Paragraph";
import Image from 'next/image';

const MeTemplate = () => {
  return (
    <Layout>
      <section className={me.section}>
        <div className={me.me__text}>
          <h2>Sobre mim?</h2>
          <Paragraph>
            Olá, meu nome é Lucas Fernando e sou desenvolvedor front-end. Apaixonado por programação e tecnologia, sempre tentando resolver bugs..
          </Paragraph>

          <Paragraph>
            Minhas Tecnologias:
          </Paragraph>
          
          <div className={me.tech}>
          
            <div className={me.card_tech}>
              <Image src="/imagens/html5.svg" alt="html5" width={100} height={40} layout="responsive" />
            </div>
            <div className={me.card_tech}>
              <Image src="/imagens/js.svg" alt="js" width={100} height={40} layout="responsive" />
            </div>
          <div className={me.card_tech}>
              <Image src="/imagens/css3.svg" alt="css3" width={100} height={40} layout="responsive" />
            </div>
            <div className={me.card_tech}>
              <Image src="/imagens/nextjs.svg" alt="Nextjs" width={100} height={40} layout="responsive" />
            </div>
          </div>

        </div>

        <div className={me.me__image}>
          <div className={me.me_img}>
          <Image src="/imagens/lucas.jpeg" width={340} height={350} alt="Lucas Fernando" layout="responsive"/>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MeTemplate;
