import React from 'react'
import TeamIMG from '/teamMag.svg'

const Team = () => {
  return (
    <div id='team' className='bg-black w-full'>
       <div className='flex justify-center bg-black'>
                <p className='mainfont text-white sm:text-[46px] text-[36px] my-3 float'>Meet <span className='text-yellow-300'>Our</span> Team</p>
            </div>
         <div className='my-3'>
          <img src={TeamIMG} alt="" className='mx-auto my-10 float sm:w-[1000px] w-[350px]' />
         </div>
    </div>
  )
}

export default Team
