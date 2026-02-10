import React from 'react'
import Folder from './Folder'
const Participate = () => {
    return (
        <div className='bg-black'>
            <div className='flex justify-center flex-col items-center'>
                <div>
                    <p className='mainfont text-white sm:text-[46px] text-[36px] my-3'>Participate Now</p>
                </div>



                <div style={{ height: '190px', position: 'relative' }} className='mt-20 mx-auto'>
                    <Folder size={2} className="custom-folder"
                        color="#ffdf20"
                    />
                </div>

            </div>
            <p className='mainfont text-[36px] text-white mx-10 my-2'>Why Participate?</p>
            <p className='font-mono mx-10 text-[18px] sm:text-[20px] text-white'>
                <span className='mainfont'>To write poetry is to find meaning, find reasons.</span> And only to speak up is to take the smallest action. What lies on sheets of paper appeals, but only what is said out loud, can make a change. For the days we spend are only counted by what we leave behind, we must strive to etch our voice in the stone of passing time.
            </p>
        
        </div>
    )
}

export default Participate
