export {Slider} from './Slider'

export type Poster = {
  image: string
  date: string
  link?: string
  area?: 'ДВОР' | 'ХОЛЛ' | 'ВСЯ ТЕРРИТОРИЯ'
  disabled?: boolean
}

export const POSTERS_DATA: Poster[] = [
  {
    image: 'linda',
    date: '27.september',
    link: 'https://linda.ticketscloud.org',
    area: 'ХОЛЛ',
  },
  {
    image: 'motorama',
    date: '5.october',
    link: 'https://vk.cc/cP9Wv9',
    area: 'ХОЛЛ',
  },
  {
    image: 'inkognito',
    date: '17.october',
    link: 'https://redkassa.ru/events/bilety_na_concert_inkognito_grafit',
    area: 'ХОЛЛ',
  },
]
