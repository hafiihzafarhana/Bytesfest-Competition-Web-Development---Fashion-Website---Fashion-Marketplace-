import React,{useEffect, useState} from 'react'
import Footer from './../Components/Footer'
import { FullData } from '../Data/FullData';
import {useParams} from 'react-router-dom'
import {DetailUserAcc, Filter, AllProducts, ProductUser} from './../Components/index'

function DetailUser() {
  const {userId} = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    let fill = FullData.find(e => e?.owner == userId);
    setData(fill)
  },[userId])
  return (
    <section>
      {data && (
        <section className={`w-full overflow-hidden bg-white`}>
          <div className="flex justify-center items-start">
            <div className="xl:max-w-[1280px] w-full">
              <DetailUserAcc data={data}/>
            </div>
          </div>
        </section>
      )}
      {data && (
      <div className='flex items-center mt-0 flex-col md:flex-row'>
      <section
        className={`w-full md:w-[100%] pt-6 overflow-hidden h-auto relative left-0 md:left-[0%] mt-5 md:mt-0 `}
        >
        <div className="flex justify-center items-start mt-[0]">
          <div className="xl:max-w-[1280px] w-full">
            <ProductUser data={data}/>
          </div>
        </div>
      </section>
      </div>
      )}
    </section>
  )
}

export default DetailUser