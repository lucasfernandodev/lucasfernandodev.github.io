import NextHead from "next/head";
import { NextSeo } from "next-seo";
type HeadProps = {
  title: string;
};

const Head: React.FC<HeadProps> = ({ title }) => {
  const description =
    "Meu portfolio pessoal, contendo alguns dos meus projetos um puco de conhecimento sombre mim.";

  return (
    /* <title>
        Lucas Fernando - Portfolio simples contendo um pouco da meu trabalho e
        da minha historia.
      </title>
      <meta
        name="title"
        content="Lucas Fernando - Portfolio simples contendo um pouco da meu trabalho e da minha historia."
      />

      <meta
        name="description"
        content="Meu portfolio pessoal, contendo alguns dos meus projetos um puco de conhecimento sombre mim."
      /> */
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          images: [
            {
              url: `${process.env.VERCEL_URL}/SEO/og_home.png`,
              width: 800,
              height: 600,
              alt: "Lucas Fernando - Portfolio",
            },
          ],
        }}
      />
      <NextHead>
      <link rel="shortcut icon" href="SEO/favicon.svg" type="image/png" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Lucas Fernando, Portfolio"
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Lucas Fernando" />
      </NextHead>
    </>

    /* <meta
        name="keywords"
        content="HTML, CSS, JavaScript, Lucas Fernando, Portfolio"
      ></meta>
      /*
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content="Lucas Fernando" />
  

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Meu portfolio pessoal, contendo alguns dos meus projetos um puco de conhecimento sombre mim."
      />
      <meta property="og:image" content="" key="ogimage" />

      <meta property="og:site_name" content={title} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="Meu portfolio pessoal, contendo alguns dos meus projetos um puco de conhecimento sombre mim."
      /> */
  );
};

export default Head;
