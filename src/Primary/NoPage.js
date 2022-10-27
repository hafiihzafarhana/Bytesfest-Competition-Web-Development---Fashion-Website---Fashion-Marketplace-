import React from 'react'
import { NavLink } from 'react-router-dom'
import notfound from './../Assets/NotFound/notfound.svg'

function NoPage() {
  return (
    <section>
      <section className={`w-full overflow-hidden bg-white`}>
        <div className="flex justify-center items-start mt-[56px]">
          <div className="xl:max-w-[1280px] w-full">
            <div className='flex md:flex-row sm:mx-16 mx-[14px] pb-3 flex-col-reverse items-center'>
              <div className='flex flex-col md:w-[30%] w-[100%] mt-10 items-center'>
                <h2 className='font-bold md:text-[36px] text-primary text-[16px] text-center'>The page is <br/> under Construction</h2>
                <p className='text-center'>The link you clicked maybe broken or the page maybe have been removed. You can go back to &nbsp;
                  <NavLink to={'/'}>
                    <span className='text-primary'>Home page</span>
                  </NavLink>
                </p>
              </div>
              <div className='flex flex-col md:w-[70%] w-[100%] justify-center items-center'>
                <img src={notfound} className="w-[80%]"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default NoPage