import NextHead from "next/head";
import { NextSeo } from "next-seo";
import router, { useRouter } from "next/router";
type HeadProps = {
  title: string;
};

const Head: React.FC<HeadProps> = ({ title }) => {
  const router = useRouter();
  const path = router.asPath !== "/" ? router.asPath : null;
  console.log(router);
  const description =
    "Meu portfolio pessoal, contendo alguns dos meus projetos um puco de conhecimento sombre mim.";

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`https://${process.env.VERCEL_URL}`}
        openGraph={{
          type: "website",
          url: `https://${process.env.VERCEL_URL}${path !== null ? path : ""}`,
          title: title,
          description: description,
          images: [
            {
              url: `https://${process.env.VERCEL_URL}/SEO/og_home.png`,
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
