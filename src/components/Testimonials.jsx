import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
const Testimonials = () => {
    const testimonial = [
        {
            id:1,
            p:"One of the best fine dining restaurants I've been to in Addis. The place has a lovely ambience with mild music. The staff here are very friendly and the food is amazing.",
            image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            h1:"Nishmitha K.M",
            span:"Local Guide"
        },
        {
            id:2,
            p:"The place is cozy and quiet, perfect for a Date! The food and service was also Great!",
            image:"https://goldenplaterestaurant.net/wp-content/uploads/2023/11/Bezer-Zegeye.png",
            h1:"Bezer Zegeye",
            span:"Chef Instructor"
        },
        {
            id:3,
            p:"Wow! This restaurant exceeded my expectation. Everything including the salad was really good. I had the combo with steak, salad and Lasagna.",
            image:"https://goldenplaterestaurant.net/wp-content/uploads/2023/11/Luam-Fessehazion.png",
            h1:"Luam Fessehazion",
            span:"Executive Chef"
        },
        {
            id:4,
            p:"Good and well cooked African dishes",
            image:"https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            h1:"JOHN MUVAVARIRWA",
            span:"Chef"
        }
    ]
  return (
    <div className='w-full h-[1300px] md:h-[800px] bg-neutral-200'>
     <div className="container">
        <div className="flex flex-col items-center justify-center space-y-5 pt-14">
            <motion.h1 viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="text-3xl font-bold text-yellow">Testimonials</motion.h1>
            <motion.p viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="text-2xl font-semibold text-center ">Testimonials What User Said?</motion.p>
            <motion.span viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="w-10 h-1 bg-yellow"></motion.span>
            <motion.p viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="text-sm font-normal text-neutral-500 text-center md:line-clamp-2 text-balance">Our visit to golden plate restaurant was fantastic! The staff went above and beyond to make us feel comfortable and valued. Their friendly demeanor and prompt service added a personal touch to our meal.</motion.p>
        </div>
        <div className="grid grid-cols-1 px-4 md:grid-cols-2 mt-6 md:mt-10 place-items-center gap-6">
            {
                testimonial.map((data) => (

             <motion.div viewport={{once: true}} initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} transition={{duration:1, ease:"easeInOut" , x:{type:"spring", stiffness:60 }, delay: data.id * 0.35}} className="w-[90%] h-[200px] bg-white drop-shadow-2xl p-3 shadow-black rounded-lg">
                <div key={data.id} className="flex space-x-4">
                 <img className='w-14 h-14 rounded-full' src={data.image} alt="image" />
                 <div className="flex-col md:flex">
                 <div className="flex flex-col">
                    <h1 className="text-green text-xs lg:text-base font-semibold">{data.h1}</h1>
                    <p className="text-xs lg:text-sm font-normal">{data.span}</p>
                 </div>
                 <div className="text-yellow flex items-center">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStarHalfAlt/>
                 </div>
                 </div>
                </div>
                <div className="pt-4">
                     <p className="text-xs font-medium text-neutral-700">{data.p}</p>
                </div>

             </motion.div>
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default Testimonials