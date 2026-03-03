import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full p-2 py-4 flex justify-between sm:justify-around cursor-pointer items-center 
   flex-row bg-black sm:border-b-1 sm:border-white relative z-50 px-6'>
      <p className='mainfont text-white 
       sm:text-[36px] text-[36px] py-1'>ReVerse <span className='text-yellow-300'>9.0</span></p>

      {/* Desktop Links */}
      <ul className='hidden sm:flex text-white mainfont m-1 items-center gap-5 text-[20px]'>
        <a href="#participate"><li className='navButtons'>Participate</li></a>
        <a href="#brochure"><li className='navButtons'>Brochure</li></a>
        <a href="#sponsor"><li className='navButtons'>Sponsor</li></a>
        <a href="#team"><li className='navButtons'>Team</li></a>
        <a href="#contactus"><li className='navButtons'>Contact Us</li></a>
      </ul>

      {/* Desktop Button */}
      <div className="bg-white sm:block hidden flex items-center justify-center m-3">
        <button className="px-6 float mainfont py-2 font-medium bg-yellow-300 text-black w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Register Now!
        </button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className='sm:hidden flex items-center'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded p-1'
          aria-label="Toggle Navigation"
        >
          <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            {isOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className='absolute top-full left-0 w-full bg-black border-t border-gray-800 sm:hidden flex flex-col items-center py-4 z-50'>
          <ul className='text-white mainfont flex flex-col items-center gap-6 text-[20px] w-full'>
            <a href="#participate" onClick={() => setIsOpen(false)} className='w-full text-center hover:text-yellow-300 transition-colors py-2'><li>Participate</li></a>
            <a href="#brochure" onClick={() => setIsOpen(false)} className='w-full text-center hover:text-yellow-300 transition-colors py-2'><li>Brochure</li></a>
            <a href="#sponsor" onClick={() => setIsOpen(false)} className='w-full text-center hover:text-yellow-300 transition-colors py-2'><li>Sponsor</li></a>
            <a href="#team" onClick={() => setIsOpen(false)} className='w-full text-center hover:text-yellow-300 transition-colors py-2'><li>Team</li></a>
            <a href="#contactus" onClick={() => setIsOpen(false)} className='w-full text-center hover:text-yellow-300 transition-colors py-2'><li>Contact Us</li></a>
          </ul>

          {/* Mobile Button */}
          <div className="bg-white flex items-center justify-center mt-6 mb-2">
            <button className="px-6 float mainfont py-2 font-medium bg-yellow-300 text-black w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Register Now!
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
