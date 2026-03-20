import React, { memo } from 'react'
import NavBar from '../Components/NavBar'
import Button from '../Components/UI/Button'
import About_me from './../assets/images/About_me.png'
import Skill from './../assets/images/Skill.svg'
import About_Picture from './../assets/images/About_Picture.svg'
import { FiArrowRight, FiMessageSquare } from 'react-icons/fi'
import CoreSkill from '../Components/UI/CoreSkill'
import ai_svg from './../assets/images/ai_svg.svg'
import googlecloud from './../assets/images/googlecloud.svg'
import programming from './../assets/images/programming.svg'
import server from './../assets/images/server.svg'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'

const Abous_Us = memo(() => {

  return (
    <>
      <NavBar/>
      <div className='mt-28 md:mt-50  md:mx-37.5 mx-5'> 
        <span className=' heading_two text-center  text-primary  w-full mb-12 block'>About Me</span>
        <div className='flex flex-col  py-13 md:flex-row items-start gap-17 '>
          <div className='md:w-[40%] w-full'>
            <img src={About_Picture} alt=""  className='hidden md:block w-full h-full' />
            <img src={About_me} alt="" className='md:hidden h-full w-full ' />
          </div>
          <div className='md:w-[55%] w-full'>
            <h2 className="heading_one text-primary ">The Architect of Intelligent & Scalable Ecosystems</h2>
            <div className=''>
              <p className='md:heading_meduim heading_four text-wrap  leading-10  text-black text-justify py-6'>
                As a Software Engineer, I am passionate about crafting intelligent and scalable ecosystems that drive innovation and efficiency. With expertise in software development, artificial intelligence, cloud operations, and networking & security, I specialize in building robust solutions that empower businesses to thrive in the digital age. My commitment to excellence and continuous learning fuels my dedication to delivering cutting-edge technology solutions that make a meaningful impact.
              </p>
              <div className=' flex flex-col  md:flex-row  items-center   gap-5'>
                <Button name={"Let's Talk"}  icon={FiMessageSquare}  outline={false}/>
                <div className=' flex items-center gap-2'>
                  <span className='heading_meduim dark:text-white'>Check Our Services</span>
                  <FiArrowRight  className='text-primary size-6'/>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='my-32'>
          <h3 className='heading_three text-primary'>My Core Pillars of Expertise</h3>
          <div className='flex md:flex-row flex-col  items-center '>
            <div className='md:w-[40%]'>
              <img src={Skill} alt="" />
            </div>
            <div className='md:w-[60%]'>
              <span className='heading_three text-primary hidden md:block '>My Technical Expertise</span>
              <div className='w-full h-0 border-2 border-primary hidden md:block'></div>
              <div className='mt-4 flex flex-wrap items-center  gap-y-4 gap-x-2'>
                <CoreSkill background='3B71FE' icon={programming} title='Software Development' content='I excel in designing and implementing robust software solutions using modern programming languages and frameworks.' />
                <CoreSkill background='34c759' icon={ai_svg} title='Artificial Intelligence' content='I leverage machine learning and AI techniques to build intelligent systems that can learn and adapt.' />
                <CoreSkill background='6155F5' icon={googlecloud} title='Cloud Operations' content='I specialize in deploying and managing scalable cloud infrastructure to ensure high availability and performance.' />
                <CoreSkill background='FF8D28' icon={server} title='Networking & Security' content='I have a strong foundation in networking principles and security best practices to build secure and reliable systems.' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial/>
      <Footer/>
    </>
  )
})

export default Abous_Us