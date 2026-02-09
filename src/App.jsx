import { useState } from 'react'
import Stalk from "/Stalk.svg"
import FlowerComponents from './components/Flower'
// import SunCursor from './components/SunCursor'
import Line from './components/Line'
import TrueFocus from './components/TrueFocus';
import sunFlower from '/sunflowerSticker.svg'
import './App.css'


function App() {

  return (
    <div className='bg-black p-0 w-full min-h-screen overflow-y-auto relative flex flex-col items-center justify-start'>

      <div className='flex items-center flex-col m-2'>
        <div className='flex '>
          <img src={sunFlower} width={120} alt="" className='animation'/>
          <p className='mainfont text-white text-[126px] px-6'>ReVerse</p>
          <img src={sunFlower} width={80} className='animation' alt="" />

        </div>
        <p className='mainfont text-white text-[24px]'> <span className='text-yellow-300'>Pune's Biggest</span> <TrueFocus
          sentence="Slam Poetry"
          manualMode={false}
          blurAmount={5}
          borderColor="Yellow"
          animationDuration={0.5}
          pauseBetweenAnimations={1}
        /> <span className='text-yellow-300'>Event</span></p>
      </div>
      {/* <SunCursor /> */}
      <div>
        {/* <FlowerComponents /> */}
        <img src={Stalk} alt="" className='' style={{ zIndex: 1 }} />
      </div>
      <Line />

    </div>
  )
}

export default App
