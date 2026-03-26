import { memo } from 'react'
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
import { Link } from 'react-router'
import { useMediaQuery } from 'react-responsive'

const Abous_Us = memo(() => {
  const isTableOrMobile = useMediaQuery({query: '(max-width:768px)'})
  return (
    <>
      <NavBar/>
      <div className='mt-28 md:mt-28  md:mx-37.5 mx-5'> 
        <span className=' heading_two text-center  text-primary  w-full mb-12 block' data-aos="fade-up" data-aos-duration="3000">About Me</span>
        <div className='flex flex-col  py-13 md:flex-row items-start gap-17 '>
          <div className='md:w-[40%] w-full' data-aos="fade-up" data-aos-duration="3000">
            <img src={About_Picture} alt=""  className='hidden md:block w-full h-full' />
            <img src={About_me} alt="" className='md:hidden h-full w-full ' />
          </div>
          <div className='md:w-[55%] w-full' data-aos="fade-left">
            <h2 className=" text-primary heading_two text-justify  ">The Architect of Intelligent & Scalable Ecosystems</h2>
            <div className=''>
              <p className='md:heading_meduim max-md:heading_meduim text-wrap    text-black text-justify py-6'>
                As a Software Engineer, I am passionate about crafting intelligent and scalable ecosystems that drive innovation and efficiency. With expertise in software development, artificial intelligence, cloud operations, and networking & security, I specialize in building robust solutions that empower businesses to thrive in the digital age. My commitment to excellence and continuous learning fuels my dedication to delivering cutting-edge technology solutions that make a meaningful impact.
              </p>
              <div className=' flex flex-col  md:flex-row  items-center   gap-5'>
                <Link to={"/contacts"} className='max-md:w-full'>
                  <Button name={"Let's Talk"}  icon={FiMessageSquare}  outline={false} ismobile={isTableOrMobile}/>
                </Link>
                <Link to={"/services"}>

                  <div className=' flex items-center gap-2'>
                    <span className='heading_meduim dark:text-white'>Check Our Services</span>
                    <FiArrowRight  className='text-primary size-6'/>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>

        <div className='my-24'>
          <h3 className='heading_three text-primary'>My Core Pillars of Expertise</h3>
          <div className='flex md:flex-row  justify-between flex-col  relative items-center '>
            <div className='md:w-[45%] ' data-aos="zoom-in-right"  data-aos-duration="1000">
              <img src={Skill} alt="" />
            </div>
            <div className='md:w-[55%] ' data-aos="zoom-in-left" data-aos-duration="1000">
              <span className='heading_three text-primary hidden md:block '>My Technical Expertise</span>
              <div className='w-full h-0 border-2 border-primary hidden md:block'></div>
              <div className='mt-4  grid md:grid-cols-2   grid-cols-1  items-center  gap-y-2  gap-x-4'>
                <CoreSkill background='3B71FE' icon={programming} title='Software Development' content='Building high-performance applications with a focus on clean architecture and seamless UX.' />
                <CoreSkill background='34c759' icon={ai_svg} title='Artificial Intelligence' content='Integrating LLMs, predictive modeling, and data pipelines into functional products.' />
                <CoreSkill background='6155F5' icon={googlecloud} title='Cloud Operations' content='Automating lifecycles (CI/CD), containerization (Kubernetes), and managing scalable Cloud environments(AWS/Azure).' />
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