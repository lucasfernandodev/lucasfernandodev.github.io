import Title from "../../Atoms/Title";
import style from "./style.module.css";
import { projectsList } from "src/infra/Store/websites/list";
import Link from "@/infra/Link";
import { PanelsGroup } from "../../Organisms/PainelsGroup";
import Paragraph from "../../Atoms/Paragraph";
import { useEffect, useRef } from "react";

export function ProjectTemplate({
  toggle
}: { toggle: (state: boolean) => void }) {

  const refObserver = useRef(null);

  const callbackFunction: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    toggle(!entry.isIntersecting)
  };

  useEffect(() => {
    if (refObserver.current) {
      const options = {
        root: document.documentElement,
        rootMargin: '0px',
        threshold: 1.0
      }

      const observer = new IntersectionObserver(callbackFunction, options);
      console.log(observer);

      observer.observe(refObserver.current);
    }
  }, [])


  return (
    <section className={style.projects}>
      <header className={style.header}>
        <Title asChild={true} >
          <h2 ref={refObserver}>Algumas coisas que Construí</h2>
        </Title>
        <Paragraph className={style.description}>
          Esses são alguns dos meus projetos desenvolvidos recentemente.
        </Paragraph>
      </header>

      <PanelsGroup list={projectsList} />

      <footer className={style.footer}>
        <Title className={style.title}>Vamos conversar?</Title>
        <Paragraph className={style.description}>
          Quer entrar em contato ou falar sobre um projeto? Sinta-se à vontade
          para entrar em contato comigo através do e-mail{" "}
          <Link href="maito:lucasfernando.dev@gmail.com">
            lucasfernando.dev@gmail.com
          </Link>
          .
        </Paragraph>
      </footer>
    </section >
  );
}
