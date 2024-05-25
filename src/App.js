import React from 'react'
import Card from './Componant/Card'
import About from './Componant/About'
import Contact from './Componant/Contact'
import SocialLinks from './Componant/SocialLinks'
import ProjectLink from './Componant/ProjectLink'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
     <div className='mt-[3%] w-[100%]'>
         <div><Card /></div>
         <div className='max-lg:mt-1'><About /></div>
         <div className='max-lg:mt-1'><Contact /></div>
         <div><SocialLinks /></div>
         <div><ProjectLink /></div>
     </div>
     </BrowserRouter>
    </>
  )
}

export default App
