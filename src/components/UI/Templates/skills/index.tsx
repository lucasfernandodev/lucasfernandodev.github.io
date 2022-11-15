import style from "./style.module.css";
import Paragraph from "src/components/UI/Atoms/Paragraph";

import Title from "@/Atoms/Title";
import Layout from "@/infra/Layout";
import Icon from "@/components/Utils/Icon";
import Image from "next/image";
import { Button } from "../../Atoms/Button";
import { ArrowDown, Linkedin } from "umbrella-icons-library";

import { ProjectTemplate } from "../Projects";
import { useEffect, useRef, useState } from "react";
import Link from "@/infra/Link";

export const SkillsTemplate = () => {

  const [isVisibility, setIsVisible] = useState(true)

  const refObserver = useRef<HTMLHeadingElement>(null)

  const callbackFunction: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(!entry.isIntersecting)
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    if(refObserver.current) observer.observe(refObserver.current);

    return () => {
      if(refObserver.current) observer.unobserve(refObserver.current);
    }
  }, [refObserver, options])


  return (
    <Layout>
      <section className={style.skills}>
        <div className={style.text} id="mainContent">
          <Title className={style.title}>Habilidades</Title>
          <div className={style.content}>
            <Paragraph>
              Trabalho como desenvolvedor front-end oferecendo soluções
              completas para sua aplicação.
            </Paragraph>
            <Paragraph>
              Desenvolvo sites responsivos, sempre utilizando as melhores práticas.
              Meu foco é no desenvolvimento, utilizando HTML, CSS, JS ou
              framework com React.js ou Next.js.
            </Paragraph>
            <Button.Root size="lg" asChild>
              <Link target="_blank" href="https://www.linkedin.com/in/frontlucasfernandodev/">
              <Button.Icon>
                <Linkedin />
              </Button.Icon>
              Ver mais detalhes
              </Link>
            </Button.Root>
          </div>
        </div>

        <div className={style.illustration}>
          <Image
            width={570}
            height={300}
            src="/imagens/Ability - Image.svg"
            alt="Ability image"
          />
        </div>

        <div className={style.skillsMoreContent} 
         style={{display: isVisibility ? 'flex': 'none'}}
        >
          <ArrowDown />
        </div>
      </section>

      <ProjectTemplate innerRef={refObserver}/>
    </Layout>
  );
};
