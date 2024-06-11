import React from 'react'
import Navbar from '../Header/Navbar'
import UnOrderedList1 from './TeamList'


function Teamhead() {
  return (
    <>
      <div className="flex flex-col items-center mt-10 mb-3">
        <img className="w-1/4 md:w-1/3 sm:w-1/2 rounded-lg" src='./director.jpg' />
        <div className="w-1/3 md:w-1/2 sm:w-full flex flex-col items-center">
          <p className=' font-bold text-3xl'>Patron</p>
          <p>Prof. Kamal Kishore Pant</p>
          <p>Director, IIT Roorkee</p>
        </div>
      </div>
      <div className='flex justify-center sm:flex-col sm:items-center mb-20'>
        <UnOrderedList1 head={"CORE COMMITTEE"}/>
        <UnOrderedList1 head={"ORGANIZING COMMITTEE"}/>
      </div>
    </>
  )
}

export default Teamhead