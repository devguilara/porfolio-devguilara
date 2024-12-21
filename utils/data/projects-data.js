import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Biblioteka',
        description: "Biblioteka REST API é uma aplicação desenvolvida em Java utilizando Spring Boot. Ela oferece uma solução eficiente para gerenciar bibliotecas, permitindo o cadastro de livros, usuários e empréstimos, além de fornecer informações sobre a disponibilidade de livros",
        tools: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Maven'],
        role: 'Desenvolvimento Backend',
        code: 'https://github.com/devguilara/biblioteka-restAPI',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Cadastros em Laravel',
        description: 'Este é um sistema CRUD simples desenvolvido em Laravel para gerenciar informações sobre séries de televisão. Com este sistema, você pode realizar operações básicas de criação, leitura, atualização e exclusão (CRUD) de séries',
        tools: ['PHP', 'Composer', "Laravel", "SQLite3"],
        role: 'Desenvolvimento Full Stack',
        code: 'https://github.com/devguilara/crud-laravel-series',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Spotfy Clone UI',
        description: 'Clone de UI do Spotify para treinar conceitos do front-end',
        tools: ['React', 'Node.js', 'Tailwind', 'HTML', 'CSS'],
        role: 'Desenvolvimento Front-End',
        code: 'https://spotify-tailwind-copy-ui.vercel.app/',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Helping Baby',
        description: "Sistema WEB criado para listas de presentes on-line ",
        tools: ['PHP', 'Vue.Js', 'HTML', 'CSS', "MySql"],
        role: 'Desenvolvimento Full Stack',
        code: 'https://helpingbaby.com.br/',
        demo: 'https://helpingbaby.com.br/',
        image: ayla,

    },
    {
        id: 5,
        name: 'Mural',
        description: "Mural App é um software de rede social criada pelo Clube de Desenvolvimento dos IrmãosDev. Essa iniciativa tem como propósito fornecer uma experiência real de desenvolvimento de software em equipe para jovens programadores. Para participar, preencha o formulário: http://eepurl.com/iYwzu6 ",
        tools: ['PHP', 'Composer', 'React.Js', 'Grafanza K6', 'Laravel', 'Docker'],
        role: 'Desenvolvimento BackEnd',
        code: 'https://github.com/irmaos-dev/mural',
        demo: 'https://github.com/irmaos-dev/mural',
        image: ayla,

    }
];



// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },