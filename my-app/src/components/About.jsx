import React from 'react'
import headshot from '../assets/alec (1).JPG'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-600'>
                        About
                    </p>
                </div>
                <div></div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi I'm Alec!</p>
                    </div>
                    <div className='col-span-2'>
                        <p>
                            I am a computer science student looking for my first full time role.
                            I am a senior at the University of Florida and I will be graduating in May 2024 with 
                            my B.S. in Computer Science along with a minor in engineering innovation.
                            My interests lie in backend development and cloud applications, which I gained experience with at my internship in summer 2023. 
                            I'm looking forward to starting my career as an engineer in these spaces!
                        </p>
                    </div>
                </div>
                <img src={headshot}></img>
            </div>
        </div>
    </div>
  )
}

export default About