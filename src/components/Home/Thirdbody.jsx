import React from 'react'
import UnOrderedList3 from '../List1'
import UnOrderedList2 from '../List2'

function Thirdbody() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className=" px-5 py-24 mx-auto flex flex-wrap justify-center">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 mmd:w-1/2 llg:w-full">
                            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8  flex-col">
                                <p className=' bg-green-600 text-white pl-2 rounded'>KEY HIGHLIGHTS</p>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                                    <UnOrderedList2/>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 mmd:w-1/2 llg:w-full">
                            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8  flex-col">
                            <p className=' bg-green-600 text-white pl-2 rounded'>TOPICS</p>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
                                    <UnOrderedList3/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Thirdbody