
import React from 'react'
import Story from '../components/Story'
import Dishes from '../components/Dishes'
import { motion } from 'framer-motion'
import MenuList from '../components/MenuList'
import Map from '../components/Map'
import Book from '../components/Book'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import { Link } from 'react-scroll'

const Home = () => {

  return (
   
    <div className="relative w-full">
      <img className="w-full h-[550px] 2xl:h-[900px] object-center" src="https://lh3.ggpht.com/p/AF1QipPRNw4-F8S8Eb9ybC4pLm9sOjpWDYJj3rQGiaBO=s1024" alt="" />
      <h1 className="absolute  top-0 bg-black/40 w-full h-[550px] 2xl:h-[800px]"></h1>
      <div className="absolute top-36 2xl:top-52 w-full h-[500px]">
        <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-6 2xl:space-y-10">
          <motion.img viewport={{once: true}} initial={{opacity:0 , y:100}} whileInView={{opacity:1, y:0}} transition={{duration:0.9,y:{type:"spring" , stiffness:60}, ease:"easeInOut", delay:0.25}} className='h-10 2xl:h-[120px]' src="https://goldenplaterestaurant.net/wp-content/uploads/2023/11/dividerwhite.png" alt="home image" />
          <motion.h1 viewport={{once: true}} initial={{opacity:0 , y:100}} whileInView={{opacity:1, y:0}} transition={{duration:0.9,y:{type:"spring" , stiffness:60}, ease:"easeInOut", delay:0.3}} className="text-3xl md:text-5xl 2xl:text-8xl text-center font-semibold text-white">Enjoy Food, Enjoy Life!</motion.h1>
          <motion.p viewport={{once: true}} initial={{opacity:0 , y:100}} whileInView={{opacity:1, y:0}} transition={{duration:0.9, y:{type:"spring" , stiffness:60} ,ease:"easeInOut", delay:0.35}} className="text-lg 2xl:text-3xl 2xl:w-1/3 font-normal sm:line-clamp-2  text-center text-white/90 line-clamp-4 sm:w-[70%] lg:w-1/2 ">A full-service fine dining
          establishment where you can sample authentic and organic cuisine.</motion.p>
         <motion.div viewport={{once: true}}
          initial={{opacity:0 , y:100}} whileInView={{opacity:1, y:0}} transition={{duration:0.9,  y:{type:"spring" , stiffness:60},ease:"easeInOut" ,delay:0.4}}>
          <Link to="reserve"
               smooth={true} 
             offset={120} 
            duration={800} >
          <motion.button
          whileTap={{scale:0.9}}
           className='px-4 py-2 2xl:px-8 2xl:py-4 2xl:text-2xl bg-[#112C26] text-white rounded-md hover:bg-[#1E4F45]'>RESERVE NOW</motion.button>
           </Link>
       </motion.div>
       
        </div>
      </div>
      <Story/>
      <Dishes />
      <MenuList />
      <Map/>
      <Book/>
      <Testimonials />
      <Footer />
    </div>
   
   
  )
}

export default Home