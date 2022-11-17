import { NextPage } from "next";
import {SkillsTemplate} from "@/components/UI/Templates/skills";
import Head from "@/infra/meta";
const Projects: NextPage = () => {
  return (
    <>
      <Head title="Projetos | Lucas Fernando · Desenvolvedor frontend" />
      <SkillsTemplate />
    </>
  );
};

export default Projects;
