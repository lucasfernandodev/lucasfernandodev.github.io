import style from "./style.module.css";
import Button from "@/components/UI/Atoms/Button";
import Layout from "@/infra/Layout";
import Title from "@/components/UI/Atoms/Title";


const HomeTemplate: React.FunctionComponent = () => {
  return (
    <Layout>
      <section className={style.welcome}>
        <div id="mainContent" className={style.text}>
          <p>Olá,</p>
          <Title apparence="h1">Meu nome é Lucas Fernando.</Title>
          <p className={style.description}>Desenvolvedor frontend.</p>

          <Button icon="send" to="/contact" type="Icon" theme="outline" height="sl">Vamos conversar</Button>
        </div>

        <div className={style.image}>
         <img src="imagens/baloes.svg" alt="ilustation" />
        </div>
      
      </section>
    </Layout>
  );
};

export default HomeTemplate;
