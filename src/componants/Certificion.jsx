import React from 'react'
import Ceritificationlist from './Ceritificationlist'
const data=[
  {
    year: 2023,
    title: 'Data Analytis InternShip in IBM',
    deuration: '7 Weeks',
    details:
    " During my internship at IBM as a Data Analyst, I had the incredible opportunity to work in a cutting-edge environment, surrounded by industry-leading professionals. Throughout the internship, I actively engaged in real-world data projects, where I leveraged my analytical skills to derive meaningful insights from diverse datasets. Working with Python, SQL, and various data visualization tools, I successfully tackled complex data challenges, applying statistical techniques and machine learning algorithms to extract valuable patterns and trends."},
  
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
