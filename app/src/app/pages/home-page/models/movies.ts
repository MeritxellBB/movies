export interface Movie {
    title: string,
    imgUrl: string,
    gender: string,
    stars: number,
    duration: string
}

export const movies = [
    {
        title: 'Luca',
        imgUrl: '/assets/luca.webp',
        gender: 'Adventures',
        stars: 4,
        duration: '2h 10min'
    },
    {
        title: 'Coco',
        imgUrl: '/assets/coco.webp',
        gender: 'Drama',
        stars: 5,
        duration: '2h 35min'
    },
    {
        title: 'Onward',
        imgUrl: '/assets/onward.webp',
        gender: 'Comedy',
        stars: 3,
        duration: '1h 40min'
    },
    {
        title: 'Soul',
        imgUrl: '/assets/soul.jpg',
        gender: 'Drama',
        stars: 4,
        duration: '1h 50min'
    }
]

