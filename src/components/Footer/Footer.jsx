import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="text-black body-font bg-gray-100 ">
                <div className="container px-5 py-24 mx-auto flex mmd:items-center llg:items-start mmd:flex-row mmd:flex-nowrap flex-wrap flex-col">
                    <div className="llg:w-2/5 w-5/12 sm:w-full flex-shrink-0 mmd:mx-0 mx-auto text-center mmd:text-left">
                        <a className="flex title-font font-medium items-center mmd:justify-start justify-center text-black">
                            <img src='./LOGOS.png' className="w-full text-black" viewBox="0 0 24 24" />
                        </a>
                    </div>
                    <div className="flex-grow flex flex-wrap mmd:pl-20 -mb-10 mmd:mt-0 mt-10 mmd:text-left text-center">
                        <div className="llg:w-1/4 mmd:w-1/2 w-full px-4  p-1 rounded-lg">
                            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">CONTACT US</h2>
                            <nav className="list-none mb-10 ">
                                <li>
                                    {/* <a className="text-black">Email: </a>
                                    <br /> */}
                                    <i  className="fa text-sm">&#xf0e0;</i>
                                    <a className="text-black font-thin "> tarunsharma@ms.iitr.ac.in</a>
                                </li>
                                <li>
                                    <a href='https://shunyalab.vercel.app/' className="text-black hover:text-green-500 "><i className="material-icons text-sm">&#xe80b;</i> Shunya Lab Webpage</a>
                                </li>
                                <li>
                                    <a className="text-black "><i class="fa text-2xl">&#xf10b;</i> 01332-284976</a>
                                </li>
                                <li>
                                    <a className="text-black ">Dept. of Management Studies</a>
                                </li>
                                <li>
                                    <a className="text-black ">IIT Roorkee, India</a>
                                </li>
                                
                            </nav>
                        </div>
                        <div className="llg:w-1/4 mmd:w-1/2 w-full mmd:px-1 ssm:px-4 px-4 p-1 rounded-lg">
                            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">ADDRESS</h2>
                            <nav className="list-none mb-10">
                                <li> 
                                    <p className="text-black"><i  className="fa">&#xf041;</i> 126 DOMs, IIT Roorkee</p>
                                </li>
                                <li>
                                    <p className="text-black mmd:font-thin">Postal Code: 247667</p>
                                </li>
                                
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-black bg-opacity-20">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col ssm:flex-row">
                        <p className="text-black text-sm text-center ssm:text-left">© 2024 All Rights Reserved by DoMS -
                            <a href="https://www.iitr.ac.in/" rel="noopener noreferrer" className="text-black ml-1" target="_blank">IIT Roorkee</a>
                        </p>
                        <span className="inline-flex ssm:ml-auto ssm:mt-0 mt-2 justify-center ssm:justify-start">
                            <a className="text-black">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-black">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-black">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-black">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer