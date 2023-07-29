import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaInstagram, FaFacebookF, FaLinkedin, FaGithub} from 'react-icons/fa'

export default function Home() {
  return (
    <div id="home">
    <img className='w-full h-screen object-cover scale-x-[-1]' src="https://plus.unsplash.com/premium_photo-1681566925294-7ff6eba5a9c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Home Baground" />
    <div className='w-full h-screen absolute top-0 left-0 bg-white/10'>
        <div className='max-w-[500px] m-auto h-full w-full flex flex-col justify-center lg:items-start'>
            <h1 className='sm:text-5xl text-4xl text-gray-800 pb-2'>I,m Vivek</h1>
            <h2>I,m a 
            <TypeAnimation
                sequence={[
                // Same substring at the start will only be typed out once, initially
                'Coader...!',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Programmer...!',
                1000,
                'MERN devloper...!',
                1000,
                'Data Analyst...!',
                1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.5em', display: 'inline-block', paddingLeft:'5px' }}
                repeat={Infinity}
            />
            </h2>
        <div className='flex gap-4 pt-6 mt-2'>
           <FaInstagram className='cursor-pointer' size={25}/>
           <FaFacebookF className='cursor-pointer' size={25}/>
           <FaLinkedin className='cursor-pointer' size={25}/>
           <FaGithub className='cursor-pointer' size={25}/>
        </div>
        </div>
    </div>
    </div>
  )
}  
