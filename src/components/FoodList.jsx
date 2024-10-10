import { image } from 'framer-motion/client'
import React from 'react'
import FoodLists from './FoodLists'
import { motion } from 'framer-motion'
const FoodList = () => {
    
  return (
    <div className='w-full h-[600px  bg-green'>
            
               <div className="container">
           {/* Feature section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-0">
                 <div className="flex flex-col pt-16 space-y-6 justify-center">
                   <motion.h1  viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}}  className="text-center ms:text-left text-2xl text-yellow">Featured menu</motion.h1>
                   <motion.p  viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}}  className="text-2xl md:text-5xl text-white text-center text-balance">Making your guest more delighted with our food.</motion.p>
                   <div className="flex justify-center">
                   <button className='px-8 py-2 text-white rounded-md border border-yellow hover:bg-yellow hover:text-black'>Book Now!</button>
                    </div>                  
                </div>

               <motion.div  viewport={{once: true}} initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} transition={{duration:1, ease:"easeInOut" , x:{type:"spring", stiffness:60 }, delay:0.35}} className="flex flex-col pt-4 pb-4 md:pt-10">
                 <img className='rounded-xl w-[500px] xl:w-[600px] h-[450px] md:h-[500px]' src="https://goldenplaterestaurant.net/wp-content/uploads/2023/10/0I1A0408-scaled-e1697522684788-1536x1315.jpg" alt="images" />
               </motion.div>
           </div>
           </div>
           
           <FoodLists/>
        </div>
  )
}

export default FoodList