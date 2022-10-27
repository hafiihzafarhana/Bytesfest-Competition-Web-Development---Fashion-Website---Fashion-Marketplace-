import React from 'react'
import { useMainContext } from '../../../Context/Context'
import {BiTrash} from 'react-icons/bi'
function ProductCart() {
    const {cart, setCart} = useMainContext()

    const removeOneItem = (name) => {
        let fil = cart.filter(e => e.name != name)
        setCart(fil)
    }
  return (
    <>
        <div className='flex justify-between'>
            <p className='text-2xl font-semibold p-6 border-b-[1px]'>Your Cart</p>
            <p className='p-6'><span onClick={() => {setCart([])}} className='bg-primary text-white p-2 rounded-2xl text-[8px] md:text-[12px]'>Remove All</span></p>
        </div>
        {cart.length > 0 && (
            <div className='px-6 py-2'>
                {cart.map((e,i) => (
                    <div key={i} className='flex w-full flex-row bg-gren-300 p-1 gap-4 hover:bg-slate-100 hover:rounded-xl'>
                        <div className='w-[70px] h-[70px] bg-white rounded-xl'>
                            <img src={e.imgUrl ? e.imgUrl : e.img} className="w-full h-full rounded-xl object-cover object-top" alt="" />
                        </div>
                        <div className='flex flex-col w-[60%]'>
                            <p className='text-[12px] md:text-[20px] font-semibold'>{e.name}</p>
                            <p className='text-[12px] md:text-[16px]'>{e.owner}</p>
                            <p className='text-[12px] md:text-[16px] font-semibold'>$ {e.price}</p>
                        </div>
                        <div className='flex items-end justify-center flex-col w-[25%]'>
                            <BiTrash onClick={() => removeOneItem(e.name)}/>
                        </div>
                    </div>
                ))}
            </div>
        )}

        {cart.length < 1 && (
            <div className='bg-yellow-40 flex justify-center items-center h-[100px]'>
                <p className='text-slate-400'>Add some items to get started</p>
            </div>
        )}
    </>
  )
}

export default ProductCart