import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
const Other = () => {
    const testimonial = [
        {
            id:1,
            image:"https://goldenplaterestaurant.net/wp-content/uploads/2023/08/msg310686455-378817-1024x615.jpg",
            h1:"Golden Group Hospitality",
            p:"We are a Hospitality business Group that operates in different business area . Our major brand includes Golden Plate Restaurant, Golden Catering Service, Golden Hands Culinary School and Golden Beans Coffee"
        },
        {
            id:2,
            image:"https://goldenplaterestaurant.net/wp-content/uploads/2023/08/Golden_Hands_Cilinary_School_logo_copy-removebg-preview.png",
            h1:"Golden Hands Culinary School",
            p:" Upcoming Project…"

        },
        {
            id:3,
            image:"https://goldenplaterestaurant.net/wp-content/uploads/2023/07/Golden-Plate-Logo-4-1024x768.png",
            h1:"Golden Plate Restaurant",
            p:"Best destination and first choice Fine Dining Restaurant with specific dedicated meal courses that you can enjoy real & organic food test."
        },
        {
            id:4,
            image:"https://goldenplaterestaurant.net/wp-content/uploads/2023/07/Golden-Catering-Logo-e1690553027728-1024x455.png",
            h1:"Golden Catering Service",
            p:"We offer the finest level of food quality; presentation; beverage and service to make your event memorable. We are the best alternative for catering service for both individual needs and organizational requests as needed."
        }
    ]
  return (
    <div className='w-full h-[1300px] md:h-[800px] bg-neutral-200'>
     <div className="container">
        <div className="flex flex-col items-center justify-center space-y-5 pt-14">
            <motion.h1 viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="text-3xl font-bold text-green">Other Service</motion.h1>
            <motion.span viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="w-10 h-1 bg-yellow"></motion.span>
            <motion.p viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="text-sm font-normal text-neutral-500 text-center md:line-clamp-2 text-balance">Our visit to golden plate restaurant was fantastic! The staff went above and beyond to make us feel comfortable and valued. Their friendly demeanor and prompt service added a personal touch to our meal.</motion.p>
        </div>
        <div className="grid grid-cols-1 px-4 md:grid-cols-2 mt-6 md:mt-10 place-items-center gap-6">
            {
                testimonial.map((data) => (

             <motion.div viewport={{once: true}} initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} transition={{duration:1, ease:"easeInOut" , x:{type:"spring", stiffness:60 }, delay:0.35}} 
             className="w-[97%] h-[220px] bg-white drop-shadow-2xl p-3 shadow-black rounded-lg">
                <div className="grid grid-cols-2 gap-2 ">
                   <div className="flex flex-col justify-center items-center ">
                      <img src={data.image} alt="logo" className="" />
                   </div>
                   <div className="flex flex-col justify-center items-center space-y-4">
                    <h1 className="text-xs md:text-base font-semibold text-green">{data.h1}</h1>
                    <p className="text-[10px] lg:text-xs font-normal text-zinc-600">{data.p}</p>
                   </div>
                </div>           
             </motion.div>
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default Other