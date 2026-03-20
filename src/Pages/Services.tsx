import { memo } from 'react'
import NavBar from '../Components/NavBar'
import { FiArrowRight, FiMessageSquare } from 'react-icons/fi'
import Button from '../Components/UI/Button'
import Process from '../Components/UI/Process'
import Vector_2 from './../assets/images/Vector_2.svg'
import Vector_3 from './../assets/images/Vector_3.svg'
import Vector_3_1 from './../assets/images/Vector_3_1.svg'
import Vector_4 from './../assets/images/Vector_4.svg'
import Vector_5 from './../assets/images/Vector_5.svg' 
import left from './../assets/images/left.svg'
import right from './../assets/images/right.svg'
import Programming_servie from './../assets/images/Programming_service.svg'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'


const Services = memo(() => {
  return (
    <>
      <NavBar/>
        <div className='mt-28 md:mt-50  md:mx-37.5 mx-5'>
            <div className=' flex justify-center items-center w-full my-30'>
                <div className='flex flex-col gap-12 items-center  w-3xl  text-center'>
                    <span className=' heading_two text-center  text-primary  w-full'>Our Services</span>
                    <h1 className='heading_one text-black'>Services We Offres</h1>
                    <span className='text-text/60 text-2xl'>
                        We don’t just offer services; we build interconnected ecosystems. From the foundational network to the intelligent application layer, we cover the entire technological stack.
                    </span>

                    <div className=' flex flex-col  md:flex-row  items-center   gap-5'>
                        <Button name={"Let's Talk"}  icon={FiMessageSquare}  outline={false}/>
                        <div className=' flex items-center gap-2'>
                        <span className='heading_meduim dark:text-white'>Check our Projects</span>
                        <FiArrowRight  className='text-primary size-6'/>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <span className='heading_three text-primary'>Our Process</span>
                <div className='flex  justify-baseline items-center gap-80 mt-10'>
                    <h2 className='text-[40px] text-black font-bold w-127'>I Work Process help you to get the best from my skill </h2>
                    <span className=' text-text/60 self-start  text-2xl w-138'>From concept to deployment a streamlined approach to complex engineering.</span>
                </div>
            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 mt-36  bg-amber-600  gap-43.75 items-center relative justify-center flex-wrap'>
                <Process 
                    index={1} 
                    title='Discovery' 
                    content=' Analysis of your business goals, technical constraints, and infrastructure audit to define a clear roadmap.' 
                />
                <Process 
                    index={2} 
                    title='Architecture' 
                    content='Designing scalable system architectures, database schemas, and selecting the right AI models or Cloud environments.' 
                />
                <Process 
                    index={3} 
                    title='Development' 
                    content=' Iterative coding and AI pipeline integration with regular sprints to ensure transparency and rapid feedback.' 
                />

                <Process 
                    index={4} 
                    title='Testing' 
                    content='User research helps us find out exactly how our target customers feel when interacting with a product ' 
                    

                />
                <Process 
                    index={5} 
                    title='Deployment' 
                    content=' Automated launch via CI/CD pipelines and containerization (Docker/Kubernetes) for high availability and zero downtime.' 
                />
                <Process 
                    index={6} 
                    title='Optimization' 
                    content=' Automated launch via CI/CD pipelines and containerization (Docker/Kubernetes) for high availability and zero downtime.' 
                />

                <img src={Vector_2} alt=""  className='absolute left-84 top-0' />
                <img src={Vector_3} alt="" className='absolute left-191.25 top-0'  />
                <img src={Vector_4} alt="" className='absolute left-197.25 top-0 '/>
                <img src={Vector_5} alt="" className='absolute left-92.5 top-0 ' />
                <img src={Vector_3_1} alt=""  className='absolute left-309.5 top-0 '/>

                
            </div>



            <div>
                <span className='text-three text-primary '>Our Services</span>
                <div className='flex items-center justify-between'>
                    <div>
                        <h3 className=' font-bold text-[34px] text-black'>Full-Stack Web Apps</h3>
                        <span className='heading_regular  text-text/60'>
                            Building scalable applications using React, Next.js, and Vue.js for the frontend, with Node.js, Go, 
                            or Python for high-performance backends
                        </span>
                    </div>
                    <div className='flex items-center flex-col justify-center gap-4'>
                        <div>
                            <img src={Programming_servie}  />
                        </div>

                        <div className='flex items-center justify-center gap-16 mt-32'>
                            <span className='cursor-pointer'>
                                <img src={left} alt="" className='w-full h-full'  />
                            </span>
                            <span className='cursor-pointer'>
                                <img src={right} alt="" className='w-full'/>
                            </span>
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

export default Services