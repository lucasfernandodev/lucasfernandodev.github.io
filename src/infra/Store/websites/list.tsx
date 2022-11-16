export interface projectsListItemType {
    image: string,
    title: string,
    description: string,
    link: string,
    repo: string,
}

export const projectsList: Array<projectsListItemType> = [
    {
        title: "E-commerce product page",
        image: "/websites/sneakears.netlify.app_.png",
        link: "https://sneakears.netlify.app/",
        repo: "https://github.com/lucasfernandodev/frontendmentor/tree/main/challenges/ecommerce-product-page-main",
        description: "Neste projeto eu desenvolvi um site responsivo com galeria de imagem de produtos e função de adicionar ou remover itens do carrinho.",
    },
    {
        title: 'Base Apparel',
        image: '/websites/baseApparel.png',
        link: 'https://lucasfernandodev.github.io/frontendmentor/challenges/base-apparel/',
        repo: "https://github.com/lucasfernandodev/frontendmentor/tree/main/challenges/base-apparel",
        description: "Uma pagina para cadastrar e-mails e receber atualizações.",
    },
    {
        title: 'Country Search',
        image: '/websites/country-search.png',
        link: 'https://frontendmentor-lucasfernandodev.vercel.app/',
        repo: "https://github.com/lucasfernandodev/frontendmentor/tree/main/challenges/countries-search",
        description: "Essa é uma aplicação de consulta de informações sobre países, como capital, moeda corrente ou suas linguagens usando API.",
    },
    {
        title: 'Card com um FAQ accordion',
        image: '/websites/faq.png',
        link: 'https://lucasfernandodev.github.io/frontendmentor/challenges/faq-accordion-card/',
        repo: "https://github.com/lucasfernandodev/frontendmentor/tree/main/challenges/faq-accordion-card",
        description: "Um FAQ simples desenvolvido para o desafio do Frontend Mentor.",
    },
    {
        title: 'Pagina de cadastro',
        image: '/websites/learn.png',
        repo: "https://lucasfernandodev.github.io/frontendmentor/challenges/intro-component-with-signup-form-master/",
        link: 'https://github.com/lucasfernandodev/frontendmentor/tree/main/challenges/intro-component-with-signup-form-master',
        description: "Uma pagina para se cadastrar em um serviço",
    },
];