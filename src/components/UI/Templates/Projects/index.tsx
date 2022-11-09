import Title from "../../Atoms/Title";
import style from "./style.module.css";
import {projectsList} from "src/infra/Store/websites/list";
import Link from "@/infra/Link";
import { PanelsGroup } from "../../Organisms/PainelsGroup";
import Paragraph from "../../Atoms/Paragraph";


export function ProjectTemplate() {
  return (
    <section className={style.projects}>
      <header className={style.header}>
        <Title>Algumas coisas que Construí</Title>
        <Paragraph className={style.description}>
        Esses são alguns dos meus projetos desenvolvidos recentemente.
        </Paragraph>
      </header>

     <PanelsGroup list={projectsList}/>

      <footer className={style.footer}>
        <Title className={style.title}>Vamos conversar?</Title>
        <Paragraph className={style.description}>
          Quer entrar em contato ou falar sobre um projeto? Sinta-se à vontade
          para entrar em contato comigo através do e-mail{" "}
          <Link href="maito:lucasfernando.dev@gmail.com">
            lucasfernando.dev@gmail.com
          </Link>
          .
        </Paragraph>
      </footer>
    </section>
  );
}
