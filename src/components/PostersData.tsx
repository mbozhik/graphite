export type Poster = {
  image: string
  date: string
  link?: string
  disabled?: boolean
}

export const postersData: Poster[] = [
  {
    image: 'mafanya',
    date: '26.january',
    link: 'https://vk.com/app52691227',
  },
  {
    image: 'pokrov',
    date: '21.march',
    link: 'https://ticketscloud.com/v1/widgets/common?token=eyJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSIsInR5cCI6IkpXVCJ9.eyJwIjoiNjY2N2U4ZGY5YzhiNWRlNzUxNzIyNGRiIn0.sYld6aMxXr6DhcqMDvVVooQjeLMGz-hw_AOzBFeF7w0&event=6765618e9f5b054c77567c80&s=1&r=1&org=6667e8df9c8b5de7517224db&city=524901&category=592841f8515e35002dead938&tags=592841f8515e35002dead939%2CПоп&lang=ru',
  },
  {
    image: 'srub',
    date: '22.march',
    link: 'https://moscow.qtickets.events/144610-srub-22-marta',
  },
]
