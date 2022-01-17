import me from "../../styles/Templates/me.module.css";
import Layout from "@/Organisms/Layout";
import Paragraph from "@/Atoms/Paragraph";
import Image from 'next/image';

// Calcula a resolução da tela
let resizeValue: string | null;
const screen: Record<string, Number> = {
  small: 0,
  medium: 550,
  large: 800
};

// calculate size
function resizeHandler(): void {

  // get window width
  const iw = window.innerWidth;

  // determine named size
  let size = null;
  for (let s in screen) {
    if (iw >= screen[s]) size = s;
  }

  resizeValue = size;
}

// observe window resize
if (typeof window !== "undefined") {



  window.addEventListener('resize', resizeHandler);



  // initial call
  resizeHandler();
}




const MeTemplate = () => {

  return (
    <Layout>
      <section className={me.section}>
        <div className={me.me__text}>
          <h2>Sobre mim</h2>
          {
            resizeValue === 'small' ? (
              <div className={me.me__image}>
                <div className={me.me_img}>
                  <Image src="/imagens/lucas.jpeg" width={340} height={350} alt="Lucas Fernando" layout="responsive" />
                </div>
              </div>
            ) : null
          }

          <Paragraph>
            Olá, meu nome é Lucas Fernando e sou desenvolvedor front-end. Apaixonado por programação e tecnologia, procurando projetos interessantes..
          </Paragraph>

          <Paragraph>
            Tecnologias que estou usando:
          </Paragraph>

          {/* Carrocel de imagens de tecnologias */}
          <div className={me.tech}>
            <div className={me.card_tech}>
              <Image src="/imagens/html5.svg" alt="html5" width={100} height={40} layout="responsive" />
            </div>
            <div className={me.card_tech}>
              <Image src="/imagens/js.svg" alt="js" width={100} height={40} layout="responsive" />
            </div>
            <div className={me.card_tech}>
              <Image src="/imagens/css3.svg" alt="css3" width={100} height={40} layout="responsive" />
            </div>
            <div className={me.card_tech}>
              <Image src="/imagens/nextjs.svg" alt="Nextjs" width={100} height={40} layout="responsive" />
            </div>
          </div>

        </div>
        {
          resizeValue !== 'small' ? (
            <div className={me.me__image}>
              <div className={me.me_img}>
                <Image src="/imagens/lucas.jpeg" width={340} height={350} alt="Lucas Fernando" layout="responsive" />
              </div>
            </div>
          ) : null
        }

      </section>
    </Layout>
  );
};

export default MeTemplate;
