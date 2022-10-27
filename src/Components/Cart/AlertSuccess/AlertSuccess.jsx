import React from 'react'
import {MdPaid} from 'react-icons/md'
function AlertSuccess({setopenAlert}) {
  return (
    <div className='bg-white absolute w-[90%] h-[90%] md:w-[80%] md:h-[80%] shadow-md transition duration-300 ease-in-out'>
        <p className='md:text-2xl text-[16px] font-semibold p-6 border-b-[2px] border-slate-200'>Purchased Information</p>
        <div className='flex items-center justify-center h-[60%] flex-col gap-3 border-b-[2px] border-slate-200'>
            <MdPaid fontSize={40} className="text-primary"/>
            <p className='text-center'>You have successfully made a payment</p>
        </div>
        <div className='flex items-center justify-center h-[18%]'>
            <div className='bg-primary px-6 py-2 text-white rounded-full' onClick={() => setopenAlert(false)}>OK</div>
        </div>
    </div>
  )
}

export default AlertSuccess