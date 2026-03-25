import React, { memo } from 'react'
import NavBar from './../Components/NavBar'
import Hero from './../Components/Hero'
import About from './../Components/About'
import My_Experience from './../Components/My_Experience'
import Service from './../Components/Service'
import Work from './../Components/Work'
import Testimonial from './../Components/Testimonial'
import Footer from './../Components/Footer'
import { TestimonialSimpleCentered01 } from '../Components/OtherTest'

const Home = memo(() => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <My_Experience/>
      <Service/>
      <Work/>
      <Testimonial/>
      <Footer/>
    </>
  )
})

export default Home