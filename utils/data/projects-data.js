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
        name: 'SGE - Sistema de Cadastro de Eventos',
        description: 'O sistema de Cadastro de Eventos é uma aplicação desenvolvida em Java utilizando o framework Spring Boot. Ele permite gerenciar eventos e seus convidados de forma eficiente.',
        tools: ['Java', 'Spring Boot', 'PostgreSQL', 'Hibernate', 'HTML', 'CSS'],
        code: 'https://github.com/devguilara/sistemaCadastroEventos/tree/main/CadastroEventos',
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
        name: 'Guilherme Lara Portfólio',
        description: "Portfólio criado para ter presença online mostrando conhecimentos adquiridos durante toda a jornada na área de tecnologia",
        tools: ['React.js', 'TypeScript', 'HTML', 'CSS', "Tailwind","Next.js"],
        role: 'Desenvolvimento Full Stack',
        code: 'https://helpingbaby.com.br/',
        demo: 'https://helpingbaby.com.br/',
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