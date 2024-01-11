import {useEffect, useState} from 'react'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination, Autoplay} from 'swiper/modules'

const postersData = [
  {
    link: 'https://widget.afisha.yandex.ru/w/sessions/NjM5MDh8NDY5MDE1fDU3NzMzOTR8MTcwOTkxNzIwMDAwMA==?clientKey=058374e2-3eea-4d37-ae2f-3e21651b7c56',
    imageUrl: '/posters/1.jpg',
  },
  {
    link: 'https://moscow.qtickets.events/95719-komsomolsk-grafit-9-marta',
    imageUrl: '/posters/2.jpg',
  },
  {
    link: 'https://widget.afisha.yandex.ru/w/sessions/NjM5MDh8NDcxOTIyfDU3NzMzOTR8MTcxMDUyMjAwMDAwMA==?clientKey=058374e2-3eea-4d37-ae2f-3e21651b7c56',
    imageUrl: '/posters/3.jpg',
  },
  {
    link: 'https://widget.afisha.yandex.ru/w/sessions/NjM5MDh8NDcxOTAwfDU3NzMzOTR8MTcxMzYzMjQwMDAwMA==?clientKey=058374e2-3eea-4d37-ae2f-3e21651b7c56',
    imageUrl: '/posters/4.jpg',
  },
]

export default function PostersSlider() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="my-10 overflow-hidden">
      {/* prettier-ignore */}
      <Swiper
        className="h-[60vh] xl:h-[65vh] sm:h-fit"
        spaceBetween={30}
        autoplay={{delay: 2500}}
        loop={isMobile ? true : false}
        pagination={{clickable: true}}
        grabCursor={true}
        modules={[Pagination, Autoplay]}
        slidesPerView={isMobile ? 1 : 3}
      >
        {postersData.map((poster, index) => (
          <SwiperSlide key={index}>
            <a href={poster.link} target="_blank" title={'link' + index}>
              <img className="object-contain duration-500 hover:scale-[102%] s-full" src={poster.imageUrl} alt="" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
