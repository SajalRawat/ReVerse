import React from 'react'
import TeamIMG from '/teamMag.svg'

const Team = () => {
  return (
    <div id='team' className='bg-white w-full'>
       <div className='flex justify-center'>
                <p className='mainfont text-black sm:text-[46px] text-[36px] my-3 float'>Meet <span className='text-yellow-300'>Our</span> Team</p>
            </div>
          <div>
            <img src={TeamIMG} className='sm:w-[1000px] w-[600px] mx-auto sm:my-[-80px]' alt="" />
          </div>
    </div>
  )
}

export default Team
