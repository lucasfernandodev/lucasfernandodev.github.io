import style from "./style.module.css";
import {Button} from "@/components/UI/Atoms/Button";
import Layout from "@/infra/Layout";
import Title from "@/components/UI/Atoms/Title";
import { SendInclined } from "umbrella-icons-library";


const HomeTemplate: React.FunctionComponent = () => {
  return (
    <Layout>
      <section className={style.welcome}>
        <div id="mainContent" className={style.text}>
          <p>Olá,</p>
          <Title appearance="h1">Meu nome é Lucas Fernando.</Title>
          <p className={style.description}>Desenvolvedor frontend.</p>

          <Button.Root size="lg">
            <Button.Icon>
              <SendInclined />
            </Button.Icon>
            Vamos conversar
            </Button.Root>
        </div>

        <div className={style.image}>
         <img src="imagens/hot-air-balloon.svg" alt="Ilustração de um balão de ar quente voando" />
        </div>
      
      </section>
    </Layout>
  );
};

export default HomeTemplate;
