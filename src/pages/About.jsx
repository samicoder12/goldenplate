import React from 'react'
import Testimonials from '../components/Testimonials'
import Story from '../components/Story'
import Staff from'../components/Staff'
import Other from '../components/Other'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
const About = () => {
  return (
    <div className="w-full">
    <div id="about" className='relative flex flex-col w-full h-[550px] md:h-[500px]'>
      <img className='w-full  h-full object-cover' src="https://lh5.googleusercontent.com/p/AF1QipMiVyqrq9nFJj5v5eEWFEOtpn4MxWPDkoRmJwcm=s901-k-no" alt="image" />
      <h1 className="bg-black/60 absolute top-0 w-full  h-[500px] "></h1>
      <div className="absolute flex flex-col w-full h-full justify-center items-center">
        <motion.h1 viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="text-5xl text-white font-bold">About Us</motion.h1>
      </div>             
    </div>
    <Other />
    <Story />
    <Staff />
    <Testimonials/>
    <Footer />
    </div>
  )
}

export default About