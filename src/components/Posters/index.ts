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
    image: 'bastard',
    date: '08.august',
    link: 'https://madstreambooking.com/theodorbastard/?utm_source=yandex&utm_medium=cpc&utm_campaign=S_TB_SU_25_MSK&utm_content=Москва&utm_term=теодор%20бастард%20билеты&yclid=5872524981981413375',
    area: 'ДВОР',
  },
  {
    image: 'dragni',
    date: '10.august',
    link: 'https://dragnitour.ru',
    area: 'ДВОР',
  },
  // {
  //   image: 'minutnahistoria',
  //   date: '09.august',
  //   link: 'https://vk.com/minutehistorfest?ref=group_menu&w=app5732604_-230146808',
  //   area: 'ВСЯ ТЕРРИТОРИЯ',
  // },
]
