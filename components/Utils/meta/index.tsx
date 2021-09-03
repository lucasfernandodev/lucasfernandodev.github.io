import NextHead from "next/head";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
type HeadProps = {
  title: string;
};

const Head: React.FC<HeadProps> = ({ title }) => {

  const router = useRouter();
  const path = router.asPath !== "/" ? router.asPath : null;

  
  const description = "Meu portfolio pessoal um Agrupador de links para meus projetos.";

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`https://lucasfernandodev.vercel.app`}
        openGraph={{
          type: "website",
          url: `https://lucasfernandodev.vercel.app${path !== null ? path : ""}`,
          title: title,
          description: description,
          images: [
            {
              url: `https://lucasfernandodev.vercel.app/SEO/og_home.png`,
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
  );
};

export default Head;
