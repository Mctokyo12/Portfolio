import React, { memo } from 'react'
import { TestimonialData } from '../Data/Testimonial'

import left from "./../assets/images/left.svg"
import right from "./../assets/images/right.svg"



const Testimonial = memo(() => {
  return (
    <div className='my-40 bg-gry/15'>
        <div className='md:mx-37.5 mx-5 py-36'>
            <div className='mb-11.5 w-177'>
                <h3 className='heading_three text-primary mb-9'>Testimonial</h3>
                <span className='text-black heading_two dark:text-white '>You still hesitate about working with Us ? Check what They say about Us</span>
            </div>
            
            <div className='flex flex-col md:flex-row gap-4 items-center w-full mx-auto mt-24  justify-around'>
                {TestimonialData.map((item , index)=>(
                    <div key={index} className='w-108.5'>
                        <span className='heading_meduim text-black/80 mb-10 '>{item.text}</span>
                        <div className='flex items-start mt-10 gap-4'>
                            <img src={item.image} alt="" />
                            <div>
                                <h3 className='text-black dark:text-white heading_four'>{item.name}</h3>
                                <span className='heading_regular text-black/80'>{item.position}</span>
                            </div>
                        </div>

                    </div>
                ))}
                

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
  )
})

export default Testimonial