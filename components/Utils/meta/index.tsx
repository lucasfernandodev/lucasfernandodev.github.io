import NextHead from "next/head";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
type HeadProps = {
  title: string;
};

const Head: React.FC<HeadProps> = ({ title }) => {

  const router = useRouter();
  const path = router.asPath !== "/" ? router.asPath : null;

  
  const description = "Olá, meu nome é Lucas Fernando e sou desenvolvedor front-end, e esse é meu portfolio.";

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`https://lucasfernandodev.com.br/`}
        openGraph={{
          type: "website",
          url: `https://lucasfernandodev.com.br/${path !== null ? path : ""}`,
          title: title,
          description: description,
          images: [
            {
              url: `https://lucasfernandodev.com.br/SEO/og_home.png`,
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
          content="desenvolvedor, frontend, front-end, HTML, CSS, JavaScript,Reacjs,typescript, Lucas Fernando, Portfolio, dev front-end, dev lucas fernando, lucasfernando dev"
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Lucas Fernando" />
        <meta name="google-site-verification" content="zKJh2tua7iegbZmW4zkKlSlSVoU5QGH0mOMp6H9NYQ8" />
      </NextHead>
    </>
  );
};

export default Head;
