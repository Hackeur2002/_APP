export const Accordeon = [
    {
        id: 1, 
        title: "Qu'est-ce-que l'ADPME ?", 
        description: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,dropdowns, modals, navbars, and more."
    },
    {
        id: 2,
        title: "Qu'est-ce-que l'ADPME ?",
        description: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,dropdowns, modals, navbars, and more."
    },
    {
        id: 3,
        title: "Qu'est-ce-que l'ADPME ?",
        description: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,dropdowns, modals, navbars, and more."
    },
    {
        id: 4,
        title: "Qu'est-ce-que l'ADPME ?",
        description: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,dropdowns, modals, navbars, and more."
    }
]

export const FAQLIST = [
    {
        id: 1,
        title: "Généralités sur l'ADPME et sa Mission",
        questions: [
            {
                id: 1,
                question: "Qu'est-ce que l'ADPME et quelle est sa mission principale ?",
                reponse: "L'Agence de Développement des Petites et Moyennes Entreprises (ADPME) est une entité créée par le gouvernement du Bénin pour soutenir le développement des micro, petites et moyennes entreprises. Sa mission principale est de fournir un accompagnement intégré, des orientations et des financements pour renforcer la compétitivité et la croissance des entreprises.",
                id_faq: 1
            },
            {
                id: 2,
                question: "Comment l'ADPME contribue-t-elle au développement des entreprises au Bénin ?",
                reponse: "L'ADPME contribue au développement des entreprises en offrant des services variés tels que l'orientation, le soutien financier, et la promotion de la compétitivité sur les marchés locaux et internationaux.",
                id_faq: 1
            }
        ]
    },
    {
        id: 2,
        title: "Services de l'ADPME",
        questions: [
            {
                id: 3,
                question: "Quels sont les services offerts par l'ADPME aux entrepreneurs ?",
                reponse: "L'ADPME offre une gamme de services, notamment l'accueil, l'information, et l'orientation des entreprises vers les dispositifs d'appui existants, l'agrément au régime des MPME, le soutien à la compétitivité locale et internationale, la mise à niveau des entreprises, et bien d'autres.",
                id_faq: 3
            },
            {
                id: 4,
                question: " Quelles sont les démarches pour obtenir un financement via l'ADPME ?",
                reponse: "L'ADPME facilite l'accès des MPME aux financements. Les détails sur les procédures, les critères d'éligibilité et les programmes de financement seront publiés sur notre site web.",
                id_faq: 3
            }
        ]
    },
]

export const TypeEvent = [
    {
        id:1,
        title:"Type 1"
    },
    {
        id: 2,
        title: "Type 2"
    },
    {
        id: 3,
        title: "Type 3"
    },
]

export const Produit = [
    {
        id:1,
        title:"Prod 1",
        description:"Ceci est la description du prod 1"
    },
    {
        id: 2,
        title: "Prod 2",
        description: "Ceci est la description du prod 2"
    },
    {
        id: 3,
        title: "Prod 3",
        description: "Ceci est la description du prod 3"
    },
]

export const EvenemntsLists = [
    {
        id:1,
        libelle:"THEME",
        type:[
            {
                id:1,
                typeE:"Assurances, fiscalité & comptabilité",
                contenu: [
                    {
                        id: 1,
                        titre: "LE FINANCEMENT CITOYEN: FOCUS SUR QUELQUES ORGANISMES PRIVÉS QUI FINANCENT L'ÉCONOMIE SOCIALE",
                        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                        date: "NOV-14",
                        idtype:1,
                        image:'https://cdn.pixabay.com/photo/2017/02/16/12/12/business-woman-2071342_640.jpg'
                    },
                    {
                        id: 2,
                        titre: "LE FINANCEMENT CITOYEN: FOCUS SUR QUELQUES ORGANISMES PRIVÉS QUI FINANCENT L'ÉCONOMIE SOCIALE",
                        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                        date: "NOV-14",
                        idtype:1,
                        image:'https://cdn.pixabay.com/photo/2018/04/28/12/39/new-year-3357190_640.jpg'
                    }
                ]
            },
            {
                id: 2,
                typeE: "Avant de démarrer une entreprise",
                contenu:[
                    {
                        id: 1,
                        titre: "LE FINANCEMENT CITOYEN: FOCUS SUR QUELQUES ORGANISMES PRIVÉS QUI FINANCENT L'ÉCONOMIE SOCIALE",
                        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                        date: "NOV-14",
                        idtype:2,
                        image:'https://cdn.pixabay.com/photo/2016/05/25/07/56/start-1414148_640.jpg'
                    }
                ]
            },
            {
                id: 3,
                typeE: "Démarrer une entreprise & formalités",
                contenu: [
                    {
                        id: 2,
                        titre: "LE FINANCEMENT CITOYEN: FOCUS SUR QUELQUES ORGANISMES PRIVÉS QUI FINANCENT L'ÉCONOMIE SOCIALE",
                        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                        date: "NOV-14",
                        idtype:3,
                        image:'https://cdn.pixabay.com/photo/2018/02/03/09/51/bulletin-board-3127287_640.jpg'
                    },
                    {
                        id: 3,
                        titre: "LE FINANCEMENT CITOYEN: FOCUS SUR QUELQUES ORGANISMES PRIVÉS QUI FINANCENT L'ÉCONOMIE SOCIALE",
                        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                        date: "NOV-14",
                        idtype:3,
                        image:'https://cdn.pixabay.com/photo/2023/04/06/10/22/earth-day-7903523_640.png'
                    }
                ]

            },
        ],
        
    },
    {
        id: 2,
        libelle: "TYPE D'EVENEMENT",
        type: [
            {
                id: 4,
                typeE: "Atelier-séminaire",
                contenu: [
                    {
                        id: 1,
                        titre: "LE FINANCEMENT CITOYEN: FOCUS SUR QUELQUES ORGANISMES PRIVÉS QUI FINANCENT L'ÉCONOMIE SOCIALE",
                        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                        date: "NOV-14",
                        idtype: 4,
                        image:'https://pixabay.com/fr/photos/concert-confettis-c%C3%A9l%C3%A9bration-2527495/'
                    },
                    {
                        id: 2,
                        titre: "LE FINANCEMENT CITOYEN: FOCUS SUR QUELQUES ORGANISMES PRIVÉS QUI FINANCENT L'ÉCONOMIE SOCIALE",
                        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                        date: "NOV-14",
                        idtype: 4,
                        image:'https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_640.jpg'
                    }
                ]
            },
            {
                id: 5,
                typeE: "Conférence",
                contenu: [
                    {
                        id: 1,
                        titre: "LE FINANCEMENT CITOYEN: FOCUS SUR QUELQUES ORGANISMES PRIVÉS QUI FINANCENT L'ÉCONOMIE SOCIALE",
                        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                        date: "NOV-14",
                        idtype: 5,
                        image:''
                    }
                ]
            },
            {
                id: 6,
                typeE: "Focus Day",
                contenu: [
                    {
                        id: 2,
                        titre: "LE FINANCEMENT CITOYEN: FOCUS SUR QUELQUES ORGANISMES PRIVÉS QUI FINANCENT L'ÉCONOMIE SOCIALE",
                        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                        date: "NOV-14",
                        idtype: 6,
                        image:'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_640.jpg'
                    },
                    {
                        id: 3,
                        titre: "LE FINANCEMENT CITOYEN: FOCUS SUR QUELQUES ORGANISMES PRIVÉS QUI FINANCENT L'ÉCONOMIE SOCIALE",
                        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                        date: "NOV-14",
                        idtype: 6,
                        image:'https://cdn.pixabay.com/photo/2016/03/27/18/53/drinks-1283608_640.jpg'
                    }
                ]

            },
        ],

    }
]

