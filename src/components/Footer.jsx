import React from 'react'
import CurvedLoop from './CurvedLoop';
import magYellow from '/footerSunflower.svg';
import Map from './Map';

const Footer = () => {
  return (
    <div className='bg-black'>
      
<div className=' bg-black mt-3 sm:flex' >
  <div className='flex flex-col justify-center items-center mx-2 '>
  <img src={magYellow} className='sm:w-[700px] w-[300px] float' alt="" />
  <p  className='mainfont text-white hover:text-yellow-300 text-[40px] text-center'>Register Now</p>
  </div>
  <div className='mx-[10px] mt-6 w-full'>
    <div>
      <Map/>
    </div>
  </div>
</div>
<div className='w-[90vw] mt-[20px] sm:mt-[40px]'>
        <CurvedLoop 
  marqueeText=" ✦ Made with ❤️ by Magboard "
  speed={1}
  curveAmount={0}
  direction="right"
  interactive
  className="custom-text-style mainfont tracking-wide text-[36px]"
/>
</div>
    </div>
  )
}

export default Footer
