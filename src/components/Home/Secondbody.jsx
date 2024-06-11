import React from 'react'

function Secondbody() {
  return (
    <div className=' flex flex-row justify-between mx-10 md:flex-col'>
        <div className="w-1/4 border-2 md:w-full flex flex-col leading-relaxed p-5 mt-5 mb-5 shadow-2xl">
            <div className="w-1/2 font-bold">OUR OFFICE</div>
            <div className="w-1/2 sm:text-sm">126, DoMS, IITR</div>
        </div>
        <div className="w-1/4 border-2 md:w-full flex flex-col leading-relaxed p-5 mt-5 mb-5 shadow-2xl">
            <div className="w-1/2 font-bold">EMAIL US</div>
            <div className="w-1/2 sm:text-sm">tarunsharma@ms.iitr.ac.in</div>
        </div>
        <div className="w-1/4 border-2 md:w-full flex flex-col leading-relaxed p-5 mt-5 mb-5 shadow-2xl">
            <div className="w-1/2 font-bold">CALL US</div>
            <div className="w-1/2 sm:text-sm">12345456</div>
        </div>
        
    </div>
  )
}

export default Secondbody