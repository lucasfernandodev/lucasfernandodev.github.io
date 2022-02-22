import { NextPage } from "next";
import HomeTemplate from "../components/Templates/Home";
import Head from "@/infra/meta";
const Home: NextPage = () => {
  return (
    <>
      
      <Head title="Lucas Fernando · Desenvolvedor front-end" />
      <HomeTemplate/>
    </>
  );
};

export default Home;
