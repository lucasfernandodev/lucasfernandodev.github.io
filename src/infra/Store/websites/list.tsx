import { IProjectsList } from "src/types/ProjectsList";

const challengesRepositoryPreview =
  "https://lucasfernandodev.github.io/frontendmentor/challenges";
const challengesRepository =
  "https://github.com/lucasfernandodev/frontendmentor/tree/main/challenges";

export const projectsList: Array<IProjectsList> = [
  {
    title: "Portfolio",
    image: "/websites/lucasfernandodev-screenshot.png",
    link: "https://lucasfernandodev.com.br/",
    repo: "https://github.com/lucasfernandodev/portfolio",
    description:
      "Meu portfolio é um projeto especial que é desenvolvido usando next.js, assim como meu blog, sempre estou atualizando ou melhorando o design",
  },
  {
    title: "E-commerce product page",
    image: "/websites/sneakears.netlify.app_.png",
    link: "https://sneakears.netlify.app/",
    repo: `${challengesRepository}/ecommerce-product-page-main`,
    description:
      "Neste projeto eu desenvolvi um site responsivo com galeria de imagem de produtos e função de adicionar ou remover itens do carrinho.",
  },
  {
    title: "Country Search",
    image: "/websites/country-search.png",
    link: "https://frontendmentor-lucasfernandodev.vercel.app/",
    repo: `${challengesRepository}/countries-search`,
    description:
      "Essa é uma aplicação de consulta de informações sobre países, como capital, moeda corrente ou suas linguagens usando API.",
  },
  {
    title: "Shortly - Encurtador de url",
    image: "/websites/shortly-challenge-screenshot.png",
    link: `${challengesRepositoryPreview}/url-shortening-api-master`,
    repo: `${challengesRepository}/url-shortening-api-master`,
    description:
      "Shortly é um desafio front-end mentor desenvolvido usando somente HTML, CSS e Javascript. O site permite que o usuário encurte urls de forma fácil.",
  },
  {
    title: "Space Travel",
    image: "/websites/space-travel-challenge-screenshot.png",
    repo: `https://github.com/lucasfernandodev/spacetravel`,
    link: `https://lucasfernandodev.github.io/spacetravel/`,
    description:
      "Esse é um site de turismo espacial, ele foi desenvolvido usando vite com react.js e typescript.",
  },
];
