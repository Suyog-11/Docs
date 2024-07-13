import React from 'react';
import logo from '../assets/docssg.png'

function Background() {
  return (
    <>
      <div className='fixed z-[2] w-full h-screen'>
        {/* <div className='w-[15vw] top-[5%]  py-10 flex justify-center '><img src={logo} alt="" /></div> */}
        <div className='absolute top-[1%] w-full'><img src={logo} alt="" className='w-[15vw] mx-auto' /></div>
        <h1 className='absolute  text-zinc-900 text-[14vw] leading-none tracking-tighter left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold'>Docs</h1>

      </div>

    </>
  )
}

export default Background
