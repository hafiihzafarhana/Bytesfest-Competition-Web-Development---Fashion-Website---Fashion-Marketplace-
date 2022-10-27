import React from 'react'
import {AiOutlineHeart, AiFillEye, AiOutlineShoppingCart, AiFillHeart} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import { useMainContext } from '../../../Context/Context'

function DetailPro({data, id}) {
  const {setCart, cart} = useMainContext()
  let fil = data?.collects?.find(e => e?.name == id)
  const addToCartFunc = (data) => {
    let cari = cart?.filter(e => e?.name == data.name)
    if(cari.length < 1){
      setCart([...cart,data])
    }
  }
    return (
      <section className="flex md:flex-row flex-col justify-center sm:mx-16 mx-[14px] pb-3 gap-4">
      <div className='flex flex-col md:w-[40%] w-full'>
        <div className='bg-white flex justify-end rounded-t-lg border-[1px] p-2'>
          {fil?.fav == false && (
            <p><AiOutlineHeart className='text-primary' fontSize={24}/></p>
          )}
          {fil?.fav == true && (
            <p><AiFillHeart className='text-primary' fontSize={24}/></p>
          )}
        </div>
        <div className='w-full max-h-full rounded-b-lg'>
          <img src={fil?.imgUrl} alt="" className='rounded-b-lg' />
        </div>
      </div>
      <div className='md:w-[60%] w-full p-2'>
        <Link to={`/user/${data?.owner}`}>
          <p className='text-xl font-bold text-primary'>{data?.owner} (Owner)</p>
        </Link>
        <p className='text-2xl font-semibold md:mt-4'>{fil?.name}</p>
        <div className='flex gap-2 items-center mt-5'>
          <div className='flex items-center gap-2'>
            <AiFillEye fontSize={24}/>
            <p>{fil?.views} views</p>
          </div>
          <div className='flex items-center gap-2'>
            <AiFillHeart className='text-primary' fontSize={24}/>
            <p>{fil?.loves} Loves</p>
          </div>
        </div>
        <div className='flex gap-2 mt-5 border-[1px] p-2 flex-col'>
          <p>Sales end <span className='font-semibold'>{fil?.salesEnd}</span></p>
          <div className='flex items-center gap-2'>
            <BiUser fontSize={24}/>
            <p> {fil?.whobuy} Person Can buy</p>
          </div>
        </div>
        <div className='flex gap-2 mt-5 border-[1px] p-2 flex-col'>
          <p className='font-semibold text-xl'>Description</p>
          <p>{fil?.deskripsi}</p>
        </div>
        <div className='flex gap-2 border-[1px] p-2 flex-col'>
          <p className='font-semibold text-xl'>Price</p>
          <p className='text-2xl'>$ {fil?.price}</p>
          <div className='flex w-full justify-center'>
            <button onClick={() => addToCartFunc(fil)} className='flex items-center gap-3 bg-primary text-white w-[50%] justify-center p-3 rounded-3xl'><AiOutlineShoppingCart className='md:text-xl text-[12px]'/> <span className='md:text-xl text-[12px]'>Add to cart</span></button>
          </div>
        </div>
      </div>
      </section>
  )
}

export default DetailPro