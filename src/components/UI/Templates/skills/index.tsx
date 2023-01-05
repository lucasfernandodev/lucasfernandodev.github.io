import style from "./style.module.css";
import Paragraph from "src/components/UI/Atoms/Paragraph";

import Title from "@/Atoms/Title";
import Layout from "@/infra/Layout";
import Image from "next/image";
import { Button } from "../../Atoms/Button";
import { ArrowDown, Linkedin } from "umbrella-icons-library";

import { ProjectTemplate } from "../Projects";
import { useState } from "react";
import Link from "@/infra/Link";

export const SkillsTemplate = () => {

  const [isVisibility, setIsVisible] = useState(true)

  function toggleVisiblity(state: boolean) {
    setIsVisible(state)
  }
  return (
    <Layout>
      <section className={style.skills}>
        <div className={style.text} id="mainContent">
          <Title className={style.title}>Habilidades</Title>
          <div className={style.content}>
            <Paragraph>
              Trabalho como desenvolvedor front-end oferecendo soluções
              completas para sua aplicação.
            </Paragraph>
            <Paragraph>
              Desenvolvo sites responsivos, sempre utilizando as melhores práticas.
              Meu foco é no desenvolvimento, utilizando HTML, CSS, JS ou
              framework com React.js ou Next.js.
            </Paragraph>
            <Button.Root size="lg" asChild>
              <Link target="_blank" href="https://www.linkedin.com/in/frontlucasfernandodev/">
                <Button.Icon>
                  <Linkedin />
                </Button.Icon>
                Ver mais detalhes
              </Link>
            </Button.Root>
          </div>
        </div>

        <div className={style.illustration}>
          <Image
            width={570}
            height={300}
            src="/imagens/Ability - Image.svg"
            alt="Ability image"
          />
        </div>

        <div className={style.skillsMoreContent}
          style={{ display: isVisibility ? 'flex' : 'none' }}
        >
          <ArrowDown />
        </div>
      </section>

      <ProjectTemplate toggle={toggleVisiblity} />
    </Layout>
  );
};
