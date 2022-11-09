import style from "./style.module.css";
import Paragraph from "src/components/UI/Atoms/Paragraph";

import Title from "@/Atoms/Title";
import Layout from "@/infra/Layout";
import Icon from "@/components/Utils/Icon";
import Image from "next/image";
import { Button } from "../../Atoms/Button";
import { Linkedin } from "umbrella-icons-library";

import Link from "@/infra/Link";
import { ProjectTemplate } from "../Projects";

export const SkillsTemplate = () => {
  return (
    <Layout>
      <section className={style.skills}>
        <div className={style.text} id="mainContent">
          <Title>Habilidades</Title>
          <div className={style.content}>
            <Paragraph>
              Trabalho como desenvolvedor front-end oferecendo soluções
              completas para sua aplicação.
            </Paragraph>
            <Paragraph>
              Crio sites responsivos, sempre utilizando as melhores práticas.
              Meu foco é no desenvolvimento, utilizando HTML, CSS, JS ou
              framework com React.js ou Next.js.
            </Paragraph>
            <Button.Root size="lg">
              <Button.Icon>
                <Linkedin />
              </Button.Icon>
              Ver mais detalhes
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

        <div className={style.skillsMoreContent}>
          <Icon icon="arrowDown" />
        </div>
      </section>

      <ProjectTemplate />
    </Layout>
  );
};
