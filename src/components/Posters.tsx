import {useEffect, useState} from 'react'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination, Autoplay} from 'swiper/modules'

import {postersData} from './PostersData'

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
