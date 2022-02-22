interface cardType {
    link: string;
    image: string;
    title: string;
    techs?: Array<string>;
}

const List: Array<cardType> = [
    {
        title: "E-commerce product page",
        image: "/websites/sneakears.netlify.app_.png",
        link: "https://sneakears.netlify.app/",
        techs: ["HTML5", "css3", "Javascript", "Reactjs", "Typescript"],
    },
    {
        title: 'Base Apparel',
        image: '/websites/baseApparel.png',
        link: 'https://lucasfernandodev.github.io/frontendmentor/challenges/base-apparel/',
        techs: ['html5', 'css3']
    },
    {
        title: 'Huddle',
        image: '/websites/huddle.png',
        link: 'https://lucasfernandodev.github.io/frontendmentor/challenges/huddle-single-introductory-section/',
        techs: ['html5', 'css3']
    },
    {
        title: 'Card de faq acordion',
        image: '/websites/faq.png',
        link: 'https://lucasfernandodev.github.io/frontendmentor/challenges/faq-accordion-card/',
        techs: ['html5', 'css3']
    },
    {
        title: 'Card de Login',
        image: '/websites/learn.png',
        link: 'https://lucasfernandodev.github.io/frontendmentor/challenges/intro-component-with-signup-form-master/',
        techs: ['html5', 'css3', 'Javascript']
    },
];

export default List;