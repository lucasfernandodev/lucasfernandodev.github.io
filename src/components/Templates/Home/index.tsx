import home from "./style.module.css";
import Button from "@/components/UI/Atoms/Button";
import Layout from "@/infra/Layout";


const HomeTemplate: React.FunctionComponent = () => {
  return (
    <>
    <a href="#mainContent" className="skip-to-content-link" tabIndex={1}>Pular direto para conteúdo</a>
    <Layout>
      <section className={home.welcome}>
        <div id="mainContent" className={home.text}>
          <p>Olá,</p>
          <h2>Meu nome é Lucas Fernando.</h2>
          <p className={home.description}>Desenvolvedor frontend.</p>

          <Button icon="send" to="/contact" type="Icon" theme="outline" height="sl">Vamos conversar</Button>
        </div>

        <div className={home.image}>
         <img src="imagens/baloes.svg" alt="ilustation" />
        </div>
      
      </section>
    </Layout>
    </>
  );
};

export default HomeTemplate;
