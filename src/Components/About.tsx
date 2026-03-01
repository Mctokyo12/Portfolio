import React, { memo } from 'react'
import Button from './UI/Button'
import { FiChevronRight } from "react-icons/fi";
import { BsAward, BsCodeSlash } from 'react-icons/bs';
import About_me from './../assets/images/About_me.png'
import About_Picture from './../assets/images/About_Picture.svg'


const About = memo(() => {
  return (
    <div className='md:my-40 '>
        <div className='md:mx-37.5 mx-5'>
            <h3 className='heading_three text-primary'>About</h3>
            <div className='flex flex-col  py-13 md:flex-row items-start gap-17 '>
                <div className='md:w-[45%] w-full'>
                    <img src={About_Picture} alt=""  className='hidden md:block w-full h-full' />
                    <img src={About_me} alt="" className='md:hidden h-full w-full ' />
                </div>
                <div className='md:w-[55%] w-full'>
                    <div className='flex flex-row  items-start justify-center md:justify-start  gap-4 md:gap-16'>
                        <div className='flex  flex-col  shadow-2xl justify-between items-center  rounded-xl py-11 px-0 w-57.5 h-58.5 bg-primary'>
                            <BsAward className='size-12.5 text-white'/>
                            <h3 className='heading_three text-white'>Experience</h3>
                            <span className='heading__meduim text-white'>+2 years Working </span>
                        </div>
                        <div className='flex  shadow-2xl flex-col justify-between items-center  rounded-xl py-11 px-0 w-57.5 h-58.5 bg-primary'>
                            <BsCodeSlash className='size-12.5 text-white'/>
                            <h3 className='heading_three text-white'>Projects</h3>
                            <span className='heading__meduim text-white'>+7 Completed </span>
                        </div>
                        
                    </div>
                    <div className=''>
                        <p className='md:heading_meduim heading_four  leading-10  text-gry text-justify py-6'>Technologically driven, I operate at the intersection of software development and infrastructure.
                            With expertise in web development and computer networking, I build robust and secure applications. My DevOps approach ensures seamless automation and continuous deployment, 
                            while my AI Engineering skills allow me to integrate artificial intelligence to optimize and modernize technical solutions.
                        </p>
                        <Button name={"Let's Talk"} icon={FiChevronRight} outline={false}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
})

export default About