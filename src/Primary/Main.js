import React from "react";
import { HeaderSlider, Desainer, Polling, MostVisitedProduct, Category, Footer } from "../Components";
function Main() {
  return (
    <section>
      <section className={`w-full overflow-hidden bg-gradient-to-r to-[#f3cbd3] via-yellow-50 from-cyan-200`}>
        <div className="flex justify-center items-start mt-[18px]">
          <div className="xl:max-w-[1280px] w-full">
            <HeaderSlider />
          </div>
        </div>
      </section>

      <section className={`w-full overflow-hidden bg-white`}>
        <div className="flex justify-center items-start mt-[56px]">
          <div className="xl:max-w-[1280px] w-full">
            <Desainer />
          </div>
        </div>
      </section>

      <section className={`w-full overflow-hidden bg-white`}>
        <div className="flex justify-center items-start mt-[56px]">
          <div className="xl:max-w-[1280px] w-full">
            <Polling />
          </div>
        </div>
      </section>

      <section className={`w-full overflow-hidden bg-white`}>
        <div className="flex justify-center items-start mt-[56px]">
          <div className="xl:max-w-[1280px] w-full">
            <MostVisitedProduct />
          </div>
        </div>
      </section>

      <section
        className={`w-full overflow-hidden absolute bottom-[full] mt-10
      `}
      >
        <div
          className={`h-full ease-in duration-300 bg-primary sm:px-[112px] px-10 w-full flex justify-center items-center shadow-md`}
        >
          <div className="xl:max-w-[1280px] w-full">
            <Footer />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Main;
