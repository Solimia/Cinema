export const seedMovies = [
    {
        id: 'mov_dune2',
        title: 'Dune: Part Two',
        year: 2024,
        rating: 8.6,
        genres: ['Sci-Fi', 'Adventure'],
        poster: 'https://image.tmdb.org/t/p/w500',
        synopsis: 'Пол Атрідії об’єднується з фременами, щоб помститися змовникам, які знищили його дім.',
        trailer: 'https://www.youtube.com/embed/U2Qp5pL3ovA',
        cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson']
    },

]


export const seedSessions = [
    { id: 'ses1', movieId: 'mov_dune2', date: '2025-08-23', time: '17:30', hall: 'IMAX', lang: 'UA', price: 250 },
]
