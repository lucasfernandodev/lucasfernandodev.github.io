import style from './style.module.css';
import Link from '@/infra/Link';
import Icon from 'src/components/Utils/Icon';
import Paragraph from 'src/components/UI/Atoms/Paragraph';
import Title from '@/Atoms/Title';
import {Button} from '@/Atoms/Button';
import Layout from '@/infra/Layout';
import {Codepen, Github, Instagram, Linkedin } from 'umbrella-icons-library';
import Image from 'next/image';

const ContactTemplate = () => {
  return (
    <Layout>
      <section className={style.section}>
        <div className={style.presentation} id='mainContent'>
          <Title>Vamos conversar sobre o seu projeto?</Title>
          <Paragraph>
            Me mande um email ou me contate pelas redes sociais e vamos fazer
            algo juntos.
          </Paragraph>

          <div className={style.groupButtons}>
            <Button.Root float size="2xl" theme='outline' appearance='dark'>
              <Button.Icon>
                <Github />
              </Button.Icon>
            </Button.Root>

            <Button.Root float size="2xl" theme='outline' appearance='dark'>
              <Button.Icon>
                <Linkedin />
              </Button.Icon>
            </Button.Root>

            <Button.Root float size="2xl" theme='outline' appearance='dark'>
              <Button.Icon>
                <Instagram />
              </Button.Icon>
            </Button.Root>

            <Button.Root float size="2xl" theme='outline' appearance='dark'>
              <Button.Icon>
                <Codepen />
              </Button.Icon>
            </Button.Root>
          </div>
        </div>
        
        <div className={style.contactImage}>
          <Image width={311} height={400} src="/imagens/message.svg" alt="Ilustração mensagem" />
        </div>
      </section>
    </Layout>
  );
};

export default ContactTemplate;
