import React from 'react'
import Navbar from '../Header/Navbar'

function About({Heading,Content}) {
  return (
    <>
    <div className=' flex flex-col items-start px-10 sm:px-5 mt-10 mb-10'>
        <h1 className=' font-bold text-3xl mb-5 underline'>{Heading}</h1>
        <div className=' leading-relaxed mb-5 text-lg'>{Content}</div>
        <h1 className=' font-bold text-3xl mb-5 underline'>An initiative under IDEEA
        </h1>
        <div className=' leading-relaxed mb-5'>Indian Zero Carbon Energy Pathways (IDEEA), is an open source energy modelling platform founded by indian Institute of Science (IISc), Environmental Defense Fund, and Global Change Program - Jadavpur University (GCP-JU). IIT Roorkee is the member of this consortium
        and the organizing lead for this workshop </div>

        <a href="#" className=' bg-green-500 p-3 rounded-lg text-white font-bold border-2 hover:bg-green-600'>Click here to know more</a>
    </div></>
  )
}

export default About