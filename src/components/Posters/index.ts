export {Slider} from './Slider'

export type Poster = {
  image: string
  date: string
  link?: string
  area?: 'ДВОР' | 'ХОЛЛ'
  disabled?: boolean
}

export const POSTERS_DATA: Poster[] = [
  {
    image: 'ishome',
    date: '04.july',
    link: 'https://5c0943bf8c077f000c23a4c6.ticketscloud.org/e/682370b2aeb3f7a0c7574b2e?partner_id=5c0943bf8c077f000c23a4c6',
    area: 'ДВОР',
  },
  {
    image: 'uppercuts',
    date: '05.july',
    link: 'https://uppercuts.ticketscloud.org',
    area: 'ДВОР',
  },
  {
    image: 'aukcion',
    date: '06.july',
    link: 'https://ticketscloud.com/v1/widgets/common?token=eyJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSIsInR5cCI6IkpXVCJ9.eyJwIjoiNWMwOTQzYmY4YzA3N2YwMDBjMjNhNGM2In0.AWICIFpHPLaW2nW8ElsEwNA5Q0JBaUCFuK6g_EEINpE&event=67f38eb6be28ab8cf994e90e&s=1&r=1&org=5c0943bf8c077f000c23a4c6&city=524901&category=592841f8515e35002dead938&tags=592841f8515e35002dead93b%2CРок&lang=ru',
    area: 'ДВОР',
  },
  {
    image: 'blaash',
    date: '19.july',
    link: 'https://blaash-wav.ru',
    area: 'ДВОР',
  },
  {
    image: 'russianstylefest',
    date: '26.july',
    link: 'https://russianstyle.fun',
    area: 'ДВОР',
  },
]
