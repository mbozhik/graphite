export type Poster = {
  image: string
  date: string
  link?: string
  disabled?: boolean
}

export const postersData: Poster[] = [
  {
    image: 'cold_carti',
    date: '06.december',
    link: 'https://ticketscloud.com/v1/widgets/common?token=eyJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSIsInR5cCI6IkpXVCJ9.eyJwIjoiNjA4MmExMWIzN2E5MWU3YTQ1YzE1MGQwIn0.cjdDHinwC-6T5hF3tuUu3BZGdPU6uSX29YkCSG2BrnA&event=66aa73f2c7380d0a1b8e993d&s=1&r=1&org=6082a11b37a91e7a45c150d0&city=524901&category=592841f8515e35002dead938&tags=592841f8515e35002dead94a%2CРэп%2FХип-хоп&lang=ru',
  },
  {
    image: 'booker',
    date: '14.december',
    link: 'https://vk.com/app52565134',
  },
]
