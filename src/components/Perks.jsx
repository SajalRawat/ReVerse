import React from 'react'
import PerksIMG from '/Perks.svg'
const Perks = () => {
  return (
    <div id='perks' className='bg-white w-full'>

        <div className='mainfont flex justify-center'>
            <p className='mainfont text-black sm:text-[52px] text-[36px] my-3 float'>
                Perks
            </p>
        </div>
        <div className='flex justify-center'>
            <p className='font-mono mx-10 text-[18px] sm:text-[20px]'>
                A <span className='mainfont'> massive prize pool </span>, it's your time to thrive. <span className='mainfont'> Worth 25K </span>, it’s calling your name,Bring your A-game, set the world Aflame
            </p>
</div>
<div className='flex mt-10 mainfont flex-col items-center '>
    <img src={PerksIMG} alt="" className='float sm:w-[800px] w-[400px]' />

    <p className='text-[48px] float'>1st Prize</p>
    <p className='font-mono mb-[6px] text-[12px] sm:text-[20px]'>The one who leaves an ever-fixèd mark</p>
    <p className='text-[34px] float'>2nd Prize</p>
    <p className='font-mono mb-[4px] text-[12px] sm:text-[20px]'>A strong calling from the lesser travelled road</p>
    <p className='text-[25px] float'>3rd Prize</p>
    <p className='font-mono mb-[2px] text-[12px] sm:text-[20px]'>Hark! There's another who can move mountains</p>




</div>
      
    </div>
  )
}

export default Perks
