import React from 'react'
import EducationItems from './EducationItems'
const data=[
  {
    year: 2024,
    title: 'BCA (Batchlor of Computer Application)',
    deuration: '3 Years',
    details:
    "A BCA degree stands for Bachelor of Computer Applications. It is an undergraduate academic degree awarded to students who have completed a three-year full-time course in the field of computer applications."},
  {
    year: 2021,
    title: 'HSC',
    deuration: '1 Year',
    details:
    "HSC stands for Higher Secondary Certificate.It is an academic qualification awarded to students who have completed their secondary education, typically after completing two years of study in grades 11 and 12 (or the equivalent) in various educational systems around the world."
    },
  {
    year: 2019,
    title: 'SSC',
    deuration: '1 Year',
    details:
       " SSC stands for Secondary School Certificate.It is an academic qualification awarded to students who have completed their secondary education, typically after completing a certain number of years of study, which can vary from country to country."
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
