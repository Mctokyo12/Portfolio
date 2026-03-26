import { memo, useState } from 'react'
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

import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'
import { Link } from 'react-router'
import { useMediaQuery } from 'react-responsive'
import { OurService } from '../Data/service'
import { Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y , EffectFade } from 'swiper/modules';
// import StarRating from 'react-native-star-svg-rating';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


const Services = memo(() => {
  const isTableOrMobile = useMediaQuery({query: '(max-width:768px)'})
//   const swiper = useSwiper();

  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  return (
    <>
      <NavBar/>
        <div className='mt-28 md:mt-28 z-10  md:mx-37.5 mx-5'>
            <div className=' flex justify-center items-center w-full my-30'>
                <div className='flex flex-col gap-12 items-center  md:w-3xl  text-center' data-aos="fade-up">
                    <span className=' heading_two text-center  text-primary  w-full'>Our Services</span>
                    <h1 className='heading_one text-black'>Services We Offres</h1>
                    <span className='text-text/60 text-four'>
                        We don’t just offer services; we build interconnected ecosystems. From the foundational network to the intelligent application layer, we cover the entire technological stack.
                    </span>

                    <div className=' flex flex-col  md:flex-row  items-center  max-md:w-full  gap-5'>
                        <Link to={"/contacts"} className='max-md:w-full'>
                            <Button name={"Let's Talk"}  icon={FiMessageSquare}  outline={false} ismobile={isTableOrMobile}/>
                        </Link>

                        <Link to={"/projects"}>
                            <div className=' flex items-center gap-2'>
                                <span className='heading_meduim dark:text-white'>Check our Projects</span>
                                <FiArrowRight  className='text-primary size-6'/>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>

            <div className='' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <span className='heading_three text-primary'>Our Process</span>
                <div className='flex  flex-col md:flex-row gap-10 md:justify-between items-center  mt-10'>
                    <h2 className='text-[40px] text-black font-bold w-full md:w-127 md:h-45'>I Work Process help you to get the best from my skill </h2>
                    <span className=' text-text/60 self-start  text-four md:w-138'>From concept to deployment a streamlined approach to complex engineering.</span>
                </div>
            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 md:mt-40 mt-16  gap-12  md:gap-43.75 items-center relative' data-aos="fade-up" data-aos-duration="3000">
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

                <img src={Vector_2} alt=""  className='absolute left-150 top-60 hidden md:block' />
                <img src={Vector_3} alt="" className='absolute left-30 -top-28 hidden md:block'  />
                <img src={Vector_4} alt="" className='absolute left-48  top-66 hidden md:block'/>
                <img src={Vector_5} alt="" className='absolute  right-28 -bottom-27 hidden md:block' />
                <img src={Vector_3_1} alt=""  className='absolute -right-38 top-38 hidden md:block '/>

                
            </div>



            <div  className='md:mt-36 md:py-38 max-md:pt-32 '>
                <span className='text-three font-semibold text-primary '>Our Services</span>
                <Swiper
                    spaceBetween={50}
                    modules={[Navigation, Pagination, Scrollbar, A11y , EffectFade]}
                    slidesPerView={1}
                    navigation={isTableOrMobile ? false : true}
                    pagination={{ clickable: true }}
                    // width={100}
                    
                    onSwiper={(Swiper) => setSwiperInstance(Swiper)}
                    onSlideChange={() => console.log('slide change')}
                    effect="flip"
                    
                >
                    {OurService.map(({title , content , img} , index)=>(
                        <SwiperSlide key={index} className="max-md:mb-6">
                            <div id='OurService'  data-aos="zoom-in-left" className='flex flex-col md:flex-row md:items-center md:w-[90%] md:mx-auto max-md:gap-12  max-md:mt-12  justify-between '>
                                <div className='md:w-[40%]'>
                                    <h3 className=' font-bold text-[28px] mb-4 text-black'>{title}</h3>
                                    <span className=' heading_regular md:w-[40%]  text-justify text-text/60'>
                                        {content}
                                    </span>
                                </div>
                                <div className='flex md:items-center  flex-col md:w-[55%]   gap-8'>
                                    <div className=' rounded-xl overflow-hidden w-full'>
                                        <img src={img}  />
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='flex items-center justify-center  mt-8 gap-12'>
                    <span className='cursor-pointer' onClick={() => swiperInstance?.slidePrev()}>
                        <img src={left} alt="" className='w-full h-full'  />
                    </span>
                    <span className='cursor-pointer' onClick={() => swiperInstance?.slideNext()}>
                        <img src={right} alt="" className='w-full'/>
                    </span>
                </div>


            </div>
        </div>
        <Testimonial/>
        <Footer/>
    </>
  )
})

export default Services