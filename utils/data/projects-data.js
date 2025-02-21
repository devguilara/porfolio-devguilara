import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Biblioteka',
        description: "Biblioteka REST API é uma aplicação desenvolvida em Java utilizando Spring Boot. Ela oferece uma solução eficiente para gerenciar bibliotecas, permitindo o cadastro de livros, usuários e emprésti1mos, além de fornecer informações sobre a disponibilidade de livros",
        tools: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Maven'],
        role: 'Desenvolvimento Backend',
        code: 'https://github.com/devguilara/biblioteka-restAPI',
        demo: 'https://github.com/devguilara/biblioteka-restAPI',
        image: crefin,
    },
    {
        id: 2,
        name: 'Agrotools',
        description: 'Projeto de reestruturação do site da Agrotools, utilizando PHP, JS, HTML e CSS, juntamente com Wordpress. Refizemos toda a estrutura e layout do site, inovando, otimizando e buscando melhores resultados em performance e nas buscas do Google.',
        tools: ['PHP', 'WordPress', 'JavaScript'],
        role: 'Desenvolvimento Full Stack',
        code: 'privado',
        demo: 'https://agrotools.com.br/',
        image: travel,
    },
    {
        id: 3,
        name: 'Helping Baby',
        description: "Sistema WEB criado para listas de presentes on-line para aniversários, casamentos, chás-revelação e outros tipos de eventos",
        tools: ['PHP', 'Vue.Js', 'HTML', 'CSS', "MySql"],
        role: 'Desenvolvimento Full Stack',
        code: 'privado',
        demo: 'https://helpingbaby.com.br/',
        image: ayla,

    },
    {
        id: 4,
        name: 'Obadias Móveis Planejados',
        description: "Projeto de criação do site da Obadias, utilizando PHP, JS, HTML e CSS, juntamente com Wordpress. Criamos toda a estrutura e layout do site, inovando, otimizando e buscando melhores resultados em performance e nas buscas do Google.",
        tools: ['PHP', 'WordPress', 'JavaScript'],
        role: 'Desenvolvimento FullStack',
        code: 'privado',
        demo: 'https://www.obadiasplanejados.com.br/',
        image: crefin,

    },
    {
        id: 5,
        name: 'VipPlanos',
        description: "Neste projeto, criei duas páginas para o site Vip, inicialmente a página de Seguros e Benefícios. /insurance-and-benefits/ E a página do Plano de Saúde Premium plans/premium-health-plan/ Usando HTML, CSS e JS, fiz toda a parte visual do projeto e diagramação",
        tools: ['PHP', 'WordPress', 'JavaScript'],
        role: 'Desenvolvimento FullStack',
        code: 'privado',
        demo: 'https://vipplanos.com.br/',
        image: crefin,

    },
];

