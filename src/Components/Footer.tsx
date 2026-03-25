import React, { memo } from 'react'
import { BiSend } from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router'

const Footer = memo(() => {
  return (
    <div className='bg-gry/15'>
        <div className='md:mx-37.5 mx-5 py-36'>
            <div className='flex flex-col md:flex-row items-start justify-around'>
                <div className='md:w-[45%] flex  items-start gap-20'>
                    <div className='mb-11.5'>
                        <h3 className='heading_three text-primary  mb-7'>SetupAI</h3>
                        <span className='text-black/80 heading_four '>SetupAI is a digital agencay that create User centred Product that help her client to evolve</span>
                    </div>
                    <div className='flex-col items-start md:flex hidden  w-full'>
                        <h3 className='text-black dark:text-white heading_meduim mb-7 font-semibold'>About</h3>
                        <ul className='flex flex-col gap-5 items-start '>
                            <li className='heading_meduim  hover:underline  text-black/80'> <Link to="/about">About Us</Link></li>
                            <li className='heading_meduim hover:underline text-black/80'><Link to="/services">Study Case</Link></li>
                            <li className='heading_meduim hover:underline  text-black/80'><Link to="/contacts">Blogs</Link></li>
                            <li className='heading_meduim hover:underline text-black/80'><Link to="/projects">Portfolio</Link></li>
                            <li className='heading_meduim hover:underline cursor-pointer text-black/80'>Careers</li>

                        </ul>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row items-center  justify-around gap-50'>

                    <div className='md:flex flex-col  hidden items-start'>
                        <h3 className='text-black dark:text-white heading_meduim mb-7 font-semibold'>Follow Us</h3>
                        <ul className='flex flex-col gap-5 items-start'>

                            <Link to={"https://www.facebook.com/profile.php?id=61578026836152"} target='_blank'>
                                <li className='heading_regular  text-black/80 flex items-center gap-2.25'>
                                    <FaFacebook className='size-7  text-primary'/>
                                    <span className='heading_meduim hover:underline text-black dark:text-white'>fb.com/SetupAI</span>
                                </li>
                            </Link>

                            <li className='heading_regular  text-black/80 flex items-center gap-2.25'>
                                <FaInstagram className='size-7  text-primary'/>
                                <span className='heading_meduim hover:underline cursor-pointer text-black dark:text-white'>@SetupAI</span>
                            </li>
                            <li className='heading_regular  text-black/80 flex items-center gap-2.25'>
                                <FaTwitter className='size-7  text-primary'/>
                                <span className='heading_meduim hover:underline cursor-pointer text-black dark:text-white'>@SetupAI</span>
                            </li>
                            
                        </ul>
                    </div>

                    <div className='flex flex-col items-start'>
                        <h3 className='text-black dark:text-white heading_meduim  font-semibold mb-7'>Get in touch With Us</h3>
                        <ul className='flex flex-col gap-5 items-start'>
                            <li className='heading_meduim text-black/80 text-wrap'>Need Answers ? Need help? just email us</li>
                            <li>
                                <form action="">
                                    <div className='flex items-center justify-between rounded-lg border-2 border-gry p-4 w-63'>
                                        <input type="email" name="" id="" className='bg-transparent border-none outline-none w-full placeholder:text-gry placeholder:text-sm ' placeholder='Your Email'  />
                                        <BiSend className='text-primary size-7'/>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>


            



        </div>
        <div className='bg-black/80 py-8 px-16'>
           <h3 className='heading_three text-white'>By Setup Ai</h3>
        </div>
    </div>
  )
})

export default Footer