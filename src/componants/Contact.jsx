import React from 'react'

export default function Contact() {
  return (
    <div id="contact" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action="https://getform.io/f/7d6ef36a-b486-4912-88c6-57cdbb1806dc" method="POST" encType='multipart/form-data'>
        <div>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg py-3 flex border-gray-300 p-2' type="text" name='name' placeholder='Enter Your Name' />
                </div> 
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone</label>
                    <input className='border-2 rounded-lg py-3 flex border-gray-300 p-2' type="text" name='phone' placeholder='Enter Contact Number' />
                </div></div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-lg py-3 flex border-gray-300 p-2' type="email" name='email' placeholder='Enter Email'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input className='border-2 rounded-lg py-3 flex border-gray-300 p-2' type="text" name='subject' placeholder='Enter Subject for Email'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg py-3 flex border-gray-300 p-2' rows='10' name='message' placeholder='Drop Message Here...' />
                </div>
                </div>
                <button className='bg-[#001b5e] mt-4 w-full p-4 rounded-lg text-white'>Send Message</button>
        </form>
    </div>
  )
}
