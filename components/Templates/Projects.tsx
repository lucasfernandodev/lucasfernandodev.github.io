import projects from "../../styles/Templates/projects.module.css";
import Image from "next/image";
import Layout from "@/Organisms/Layout";
import Icon from "@/Utils/Icon";
import Link from "@/Utils/Link";
import Paragraph from "@/components/UI/Atoms/Paragraph";
import CardPreview from "../CardPreview/cardPreview";

interface cardType {
  link: string;
  image: string;
  title: string;
}

const websites : Array<cardType> = [
  {
    title : 'Base Apparel',
    image: '/websites/baseApparel.png',
    link: '/',
  },
  {
    title : 'Huddle',
    image: '/websites/huddle.png',
    link: '/',
  },
  {
    title : 'Faq - Personal Website Portfolio',
    image: '/websites/faq.png',
    link: '/',
  },
  {
    title : 'Learn',
    image: '/websites/learn.png',
    link: '/',
  },
]

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

          <div className={projects.card}>
            <div className={projects.card__icon}>
              <Icon icon="rocket" width="34px" height="34px" />
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
    {
      websites.map((item: cardType) => {
        
        return <CardPreview Key={item.title} image={item.image} link={item.link} title={item.title}/>
      })
    }
      </div>
    </Layout>
  );
};

export default ProjectsTemplate;
