import React, {useState} from 'react'
import {FaCheck} from 'react-icons/fa'
import { useMainContext } from '../../Context/Context'

function Filter() {
  const {checkPopular,
    setCheckPopular,
    checkMostVisited,
    setCheckMostVisited,
    checkForMen,
    setCheckForMen,
    checkForWomen,
    setCheckForWomen} = useMainContext()
  return (
    <section className="flex flex-col sm:px-[20px] px-6 h-[100px] w-full">
        <h3 className='font-semibold text-xl text-center'>Filter</h3>
        <div className='flex flex-col gap-2 mt-4'>
            <h3 className='font-semibold text-[16px]'>Status</h3>
            <div className='flex items-center justify-between'>
                <div className='text-[16px]'>Men</div>
                <label htmlFor='checkbox-filter-1' onClick={(e) => setCheckForMen(!checkForMen)} className='cursor-pointer relative'>
                    <input type="checkbox" className='appearance-none h-[24px] w-[24px] border-2 rounded-md border-primary'/>
                    <FaCheck className={`text-primary h-[16px] w-[16px] absolute left-[4px] top-[4px] transition
                    ${checkForMen ? "opacity-100" : "opacity-0"}
                    `}/>
                </label>
            </div>
            <div className='flex items-center justify-between'>
                <div className='text-[16px]'>Women</div>
                <label htmlFor='checkbox-filter-1' onClick={(e) => setCheckForWomen(!checkForWomen)} className='cursor-pointer relative'>
                    <input type="checkbox" className='appearance-none h-[24px] w-[24px] border-2 rounded-md border-primary'/>
                    <FaCheck className={`text-primary h-[16px] w-[16px] absolute left-[4px] top-[4px] transition
                    ${checkForWomen ? "opacity-100" : "opacity-0"}
                    `}/>
                </label>
            </div>
        </div>
    </section>
  )
}

export default Filter