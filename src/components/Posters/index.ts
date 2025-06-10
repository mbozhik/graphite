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
    image: 'mostick',
    date: '06-07.june',
    link: 'https://mostick.club',
    area: 'ХОЛЛ',
  },
  {
    image: 'jollyear',
    date: '07.june',
    link: 'https://moscow.qtickets.events/168026-jollyear-place-street-summer-day-open-air-scally-milano-polka-baby-cute?clckid=628a6037',
    area: 'ДВОР',
  },
  {
    image: 'uppercuts',
    date: '05.july',
    link: 'https://uppercuts.ticketscloud.org',
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
