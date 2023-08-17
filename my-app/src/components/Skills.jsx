import React from 'react'
import Python from '../assets/python.png';
import cPlusPlus from '../assets/c++.png';
import go from '../assets/golang.png';
import js from '../assets/javasciprt.png';
import git from '../assets/git.png';
import aws from '../assets/aws.png';

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f]  text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
              <p className='text-4xl font-bold inline border-b-4 border-blue-600 px-4'>Skills</p>
              <p className='py-4'>These are the core technologies I have experience with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={cPlusPlus} alt = "C++ icon" />
                <p className='my-4'>C++</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Python} alt = "Python icon" />
                <p className='my-4'>Python</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={js} alt = "JS icon" />
                <p className='my-4'>Javascript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={aws} alt = "AWS icon" />
                <p className='my-4'>AWS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={go} alt = "Go icon" />
                <p className='my-4'>Golang</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={git} alt = "Git icon" />
                <p className='my-4'>Git</p>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Skills