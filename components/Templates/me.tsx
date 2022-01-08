import me from "../../styles/Templates/me.module.css";
import Layout from "@/Organisms/Layout";
import Paragraph from "@/Atoms/Paragraph";


const MeTemplate = () => {
  return (
    <Layout>
      <section className={me.section}>
        <div className={me.me__text}>
          <h2>Sobre mim?</h2>
          <Paragraph>
            Olá, meu nome é Lucas Fernando e sou desenvolvedor front-end. 
          </Paragraph>
        </div>

        <div className={me.me__image}>
          
        </div>
      </section>
    </Layout>
  );
};

export default MeTemplate;
