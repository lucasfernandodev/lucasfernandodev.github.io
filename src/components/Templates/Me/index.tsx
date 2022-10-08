import style from './style.module.css';
import Paragraph from 'src/components/UI/Atoms/Paragraph';
import Image from 'next/image';
import Title from '@/components/UI/Atoms/Title';
import Avatar from '@/components/UI/Atoms/Avatar';
import Layout from '@/infra/Layout';

const MeTemplate = () => {
  return (
    <>
      <a href='#mainContent' className='skip-to-content-link' tabIndex={1}>
        Pular direto para conteúdo
      </a>
      <Layout>
        <section className={style.section}>
          <div className={style.content} id='mainContent'>
            <Title>Sobre mim</Title>
            <Paragraph>
              Olá meu nome é Lucas Fernando, tenho 21 anos, eu moro em
              Goiás e sou apaixonado por tecnologia.
            </Paragraph>

            <Paragraph>
              Sou desenvolvedor Front-end, apaixonado por tecnologia, 
              sempre explorando novas tecnologias, buscando aprender e evoluir. 
            </Paragraph>
            <Paragraph>Tecnologias que estou usando</Paragraph>

            <div className={style.tech} tabIndex={0}>
              <div className={style.card_tech} tabIndex={1} aria-label='HTML5'>
                <Image
                  src='/imagens/html5.svg'
                  alt='html5'
                  width={100}
                  height={40}
                  layout='responsive'
                />
              </div>
              <div
                className={style.card_tech}
                tabIndex={2}
                aria-label='Javascript'
              >
                <Image
                  src='/imagens/js.svg'
                  alt='Javascript'
                  width={100}
                  height={40}
                  layout='responsive'
                />
              </div>
              <div className={style.card_tech} tabIndex={3} aria-label='CSS3'>
                <Image
                  src='/imagens/css3.svg'
                  alt='css3'
                  width={100}
                  height={40}
                  layout='responsive'
                />
              </div>
              <div className={style.card_tech} tabIndex={4} aria-label='Nextjs'>
                <Image
                  src='/imagens/nextjs.svg'
                  alt='Nextjs'
                  width={100}
                  height={40}
                  layout='responsive'
                />
              </div>
            </div>
           
          </div>
          <div className={style.image}>
              <Avatar />
            </div>
        </section>
      </Layout>
    </>
  );
};

export default MeTemplate;
