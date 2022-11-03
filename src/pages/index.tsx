import { NextPage } from "next";
import Head from "@/infra/meta";
import HomeTemplate from "@/components/UI/Templates/Home";
const Home: NextPage = () => {
  return (
    <>
      
      <Head title="Lucas Fernando · Desenvolvedor front-end" />
      <HomeTemplate/>
    </>
  );
};

export default Home;
