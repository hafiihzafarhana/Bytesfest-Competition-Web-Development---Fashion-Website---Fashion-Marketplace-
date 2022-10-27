import React from 'react'
import {BsDot} from 'react-icons/bs'

function DetailUserAcc({data}) {
  return (
      <section className="flex flex-col pb-3 gap-4 relative ">
        <div className='bg-white max-h-[100%] max-w-[100%] md:h-[200px] h-[150px] min-w-[100%] shadow-md rounded-b-lg flex justify-center items-center'>
          <img src={"https://img.freepik.com/free-vector/alien-planet-landscape-with-volcano-river-stars-moons-sky-vector-fantasy-illustration-planet-surface-with-desert-mountains-smoke-clouds-from-craters-futuristic-background-gui-game_107791-4656.jpg?w=1380&t=st=1666621447~exp=1666622047~hmac=b593ed589863966090546ae1c69de2071eb5e5c9d23b65ee3d90de4085876cb9"} className="w-full h-full object-cover" alt="" />
        </div>
        <div className='h-[30px] rounded-b-lg bg-green-40 relative'>
          <div className='flex w-full md:bottom-[20px] bottom-[10px] px-6 flex-col absolute bg-red-40'>
              <div className='flex items-center w-full gap-3'>
                <div className='md:w-[150px] md:h-[150px] w-[100px] h-[100px] bg-white rounded-lg'>
                  <img src={data?.imgUrl} className="shadow-md h-full w-full object-cover object-center rounded-lg p-1" alt="" />
                </div>
              </div>
          </div>
        </div>
        <div className='bg-white flex flex-col shadow-lg'>
          <div className='sm:mx-[24px] mx-[24px] pb-8'>
          <div>
            <p className='font-semibold text-3xl'>{data?.owner}</p>
          </div>
          <div className='flex md:gap-4 gap-2 mt-3 md:flex-row flex-col'>
            <p className='md:text-[20px] text-[16px]'>Items <span className='font-semibold'>{data?.collects?.length}</span></p>
            <BsDot className='hidden md:flex'/>
            <p className='md:text-[20px] text-[16px]'>Created <span className='font-semibold'>{data?.timeAsDesigner}</span></p>
          </div>
          <p className='text-[16px] mt-3'>"{data?.bio}"</p>
          </div>
        </div>
      </section>
  )
}

export default DetailUserAcc