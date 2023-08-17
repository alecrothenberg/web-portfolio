import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-white'>
                Hi, my name is {/* change this to whatebber */} 
            </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Alec Rothenberg</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Computer Science Student, </h2>
            <p className='text-[#8892b0] py-4 max-w-[700]'>
                And I'm currently looking for my first full time software engineering role! 
                My interests lie in backend development, cloud computing, and innovative technology. 
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-orange-600'>
                <Link to='experience' smooth={true} duration={500}>View More!</Link>
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3 hover'/>
                    </span>
                </button>
            </div>
        </div>    

    </div>
  )
}

export default Home