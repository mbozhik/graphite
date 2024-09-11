export type Poster = {
  image: string
  date: string
  link?: string
  disabled?: boolean
}

export const postersData: Poster[] = [
  {
    image: 'sutkin',
    date: '26.september',
    link: 'https://widget.afisha.yandex.ru/w/sessions/NjM5MDh8NTIyNTMwfDY0NzAyNDh8MTcyNzM3MDAwMDAwMA==?clientKey=058374e2-3eea-4d37-ae2f-3e21651b7c56',
  },
  {
    image: 'lomonosov',
    date: '02.november',
    link: 'https://redkassa.ru/events/bilety_na_concert_plan_lomonosova_grafit',
  },
  {
    image: 'kirpichi',
    date: '29.november',
    disabled: true,
  },
]
