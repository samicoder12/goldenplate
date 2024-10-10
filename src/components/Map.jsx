import React from 'react'
import { motion } from 'framer-motion'
const Map = () => {
  return (
    <div className='w-full h-[700px] bg-black/90 flex flex-col '>
        <motion.h1 viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} 
        className="text-yellow text-2xl md:text-4xl font-semibold text-center pt-10">Our Location</motion.h1>
        <motion.div  viewport={{once: true}} initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} transition={{duration:1, ease:"easeInOut" , x:{type:"spring", stiffness:60 }, delay:0.35}}  className=" mx-2 md:mx-10 mb-2 flex justify-normal items-end mt-12">
        <iframe className='w-full rounded-2xl h-[500px]' title='Google Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.5005187765705!2d38.7877332730703!3d8.99452178953169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85be3ac1c2ab%3A0x71ef593d8cda87f0!2zR29sZGVuIFBsYXRlIFJlc3RhdXJhbnQgfCBCb2xlIHwg4YyO4YiN4Yuw4YqVIOGNleGIjOGJtSDhiKzhiLXhibbhiKvhipXhibUgfCDhiabhiIw!5e1!3m2!1sen!2set!4v1728292538265!5m2!1sen!2set" frameBorder="0">
        </iframe>
        </motion.div>

    </div>
  )
}

export default Map