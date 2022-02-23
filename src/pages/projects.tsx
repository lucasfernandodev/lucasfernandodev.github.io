import { NextPage } from "next";
import ProjectsTemplate from "../components/Templates/Projects";
import Head from "@/infra/meta";
const Projects: NextPage = () => {
  return (
    <>
      <Head title="Projetos | Lucas Fernando · Desenvolvedor frontend" />
      <ProjectsTemplate />
    </>
  );
};

export default Projects;
