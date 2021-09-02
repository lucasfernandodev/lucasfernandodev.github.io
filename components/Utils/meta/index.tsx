import NextHead from "next/head";
import {useRouter} from 'next/router';
type HeadProps = {
  title: string;
};

const Head: React.FC<HeadProps> = ({ title }) => {
  const router = useRouter();
  console.log(router);
  return (
    <NextHead>
      <title>{title}</title>
      <meta
        name="description"
        content="Meu portfolio pessoal, contendo alguns dos meus projetos um puco de conhecimento sombre mim."
      ></meta>
      <meta
        name="keywords"
        content="HTML, CSS, JavaScript, Lucas Fernando, Portfolio"
      ></meta>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content="Lucas Fernando" />
      <link rel="shortcut icon" href="SEO/favicon.svg" type="image/png" />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Meu portfolio pessoal, contendo alguns dos meus projetos um puco de conhecimento sombre mim."
      />
      <meta
        property="og:image"
        content="SEO/og_home.png"
      />
      <meta property="og:site_name" content={title}/>

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content="Meu portfolio pessoal, contendo alguns dos meus projetos um puco de conhecimento sombre mim." />
      <meta name="SEO/og_home.png" />
    </NextHead>
  );
};

export default Head;
