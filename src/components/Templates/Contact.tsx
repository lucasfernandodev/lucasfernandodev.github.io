import contact from "../../styles/Templates/contact.module.css";
import Layout from "src/components/UI/Organisms/Layout";
import Link from "src/components/Utils/Link";
import Icon from "src/components/Utils/Icon";
import Paragraph from "src/components/UI/Atoms/Paragraph";
import Title from "../UI/Atoms/Title";
import Button from "../UI/Atoms/Button";


const ContactTemplate = () => {
  return (
   <>
    <a href="#mainContent" className="skip-to-content-link" tabIndex={1}>Pular direto para conteúdo</a>
    <Layout>
      <section className={contact.section}>
        <div className={contact.apresentation} id="mainContent">
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
                <Button type="All" to="https://github.com/lucasfernandodev">
                  <Icon icon="github" /> | <span>Github</span>
                </Button>
              </li>
              <li>
                <Button type="All" to="https://www.linkedin.com/in/frontlucasfernandodev/">
                  <Icon icon="linkedin" /> | <span>LinkedIn</span>
                </Button>
              </li>
              <li>
                <Button type="All" to="https://www.instagram.com/lucasfernandodev/">
                  <Icon icon="instagram" /> | <span>Instagram</span>
                </Button>
              </li>
              <li>
                <Button type="All" to="https://codepen.io/lucasfernandodev">
                  <Icon icon="codepen" /> | <span>Code Pen</span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
   </>
  );
};

export default ContactTemplate;
