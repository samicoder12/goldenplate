import React from 'react'
import { FaFacebook, FaInstagramSquare, FaPhoneVolume, FaRegClock, FaTiktok } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <div className='w-full bg-[rgb(20,19,19)] h-[850px] md:h-[700px] lg:h-[440px]'>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0 pt-14">
            <motion.div viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="">
               <h1 className="text-base md:text-lg lg:text-xl font-semibold text-yellow text-center pl-8 md:text-left">Location</h1>
               <div className="flex  flex-col pt-10 space-y-4">
                <div className="flex gap-4 items-center">
                  <span className='text-yellow text-2xl'><FaLocationDot /></span>
                  <h1 className="text-normal font-light text-white">Cameroon Street around Bole Medhanialem, Abyssinia Plaza Mezzanine Floor</h1>
                </div>
                <div className="flex gap-4 items-center">
                  <span className='text-yellow text-2xl'><MdEmail /></span>
                  <h1 className="text-normal font-light text-white">info@goldenplaterestaurant.net</h1>
                </div>
                <div className="flex gap-4 items-center">
                  <span className='text-yellow text-2xl'><FaPhoneVolume /></span>
                  <h1 className="text-normal font-light text-white">+251975745252</h1>
                </div>
               </div>
            </motion.div>

            <motion.div viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="">
              <h1 className="text-base md:text-lg lg:text-xl text-yellow font-semibold text-center md:text-left">Opening Hours</h1>
              <div className="flex  gap-4 items-center pt-10">
                  <span className='text-yellow text-2xl'><FaRegClock /></span>
                  <h1 className="text-normal font-light text-white">Monday – Sunday (11:00 AM – 11:30 PM)</h1>
                </div>
            </motion.div>

            <motion.div viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="flex flex-col items-center justify-center">
            <img src="https://goldenplaterestaurant.net/wp-content/uploads/2023/07/Golden-Plate-Logo-4-150x150.png" alt="images" />
           <h1 className="text-lg font-light text-white">Enjoy Food, Enjoy Life!</h1>
           <span className="w-10 h-1 bg-yellow mt-4"></span>
           <div className="flex">
            <div className="flex mt-8 space-x-4">
              <Link to="https://www.tiktok.com/@goldenplaterestaurant_et">
              <div className="bg-green px-2 py-2 rounded-full hover:scale-110 duration-300">
              <span><FaTiktok className='text-white ' /></span>
              </div>
              </Link>
              <Link to="https://web.facebook.com/golden.plate.et?_rdc=1&_rdr">
              <div className="bg-green px-2 py-2 rounded-full hover:scale-110 duration-300">
              <span><FaFacebook className='text-white ' /></span>
              </div>
              </Link>
              <Link to="https://www.instagram.com/golden.plate.et/">
              <div className="bg-green px-2 py-2 rounded-full shadow-slate-50 drop-shadow-xl hover:scale-110 duration-300 ">
              <span className=''><FaInstagramSquare className='text-white ' /></span>
              </div>
              </Link>
            </div>
           </div>
            </motion.div>
        </div>
      </div>
      <div  className="flex items-center justify-center mt-6 border-t border-white pt-2">
        <motion.h1 viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="text-sm font-normal text-white text-center text-balance">Copyright © 2023, All rights reserved. Developed by @Samydev5</motion.h1>
      </div>
    </div>
  )
}

export default Footer