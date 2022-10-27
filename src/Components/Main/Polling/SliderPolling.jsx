import React from 'react'
import { PollingData } from "../../../Data";
import { HiCheckCircle } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

import {Link} from 'react-router-dom';

function Slider() {
  return (
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
        {PollingData.map((e) => {
          return(
          <SwiperSlide key={e.id} className="relative mb-4 ">
            <div className="card-me relative max-h-[270px] cursor-pointer w-auto hover:shadow-lg rounded-t-lg overflow-hidden transition-all duration-500 ease-in-out">
            <Link to={`/product/${e.name}`}>
              <img
                  src={e.imgProduct}
                  className="w-full h-full rounded-lg"
                  alt=""
                  />
              </Link>
            </div>
            <div className='bg-white h-[100px] shadow-md rounded-b-lg'>
              <div className='flex w-full top-[245px] px-6 flex-col absolute'>
              <Link to={`/user/${e.owner}`}>
                <div className='flex items-center w-full gap-3'>
                  <div className='w-[70px] h-[70px] bg-white rounded-lg'>
                    <img src={e.imgOwner} className=" shadow-md h-full w-full rounded-lg p-1 object-cover object-top" alt="" />
                  </div>
                  <div className='flex flex-col mt-6 justify-start'>
                    <h3 className='font-semibold text-[16px]'>{e.name.length >= 10 ? (e.name.slice(0,10) + " ...") : e.name}</h3>
                    <h3 className='font-semibold text-[12px]'>{e.owner}</h3>
                  </div>
                </div>
                </Link>

                <div className='flex items-center gap-2'>
                  <div className="progress">
                    <div className="progress-done text-cyan-400" style={{ opacity:1, width:`${e.countPolling}%` }}>
                      <p className='text-[12px]'>{e.countPolling}%</p>
                    </div>
                  </div>
                  <HiCheckCircle fontSize={32} className="hover:text-red-400 cursor-pointer"/>
                </div>

              </div>
            </div>
          </SwiperSlide>
        )})}
      </Swiper>
  )
}

export default Slider