import React from 'react'

function Secondbody() {
  return (
    <div className=' flex flex-row justify-between mx-10 md:flex-col llg:mr-36 llg:ml-36'>
        <div className="w-1/4 border-2 md:w-full flex flex-col leading-relaxed p-5 mt-5 mb-5 shadow-2xl">
            <div className="w-1/2 font-bold">OUR OFFICE</div>
            <div className="w-1/2 sm:text-sm">126, DoMS, IITR</div>
        </div>
        <div className="w-1/4 border-2 md:w-full flex flex-col leading-relaxed p-5 mt-5 mb-5 shadow-2xl">
            <div className="w-1/2 font-bold">EMAIL US</div>
            <div className="w-1/2 sm:text-sm">Ashish :</div>
            <div className="w-1/2 sm:text-sm font-thin">ashish_s1@ms.iitr.ac.in</div>
            <div className="w-1/2 sm:text-sm f">Sandeep :</div>
            <div className="w-1/2 sm:text-sm font-thin">sandeep_k@ms.iitr.ac.in</div>
        </div>
        <div className="w-1/4 border-2 md:w-full flex flex-col leading-relaxed p-5 mt-5 mb-5 shadow-2xl">
            <div className="w-1/2 font-bold">CALL US</div>
            <div className="w-1/2 ssm:text-ssm">
              <p>Ankit Sharma :</p>
              <p className=" font-thin">7088480176</p>
              <p>Sandeep Kumar :</p>
              <p className=" font-thin">7830295858</p>
            </div>
        </div>
        
    </div>
  )
}

export default Secondbody