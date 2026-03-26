import{ memo} from 'react'
import { Testimonials } from '../Data/Testimonial'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y , EffectFade } from 'swiper/modules';
// import StarRating from 'react-native-star-svg-rating';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { useMediaQuery } from 'react-responsive'

const Testimonial = memo(() => {
    
    const isTableOrMobile = useMediaQuery({query: '(max-width:768px)'})
  return (
    <div className='my-40 bg-gry/7 shadow z-10 '>
        <div className='md:mx-37.5 mx-5 py-36'>
            <div className='mb-11.5 md:w-177' data-aos="zoom-in">
                <h3 className='heading_three text-primary mb-9'>Testimonial</h3>
                <span className='text-black heading_two dark:text-white text-wrap text-justify'>You still hesitate about working with Us ? Check what They say about Us</span>
            </div>
            
            {/* <div className='flex flex-col md:flex-row gap-4 items-center w-full  mt-24  justify-around mx-auto max-w-container px-4 md:px-8'> */}
                
                <Swiper
                    spaceBetween={50}
                    modules={[Navigation, Pagination, Scrollbar, A11y , EffectFade]}
                    slidesPerView={1}
                    navigation={isTableOrMobile ? false : true}
                    pagination={{ clickable: true }}
                    // width={100}
                    
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    effect="flip"
                    
                >
                    {Testimonials.map((item , index)=>(
                        <SwiperSlide key={index} className='py-16 w-full ' >
                            <div className="flex flex-col items-center text-center gap-10" data-aos="zoom-in-up" data-aos-duration="00">
                    
                                <p className="origin-bottom text-display-sm  font-serif italic font-medium text-balance text-text  text-2xl md:text-[26px]  will-change-transform md:text-display-md">
                                    {item.text}
                                </p>
                                <div className="flex origin-bottom flex-col items-center gap-4 will-change-transform">
                                    <div className="flex flex-col items-center gap-4">
                                        <img src={item.image} alt={item.name} className="w-32 h-32 rounded-full border-5 border-gry" />
                                        <div className="flex flex-col gap-1">
                                            <p className="text-2xl font-semibold text-primary">{item.name}</p>
                                            <cite className="text-xl text-tertiary not-italic">{item.title}</cite>
                                        </div>
                                       
                                    </div>
                                </div>
                                
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>


                

            {/* </div> */}

            {/* <div className='flex items-center justify-center gap-16 mt-32'>
                <span className='cursor-pointer'>
                    <img src={left} alt="" className='w-full h-full'  />
                </span>
                <span className='cursor-pointer'>
                    <img src={right} alt="" className='w-full'/>
                </span>
            </div> */}
        </div>
    </div>
  )
})

export default Testimonial