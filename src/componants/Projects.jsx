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
    In the project section of my portfolio, I take immense pride in showcasing a diverse collection of impactful endeavors that span across various domains. Each project represents a testament to my passion for innovation, problem-solving, and delivering real-world solutions.From collaborating with teams to leading projects independently, I have successfully ventured into web development, mobile apps, data analytics, and more, highlighting my adaptability and versatility. Throughout my portfolio, you'll find a wide range of projects, from revamping e-commerce websites to creating cutting-edge AI-powered applications.
    </p>
    <div className='grid sm:grid-cols-2 gap-24'>
    <a href="https://vivekkamble1419.github.io/Bookstore/" target='_blank'>
       <Projectitem img={booksoreImg} title="Book store" info="JavaScript"/>

    </a>
    <a href="https://vivekkamble1419.github.io/VivekKamble1419-Chat_Bot_Using_JS/" target='_blank'>
        <Projectitem img={chatbotImg} title="Chat bot" info="JavaScript + API"/>
      
    </a>
    <a href="https://vivekkamble1419.github.io/OnlineCodeEditor/" target='_blank'>
        <Projectitem img={codeeditorImg} title="Online code editor" info="JavaScript" />
      
    </a>
    <a href="https://vivekkamble1419.github.io/QR-genrator/" target='_blank'>
      
        <Projectitem img={QrgenratorImg} title="Qr code genrator" info="JavaScript"/>
    </a>
    <a href="https://dayguide.netlify.app/" target='_blank'>
      
        <Projectitem img={dayguideImg} title="Day guider" info="React Js"/>
    </a>
    <a href="https://vivekkamble1419.github.io/Learn-Coading-and-Programming/" target='_blank'>
        <Projectitem img={learnonlineImg} title="Learn Online" info="JavaScript Mini Project"/> 
    </a>
        

    </div>
        </div>
  )
}
