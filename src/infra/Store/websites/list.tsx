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
        description: "Uma Pagina de um site de e-commerce.",
    },
    {
        title: 'Base Apparel',
        image: '/websites/baseApparel.png',
        link: 'https://lucasfernandodev.github.io/frontendmentor/challenges/base-apparel/',
        description: "Esse é um site desenvolvido para o desafio do front-end mentor.",
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
        description: "Um FAQ desenvolvido com HTML e CSS a partir do design do Front-end Mentor.",
    },
    {
        title: 'Pagina de cadastro de e-mail',
        image: '/websites/learn.png',
        link: 'https://lucasfernandodev.github.io/frontendmentor/challenges/intro-component-with-signup-form-master/',
        description: "Uma pagina de cadastrar e-mails",
    },
];

export default List;