export const ActualitesLists = [
    {
        id: 1,
        titre: "Noteworthy technology acquisitions 2021",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        date: "NOV-14"
    },
    {
        id: 2,
        titre: "Noteworthy technology acquisitions 2021",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        date: "NOV-14"
    },
    {
        id: 3,
        titre: "Noteworthy technology acquisitions 2021",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        date: "NOV-14"
    },
    {
        id: 4,
        titre: "Noteworthy technology acquisitions 2021",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        date: "NOV-14"
    },
    {
        id: 5,
        titre: "Noteworthy technology acquisitions 2021",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        date: "NOV-14"
    }
]


export const Organisation = [
    {
        id:1,
        nom:"Organisation 1",
        description:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
        id: 2,
        nom: "Organisation 2",
        description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
        id: 3,
        nom: "Organisation 3",
        description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
        id: 4,
        nom: "Organisation 4",
        description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
        id: 5,
        nom: "Organisation 5",
        description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
        id: 6,
        nom: "Organisation 6",
        description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
        id: 7,
        nom: "Organisation 7",
        description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
        id: 8,
        nom: "Organisation 8",
        description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
]

export const ProjetsListe = [
    {
        id:1,
        title:"PROJET 1",
        description:"CECI EST LE PROJET 1",
        statut:"t",
        date:"17/12/2023",
        image:'https://1819.brussels/sites/default/files/styles/event_logo_mobile/public/2023-10/WOBIZZ.jpg?itok=uGJvEoNl'
    },
    {
        id: 2,
        title: "PROJET 2",
        description: "CECI EST LE PROJET 2",
        statut: "bt",
        date:"17/12/2023",
        image:'https://1819.brussels/sites/default/files/styles/event_logo/public/eighteennineteen/logos/port_de_bruxelles.jpeg?itok=Ho2A9Jdd'
    },
    {
        id: 3,
        title: "PROJET 3",
        description: "CECI EST LE PROJET 3",
        statut: "o",
        date:"17/12/2023",
        image:'https://1819.brussels/sites/default/files/styles/event_logo_mobile/public/eighteennineteen/logos/VillageFinance_logo_FR.jpg?itok=ldAV4TL7'
    },
    {
        id: 4,
        title: "PROJET 4",
        description: "CECI EST LE PROJET 4",
        statut: "bt",
        date:"17/12/2023",
        image:'https://1819.brussels/sites/default/files/styles/event_logo_mobile/public/eighteennineteen/logos/port_de_bruxelles.jpeg?itok=DFi8XRj2'
    },
]

export const CommuniqueListe = [
    {
        id: 1,
        description: "CECI EST LE COMMUNIQUE 1",
        date:"17/18/2023"
    },
    {
        id: 2,
        description: "CECI EST LE COMMUNIQUE 2",
        date:"17/18/2023"

    },
    {
        id: 3,
        description: "CECI EST LE COMMUNIQUE 3",
        date:"17/18/2023"
    },
    {
        id: 4,
        description: "CECI EST LE COMMUNIQUE 4",
        date:"17/18/2023"

    },
]

export const EService = [
    {
        id: 1,
        title: "Service 1"
    },
    {
        id: 2,
        title: "Service 2"
    },
    {
        id: 3,
        title: "Service 3"
    },
    {
        id: 4,
        title: "Service 4"
    },
    {
        id: 5,
        title: "Service 5"
    },
]