import React from 'react'
import TrueFocus from './TrueFocus'

const HeroTitle = () => {
  return (
    <>
      <div className='m-2 mainfont flex items-center text-[16px] sm:text-[56px]'>
        <p className='p-1 text-white'> The </p>
        <p className='p-1 text-yellow-300 float'>9th</p>
        <p className='p-1 text-white'>Edition of</p>
        <p className='p-1 text-yellow-300 float'>ReVerse</p>
        <p className='p-1 text-white '>is Here !!!</p>

      </div>
      <p className='mainfont text-white text-[16px] sm:text-[36px] m-3 sm:flex sm:gap-2 sm:items-center justify-center '> <span className='text-yellow-300'>Pune's Biggest</span> <TrueFocus
        sentence="Slam Poetry"
        manualMode={false}
        blurAmount={5}
        borderColor="Yellow"
        animationDuration={0.5}
        pauseBetweenAnimations={1}
      /> <span className='text-yellow-300 absolute right-2 sm:static z-2'>Event</span></p>
    </>
  )
}

export default HeroTitle
