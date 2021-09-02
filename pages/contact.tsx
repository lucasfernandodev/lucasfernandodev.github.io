import { NextPage } from "next";
import ContactTemplate from "../components/Templates/Contact";
import Head from "@/Utils/meta";
const Contact: NextPage = () => {
  return (
    <>
      <Head title="Contato | Lucas Fernando - Portfolio simples contendo um pouco da meu trabalho e da minha historia." />
      <ContactTemplate />
    </>
  );
};

export default Contact;
