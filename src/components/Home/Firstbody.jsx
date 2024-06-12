import React from 'react'

function Firstbody() {
    return (
        <div>
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 mmd:flex-row flex-col items-center">
    <div className="llg:max-w-lg llg:w-full mmd:w-1/2 w-5/6 mb-10 mmd:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="./dept_ms.jpeg"/>
    </div>
    <div className="llg:flex-grow mmd:w-1/2 llg:pl-24 mmd:pl-16 flex flex-col mmd:items-start mmd:text-left items-center text-center">
      <h1 className="title-font ssm:text-4xl text-3xl mb-4 font-medium text-gray-900">ABOUT IDEEA
      </h1>
      <p className="mb-8 leading-relaxed font-thin">IDEEA is an indigenously developed platform for energy system model generators for energy planning and capacity optimisation. It evaluates various technologies and pathways, simulating energy system operations to optimize energy mix and capacity across locations. The model generators in IDEEA are open source (free for all), implemented in multiple programming languages, and includes options like energyRT and Switch. The model considers energy storage, transmission, and demand-side flexibility, with potential for expansion into other sectors. IDEEA empowers stakeholders to gain insights and make informed decisions for sustainable and decarbonized energy systems in India.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white duration-500 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">more..</button>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default Firstbody