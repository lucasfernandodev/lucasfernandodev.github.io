import projects from "../../styles/Templates/projects.module.css";
import Layout from "@/components/UI/Organisms/Layout";
import Paragraph from "@/components/UI/Atoms/Paragraph";
import CardPreview from "@/Molecules/CardPreview/cardPreview";
import CardFeatured from "@/Molecules/CardFeatured/cardFeatured";
import List from '@/infra/Store/websites/list';

interface cardType {
  link: string;
  image: string;
  title: string;
}


const ProjectsTemplate = () => {

  return (
    <Layout>
      <div className={projects.projects}>
        <div className={projects.text}>
          <h2>O que eu faço?</h2>
          <Paragraph>
            Eu trabalho com o desenvolvimento front-end de websites, portais, lojas virtuais e
            blogs.
          </Paragraph>
          <Paragraph>
            Desenvolvendo sites
            fiéis aos designs, integrando qualidade, velocidade e experiencia.
          </Paragraph>
        </div>

        <div className={projects.static}>

          <CardFeatured
            icon="rocket"
            title="Velocidade"
            content="Sempre procuro garantir um site fluido e otimizado utilizando as principais praticas de CEO."
          />

          <CardFeatured
            icon="quality"
            title="Qualidade"
            content="Foco sempre na qualidade do código utilizando sempre as melhore praticas do mercado."
          />

          <CardFeatured
            icon="frontendMentor"
            title="Experiência"
            content="A experiência do usuário é sempre importante, procuro garantir sites fiéis ao design, acessibilidade e responsividade. Para garantir uma melhor experiência do usuário."
          />

        </div>
      </div>


      <div className={projects.projects__cards}>{
        List.map((item: cardType, index) => {
          return <CardPreview key={index} image={item.image} link={item.link} title={item.title} />
        })
      }</div>

    </Layout>
  );
};

export default ProjectsTemplate;
