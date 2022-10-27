import React, {useState} from 'react'
import { ProductCart, DetailCart, Footer, AlertSuccess } from '../Components/index'

function Cart() {
  const [openAlert, setopenAlert] = useState(false)
  return (
    <section>
        <section className={`w-full overflow-hidden bg-white`}>
            <div className="flex justify-center items-start mt-[18px]">
                <div className="xl:max-w-[1280px] w-full">
                <section className="flex md:flex-row flex-col justify-between sm:mx-16 mx-[14px] pb-3 gap-4 md:h-[calc(100vh-120px)] md:max-h-[calc(100vh-120px)] max-h-[calc(110vh)] relative">
                    <div className='no_scroll shadow-lg border-[1px] rounded-xl overflow-y-auto md:w-[70%] w-full flex flex-col '><ProductCart/></div>
                    <div className='shadow-lg border-[1px] rounded-xl md:w-[30%] w-full flex flex-col'><DetailCart setopenAlert={setopenAlert}/></div>
                    <div className={`absolute ${openAlert ? ('w-full h-full') : ('')} md:shadow-2xl bg-black bg-opacity-70 rounded-2xl flex justify-center items-center transition duration-300 ease-in-out`}>
                      {openAlert && (
                        <AlertSuccess setopenAlert={setopenAlert}/>
                      )}
                    </div>
                </section>
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
  )
}

export default Cart