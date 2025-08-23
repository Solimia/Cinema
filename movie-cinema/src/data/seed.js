export const seedMovies = [
{
id: 'mov_dune2',
title: 'Dune: Part Two',
year: 2024,
rating: 8.6,
genres: ['Sci-Fi','Adventure'],
poster: 'https://image.tmdb.org/t/p/w500',
synopsis: 'Пол Атрідії об’єднується з фременами, щоб помститися змовникам, які знищили його дім.',
trailer: 'https://www.youtube.com/embed/U2Qp5pL3ovA',
cast: ['Timothée Chalamet','Zendaya','Rebecca Ferguson']
},
{
id: 'mov_insideout2',
title: 'Inside Out 2',
year: 2024,
rating: 7.9,
genres: ['Animation','Family'],
poster: 'https://image.tmdb.org/t/p/w500/8tNX8s3j1O0eqilOQkuroRLyOZA.jpg',
synopsis: 'Райлі підліток: у голові з’являються нові емоції й виклики.',
trailer: 'https://www.youtube.com/embed/LEjhY15eCx0',
cast: ['Amy Poehler','Maya Hawke','Kensington Tallman']
},
{
id: 'mov_oppenheimer',
title: 'Oppenheimer',
year: 2023,
rating: 8.4,
genres: ['Biography','Drama'],
poster: 'https://m.media-amazon.com/images/M/MV5BNDJmNTc1ZjEt.jpg',
synopsis: 'Історія створення атомної бомби та моральна дилема Оппенгеймера.',
trailer: 'https://www.youtube.com/embed/uYPbbksJxIg',
cast: ['Cillian Murphy','Emily Blunt','Matt Damon']
},
]


export const seedSessions = [
{ id:'ses1', movieId:'mov_dune2', date:'2025-08-23', time:'17:30', hall:'IMAX', lang:'UA', price: 250 },
{ id:'ses2', movieId:'mov_dune2', date:'2025-08-24', time:'20:10', hall:'IMAX', lang:'UA', price: 270 },
{ id:'ses3', movieId:'mov_insideout2', date:'2025-08-23', time:'15:00', hall:'2D', lang:'UA', price: 180 },
{ id:'ses4', movieId:'mov_oppenheimer', date:'2025-08-24', time:'18:40', hall:'Dolby', lang:'UA', price: 220 },
]
