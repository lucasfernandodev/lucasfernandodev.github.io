import contact from './style.module.css';
import Link from '@/infra/Link';
import Icon from 'src/components/Utils/Icon';
import Paragraph from 'src/components/UI/Atoms/Paragraph';
import Title from '../../UI/Atoms/Title';
import {Button} from '../../UI/Atoms/Button';
import Layout from '@/infra/Layout';

const ContactTemplate = () => {
  return (
    <Layout>
      <section className={contact.section}>
        <div className={contact.presentation} id='mainContent'>
          <Title>Vamos conversar sobre o seu projeto?</Title>
          <Paragraph>
            Me mande um email ou me contate pelas redes sociais e vamos fazer
            algo juntos.
          </Paragraph>

          <Link
            href='mailto:lucasfernando.dev@gmail.com'
            className={contact.icon}
          >
            lucasfernando.dev@gmail.com
            <Icon icon='arrowRight' />
          </Link>
        </div>
        <div className={contact.projects}>
           {/* Icons sociais */}
          </div>
      </section>
    </Layout>
  );
};

export default ContactTemplate;
