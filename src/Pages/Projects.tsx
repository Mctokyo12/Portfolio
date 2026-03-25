import { memo, useState } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Testimonial from '../Components/Testimonial'
import Process from '../Components/UI/Process'
import Button from '../Components/UI/Button'
import { FiArrowRight, FiChevronRight, FiMessageSquare } from 'react-icons/fi'
import { MyWork } from '../Data/Project'
import { Link } from 'react-router'
import { useMediaQuery } from 'react-responsive'

const Projects = memo(() => {
  const isTableOrMobile = useMediaQuery({query: '(max-width:768px)'})
  const [size , setSize] = useState<number>(3);

  return (
    <>
        <NavBar/>
        <div className='mt-28 md:mt-50  md:mx-37.5 mx-5'>
            <div className=' flex justify-center items-center w-full my-30'>
                <div className='flex flex-col gap-12 items-center  w-3xl  text-center'>
                    <span className=' heading_two text-center  text-primary  w-full'>Our Projects</span>
                    <h1 className='heading_one text-black'>Project We Realised</h1>
                    <span className='text-text/60 text-2xl'>
                        From the initial line of code to automated cloud deployment, I build digital products that bridge the gap between complex algorithms and seamless user experiences. Here is a showcase of my journey across Web Development, AI, and Systems Architecture
                    </span>

                    <div className=' flex flex-col  md:flex-row  items-center   max-md:w-full gap-5'>
                        <Link to={"/contacts"} className='max-md:w-full'>
                            <Button name={"Let's Talk"}  icon={FiMessageSquare}  outline={false} ismobile={isTableOrMobile}/>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className=''>

                {MyWork.slice(0,size).map(({Programming , App , img , content , link} , index)=>(

                    <div key={index} className={`flex items-start    mb-16   max-md:flex-col  md:justify-between ${index % 2 == 0 ? " md:flex-row-reverse" : ""} `}>
                        <div className=' flex flex-col  mt-4 md:w-[40%]'>
                            <span className='heading_three text-primary mb-4'>{Programming}</span>
                            <div className='flex  flex-col'>
                                <h3 className=' font-bold text-[40px] text-black'>{App}</h3>
                                <p className='py-4 text-text/60  text-justify text-2xl'> {content}</p>
                                <Link to={link} target='_blank'>
                                    <div className='hidden md:block'>
                                        <Button name={"Check the project"}  icon={FiChevronRight}  outline={true}/>
                                    </div>
                                </Link>
                                
                            </div>
                        </div>

                        <div className=' md:w-[50%]'>
                            <img src={img} alt=""  />
                            <Link to={link} target='_blank'>
                                <div className='md:hidden block text-center mt-16'>
                                    <Button name={"Check the project"}  icon={FiChevronRight}  outline={true}/>
                                </div>
                            </Link>         
                        </div>
                    </div>
                ))}
            
                { size === 3 ? 
                    <div className='w-full  text-center' onClick={()=>setSize(6)}>
                        <Button name='Explore More Projects'   icon={FiChevronRight} outline={false}/>
                    </div>
                :
                    <div className='w-full  text-center' onClick={()=>setSize(3)}>
                        <Button name='See Fewer Projects'   icon={FiChevronRight} outline={false}/>
                    </div>
                }
             
            </div>






        </div>
        <Testimonial/>
        <Footer/>
    
    
    </>
  )
})

export default Projects