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
    <div className='mainfont mt-3'>
      <p className='text-[24px] text-center  sm:text-[44px] text-[34px] text-yellow-300'>Contact Us</p>
      
      <div className='flex sm:flex-row flex-col justify-around '>
        <div>
        <p className='text-yellow-300 mt-3 text-[22px]'>Hemant Rai</p>
        <p className='text-white mt-3 text-[22px]'>+91 8009914672</p>
</div>  <div>
        <p className='text-yellow-300 mt-3 text-[22px]'>Milan Patra</p>
        <p className='text-white mt-3 text-[22px]'>+91 9156384972</p>
</div>
      
      </div>
    </div>
  </div>
  <div>

  </div>
</div>
<div className='w-[90vw] mt-[20px] sm:mt-[100px]'>
        <CurvedLoop 
  marqueeText="Made with ❤️ by MagBoard ✦"
  speed={1}
  curveAmount={0}
  direction="right"
  interactive
  className="custom-text-style mainfont tracking-wide"
/>
</div>
    </div>
  )
}

export default Footer
