import React from "react";
import { Filter, AllProducts } from "./../Components/index";
import { HiX } from "react-icons/hi";
import { useMainContext } from "../Context/Context";

function Products() {
  const { openFilter, setOpenFilter } = useMainContext();
  return (
    <section className="flex items-center mt-0 flex-col md:flex-row">
      <section
        className={`w-[30%] h-[100%] pt-3 shadow-md overflow-hidden fixed top-[96px] left-0 hidden md:flex`}
      >
        <div className="flex justify-start items-start mt-[0] w-full">
          <div className="xl:max-w-[1280px] w-full">
            <Filter />
          </div>
        </div>
      </section>

      <section
        className={`w-full md:w-[68%] pt-6 overflow-hidden h-auto relative left-0 md:left-[31%] mt-5 md:mt-0 `}
      >
        <div className="flex justify-center items-start mt-[0]">
          <div className="xl:max-w-[1280px] w-full sticky">
            <AllProducts />
          </div>
        </div>
      </section>

      <div className={`md:hidden ${openFilter ? 'container' : ''} transition duration-300 ease-in-out`}>
        {openFilter && (
        <div className="w-full pt-[112px]">
          <Filter/>
          <div className="flex items-center justify-center mt-[200px]">
            <h3 onClick={() => setOpenFilter(false)} className="bg-primary text-white text-center p-2 shadow-md rounded-full text-[24px]">Finish</h3>
            </div>
        </div>
        )}
      </div>
    </section>
  );
}

export default Products;
