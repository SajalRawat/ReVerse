import React from 'react'
import ContactIMG from '/ContactUs.svg'
import IGLogo from '/instaLogo.svg'
import LinkedIn from '/linkedinLogo.svg'
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
      <div className='socialHandles mainfont cursor-pointer animation'>
        <a target='_blank' href="https://www.instagram.com/reverse_ait">
        <p className='flex items-center gap-2 my-3'>
        <img src={IGLogo} alt="" width={30} />
        <span className='hover:text-yellow-300 '>reverse_ait</span>
        </p>
        </a>
        <a href="https://www.linkedin.com/company/magazine-board-ait/?originalSubdomain=in" target='_blank'>
        <p className='flex items-center gap-2 my-3'>
        <img src={LinkedIn} alt="" width={30} />
        <span className='hover:text-yellow-300 '>Magboard Official</span>
        </p>
        </a>
        <a target='_blank' href="https://www.instagram.com/magboard/">
        <p className='flex items-center gap-2 my-3'>
        <img src={IGLogo} alt="" width={30} />
        <span className='hover:text-yellow-300 '>Magboard</span>
        </p>
        </a>
        

      </div>
    </div>
  )
}

export default ContactUs
