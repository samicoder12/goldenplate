import React from 'react'
import { motion } from 'framer-motion'
const Dishes = () => {
  
    const Category = [
     {
        id:1,
        image:"https://goldenplaterestaurant.net/wp-content/uploads/2023/09/photo_2023-09-21_09-21-56.jpg",
        text:"Special Combo",
        p:"Golden Plate Special Combo"
     },
     {
        id:2,
        image:"https://lh5.googleusercontent.com/p/AF1QipMMtkelG93zMrT0Z2EIsmEjBjpTYnymB2_mJoFc=w330-h248-p-k-no",
        text:"Ravioli Spinach Ricotta",
        p:"Adipiscing elit eiusmod tempor incididunt"
     },
     {
        id:3,
        image:"src/assets/photo1.jpg",
        text:"Stir fried chicken pasta",
        p:"Adipiscing elit eiusmod tempor incididunt"
     },
    ]
  return (
    <div className='w-full h-[1200px] md:h-[720px] lg:h-[500px] overflow-hidden'>
        <motion.h1 viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}}
         className="text-3xl font-semibold text-center pt-12 pb-4 2xl:text-5xl">Our Top Rated Dishes</motion.h1>
        <motion.p viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}}
        className="text-sm 2xl:text-xl text-red-600 text-center font-semibold">Who are in extremely love with eco friendly system.</motion.p>
          <div className="container">
            <div 
             className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2 place-items-center md:px-0">
               {
                    Category.map((list) => (
                        <motion.div viewport={{once: true}} initial={{opacity:0, y:-50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay: list.id * 0.35}}
                         key={list.id} className="w-[300px]  h-[300px] pt-8 space-y-3 group  max-w-xs overflow-hidden">
                           <img className="w-full h-[200px]  2xl:h-[200px] 2xl:w-[500px] group-hover:scale-105 duration-300 max-w-xs ease-in-out rounded-lg object-center" src={list.image} alt="images" />
                           <h1 className="text-lg 2xl:text-xl font-semibold text-center group-hover:text-red-700 text-[rgb(9,9,9)]">{list.text}</h1>
                        </motion.div>
                    ))
               }
            </div>
          </div>
    </div>
  )
}

export default Dishes