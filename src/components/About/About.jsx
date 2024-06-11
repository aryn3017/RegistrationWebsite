import React from 'react'
import Navbar from '../Header/Navbar'

function About({Heading,Content}) {
  return (
    <>
    <div className=' flex flex-col items-start px-10 sm:px-5 mt-10 mb-10'>
        <h1 className=' font-bold text-3xl mb-5 underline'>{Heading}</h1>
        <div className=' leading-relaxed mb-5'>{Content}</div>
        <a href="#" className=' bg-green-500 p-3 rounded-lg text-white font-bold border-2 hover:bg-green-600'>Click here to know more</a>
    </div></>
  )
}

export default About