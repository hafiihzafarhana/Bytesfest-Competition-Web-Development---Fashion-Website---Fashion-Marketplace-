import React from 'react'
import {SliderPolling} from '../../index'

function Polling() {
  return (
    <section className="flex flex-col justify-center sm:mx-16 mx-[14px] pb-3">
      <h3 className="font-bold md:text-[24px] sm:text-[20px] text-[16px] mt-3 mb-3 text-center">Polling : Fashion of The Month</h3>
      <SliderPolling/>
    </section>
  )
}

export default Polling