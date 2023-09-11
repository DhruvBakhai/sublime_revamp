import React from 'react'

function WorkFeature() {
    return (
        <div className='h-full mt-9 ml-5 p-4'>

            <p className='mb-2 m-5'>LOREM IPSUM OR IPSUM</p>
            <h1 className='text-5xl font-medium mb-9 m-5'>What We Offer for You</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-5">
            <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-black shadow-lg border border-gray-200 p-14 transition-transform hover:shadow-2xl transform hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mb-3 w-20 h-20 text-yellow-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>

                    <h5 className="mb-3 text-2xl font-medium leading-tight">
                        Web App Development
                    </h5>
                    <p className="mb-5 text-base">
                        We develop convenient, responsive and secure <span className='font-semibold'>web apps</span> that suits the need of the end-user.
                    </p>
                </div>
                <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-black shadow-lg border border-gray-200 p-14 transition-transform hover:shadow-2xl transform hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mb-3 w-20 h-20 text-blue-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                    <h5 className="mb-3 text-2xl font-medium leading-tight">
                        Hybrid App Development
                    </h5>
                    <p className="mb-5 text-base">
                        Tailored as per your unique requirements, we build <span className='font-semibold'>customised app</span>that have high functionality.
                    </p>
                </div>
                <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-black shadow-lg border border-gray-200 p-14 transition-transform hover:shadow-2xl transform hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mb-3 w-20 h-20 text-blue-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                    <h5 className="mb-3 text-2xl font-medium leading-tight">
                        Emerging Technologies
                    </h5>
                    <p className="mb-5 text-base">
                    We develop convenient, responsive and secure <span className='font-semibold'>web apps</span> that suits the need of the end-user.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WorkFeature
