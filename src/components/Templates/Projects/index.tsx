import projects from "./style.module.css";
import Paragraph from "src/components/UI/Atoms/Paragraph";
import CardPreview from "src/components/UI/Molecules/CardPreview/cardPreview";
import CardFeatured from "src/components/UI/Molecules/CardFeatured/cardFeatured";
import List from 'src/infra/Store/websites/list';
import Title from "../../UI/Atoms/Title";
import Layout from "@/infra/Layout";
import Icon from "@/components/Utils/Icon";

interface cardType {
  link: string;
  image: string;
  title: string;
  description: string;
}


const ProjectsTemplate = () => {

  return (
    <>
    <a href="#mainContent" className="skip-to-content-link" tabIndex={1}>Pular direto para conteúdo</a>
    <Layout>
      <section className={projects.projects}>
        <div className={projects.text} id="mainContent">
          <Title>O que eu faço?</Title>
          <div className={projects.content}>
            <Paragraph>
              Como desenvolvedor front-end trabalho codando o design,
              transformando o em sites e aplicações, com foco em trazer a melhor experiência para o usuário.
            </Paragraph>
            <Paragraph>
              Sempre desenvolvo sites
              fiéis ao design focando em integrar qualidade e velocidade gerando uma melhor experiência para o usuário.
            </Paragraph>
          </div>
        </div>

        <div className={projects.static}>

          <CardFeatured
            icon="rocket"
            title="Velocidade"
            content="Procuro sempre desenvolver um site otimizado utilizando as principais práticas do mercado."
          />

          <CardFeatured
            icon="quality"
            title="Qualidade"
            content="Para garantir a qualidade da aplicação, desenvolvo sempre com foco no código limpo e semântico."
          />

          <CardFeatured
            icon="frontendMentor"
            title="Experiência"
            content="Maximizar a experiência do usuário é sempre importante se um site deseja se manter e crescer, por isso foco sempre em desenvolver sites simples, fluidos e intuitivos."
          />

        </div>
        <div className={projects.icon}>
          <Icon icon="arrowDown"/>
        </div>
      </section>


      <section className={projects.projects__cards}>{
        List.map((item: cardType) => {
          return <CardPreview key={item.title} description={item.description} image={item.image} link={item.link} title={item.title} />
        })
      }</section>

    </Layout>
    </>
  );
};

export default ProjectsTemplate;
