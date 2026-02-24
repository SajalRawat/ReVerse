import React from 'react'
import Lanyard from './Lanyard.jsx'
const Goodies = () => {
  return (
    <div className='bg-white w-full pt-10 '>
      <div className='flex justify-center mainfont'> 
        <p className='sm:text-[46px] text-[36px] float'>Goodies</p>
      </div>
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
  )
}

export default Goodies
