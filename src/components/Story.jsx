import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"
const Story = () => {
  return (
    <div className='w-full h-[1410px] md:h-[870px] lg:h-[800px]  bg-green '>
        <motion.h1 viewport={{once: true}} initial={{opacity:0, y:-50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}}
         className="text-3xl 2xl:text-6xl font-semibold text-white pt-10 text-center">About Us</motion.h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-3 md:space-y-0 md:gap-10 px-2 xl:px-0">
            {/* image section */}
            <div className="flex flex-col mt-20 z-10">
               <motion.img viewport={{once: true}} initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={{duration:1, ease:"easeInOut" , x:{type:"spring", stiffness:60 }, delay:0.45}}  className='rounded-md object-cover h-[500px] w-[500px] 2xl:w-[600px] 2xl:h-[550px]' src="https://goldenplaterestaurant.net/wp-content/uploads/2023/07/photo_5866292167008435953_x.jpg" alt="photo" />
            </div>
            {/* text section */}
            <div className="flex flex-col  space-y-4 mt-20 justify-center">
               <motion.h1 viewport={{once: true}} initial={{opacity:0, y:-50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.25}} className="text-2xl 2xl:text-4xl font-bold text-center md:text-left text-yellow">Our Story</motion.h1>
               <motion.p viewport={{once: true}} initial={{opacity:0, x:100}} whileInView={{opacity:1, x:0}} transition={{duration:1, ease:"easeInOut" , x:{type:"spring", stiffness:60 }, delay:0.3}} className="text-sm 2xl:text-lg font-normal text-balance text-white leading-6">Our Story
               Meet Mr. Henok Zerihun, a highly skilled and visionary chef with decades of experience as an executive chef. He is a fast learner and well-educated, making him stand out in the culinary world. Mr. Henok’s passion for cooking has led him to serve the industry as the President of the Ethiopian Chef Association and as a judge on the renowned TV show “MIRTU GEBETA.” Also serving the Ethiopian Airlines Catering & Tourism Institutes as a board member.</motion.p>
               <motion.p viewport={{once: true}} initial={{opacity:0, x:100}} whileInView={{opacity:1, x:0}} transition={{duration:1, ease:"easeInOut" , x:{type:"spring", stiffness:60 }, delay:0.35}}  className="text-sm 2xl:text-lg font-normal text-balance text-white leading-6">In 2021, he proudly established his fine-dining restaurant located in the heart of Bole, Abyssinia Building 1st floor. This restaurant offers a live kitchen and bar, creating a delightful dining experience. The ambiance is warm and inviting, with top-notch customer service for small couples, family groups, baby showers, birthdays, and other intimate gatherings…</motion.p>
               <motion.div viewport={{once: true}} initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="text-center md:text-left ">
               <Link><motion.button whileTap={{scale:0.9}}   className="text-white text-sm 2xl:text-lg py-2 2xl:py-4 2xl:px-8 px-6 border border-[rgb(223,208,81)] rounded-md hover:bg-[rgb(223,208,81)] transition-transform duration-150 hover:text-black">Discover More</motion.button></Link>
               </motion.div>
            </div>
           
        </div>
    </div>
  )
}

export default Story