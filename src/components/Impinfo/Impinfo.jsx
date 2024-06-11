import React from 'react'
import UnOrderedList5 from './Listcancelation'

function Impinfo() {
    return (
        <div className='mt-10 mb-10'>
            <div className='flex flex-col items-center'>
                <p className=' font-extrabold text-2xl text-green-500 mb-2 underline'>IMPORTANT DATES</p>
                <p className=' bg-green-600 p-1 rounded-lg text-white mb-5'>Registrations are now closed</p>
                <p>Last date of registration: Please refer the below table</p>
                <p className=' text-gray-500 font-mono'>Workshop dates: 2spet-3sept</p>
            </div>
            <div className="max-w-4xl mx-auto p-4 bg-white shadow-xl rounded-lg mb-10">
                <table className="min-w-full table-auto">
                    <thead className="bg-green-600 text-white">
                        <tr>
                            <th className="px-4 py-2">Header 1</th>
                            <th className="px-4 py-2">Header 2</th>
                            <th className="px-4 py-2">Header 3</th>
                            <th className="px-4 py-2">Header 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">Row 1, Cell 1</td>
                            <td className="border px-4 py-2">Row 1, Cell 2</td>
                            <td className="border px-4 py-2">Row 1, Cell 3</td>
                            <td className="border px-4 py-2">Row 1, Cell 4</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Row 2, Cell 1</td>
                            <td className="border px-4 py-2">Row 2, Cell 2</td>
                            <td className="border px-4 py-2">Row 2, Cell 3</td>
                            <td className="border px-4 py-2">Row 2, Cell 4</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">Row 3, Cell 1</td>
                            <td className="border px-4 py-2">Row 3, Cell 2</td>
                            <td className="border px-4 py-2">Row 3, Cell 3</td>
                            <td className="border px-4 py-2">Row 3, Cell 4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className=' flex flex-col items-center mr-20 ml-20 sm:mr-5 sm:ml-5 mb-10'>
                <p className=' font-extrabold text-2xl text-green-500 underline mb-5'>REQUIRED BACKGROUND PREREQUISITES</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis voluptate earum eaque dolore minima eius perferendis nemo aspernatur illum suscipit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fuga cum officia doloremque aliquid ab quam inventore incidunt nisi ex! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur vero, magnam quas dicta nostrum odio suscipit ipsam dolores nam rerum!</p>
                <p className=' text-gray-500 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, quo!</p>
            </div>
            <div className='flex flex-col items-center mb-10'>
                <p className=' font-extrabold text-2xl text-green-500 mb-5 underline'>REGISTRATIONS ARE NOW CLOSED</p>
                <p>WAITING LIST</p>
                <p>BECOME A SPONSOR</p>
            </div>
            <div className="max-w-4xl mx-auto p-4 bg-white shadow-xl rounded-lg mb-20">
                <table className="min-w-full table-auto">
                    <thead className="bg-green-600 text-white">
                        <tr>
                            <th className="px-4 py-2">Header 1</th>
                            <th className="px-4 py-2">Header 2</th>
                            <th className="px-4 py-2">Header 3</th>
                            <th className="px-4 py-2">Header 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">Row 1, Cell 1</td>
                            <td className="border px-4 py-2">Row 1, Cell 2</td>
                            <td className="border px-4 py-2">Row 1, Cell 3</td>
                            <td className="border px-4 py-2">Row 1, Cell 4</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Row 2, Cell 1</td>
                            <td className="border px-4 py-2">Row 2, Cell 2</td>
                            <td className="border px-4 py-2">Row 2, Cell 3</td>
                            <td className="border px-4 py-2">Row 2, Cell 4</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">Row 3, Cell 1</td>
                            <td className="border px-4 py-2">Row 3, Cell 2</td>
                            <td className="border px-4 py-2">Row 3, Cell 3</td>
                            <td className="border px-4 py-2">Row 3, Cell 4</td>
                        </tr>
                    </tbody>
                </table>
                <p className=' text-sm text-red-500 text-center'>Notification of acceptance and fees payment link will typically be done within 10 days of doing registration</p>
            </div>
            <div className=' flex flex-col items-center mb-20'>
                <p className=' font-extrabold text-2xl text-red-500 underline mb-5'>CANCELATION POLICY</p>
                <p className='mb-10 text-gray-400'>Refunds are subject to cancellation charges as follows :</p>
                <UnOrderedList5 />
            </div>
            <div className='flex justify-center'>
            <a href="https://www.google.com" target="_blank"
                className="group relative overflow-hidden bg-green-600 focus:ring-4 focus:ring-blue-300 inline-flex items-center px-7 py-2.5 rounded-lg text-white justify-center">
                <span className="z-40">TENTATIVE SCHEDULE FOR LSO</span>
                <svg className="z-40 ml-2 -mr-1 w-3 h-3 transition-all duration-300 group-hover:translate-x-1" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
                <div
                    className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000">
                </div>
            </a></div>
        </div>
    )
}

export default Impinfo