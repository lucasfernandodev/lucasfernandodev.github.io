import { NextPage } from "next";
import ContactTemplate from "../components/Templates/Contact";
import Head from "@/infra/meta";
const Contact: NextPage = () => {
  return (
    <>
      <Head title="Contato | Lucas Fernando · Devenvolvedor frontend" />
      <ContactTemplate />
    </>
  );
};

export default Contact;