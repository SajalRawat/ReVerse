import React from 'react'

const Sponsor = () => {
    return (
        <div id='sponsor' className='w-full bg-black'>
            <div className='flex justify-center'>
                <p className='mainfont text-white sm:text-[46px] text-[36px] my-3 float'>Sponsor <span className='text-yellow-300'>Us</span></p>
            </div>
            <div className='flex justify-center'>
            <img src="/whySponsor.svg" className='sm:w-[1000px]' width={3000}   alt="" />
            </div>
        </div>
    )
}

export default Sponsor
