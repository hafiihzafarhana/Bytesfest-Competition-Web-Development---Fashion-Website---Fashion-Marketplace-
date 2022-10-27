import React from 'react'
import {SocialMedia} from './../Data/socialmedia'

function Footer() {
  return (
    <footer className={`py-6 max-w-[1280px] w-full`}>
        <div className='flex flex-col md:flex-row w-full gap-4 items-start'>
            
            <div className='w-full flex-col flex items-center md:items-start'>
                <h3 className='font-semibold text-[20px] md:text-[24px] text-white'>Stay in diversity</h3>
                <p className='text-white mt-2 text-center md:text-left md:text-[16px] text-[14px]'>Join our mailling to stay di diversity with our newest <br/> fashion, forum, and tips and tricks <br/> for navigating Full Fashion</p>
                <div className='flex items-center w-full mt-4 gap-4'>
                    <div className='md:w-[80%] w-[70%] flex items-center'>
                        <input type="text" className='w-full p-[12px] border-none rounded-xl outline-none text-[12px] md:text-[16px]' placeholder='Your email address' />
                    </div>
                    <div className='md:w-[20%] w-[30%] flex items-center'>
                        <input type="button" value="Sign up" className='text-white w-[100%] p-[12px] shadow-md bg-secondary rounded-xl text-[12px] md:text-[16px]' />
                    </div>
                </div>
            </div>
            <div className='w-full flex-col flex items-center md:items-start gap-4'>
                <h3 className='font-semibold text-[20px] md:text-[24px] text-white'>Join our community</h3>
                <div className='flex items-center justify-start px-10 gap-2'>
                    {SocialMedia.map((e) => (
                        <a href={e.url} key={e.id}>
                            <div className='rounded-xl w-[50px] h-[50px] bg-secondary flex items-center justify-center'>
                                {e.icon}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>

        <hr className='mt-10 opacity-30'/>

        <div className='flex items-center justify-between mt-10 text-white text-[14px] md:flex-row flex-col'>
            <p>© 2022 Pt Nusantara Raya Tbk</p>
            <div className='flex gap-2 text-white'>
                <p>Privacy policy</p>
                <p>Terms of Service</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer