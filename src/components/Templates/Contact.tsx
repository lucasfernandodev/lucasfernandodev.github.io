import contact from "../../styles/Templates/contact.module.css";
import Layout from "src/components/UI/Organisms/Layout";
import Link from "src/components/Utils/Link";
import Icon from "src/components/Utils/Icon";
import Paragraph from "src/components/UI/Atoms/Paragraph";
import Title from "../UI/Atoms/Title";


const ContactTemplate = () => {
  return (
    <Layout>
      <section className={contact.section}>
        <div className={contact.apresentation}>
          <Title>Vamos conversar sobre o seu projeto?</Title>
          <Paragraph>
            Me mande um email ou me contate pelas redes sociais e vamos fazer
            algo juntos.
          </Paragraph>

          <Link href="mailto:lucasfernando.dev@gmail.com" className={contact.icon}>
            lucasfernando.dev@gmail.com
            <Icon icon="arrowRight" />
          </Link>
        </div>
        <div className={contact.projects}>
          <div>
            <ul>
              <li>
                <Link href="https://github.com/lucasfernandodev">
                  <Icon icon="github" /> | <span>Github</span>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/frontlucasfernandodev/">
                  <Icon icon="linkedin" /> | <span>LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/lucasfernandodev/">
                  <Icon icon="instagram" /> | <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link href="https://codepen.io/lucasfernandodev">
                  <Icon icon="codepen" /> | <span>CodePen</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactTemplate;
