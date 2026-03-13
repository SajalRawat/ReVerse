import { useState } from 'react'
import Stalk from "/Stalk.svg"
import FlowerComponents from './components/Flower'
import Statue from '/statueEye.svg'
import NavBar from './components/Navbar'
import HeroTitle from './components/HeroTitle'
import Line from './components/Line'
import Timer from './components/Timer'
import About from './components/About'
import LineWhite from './components/LineWhite'
import './App.css'
import Participate from './components/Participate'
import Perks from './components/Perks'
import Sponsor from './components/Sponsor'
import Team from './components/Team'
import ScrollToTop from './components/ScrollToTop'
import Goodies from './components/Goodies'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import Particles from './components/Particles';



function App() {

  return (
    <div className='bg-black p-0 w-full min-h-screen overflow-y-hidden relative flex flex-col items-center justify-start'>
      <div className='absolute inset-0 z-0 pointer-events-none fixed flex justify-center items-center overflow-hidden min-h-screen'>
        <Particles
          particleColors={["#facc15"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div className='relative z-10 w-full flex flex-col items-center justify-start'>
        <NavBar />

        <div className='flex justify-end'>
          <div><img className='float sm:w-[500px] m-2' width={600} src={Statue} alt="" />
          </div>
        </div>
        <HeroTitle />
        <div className="bg-white  flex items-center justify-center m-3">
          <button className="px-6 float mainfont py-2 font-medium bg-yellow-300  sm:text-[36px] text-black w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] " onClick={()=>{
          window.open('https://docs.google.com/forms/d/e/1FAIpQLSfdbQQKJ6OeS1JosZ5SEnteyIQYxisw8cOASfdPjbMayMRvxw/viewform?fbzx=4336072177053565718','_blank')
        }}>
            Register Now!
          </button>
        </div>
        <div className='mainfont mt-5'>
          <p className=' text-white sm:text-[48px] text-[24px] flex items-center  justify-center gap-3'>  <p className='float'>Early Bird </p> <span className='text-yellow-300'>Offer</span> <span className='line-through'> ₹149 </span><span className='sm:text-[56px] float block text-[24px]' >₹99</span>
          </p>
          <p className='text-red-300 text-center float ' >* Only Till 19th March</p>
          <p className='text-white sm:text-[24px] text-center text-[18px] mt-[10px] float'>
            * Discounted Price of <span className='text-yellow-300'> ₹69 </span> for <span className='text-yellow-300'>AIT</span> Students :)
          </p>

        </div>
        <Timer />
        <Line />
        <About />
        <LineWhite />
        <Participate />
        <Line />
        <Perks />
        <Goodies />
        <LineWhite />
        <Sponsor />
        <Line />
        <ContactUs/>
        <LineWhite/>
        <Team />
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  )
}

export default App
