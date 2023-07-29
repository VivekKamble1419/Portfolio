import React from 'react'
import Ceritificationlist from './Ceritificationlist'
const data=[
  {
    year: 2023,
    title: 'Data Analytis InternShip in IBM',
    deuration: '7 Weeks',
    details:
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis nemo sint beatae qui fugit tempore a cupiditate obcaecati laboriosam asperiores, eveniet repellat dolorum unde officia velit deserunt vel aliquid."
  },
  
]

export default function Certification() {
  return (
    <div id='Education' className='max-w-[1040px] m-auto md:pl-4 py-16'>
    <h1 className='text-4xl font-bold text-center text-[#001b5e] pb-8'>Ceriffication & Experience</h1>
    {data.map((item, idx) =>(
      <Ceritificationlist key={idx} year={item.year} title={item.title} deuration={item.deuration} details={item.details}/>
    ))}
    </div>
    
  )
}
