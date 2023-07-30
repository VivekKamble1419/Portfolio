import { useState } from 'react' // it is used to change state on event like onclick event
import React from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai' // this is used to import icons 
import {GrProjects} from 'react-icons/gr'
import {BsPerson} from 'react-icons/bs'
import pdfFile from '../assets/VIVEK_KAMBLE_Resume_23-03-2023-22-49-26.pdf'
export default function Sidenav() {
  
  const [nav, setNav]= useState(false);
  const handleNav =()=>{
    setNav(!nav);
   // console.log('state cahnged');
  }
  
  
  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='fixed top-4 right-4 z-[99] md:hidden'
      />
      {
        nav ?(
          <div className='fixed w-full h-screen bg-white/99 flex flex-col justify-center items-center z-20'>
            <a  onClick={handleNav}href="#home" size={20} className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineHome size={20}/>
              <span className='pl-4'>Home</span>
             </a>
             <a  onClick={handleNav}href="#Education" size={20} className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <GrProjects size={20}/>
              <span className='pl-4'>Education</span>
             </a>
             <a  onClick={handleNav}href="#projects" size={20} className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineProject size={20}/>
              <span className='pl-4'>Projects</span>
             </a>
             <a onClick={handleNav} href={pdfFile}size={20} className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <BsPerson size={20}/>
              <span className='pl-4'>Resume</span>
             </a>
             <a onClick={handleNav} href="#contact" size={20} className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineMail size={20}/>
              <span className='pl-4'>Contact</span>
             </a>
          </div>
        )
        
        :(

          <div className='md:block hidden fixed top-[20%] z-10'> {/*this is used to hide navbar in medium screen*/}
          <div className='flex flex-col'>
          <a href="#home" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineHome size={20}/>
          </a>
          <a href="#Education" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <GrProjects size={20}/>
          </a>  
          <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineProject size={20}/>
          </a>  
          <a href={pdfFile} className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' target='_blank'>
            <BsPerson size={20}/>
          </a>  
          <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineMail size={20}/>
          </a>           
         </div>
          </div>
        )

        }
    </div>
  )
}
