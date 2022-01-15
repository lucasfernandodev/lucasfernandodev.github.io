import projects from "../../styles/Templates/projects.module.css";

import Layout from "@/Organisms/Layout";
import Icon from "@/Utils/Icon";
import Link from "@/Utils/Link";
import Paragraph from "@/components/UI/Atoms/Paragraph";

const ProjectsTemplate = () => {
  return (
    <Layout>
      <div className={projects.projects}>
        <div className={projects.text}>
          <h2>O que eu faço?</h2>

          <Paragraph>
            Trabalho com o desenvolvimento de websites, portais, lojas virtuais,
            blogs e hotsites. Desenvolvendo sites
            fiéis aos designs, integrando qualidade, velocidade e experiencia, buscando fortalecer os laços entre a marca e os
            usuários.
          </Paragraph>
        </div>

        <div className={projects.static}>

        <div className={projects.card}>
            <div className={projects.card__icon}>
              <Icon icon="rocket" width="34px" height="34px"/>
            </div>
            <div className={projects.card__main}>
              <div className={projects["card-header"]}>
                <h3>Velocidade</h3>
              </div>
              <div className={projects["card-body"]}>
                Sempre procuro garantir um site fluido e otimizado utilizando as
                principais praticas de CEO.
              </div>
            </div>
          </div>

          
          <div className={projects.card}>
            <div className={projects.card__icon}>
              <Icon icon="quality" width="34px" height="34px" />
            </div>
            <div className={projects.card__main}>
              <div className={projects["card-header"]}>
                <h3>Qualidade</h3>
              </div>
              <div className={projects["card-body"]}>
               Foco sempre na qualidade do código utilizando sempre as melhore
                praticas do mercado.
              </div>
            </div>
          </div>

         

          <div className={projects.card}>
            <div className={projects.card__icon}>
              <Icon icon="frontendMentor" width="34px" height="34px" />
            </div>
            <div className={projects.card__main}>
              <div className={projects["card-header"]}>
                <h3>Experiência</h3>
              </div>
              <div className={projects["card-body"]}>
                A experiência do usuário é sempre importante,
                procuro garantir sites fiéis ao design, acessibilidade e responsividade. Para garantir uma melhor
                experiência do usuário.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={projects.projects__cards}>
        casa
      </div>
    </Layout>
  );
};

export default ProjectsTemplate;
