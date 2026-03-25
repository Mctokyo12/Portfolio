import React, { memo } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Testimonial from '../Components/Testimonial'
import Button from '../Components/UI/Button'
import { FiMessageSquare , FiChevronRight } from 'react-icons/fi'
import Vector_6 from "./../assets/images/Vector_6.svg"
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useForm, ValidationError } from '@formspree/react';

const Contacts = memo(() => {

    const [state, handleSubmit] = useForm("xvzvpaqr");



  return (

    <>
        <NavBar/>
        <div className='mt-28 md:mt-20   md:mx-37.5 mx-5'>

            <div className=' absolute  hidden md:block left-0 -z-10   w-full  top-57 '>
                <img src={Vector_6} alt=""  className='w-full h-365.84px' />
            </div>
            <div className=' z-10 flex justify-center items-center w-full my-26'>
                <div className='flex flex-col gap-6 items-center  w-3xl  text-center'>
                    <span className=' heading_two text-center   text-primary  w-full'>Let’s Have a chat</span>
                    <h1 className='heading_one text-black -mt-4'>An expert at your services</h1>
                    <div>
    
                        {state.succeeded ? <p className='text-primary font-semibold text-one '>Thank you for contacting us !!!</p> : 

                            <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4 items-center '>
                                <div className='w-152.25'>
                                    <label htmlFor="" className='font-semibold text-xl float-left mb-2 text-black'>Your Name:</label>
                                    <input type="text" name='name' required className='bg-transparent p-3 border-2 border-gry outline-none w-full placeholder:text-gry placeholder:text-xl  rounded-sm' placeholder='Your Full Name'/>
                                    <ValidationError 
                                        prefix="Name" 
                                        field="name"
                                        errors={state.errors}
                                    />
                                </div>

                                <div className='w-152.25'>
                                    <label htmlFor="" className='font-semibold text-xl float-left mb-2 text-black'>Your Email:</label>
                                    <input type="email"  name='email' required className='bg-white p-3 border-2 border-gry outline-none w-full placeholder:text-gry placeholder:text-xl  rounded-sm' placeholder='Your email'/>
                                    <ValidationError 
                                        prefix="Email" 
                                        field="email"
                                        errors={state.errors}
                                    />
                                </div>

                                <div className='w-152.25'>
                                    <label htmlFor="" className='font-semibold text-xl float-left mb-2 text-black'>Your Phone Number:</label>
                                    <input type="tel" name='phone' required className='bg-white p-3 border-2 border-gry outline-none w-full placeholder:text-gry placeholder:text-xl  rounded-sm' placeholder='Your Phone Number'/>
                                    <ValidationError 
                                        prefix="Phone" 
                                        field="phone"
                                        errors={state.errors}
                                    />
                                </div>

                                <div className='w-152.25'>
                                    <label htmlFor="" className='font-semibold text-xl float-left mb-2 text-black'>Messages:</label>
                                    <textarea  name='message' required className='bg-white  h-44  resize-none p-3 border-2 border-gry outline-none w-full placeholder:text-gry placeholder:text-xl  rounded-sm' placeholder='About What do you want to Talk?'></textarea>
                                    <ValidationError 
                                        prefix="Message" 
                                        field="message"
                                        errors={state.errors}
                                    />
                                </div>
                  
                                {state.submitting ? 
                                    <span  className=" px-4 py-4 bg-primary hover:bg-primary/80  text-white w-1/2 font-bold text-lg rounded-lg shadow-lg transition flex items-center  gap-4 justify-center cursor-pointer">
                                        <span className='loader'></span>
                                        <span>loading...</span>
                                    </span>
                                    : 
                                    <button type='submit' disabled={state.submitting} className=' flex flex-col  md:flex-row  w-full justify-center items-center   gap-5'>
                                        <Button name={"Send the Message"}  icon={FiChevronRight}  outline={false} />
                                    </button>
                                }


                            </form>
                        }

                    </div>

                    
                </div>
            </div>

            <div className=' flex flex-col gap-16 md:flex-row justify-between items-center'>
                <div className='w-162.5'>
                    <h3 className='heading_four text-primary mb-8'>FAQ</h3>
                    <span className=' font-bold text-one'>
                        Here are Some Answer For  Frequntly asked Questions
                    </span>
                    <p className=' text-text/60  text-2xl mt-8'>
                        We got a lot of Message With the same Questions so here are some fast answer for populare Question
                    </p>
                </div>

                <div className='p-4  md:w-152.5 w-full border-primary border-2'>
                    <div className='flex items-center justify-between'>
                        <span className=' text-black font-bold heading_four'>Do You offer Software Development</span>
                        <span><FaPlus  className='text-primary text-xl'/></span>
                        <span className='hidden'><FaMinus  className='text-primary text-xl '/></span>
                    </div>
                    <p className='text-text/60  text-regular'></p>
                </div>
            </div>
            







        </div>
        <Testimonial/>
        <Footer/>
    </>
  )
})

export default Contacts