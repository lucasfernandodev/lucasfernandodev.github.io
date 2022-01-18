interface cardType {
    link: string;
    image: string;
    title: string;
}

const List: Array<cardType> = [
    {
        title: 'Base Apparel',
        image: '/websites/baseApparel.png',
        link: 'https://lucasfernandodev.github.io/frontendmentor/challenges/base-apparel/',
    },
    {
        title: 'Huddle',
        image: '/websites/huddle.png',
        link: 'https://lucasfernandodev.github.io/frontendmentor/challenges/huddle-single-introductory-section/',
    },
    {
        title: 'Card de faq acordion',
        image: '/websites/faq.png',
        link: 'https://lucasfernandodev.github.io/frontendmentor/challenges/faq-accordion-card/',
    },
    {
        title: 'Card de Login',
        image: '/websites/learn.png',
        link: 'https://lucasfernandodev.github.io/frontendmentor/challenges/intro-component-with-signup-form-master/',
    },
];

export default List;