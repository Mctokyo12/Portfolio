import { memo } from 'react'
import { FiArrowRight, FiMessageSquare } from 'react-icons/fi'
import Button from './UI/Button'
import Hero_Picture from './../assets/images/Hero_picture.svg';
import Vector from './../assets/images/Vector.svg'
import { Link } from 'react-router';
import { useMediaQuery } from 'react-responsive';

const Hero = memo(() => {
  const isTableOrMobile = useMediaQuery({query: '(max-width:768px)'})



  return (
    <header className='md:h-174.5  h-158  mt-28 md:mt-50  '>

      <div className=' md:mx-37.5 mx-5'>
        <div className=' absolute hidden lg:block  left-6  top-57'>
          <img src={Vector} alt=""  />
        </div>
      
        <div className=''>
          <span className='heading_four text-primary   '>Hello ,</span>
          <div className=' grid md:grid-cols-2  grid-cols-1  place-content-between'>
            
            <div className='flex flex-col ' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <div className='md:w-[80%] '>
                <h1 className='heading_one text-black dark:text-white text-justify md:py-14 py-8 '>
                  We Help People To Bring Their Ideas Alive
                </h1>
                <p className='heading_three text-text/60 w-full text-justify' >A talent team  to help you in your journey on creating useful and easy  to use product</p>
              </div>
              
              <div className=' flex flex-col  md:flex-row  items-center mt-22   gap-5'>
                <Link to={"/contacts"} className='max-md:w-full'>
                  <Button name={"Let's Talk"}  icon={FiMessageSquare}  outline={false} ismobile={isTableOrMobile} />
                </Link>
              
                <Link to={"/services"}>
                  <div className=' flex items-center gap-2'>
                    <span className='heading_meduim dark:text-white'>Check Our Services</span>
                    <FiArrowRight className='text-primary size-6'/>
                  </div>
                </Link>

              </div>
            </div>

            <div className='hidden lg:block self-start  -mt-20 '  data-aos="fade-up" data-aos-duration="3000">
              <img src={Hero_Picture} alt="" className='w-full h-full' />
            </div>
          </div>

        </div>
      </div>



    </header>

  )
})

export default Hero