import React from 'react'

function Secondbody() {
  return (
    <div className=' flex flex-row justify-between mx-10 md:flex-col llg:mr-36 llg:ml-36'>
        <div className="w-1/4 border-2 md:w-full flex flex-col leading-relaxed p-5 mt-5 mb-5 shadow-2xl">
            <div className="w-1/2 font-bold">REACH US :</div>
            <div className="w-1/2 sm:text-sm my-auto"><i  className="fa">&#xf041;</i> 126, DoMS, IITR</div>
            <a href='https://shunyalab.vercel.app/' className="w-1/2 sm:text-sm my-auto hover:text-green-500"><i className="material-icons text-lg">&#xe80b;</i> Shunya Lab</a >
            {/* <div className="w-1/2 sm:text-sm hover:text-green-500"><i className="material-icons text-lg">&#xe80b;</i></div> */}
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