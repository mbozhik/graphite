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
    image: 'minutnahistoria',
    date: '09.august',
    link: 'https://vk.com/minutehistorfest?ref=group_menu&w=app5732604_-230146808',
    area: 'ВСЯ ТЕРРИТОРИЯ',
  },
]
