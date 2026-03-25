import React, { memo } from 'react'
import { ServiceData } from '../Data/service'
import Card from './UI/Card'



const Service = memo(() => {
  return (
    <div className='my-40'>
        <div className='md:mx-37.5 mx-5' data-aos="fade-up"  data-aos-duration="3000" >
            <h3 className='heading_three text-primary mb-10'>The service I offered </h3>
            <div className='grid md:grid-cols-4 grid-cols-1   gap-y-16'>
                <p className='heading_two  dark:text-white text-black md:col-span-2  text-wrap text-justify md:w-[80%]'>
                    I offer I variety service  to help you and grow and build your brand and help you with developing your product
                </p>
                {
                    ServiceData.map(({title , content , link} , index)=>(
                        <Card  title={title} content={content}   link={link} key={index}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
})

export default Service