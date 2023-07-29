import React from 'react'
import Projectitem from './Projectitem'
import booksoreImg from '../assets/booksore.jpeg'
import chatbotImg from '../assets/chatbot.png'
import codeeditorImg from '../assets/codeeditor.jpeg'
import dayguideImg from '../assets/dayguider.png'
import learnonlineImg from '../assets/learnonline.jpeg'
import QrgenratorImg from '../assets/Qrgenrator.jpeg'

export default function Projects() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
    <p className='text-center py-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eaque nostrum ipsum. Ad, iusto! Consectetur eum quas tempora facilis vel iure eius modi dolore labore, ea error perspiciatis neque illum!
    </p>
    <div className='grid sm:grid-cols-2 gap-24'>
        <Projectitem img={booksoreImg} title="Book store" info="JavaScript"/>
        <Projectitem img={chatbotImg} title="Chat bot" info="JavaScript + API"/>
        <Projectitem img={codeeditorImg} title="Online code editor" info="JavaScript"/>
        <Projectitem img={QrgenratorImg} title="Qr code genrator" info="JavaScript"/>
        <Projectitem img={dayguideImg} title="Day guider" info="React Js"/>

    </div>
        </div>
  )
}
