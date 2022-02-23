interface cardType {
    link: string;
    image: string;
    title: string;
    description: string;
}

const List: Array<cardType> = [
    {
        title: "E-commerce product page",
        image: "/websites/sneakears.netlify.app_.png",
        link: "https://sneakears.netlify.app/",
        description: "Uma Pagina de carrinho de um site de e-commerce.",
    },
    {
        title: 'Base Apparel',
        image: '/websites/baseApparel.png',
        link: 'https://lucasfernandodev.github.io/frontendmentor/challenges/base-apparel/',
        description: "Uma pagina para cadastrar e-mails e receber atualizações.",
    },
    {
        title: 'Huddle',
        image: '/websites/huddle.png',
        link: 'https://lucasfernandodev.github.io/frontendmentor/challenges/huddle-single-introductory-section/',
        description: "Esse é um site desenvolvido para o desafio do front-end mentor.",
    },
    {
        title: 'Card com um FAQ accordion',
        image: '/websites/faq.png',
        link: 'https://lucasfernandodev.github.io/frontendmentor/challenges/faq-accordion-card/',
        description: "Um FAQ simples desenvolvido para o desafio do Frontend Mentor.",
    },
    {
        title: 'Pagina de cadastro',
        image: '/websites/learn.png',
        link: 'https://lucasfernandodev.github.io/frontendmentor/challenges/intro-component-with-signup-form-master/',
        description: "Uma pagina para se cadastrar em um serviço",
    },
];

export default List;