import { useState } from 'react'
import Stalk from "/Stalk.svg"
import FlowerComponents from './components/Flower'
// import SunCursor from './components/SunCursor'
import Statue from '/statueEye.svg'
import NavBar from './components/Navbar'
import HeroTitle  from './components/HeroTitle'
import Line from './components/Line'
import TrueFocus from './components/TrueFocus';
import sunFlower from '/sunflowerSticker.svg'
import './App.css'


function App() {

  return (
    <div className='bg-black p-0 w-full min-h-screen overflow-y-auto relative flex flex-col items-center justify-start'>
      <NavBar/>

      {/* <div className='flex items-center flex-col m-4'>
        <div className='flex my-2'>
          <img src={sunFlower}  alt="" className='animation w-[60px] sm:w-[120px]'/>
          <p className='mainfont text-white text-[45px] sm:text-[126px] px-6'>ReVerse</p>
          <img src={sunFlower}  className='animation w-[40px] sm:w-[80px]' alt="" />

        </div>
        <p className='mainfont text-white text-[16px] sm:text-[36px]'> <span className='text-yellow-300'>Pune's Biggest</span> <TrueFocus
          sentence="Slam Poetry"
          manualMode={false}
          blurAmount={5}
          borderColor="Yellow"
          animationDuration={0.5}
          pauseBetweenAnimations={1}
        /> <span className='text-yellow-300'>Event</span></p>
      </div> */}
      {/* <SunCursor /> */}
      <div className='flex justify-end'>
        <div>

        </div>
        {/* <FlowerComponents /> */}
        {/* <img src={Stalk} alt="" className='' style={{ zIndex: 1 }} /> */}
        <div><img  className='float sm:w-[900px] m-2' width={600}  src={Statue} alt="" />
        </div>
      </div>
      <HeroTitle/>
      <Line />

    </div>
  )
}

export default App
