import React from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'

const Contact = () => {
  return (
    <div className="w-full">
    <div id="about" className='relative flex flex-col w-full h-[500px]'>
      <img className='w-full  h-full object-cover' src="https://lh5.googleusercontent.com/p/AF1QipPZqzrcyfB_pavKOrkTPcY8ZyDMCh0-ArFoPR5c=s1031-k-no" alt="image" />
      <h1 className="bg-black/40 absolute top-0 w-full  h-[500px] "></h1>
      <div className="absolute flex flex-col w-full h-full justify-center items-center">
        <motion.h1 viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} 
        className="text-3xl md:text-5xl text-white font-bold">Contact Us</motion.h1>
      </div>             
    </div>
    <ContactUs />
    <Footer />
    </div>
  )
}

export default Contact