import { useState } from 'react'
import Sidenav from './componants/Sidenav'
import Home from './componants/Home'
import Education from './componants/Education'
import Projects from './componants/Projects.jsx'
import Contact from './componants/Contact'
import Certification from './componants/Certificion'

function App() {

  return (
    <>
      <Sidenav/>
      <Home/>
      <Education/>
      <Projects/>
      <Certification/>
      <Contact/>
    </>
  )
}

export default App
