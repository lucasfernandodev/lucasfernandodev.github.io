import { NextPage } from "next";
import HomeTemplate from "../components/Templates/Home";
import Head from "@/Utils/meta";
const Home: NextPage = () => {
  return (
    <>
      <Head title="Lucas Fernando - Portfolio simples contendo um pouco da meu trabalho e da minha historia." />
      <HomeTemplate />
    </>
  );
};

export default Home;
