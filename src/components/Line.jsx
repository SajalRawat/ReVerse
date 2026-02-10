import React from 'react'
import Marquee from "react-fast-marquee";
import torn from "/torn-paper.png"

const Line = () => {
  return (
    <div>
      <img src={torn} alt="" className='rotate-180' />
    </div>
  )
}

export default Line
