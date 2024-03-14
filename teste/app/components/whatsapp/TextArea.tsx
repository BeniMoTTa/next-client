import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";


export const TextArea = () => {
  return (
    <div className='bg-green-900 h-[25%] w-full rounded-b-xl'>
      <div className='h-5/6 flex pl-4 pt-4'>
        <textarea name="message" id="text" className='resize-none p-3 border-2 rounded w-full bg-transparent text-white h-full '/>
      <div className='w-[20%] h-full flex items-center justify-center maxsm:text-2xl  md:text-4xl text-white cursor-pointer'> <FaRegArrowAltCircleRight /></div>
      </div>
    </div>
  )
}
