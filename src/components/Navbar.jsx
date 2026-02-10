import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full p-2 py-4 flex justify-around cursor-pointer items-center 
   sm:flex-row flex-col bg-black sm:border-b-1 sm:border-white'>
        <p className=' mainfont text-white 
       sm:text-[36px] text-[36px] py-1'>ReVerse <span className='text-yellow-300'>9.0</span></p>
      <ul className='text-white mainfont m-1 flex items-center gap-5  text-[16px] sm:text-[20px]'>
        <li className='navButtons'>Participate</li>
        <li className='navButtons'>Perks</li>
        <li className='navButtons'>Sponsor</li>
        <li className='navButtons'>Team</li>
      </ul>
      <div  className="bg-white sm:block hidden flex items-center justify-center m-3">
      <button className="px-6 float mainfont py-2 font-medium bg-yellow-300 text-black w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Register Now!
      </button>
    </div>
    </div>
  )
}

export default Navbar
