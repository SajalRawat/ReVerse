import React from 'react'
import Folder from './Folder'
import CircularGallery from './CircularGallery'
import ManSunflower from '/manSunflower.svg'
const Participate = () => {

    const customImages = [
        { image: '/Memories/mem1.jpeg', text: 'Memory 1' },
        { image: '/Memories/mem2.jpeg', text: 'Memory 2' },
        { image: '/Memories/mem3.jpeg', text: 'Memory 3' },
        { image: '/Memories/mem4.jpeg', text: 'Memory 4' },
        { image: '/Memories/mem5.jpeg', text: 'Memory 5' },
        { image: '/Memories/mem6.jpeg', text: 'Memory 6' },
        { image: '/Memories/mem7.jpeg', text: 'Memory 7' },
        { image: '/Memories/mem8.jpeg', text: 'Memory 8' },
        { image: '/Memories/mem9.jpeg', text: 'Memory 9' }
    ];
    return (
        <div className='bg-black w-screen overflow-x-hidden' id='participate'>
            <div className='flex justify-center flex-col items-center'>
                <div>
                    <p className='mainfont text-white sm:text-[46px] text-[36px] my-3 float'>Participate Now</p>
                </div>



                <div style={{ height: '190px', position: 'relative' }} className='mt-20 mx-auto'>
                    <Folder size={2} className="custom-folder"
                        color="#ffdf20"
                    />
                </div>

            </div>
            <p className='mainfont text-[36px] text-white mx-10 my-6'>Why Participate?</p>
            <div className='sm:flex items-center mx-10'>
                <img src={ManSunflower} alt="" className='sm:w-[2000px] my-6' />
            <p className='font-mono  text-[18px] sm:text-[24px] text-white'>
                <span className='mainfont'>To write poetry is to find meaning, find reasons.</span> And only to speak up is to take the smallest action. What lies on sheets of paper appeals, but only what is said out loud, can make a change. For the days we spend are only counted by what we leave behind, we must strive to etch our voice in the stone of passing time.
            </p>
            </div>
                <p className='mainfont text-[42px] mt-8 text-white mx-10 my-2'>Make <span className='text-yellow-300'>Memories</span></p>

            <div className=' w-full px-2 flex justify-center'>
            </div>
            <div className='w-screen overflow-hidden flex justify-center px-0'>
                <div className='w-full h-60 sm:h-96 lg:h-[600px] overflow-hidden'>
                    <CircularGallery 
                        items={customImages}
                        bend={6}
                        textColor="#ffdf20"
                        borderRadius={0.08}
                        scrollSpeed={1.5}
                        scrollEase={0.08}
                    />
                </div>
            </div>

        </div>
    )
}

export default Participate
