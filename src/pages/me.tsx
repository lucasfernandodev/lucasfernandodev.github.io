import { NextPage } from "next";
import Head from "@/infra/meta";
import MeTemplate from "@/components/Templates/Me";
const Me: NextPage = () => {
  return (
    <>
      <Head title="Sobre mim | Lucas Fernando · Desenvolvedor frontend" />
      <MeTemplate />
    </>
  );
};

export default Me;
