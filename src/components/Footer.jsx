import React from 'react'
import CurvedLoop from './CurvedLoop';
import magYellow from '/magYellow.svg'


const Footer = () => {
  return (
    <div className='bg-black'>
      
<div className=' bg-black mx-10 mt-3 sm:flex' >
  <div>
  <img src={magYellow} width={400} className='sm:w-[400px] w-[300px]' alt="" />
  <p  className='mainfont text-yellow-300 text-[44px] text-center'>Register Now</p>
  </div>
  <div className='mx-[10px]'>
    <div className='bg-green-200 h-[200px] '>

    </div>
    <div className='mainfont'>
      Cont
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
