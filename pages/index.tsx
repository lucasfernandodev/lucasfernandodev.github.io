import { NextPage } from "next";
import HomeTemplate from "../components/Templates/Home";
import Head from "@/Utils/meta";
const Home: NextPage = () => {
  return (
    <>
      <Head title="Lucas Fernando · Devenvolvedor frontend" />
      <HomeTemplate />
    </>
  );
};

export default Home;
