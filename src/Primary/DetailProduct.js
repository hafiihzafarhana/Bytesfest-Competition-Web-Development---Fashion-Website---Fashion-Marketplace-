import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { FullData } from '../Data/FullData';
import {DetailPro, OtherPro} from './../Components/index';
import Footer from './../Components/Footer'

function DetailProduct() {
  const {productId} = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    // let fill = FullData.find(e => e.collects.find(e => e?.name == productId))
        let fill = FullData.find(e => e.collects.find(e => e?.name == productId))

        setData(fill)
      },[productId])
return (
    <section>
        <section className={`w-full overflow-hidden bg-white`}>
            <div className="flex justify-center items-start mt-[18px]">
                <div className="xl:max-w-[1280px] w-full">
                    <DetailPro data={data} id={productId}/>
                </div>
            </div>
        </section>

          <section className={`w-full overflow-hidden bg-white`}>
            <div className="flex justify-center items-start mt-[18px]">
                <div className="xl:max-w-[1280px] w-full">
                    <OtherPro data={data} id={productId}/>
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

export default DetailProduct