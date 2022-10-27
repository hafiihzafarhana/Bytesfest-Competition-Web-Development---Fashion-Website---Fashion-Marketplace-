import React from 'react'
import category1 from './../../../Assets/Categories/1.png';
import category2 from './../../../Assets/Categories/2.png';

function Category() {
  return (
    <section className="flex flex-col justify-center sm:mx-16 mx-[14px] pb-3">
      <h3 className="font-bold md:text-[24px] sm:text-[20px] text-[16px] mt-3 mb-3 text-center">Choose by Categories</h3>
      <div className='flex items-center justify-center w-full'>
        <div className='w-full h-full flex items-center justify-center rounded-xl flex-col'>
            <img src={category1} alt="" className='w-[90%] h-full rounded-t-xl' />
            <div className='flex items-center justify-center w-[90%] h-[50px] shadow-md rounded-b-xl'>
                <h3 className='font-semibold md:text-2xl'>Men</h3>
            </div>
        </div>
        <div className='w-full h-full flex items-center justify-center flex-col'>
            <img src={category2} alt="" className='w-[90%] h-full rounded-t-xl' />
            <div className='flex items-center justify-center w-[90%] h-[50px] shadow-md rounded-b-xl'>
                <h3 className='font-semibold md:text-2xl'>Women</h3>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Category