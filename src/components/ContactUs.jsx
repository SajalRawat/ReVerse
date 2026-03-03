import React from 'react'
import ContactIMG from '/ContactUs.svg'
const ContactUs = () => {
  return (
    <div id='contactus' className='bg-white w-full flex items-center flex-col '>
      <div className='flex gap-5'>
       <p className='mainfont text-black sm:text-[52px] text-[36px] float'>
                Contact
            </p>
       <p className='mainfont text-yellow-300 sm:text-[52px] text-[36px] float'>
                Us
            </p>
</div>

      <img src={ContactIMG} alt="" className='sm:w-[800px] float w-[500px]' />
    </div>
  )
}

export default ContactUs
