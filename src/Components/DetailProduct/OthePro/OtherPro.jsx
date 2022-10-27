import React from 'react'

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import {Link} from 'react-router-dom'

function OtherPro({data,id}) {
  let fil = data?.collects?.filter(e => e?.name != id)
  if(fil?.length == 0){
    return
  }
  return (
    <section className={`flex flex-col justify-center sm:mx-16 mx-[14px] pb-3`}>
      <h3 className="font-bold md:text-[24px] sm:text-[20px] text-[16px] mt-3 mb-3 text-center">Other collections</h3>
        <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="w-full"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        {fil?.map((e) => (
          <SwiperSlide key={e?.id} className="relative mb-4 ">
          <Link to={`/product/${e?.name}`}>
            <div className="card-me relative max-h-[270px] cursor-pointer w-auto hover:shadow-lg rounded-t-lg overflow-hidden transition-all duration-500 ease-in-out">
              <img
                  src={e?.imgUrl}
                  className="w-full h-full rounded-lg"
                  alt=""
                  />
            </div>
          </Link>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default OtherPro