import React, {useEffect, useState} from 'react'
import { HiOutlineFilter } from "react-icons/hi";
import { useMainContext } from '../../Context/Context';
import { products_all } from '../../Data/Products';

function AllProducts() {
  const [data, setData] = useState([])
  const {setOpenFilter, checkForMen, checkForWomen, setCart, cart} = useMainContext()
  useEffect(() => {
    products_all.map((e) => {
      if(checkForMen == true){
        setData(products_all.filter((e) => e.type == "Men"))
      } if(checkForWomen == true){
        setData(products_all.filter((e) => e.type == "Women"))
      } if(checkForMen == true && checkForWomen == true){
        setData(products_all)
      } if(checkForMen == false && checkForWomen == false){
        setData(products_all)
      }
    })
  }, [checkForMen, checkForWomen])

  const addToCartFunc = (data) => {
    let cari = cart?.filter(e => e?.name == data.name)
    if(cari.length < 1){
      setCart([...cart,data])
    }
  }

  return (
    <>
    <section className="grid grid-cols-2 md:grid-cols-3 gap-4 h-auto w-full px-6">
        {data.map((e) => (
        <div className='relative h-[400px]' key={e.id}>
          <div className='absolute rounded-t-lg bg-no-repeat h-[250px] w-full bg-top bg-[length:350px_450px]' style={{ backgroundImage: `url('${e.img}')`}} />
          <div className='absolute top-[250px] left-0 shadow-md w-full rounded-b-lg'>
            <div className='flex flex-col px-3'>
              <h3 className='font-semibold'>
              {e.name.length >= 10 ? (e.name.slice(0,10) + " ...") : e.name}
              </h3>
              <p className='text-[12px]'>{e.owner}</p>
              <div className='flex justify-between items-center mt-4'>
                <p className='text-[12px] font-semibold'>Price</p>
                <p className='text-[12px] font-semibold'>$ {e.price}</p>
              </div>
            </div>
            <div className='w-full bg-primary hover:bg-secondary mt-4 rounded-b-lg text-[14px] py-[8px] text-white font-semibold text-center' onClick={() => addToCartFunc(e)}>Add to Cart</div>
          </div>
        </div>
        ))}
    </section>
    
    <div className='fixed bottom-9 left-0 right-0 md:hidden flex items-center justify-center' onClick={() => setOpenFilter(true)}>
      <div className='text-white flex items-center justify-center'>
        <div className='bg-primary flex p-2 shadow-md rounded-full gap-2'>
          <HiOutlineFilter fontSize={36}/>
          <p className='font-semibold text-[24px]'>Filter</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default AllProducts