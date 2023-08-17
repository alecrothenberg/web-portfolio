import React, {useState} from 'react'
import rocket from '../assets/spaceForce.png'
import berry from '../assets/strawberries.png'
const Experience = () => {

  const [popup, setPopup] = useState(false)
  const togglePopup = () => setPopup(!popup)

  return (
    <div name='experience' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
        {/* container */}
        <div className=' max-w-[1000px] p-4 mx-auto flex flex-col justify-center w-full h-full'>    
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600'>Experience</p>
                <p className='py-6'>Some of my recent experience!</p>
            </div>

            {/* card item */}
            <div className='grid sm:grid-cols-1 md:grid-cols-1 gap-4'>
                <div style={{backgroundImage:`url(${rocket})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Birds Eye Security: a H4D Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://www.commonmission.us/success-stories-outcomes/alec-rothenberg'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Article</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 gap-4'>
                <div style={{backgroundImage:`url(${berry})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Farmpal 
                        </span>
                        <div className='pt-8 text-cente'>
                            <a href='https://news.warrington.ufl.edu/students/fire-neural-network-wins-uf-ai-days-pitch-competition/?_gl=1*1f86z9m*_gcl_au*MTg1NjA2NjIwOS4xNjkyMjk1ODUz'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Article</button>
                            </a>
                        </div>
                        <div className='pt-8 text-center'>
                            <button onClick={togglePopup} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Learn more!
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {popup && (
                    <div className='pt-8 text-center'>
                        <p>I served as the technical lead for FarmPal LLC. For several months as myself and four other students tried to start the business.
                            The idea revolved around using IoT devices in strawberry fields to gather soil and irrigation data and combining that with weather data
                            to use machine learning to better irrigate strawberry plants.
                        </p>
                        <button onClick={togglePopup} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Hide information!</button>
                    </div>
                )}
            </div>            
        </div>
    </div>
  )
}

export default Experience