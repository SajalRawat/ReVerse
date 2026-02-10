import React from 'react'
import Brochure from './Brochure'
import MagBlack from '/magBlack.svg'

const About = () => {
  return (
    <div className='bg-white w-full flex flex-col items-center'>
      <div className='mainfont flex justify-center sm:text-[46px] text-[36px] gap-2'>
        <span className='text-black'>About</span>
        <span className=''>Reverse</span>
      </div>
      <p className='mt-3 mx-10 text-[18px] sm:text-[20px] font-mono '>
Hosted by the <span className='font-bold mainfont'>Magazine Board </span> of the <span className='font-bold mainfont'>Army Institute of Technology, Pune</span>, ReVerse is a premier poetry slam and open mic event founded in 2015. It serves as a creative sanctuary for those looking to transform raw emotion and social critique into powerful verse, offering a voice to the "unspeakable." Whether you are capturing the whispers of love or the complexities of humanity, ReVerse invites you to set your words free and leave a lasting ripple through the power of performance poetry.
      </p>
      <img src={MagBlack} className='float w-[300px] sm:w-[400px] m-4' alt="" />
      <Brochure/>
    </div>
  
  )
}

export default About
