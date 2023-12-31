import React from 'react'

export default function Projectitem({img, title, info}) {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
        <img src={img} alt="/" className='rounded-xl group-hover:opacity-10 p-6' />
        <div className='hidden group-hover:block absolute top-auto left-auto translate-x-[-50] translate-y-[50%]'>
            <h3 className='text-3xl font-bold text-white tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{info}</p>
             <p className='text-center p-3 rounded-xl bg-white text-gray-700 font-bold cursor-pointer '>More Info</p>
            
        </div>
    </div>
  )
}
