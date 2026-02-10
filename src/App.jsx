import { useState } from 'react'
import Stalk from "/Stalk.svg"
import FlowerComponents from './components/Flower'
// import SunCursor from './components/SunCursor'
import Statue from '/statueEye.svg'
import NavBar from './components/Navbar'
import HeroTitle  from './components/HeroTitle'
import Line from './components/Line'
import Timer from './components/Timer'
import About from './components/About'
import TrueFocus from './components/TrueFocus';
import sunFlower from '/sunflowerSticker.svg'

import './App.css'


function App() {

  return (
    <div className='bg-black p-0 w-full min-h-screen overflow-y-auto relative flex flex-col items-center justify-start'>
      <NavBar/>

      <div className='flex justify-end'>
                <div><img  className='float sm:w-[500px] m-2' width={600}  src={Statue} alt="" />
        </div>
      </div>
      <HeroTitle/>
      
      <div className="bg-white  flex items-center justify-center m-3">
      <button className="px-6 float mainfont py-2 font-medium bg-yellow-300  sm:text-[36px] text-black w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] ">
        Register Now!
      </button>
      
    </div>
    <Timer/>
      <Line />
      <About/>

    </div>
  )
}

export default App
