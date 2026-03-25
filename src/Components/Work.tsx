import React, { memo } from 'react'
import { ProjectData } from '../Data/work'
import Button from './UI/Button'
import { FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router';
const Work = memo(() => {
  return (
    <div>
        <div className='md:mx-37.5 mx-5'>
            <div className='mb-18 md:w-[569px]'>
                <h3 className='heading_three text-primary'>The work that I realized</h3>
                <span className='text-black heading_two dark:text-white text-justify'>The work we did that made our Client happy and satisfied</span>
            </div>
            
            <div className=' grid md:grid-cols-3 grid-cols-1 gap-12 items-center mb-30 justify-between'>
                {ProjectData.map(({Programming , App , img} , index)=>(
                    <div key={index} className={`${index == 2 && "md:row-span-2"}`}>
                        <div className={`w-full rounded-4xl `}>
                            <img src={img}  />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-primary heading_four'>{Programming}</span>
                            <span className='text-black heading_three dark:text-white'>{App}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full text-center'>
                <Link to={"/projects#Project"}>
                    <Button name='Explore More Projects'  icon={FiChevronRight} outline={false}/>
                </Link>
            </div>

        
        </div>
    </div>
  )
})

export default Work