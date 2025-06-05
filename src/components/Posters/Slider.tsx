import {isMobile} from '@bozzhik/is-mobile'

import {cn} from '../../utils/cn'
import {useEffect, useState} from 'react'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import {type Poster, POSTERS_DATA} from '.'

export function Slider() {
  const [sortedPosters, setSortedPosters] = useState<Poster[]>([])

  useEffect(() => {
    const sortedData = [...POSTERS_DATA].sort((a, b) => {
      const [dayA, monthA] = a.date.split('.')
      const [dayB, monthB] = b.date.split('.')
      const dateA = new Date(Date.parse(`2024-${monthA}-${dayA}`))
      const dateB = new Date(Date.parse(`2024-${monthB}-${dayB}`))
      return dateA.getTime() - dateB.getTime()
    })

    setSortedPosters(sortedData)
  }, [])

  return (
    <div className="my-10 overflow-hidden">
      <Swiper
        className="h-[60vh] xl:h-[65vh] sm:h-fit"
        spaceBetween={30}
        autoplay={{delay: 2000}}
        speed={700}
        loop={isMobile ? true : false} // based on @bozzhik/is-mobile
        pagination={{clickable: true}}
        grabCursor={true}
        modules={[Pagination, Autoplay]}
        slidesPerView={isMobile ? 1 : 3} // based on @bozzhik/is-mobile
      >
        {sortedPosters.map((poster, index) => (
          <SwiperSlide key={index}>
            <a href={poster.link} className={cn('block overflow-hidden', poster.disabled ? 'pointer-events-none cursor-none' : '')} target="_blank" title={poster.image}>
              <img className="object-contain duration-500 ease-in-out hover:scale-[101.5%] s-full" src={`/posters/${poster.image}.jpg`} loading={index < 4 ? 'eager' : 'lazy'} alt={poster.image} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
