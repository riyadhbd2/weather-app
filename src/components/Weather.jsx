import React from 'react';
import search_icon from '../assets/search.png';

const Weather = () => {
  return (
    <div className='place-self-center p-10 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 flex felx-col items-center'>
        <div className='flex items-center gap-3'>
            <input className='h-12 border-none outline-0 rounded-full pl-6 text-[#626262] bg-[#ebfffc] font-medium  placeholder: p-1 ' type="text" placeholder='Search' />
            <img className='w-10 p-2 rounded-full cursor-pointer bg-[#ebfffc]' src={search_icon} alt="" />
        </div>
    </div>
  )
}

export default Weather