import React from 'react'
import Dropdown4 from './Dropdown'
import { Link,NavLink } from 'react-router-dom';

function Navbar({ visib , Heading}) {
    let vi="";

    if(visib!="hidden"){vi="hidden";}

    return (
        <div className=' bg-nav-img bg-cover text-white pb-0'>
            <div className='flex flex-row justify-between px-40 sm:px-5 md:px-20 p-4 mmd:pb-5 pb-0 bg-black backdrop-blur-sm bg-opacity-60'>
                <div className=' text-2xl font-extrabold font-mono text-green-500'>IDEEA 2024</div>
                <Dropdown4 />
                <div className='flex flex-row md:hidden '>
                    <NavLink to="/" className={({isActive})=>`mr-4 hover:text-green-500 duration-500 ${isActive ? "text-green-500": ""}`}>Home</NavLink>
                    <NavLink to="/About" className={({isActive})=>`mr-4 hover:text-green-500 duration-500 ${isActive ? "text-green-500": ""}`}>About</NavLink>
                    <NavLink to="/Speakers" className={({isActive})=>`mr-4 hover:text-green-500 duration-500 ${isActive ? "text-green-500": ""}`}>Speakers</NavLink>
                    <NavLink to="/Team" className={({isActive})=>`mr-4 hover:text-green-500 duration-500 ${isActive ? "text-green-500": ""}`}>Team</NavLink>
                    <NavLink to="/Impinfo" className={({isActive})=>`mr-4 hover:text-green-500 duration-500 ${isActive ? "text-green-500": ""}`}>Imp info.</NavLink>
                    <NavLink to="/Contact" className={({isActive})=>`mr-4 hover:text-green-500 duration-500 ${isActive ? "text-green-500": ""}`}>Contacts</NavLink>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className={visib}>
                    <div className='flex flex-col rounded-3xl p-10 '>
                        <div className='flex justify-center font-bold text-xl '>Workshop on</div>
                        <div className='flex justify-center font-bold text-2xl md:text-lg'>OPEN-SOURCE ENERGY SYSTEM ANALYSIS</div>
                        <div className='flex justify-center font-bold md:text-sm'>To Be Held At</div>
                        <div className='flex justify-center  font-bold text-2xl md:text-lg'> Management Studies, IIT Roorkee</div>
                        <div className='flex justify-center font-bold md:text-sm '>2nd - 3rd SEPTEMBER 2024</div>
                        <div className='flex justify-center mt-3'>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLSdgwyjIyoow8nEJEaSUKJzazSvJ2gKVimmak6QZWT4BaZr75A/viewform?usp=sf_link' className=' mr-2 p-2 bg-green-500 duration-1000 rounded-md hover:bg-green-700 cursor-pointer font-bold'><p className=' bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 hover:text-transparent duration-1000'>REGISTRATION</p></a>
                        </div>
                    </div>
                </div>
                    <div className={vi}> <div className='flex flex-col rounded-3xl p-10'>
                        <div className='flex justify-center  font-bold text-2xl md:text-lg'>{Heading}</div>
                        
                    </div>
                </div>
            </div>
            <div className=' w-full h-4 bg-gradient-to-t from-white to-transparent'></div>
        </div>
    )
}

export default Navbar