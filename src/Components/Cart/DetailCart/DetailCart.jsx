import React from 'react'
import { useMainContext } from '../../../Context/Context'
import {BiPurchaseTagAlt} from 'react-icons/bi'

function DetailCart({setopenAlert}) {
    const {cart, setCart} = useMainContext();
    const priceTotal = cart.reduce((data,item) => {return data + item.price},0);
    const tax = (0.05 * priceTotal);

    const submitPurchase = () => {
        setCart([])
        setopenAlert(true)
    }
  return (
    <>
        <p className='text-2xl font-semibold p-6 border-b-[1px]'>Detail</p>
        {cart.length > 0 && (
            <div className='flex flex-col relative'>
                <div className='flex justify-between px-6 py-2'>
                    <p>Total price</p>
                    <p>$ {parseInt(priceTotal)}</p>
                </div>
                <div className='flex justify-between px-6 py-2'>
                    <p>Tax</p>
                    <p>$ {parseInt(tax)}</p>
                </div>
                <hr/>
                <div className='flex justify-between px-6 py-2'>
                    <p>Total All</p>
                    <p className='font-semibold'>$ {parseInt(priceTotal + tax)}</p>
                </div>
                <div className='flex justify-end px-6 py-2'>
                    <p className='font-semibold'>Tax is 5% from total price</p>
                </div>

                <button onClick={submitPurchase} className='bg-primary flex items-center justify-center gap-2 text-white mx-4 p-2 rounded-2xl my-4'> 
                    <BiPurchaseTagAlt/> 
                    <p>Complete Purchase</p>
                </button>
            </div>
        )}

        {cart.length < 1 && (
            <div className='flex justify-center items-center h-[100px]'>
                <p className='text-slate-400'>Add some items to get started</p>
            </div>
        )}
    </>
  )
}

export default DetailCart