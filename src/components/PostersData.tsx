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
    date: '5.october',
    link: 'https://afisha.yandex.ru/moscow/concert/boogie-party-vol-3',
  },
  {
    image: 'temnee',
    date: '11.october',
    link: 'https://widget.afisha.yandex.ru/w/sessions/ticketsteam-5811@16529383?clientKey=058374e2-3eea-4d37-ae2f-3e21651b7c56&regionId=213',
  },
]
