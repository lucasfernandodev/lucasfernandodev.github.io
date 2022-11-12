import style from "./style.module.css";
import Paragraph from "src/components/UI/Atoms/Paragraph";
import Title from "@/Atoms/Title";
import { Button } from "@/Atoms/Button";
import Layout from "@/infra/Layout";
import { Codepen, Github, Instagram, Linkedin } from "umbrella-icons-library";
import Image from "next/image";
import Link from "@/infra/Link";

const ContactTemplate = () => {
  
  return (
    <Layout>
      <section className={style.section}>
        <div className={style.presentation} id="mainContent">
          <Title>Vamos conversar sobre o seu projeto?</Title>
          <Paragraph>
            Quer entrar em contato ou falar sobre um projeto? Sinta-se à vontade
            para entrar em contato comigo através do e-mail{" "}
            <Link href="mailto:lucasfernando.dev@gmail.com">
              lucasfernando.dev@gmail.com
            </Link>
            .
          </Paragraph>

          <div className={style.groupButtons}>
            <Button.Root
              float
              size="2xl"
              theme="outline"
              appearance="dark"
              asChild
            >
              <Link passHref href="https://github.com/lucasfernandodev">
                <Button.Icon>
                  <Github />
                </Button.Icon>
              </Link>
            </Button.Root>

            <Button.Root float size="2xl" theme="outline" appearance="dark" asChild>
              <Link passHref href="https://www.linkedin.com/in/frontlucasfernandodev/">
                <Button.Icon>
                  <Linkedin />
                </Button.Icon>
              </Link>
            </Button.Root>

            <Button.Root float size="2xl" theme="outline" appearance="dark" asChild>
              <Link passHref href="https://www.instagram.com/lucasfernando.dev/">
                <Button.Icon>
                  <Instagram />
                </Button.Icon>
              </Link>
            </Button.Root>

            <Button.Root float size="2xl" theme="outline" appearance="dark" asChild>
              <Link passHref href="https://codepen.io/lucasfernandodev">
                <Button.Icon>
                  <Codepen />
                </Button.Icon>
              </Link>
            </Button.Root>
          </div>
        </div>

        <div className={style.contactImage}>
          <Image
            width={311}
            height={400}
            src="/imagens/message.svg"
            alt="Ilustração mensagem"
          />
        </div>
      </section>
    </Layout>
  );
};

export default ContactTemplate;
