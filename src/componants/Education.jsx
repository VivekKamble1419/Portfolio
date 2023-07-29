import React from 'react'
import EducationItems from './EducationItems'
const data=[
  {
    year: 2024,
    title: 'BCA (Batchlor of Computer Application)',
    deuration: '3 Years',
    details:
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis nemo sint beatae qui fugit tempore a cupiditate obcaecati laboriosam asperiores, eveniet repellat dolorum unde officia velit deserunt vel aliquid."
  },
  {
    year: 2021,
    title: 'HSC',
    deuration: '1 Year',
    details:
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis nemo sint beatae qui fugit tempore a cupiditate obcaecati laboriosam asperiores, eveniet repellat dolorum unde officia velit deserunt vel aliquid."
  },
  {
    year: 2019,
    title: 'SSC',
    deuration: '1 Year',
    details:
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis nemo sint beatae qui fugit tempore a cupiditate obcaecati laboriosam asperiores, eveniet repellat dolorum unde officia velit deserunt vel aliquid."
  },
 
]

export default function Education() {
  return (
    <div id='Education' className='max-w-[1040px] m-auto md:pl-4 py-16'>
    <h1 className='text-4xl font-bold text-center text-[#001b5e] pb-8'>Education</h1>
    {data.map((item, idx) =>(
      <EducationItems key={idx} year={item.year} title={item.title} deuration={item.deuration} details={item.details}/>
    ))}
    </div>
    
  )
}
