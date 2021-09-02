import NextHead from "next/head";

type HeadProps = {
  title: string;
};
const Head: React.FC<HeadProps> = ({title}) => {
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
    </NextHead>
  );
};

export default Head;
