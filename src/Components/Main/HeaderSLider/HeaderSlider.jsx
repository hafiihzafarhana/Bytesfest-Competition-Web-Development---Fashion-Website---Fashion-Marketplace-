import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { DataSLiderHeader } from "../../../Data";
import { Link } from "react-router-dom";

function HeaderSlider() {
  return (
    <section className={`flex flex-col justify-center sm:mx-16 mx-[14px] pb-3`}>
      <h3 className="text-center font-bold md:text-[32px] sm:text-[28px] text-[24px] mb-3">Explore, Invest, and Buy a Design</h3>
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
        {DataSLiderHeader.map((e) => (
          <SwiperSlide key={e.id} className="relative">
            <Link to={`product/${e.name}`}>
            <div className="card-me relative max-h-[250px] cursor-pointer w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out">
              <img
                src={e.imgUrl}
                className="brightness-[0.7] hover:brightness-[0.85] w-full h-full rounded-lg"
                alt=""
              />
              <div
                className="hov-header-card absolute bottom-[20px] right-[5%] w-[90%] max-h-[60px] px-4 items-center text-white flex flex-row justify-between py-8 z-50"
                style={{ height: "100%" }}
              >
                <div className="flex items-start justify-start flex-col">
                  <h3 className="text-xl font-semibold">
                    {e.name.length >= 7 ? (e.name.slice(0,7) + " ...") : e.name.slice(0)}
                  </h3>
                  <p className="text-xs">{e.owner}</p>
                </div>
                <div>
                    <p className="text-sm">$ {e.price}</p>
                </div>
              </div>
            </div>
          </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeaderSlider;
