const coursesData = [
    {
        "id": 1,
        title: 'Demoday',
        category: 'empreendedorismo',
        instructor: 'Itaipu Parquetec',
        level: 'Iniciante',
        duration: '1h33m',
        date: '2025',
        favorite: false,
        poster: 'assets/images/thumb.png',
        description: 'Apresentações e projetos do Demoday Itaipu Parquetec, reunindo ideias, soluções e iniciativas empreendedoras.',
        "lessons": [
        {
            "title": "01. Reforma Tributária - Primeiro Lugar",
            "duration": "5:42",
            "thumb": "https://img.youtube.com/vi/nGvskxhp6ZI/hqdefault.jpg",
            "video": "https://www.youtube.com/embed/nGvskxhp6ZI?rel=0&modestbranding=1"
        },
        {
            "title": "02. Banca - Reforma Tributária",
            "duration": "4:38",
            "thumb": "https://img.youtube.com/vi/fnhPwiNlgZA/hqdefault.jpg",
            "video": "https://www.youtube.com/embed/fnhPwiNlgZA?rel=0&modestbranding=1&autoplay=1"
        },
        {
            "title": "03. PrevMaint - Segundo Lugar",
            "duration": "4:22",
            "thumb": "https://img.youtube.com/vi/k0KQ-CbdCEs/hqdefault.jpg",
            "video": "https://www.youtube.com/embed/k0KQ-CbdCEs?rel=0&modestbranding=1&autoplay=1"
        },
        {
            "title": "04. Banca - PrevMaint",
            "duration": "4:19",
            "thumb": "https://img.youtube.com/vi/D7le4McmQkg/hqdefault.jpg",
            "video": "https://www.youtube.com/embed/D7le4McmQkg?rel=0&modestbranding=1&autoplay=1"
        },
        {
            "title": "05. Data Science Para Advogados - Terceiro Lugar",
            "duration": "5:17",
            "thumb": "https://img.youtube.com/vi/uheKo9oPHpE/hqdefault.jpg",
            "video": "https://www.youtube.com/embed/uheKo9oPHpE?rel=0&modestbranding=1&autoplay=1"
        },
        {
            "title": "06. Banca - Data Science Para Advogados",
            "duration": "6:18",
            "thumb": "https://img.youtube.com/vi/pkc3jAyQRSg/hqdefault.jpg",
            "video": "https://www.youtube.com/embed/pkc3jAyQRSg?rel=0&modestbranding=1&autoplay=1"
        },
        {
            "title": "07. Coleta Domiciliar de Perfurocortantes",
            "duration": "4:06",
            "thumb": "https://img.youtube.com/vi/5GgoLF5rAJ4/hqdefault.jpg",
            "video": "https://www.youtube.com/embed/5GgoLF5rAJ4?rel=0&modestbranding=1&autoplay=1"
        },
        {
            "title": "08. Banca parte 1 - Coleta Domiciliar de Perfurocortantes",
            "duration": "1:57",
            "thumb": "https://img.youtube.com/vi/Z4CZH95PQEU/hqdefault.jpg",
            "video": "https://www.youtube.com/embed/Z4CZH95PQEU?rel=0&modestbranding=1&autoplay=1"
        },
        {
            "title": "09. Banca parte 2 - Coleta Domiciliar de Perfurocortantes",
            "duration": "2:36",
            "thumb": "https://img.youtube.com/vi/au5kQBe5f58/hqdefault.jpg",
            "video": "https://www.youtube.com/embed/au5kQBe5f58?rel=0&modestbranding=1&autoplay=1"
        },
        {
            "title": "10. KAFKA",
            "duration": "5:07",
            "thumb": "https://img.youtube.com/vi/5rNaEka7Q9Q/hqdefault.jpg",
            "video": "https://www.youtube.com/embed/5rNaEka7Q9Q?rel=0&modestbranding=1&autoplay=1"
        },
        {
            "title": "11. Banca - KAFKA",
            "duration": "5:45",
            "thumb": "https://img.youtube.com/vi/ylnV-2Kuk00/hqdefault.jpg",
            "video": "https://www.youtube.com/embed/ylnV-2Kuk00?rel=0&modestbranding=1&autoplay=1"
        },
        {
            "title": "12. PROMOPING",
            "duration": "5:15",
            "thumb": "https://img.youtube.com/vi/ZwfHGQ6tLEY/hqdefault.jpg",
            "video": "https://www.youtube.com/embed/ZwfHGQ6tLEY?rel=0&modestbranding=1&autoplay=1"
        },
        {
            "title": "13. Banca - PROMOPING",
            "duration": "4:58",
            "thumb": "https://img.youtube.com/vi/spe1LokYdMg/hqdefault.jpg",
            "video": "https://www.youtube.com/embed/spe1LokYdMg?rel=0&modestbranding=1&autoplay=1"
        },
        {
            "title": "14. EcoEquilíbrio Acústico",
            "duration": "8:04",
            "thumb": "https://img.youtube.com/vi/FEpW6SqOAro/hqdefault.jpg",
            "video": "https://www.youtube.com/embed/FEpW6SqOAro?rel=0&modestbranding=1&autoplay=1"
        },
        {
            "title": "15. Banca - EcoEquilíbrio Acústico",
            "duration": "1:08",
            "thumb": "https://img.youtube.com/vi/vznxPUGtS0I/hqdefault.jpg",
            "video": "https://www.youtube.com/embed/vznxPUGtS0I?rel=0&modestbranding=1&autoplay=1"
        },
        {
            "title": "16. PayON",
            "duration": "2:46",
            "thumb": "https://img.youtube.com/vi/9JTDJG0yQBI/hqdefault.jpg",
            "video": "https://www.youtube.com/embed/9JTDJG0yQBI?rel=0&modestbranding=1&autoplay=1"
        },
        {
            "title": "17. Banca - PayON",
            "duration": "8:23",
            "thumb": "https://img.youtube.com/vi/caPj8teZLgw/hqdefault.jpg",
            "video": "https://www.youtube.com/embed/caPj8teZLgw?rel=0&modestbranding=1&autoplay=1"
        },
        {
            "title": "18. BRIDGE",
            "duration": "5:19",
            "thumb": "https://img.youtube.com/vi/Y7cC5Vph_Ng/hqdefault.jpg",
            "video": "https://www.youtube.com/embed/Y7cC5Vph_Ng?rel=0&modestbranding=1&autoplay=1"
        },
        {
            "title": "19. Banca - BRIDGE",
            "duration": "7:55",
            "thumb": "https://img.youtube.com/vi/eqm1uIinEqg/hqdefault.jpg",
            "video": "https://www.youtube.com/embed/eqm1uIinEqg?rel=0&modestbranding=1&autoplay=1"
        }
    ]
    }
]
