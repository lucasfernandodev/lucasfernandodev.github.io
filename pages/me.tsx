import { NextPage } from "next";
import MeTemplate from "@/components/Templates/me";
import Head from "@/Utils/meta";
const Me: NextPage = () => {
  return (
    <>
      <Head title="Sobre mim | Lucas Fernando - Portfolio simples contendo um pouco da meu trabalho e da minha historia." />
      <MeTemplate />
    </>
  );
};

export default Me;
