import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination, Autoplay} from 'swiper/modules'

export default function App() {
  const postersData = [
    {
      id: 1,
      link: 'https://widget.afisha.yandex.ru/w/sessions/NjM5MDh8NDY5MDE1fDU3NzMzOTR8MTcwOTkxNzIwMDAwMA==?clientKey=058374e2-3eea-4d37-ae2f-3e21651b7c56',
      imageUrl: '/posters/1.jpg',
    },
    {
      id: 2,
      link: 'https://moscow.qtickets.events/95719-komsomolsk-grafit-9-marta',
      imageUrl: '/posters/2.jpg',
    },
    {
      id: 3,
      link: 'https://widget.afisha.yandex.ru/w/sessions/NjM5MDh8NDcxOTAwfDU3NzMzOTR8MTcxMzYzMjQwMDAwMA==?clientKey=058374e2-3eea-4d37-ae2f-3e21651b7c56',
      imageUrl: '/posters/3.jpg',
    },
  ]

  return (
    <>
      <Swiper
        className="my-10 flex gap-5 h-[60vh] xl:h-[65vh] sm:h-fit"
        spaceBetween={30}
        autoplay={{delay: 1500}}
        pagination={{clickable: true}}
        grabCursor={true}
        loop={true}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {postersData.map((poster) => (
          <SwiperSlide key={poster.id}>
            <a href={poster.link} target="_blank" title={'link' + poster.id}>
              <img className="object-contain duration-500 hover:scale-[102%] s-full" src={poster.imageUrl} alt="" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
