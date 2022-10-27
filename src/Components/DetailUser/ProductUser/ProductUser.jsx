import React from 'react'
import {Link} from 'react-router-dom'
import { useMainContext } from '../../../Context/Context';
function ProductUser({data}) {
  const {setCart, cart} = useMainContext()
  const addToCartFunc = (data) => {
    let cari = cart?.filter(e => e?.name == data.name)
    if(cari.length < 1){
      setCart([...cart,data])
    }
  }
  return (
    <>
    <section className="grid grid-cols-1 md:grid-cols-5 gap-4 h-auto w-full px-6">
        {data?.collects?.map((e) => (
        <div className='relative h-[400px]' key={e.id}>
          <Link to={`/product/${e.name}`}>
            <div className='absolute rounded-t-lg bg-no-repeat h-[250px] w-full bg-top bg-[length:400px_470px]' style={{ backgroundImage: `url('${e.imgUrl}')`}} />
          </Link>
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
    </>
  )
}

export default ProductUser