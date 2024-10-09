export type Poster = {
  image: string
  date: string
  link?: string
  disabled?: boolean
}

export const postersData: Poster[] = [
  {
    image: 'boogie_party',
    date: '12.october',
    link: 'https://boogieparty3.ticketscloud.org',
  },
  {
    image: 'skuf_party',
    date: '13.october',
    link: 'https://moscow.qtickets.events/125664-skufpati-v-moskve',
  },
  {
    image: 'auktion',
    date: '18.october',
    link: 'https://widget.afisha.yandex.ru/w/sessions/NjM5MDh8NTU2Mzc1fDY0NzAyNDh8MTcyOTI3MDgwMDAwMA==?clientKey=058374e2-3eea-4d37-ae2f-3e21651b7c56',
  },
  {
    image: 'grima',
    date: '25.october',
    link: 'https://madstreambooking.com/grima/',
  },
  {
    image: 'kirpichi',
    date: '01.november',
    link: 'https://widget.afisha.yandex.ru/w/sessions/ticketsteam-5811@22170169?clientKey=058374e2-3eea-4d37-ae2f-3e21651b7c56&regionId=213',
  },
  {
    image: 'lomonosov',
    date: '02.november',
    link: 'https://redkassa.ru/events/bilety_na_concert_plan_lomonosova_grafit',
  },
  {
    image: 'soltwine',
    date: '15.november',
    link: 'https://ticketscloud.com/v1/widgets/common?token=eyJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSIsInR5cCI6IkpXVCJ9.eyJwIjoiNjM3MzllZmE3NGU2Mzc0ZDY5MzYxZTkwIn0.-8jfU8beUezlq8wiAH14gQUd-XrhGGX-Ph12q8RAo_k&event=66d5befd6ccd50d88f62bd73&s=1&clckid=051c3bb5&r=1&org=63739efa74e6374d69361e90&city=524901&category=592841f8515e35002dead938&tags=592841f8515e35002dead939%2CПоп%2C592841f8515e35002dead93a%2CИнди%2C592841f8515e35002dead93b%2CРок%2C592841f8515e35002dead948%2CАльтернатива&clckid=485a6099&lang=ru',
  },
  {
    image: 'cold_carti',
    date: '06.december',
    link: 'https://ticketscloud.com/v1/widgets/common?token=eyJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSIsInR5cCI6IkpXVCJ9.eyJwIjoiNjA4MmExMWIzN2E5MWU3YTQ1YzE1MGQwIn0.cjdDHinwC-6T5hF3tuUu3BZGdPU6uSX29YkCSG2BrnA&event=66aa73f2c7380d0a1b8e993d&s=1&r=1&org=6082a11b37a91e7a45c150d0&city=524901&category=592841f8515e35002dead938&tags=592841f8515e35002dead94a%2CРэп%2FХип-хоп&lang=ru',
  },
]
