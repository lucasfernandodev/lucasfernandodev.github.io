import { NextPage } from "next";
import ProjectsTemplate from "../components/Templates/Projects";
import Head from "@/Utils/meta";
const Projects: NextPage = () => {
  return (
    <>
      <Head title="Projetos | Lucas Fernando - Portfolio simples contendo um pouco da meu trabalho e da minha historia." />
      <ProjectsTemplate />
    </>
  );
};

export default Projects;
