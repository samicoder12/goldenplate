import React from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import Book from '../components/Book'
const Reservation = () => {
  return (
    <div className="w-full">
    <div id="about" className='relative flex flex-col w-full h-[500px]'>
      <img className='w-full  h-full object-cover' src="https://goldenplaterestaurant.net/wp-content/uploads/2023/10/Reservation-Background-1-scaled.jpg" alt="image" />
      <h1 className="bg-black/60 absolute top-0 w-full  h-[500px] "></h1>
      <div className="absolute flex flex-col w-full h-full justify-center items-center">
        <motion.h1 viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} 
        className="text-3xl md:text-5xl text-white font-bold">Reservation</motion.h1>
      </div>             
    </div>
    <Book />
    <Footer />
    </div>
  )
}

export default Reservation