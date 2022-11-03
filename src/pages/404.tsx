import Error404Template from "@/components/UI/Templates/Error404";
import Head from "@/infra/meta";
import { NextPage } from "next";


const Error404: NextPage = () => {
  return (
    <>
      <Head title="Erro 404 | Lucas Fernando · Desenvolvedor frontend" />
      <Error404Template />
    </>
  )
};

export default Error404;