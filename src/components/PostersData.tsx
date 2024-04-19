interface Poster {
  date: string
  link?: string
  image: string
  disabled?: boolean
}

export const postersData: Poster[] = [
  {
    image: 'radio_chacha',
    date: '20.april',
    link: '',
    disabled: true,
  },
  {
    image: 'kangi_kambulat',
    date: '10.may',
    link: 'https://widget.afisha.yandex.ru/w/sessions/ticketsteam-5811@16778617?clientKey=058374e2-3eea-4d37-ae2f-3e21651b7c56&regionId=213',
  },
  {
    image: 'temnee',
    date: '24.may',
    link: 'https://widget.afisha.yandex.ru/w/sessions/NjM5MDh8NDkzMzA3fDYzODQzNjV8MTcxNjU3MDAwMDAwMA==?clientKey=058374e2-3eea-4d37-ae2f-3e21651b7c56',
  },
  {
    image: 'quok',
    date: '31.may',
    link: 'https://widget.afisha.yandex.ru/w/sessions/ticketsteam-5811@16698171?clientKey=058374e2-3eea-4d37-ae2f-3e21651b7c56&regionId=213',
  },
  {
    image: 'slezi',
    date: '01.june',
    link: 'http://slezyfest.ru/',
  },
  {
    image: 'boogie',
    date: '13.october',
    link: 'https://afisha.yandex.ru/moscow/concert/boogie-party-vol-3',
  },
]
