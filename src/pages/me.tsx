import { NextPage } from "next";
import MeTemplate from "src/components/Templates/me";
import Head from "@/infra/meta";
const Me: NextPage = () => {
  return (
    <>
      <Head title="Sobre mim | Lucas Fernando · Devenvolvedor frontend" />
      <MeTemplate />
    </>
  );
};

export default Me;
