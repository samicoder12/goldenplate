import React from 'react'
import { motion } from 'framer-motion'
const GalleryItems = () => {
  return (
    <div className='w-ful h-[4370px] md:h-[1150px] lg:h-[1500px] xl:h-[1800px]'>
      <div className="container">
      <div viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay: 0.35}} className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 px-2 md:px-0 pt-14 md:pt-24">

          <motion.img viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay: 0.3}} className='rounded-2xl hover:-translate-y-1 duration-300 bg-zinc-400' src="https://goldenplaterestaurant.net/wp-content/uploads/2023/08/Golden-plate-Restaurant-Branded-Images24-1024x724-1-e1695212154607-640x480.jpg" alt="images" />
          <motion.img viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay: 0.35}} className='rounded-2xl hover:-translate-y-1 duration-300 bg-zinc-400' src="https://goldenplaterestaurant.net/wp-content/uploads/2023/08/two-1024x1018-1-640x480.jpg" alt="images" />
          <motion.img viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay: 0.4}} className='rounded-2xl hover:-translate-y-1 duration-300 bg-zinc-400' src="https://goldenplaterestaurant.net/wp-content/uploads/2023/08/Golden-plate-Restaurant-Branded-Images18-1024x724-1-640x480.jpg" alt="images" />
          <motion.img viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay: 0.45}} className='rounded-2xl hover:-translate-y-1 duration-300 bg-zinc-400' src="https://goldenplaterestaurant.net/wp-content/uploads/2023/08/Golden-plate-Restaurant-Branded-Images13-1024x724-1-640x480.jpg" alt="images" />
          <motion.img viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay: 0.48}} className='rounded-2xl hover:-translate-y-1 duration-300 bg-zinc-400' src="https://goldenplaterestaurant.net/wp-content/uploads/2023/09/msg352214439-381533-2-819x1024-640x480.jpg" alt="images" />
          <motion.img viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay: 0.5}} className='rounded-2xl hover:-translate-y-1 duration-300 bg-zinc-400' src="https://goldenplaterestaurant.net/wp-content/uploads/2023/09/photo_2023-09-21_09-21-56-1024x819-640x480.jpg" alt="images" />
          <motion.img viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay: 0.5}} className='rounded-2xl hover:-translate-y-1 duration-300 bg-zinc-400' src="https://lh5.googleusercontent.com/p/AF1QipMn2TQP5K8mAnayoJjXHKoxJmgDRja5q-CzHaRn=w400-h533-k-no" alt="images" />
          <motion.img viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay: 0.54}} className='rounded-2xl hover:-translate-y-1 duration-300 bg-zinc-400' src="https://lh5.googleusercontent.com/p/AF1QipM8hs-AF2Rzq184gu70loDS1TEmRbYrjNgwZocP=w400-h300-k-no" alt="images" />
          <motion.img viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay: 0.58}} className='rounded-2xl hover:-translate-y-1 duration-300 bg-zinc-400' src="https://lh5.googleusercontent.com/p/AF1QipPHcUK27kJ8PzOeCy602SZDO7VV8Owbaai7_osY=w400-h282-k-no" alt="images" />
          <motion.img viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay: 0.6}} className='rounded-2xl hover:-translate-y-1 duration-300 bg-zinc-400' src="https://lh5.googleusercontent.com/p/AF1QipO8jMjGI4saMR93vkCFfVxFNoWwD0E4R1Xv3sHl=w400-h300-k-no" alt="images" />
          <motion.img viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay: 0.61}} className='rounded-2xl hover:-translate-y-1 duration-300 bg-zinc-400' src="https://lh5.googleusercontent.com/p/AF1QipMCHb8AGDN32b-YpFHiuh8mZi2FixEWQFBsyOHP=w400-h711-k-no" alt="images" />
          
      </div>
      </div>
    </div>
  )
}

export default GalleryItems
      




 


         