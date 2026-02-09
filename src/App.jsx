import { useState } from 'react'
import Stalk from "/Stalk.svg"
import FlowerComponents from './components/Flower'
// import SunCursor from './components/SunCursor'
import Line from './components/Line'
import './App.css'

function App() {

  return (
    <div className='bg-black p-0 w-full min-h-screen overflow-y-auto relative flex flex-col items-center justify-start'>
      
      <div className='flex items-center flex-col m-2'>
        <p className='mainfont text-white text-[126px]'>ReVerse</p>
        <p className='mainfont text-white text-[24px]'> Pune's Biggest <span className='bg-white text-black p-1'>Slam Poetry</span> Event</p>
      </div>
      {/* <SunCursor /> */}
      <div>
      <FlowerComponents />
      <img src={Stalk} alt="" className='' style={{ zIndex: 1 }} />
      </div>
      <Line/>

    </div>
  )  
}

export default App
