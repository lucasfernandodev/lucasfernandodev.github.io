import { NextPage } from "next";
import MeTemplate from "@/components/Templates/me";
import Head from "@/Utils/meta";
const Me: NextPage = () => {
  return (
    <>
      <Head title="Sobre mim | Lucas Fernando · Devenvolvedor frontend" />
      <MeTemplate />
    </>
  );
};

export default Me;
