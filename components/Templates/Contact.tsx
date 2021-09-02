import contact from "../../styles/Templates/contact.module.css";

import Layout from "@/Organisms/Layout";
import Link from "@/Utils/Link";
import Icon from "@/Utils/Icon";
import Paragraph from "@/Atoms/Paragraph";
const ContactTemplate = () => {
  return (
    <Layout>
      <section className={contact.toSend}>
        <div className={contact.list}>
          <h2>Vamos conversar sobre o seu projeto?</h2>
          <Paragraph>
            Me mande um email ou me contate pelas redes sociais e vamos fazer
            algo juntos.
          </Paragraph>

          <Link href="/" className={contact.icon}>
            lucasfernando.dev@gmail.com
            <Icon icon="arrowRight" />
          </Link>
        </div>
        <div className={contact.projects}>
          <p>
            <ul>
              <li>
                <Link href="/">
                  <Icon icon="github" /> | <span>Github</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Icon icon="linkedin" /> | <span>LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Icon icon="instagram" /> | <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Icon icon="codepen" /> | <span>CodePen</span>
                </Link>
              </li>
            </ul>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default ContactTemplate;
