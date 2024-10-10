import React from 'react'
import { motion } from 'framer-motion'
const FoodLists = () => {
    const MenuFoodList = [
        {
            id:1,
            image:"https://goldenplaterestaurant.net/wp-content/uploads/2023/09/msg376292639-381538-150x150.jpg",
            h1:"Special Combo",
            p:"Golden Plate Special Combo",
            span:"Our Favorites Menu"
        },
        {
            id:2,
            image:"https://goldenplaterestaurant.net/wp-content/uploads/2023/09/two-1024x1018-1-640x480-1-150x150.jpg",
            h1:"Fish mulmul",
            p:"Fish mulmul chili pepper data sauce",
            span:"Our Favorites Menu"
        },
        {
            id:3,
            image:"https://goldenplaterestaurant.net/wp-content/uploads/2023/09/photo1695213216-2-1-150x150.jpeg",
            h1:"Grilled Nile Perch",
            p:"Adipiscing elit eiusmod tempor incididunt",
            span:"Our Favorites Menu"
        },
        {
            id:4,
            image:"https://goldenplaterestaurant.net/wp-content/uploads/2023/09/Golden-plate-Restaurant-Branded-Images18-1024x724-1-640x480-1-150x150.jpg",
            h1:"Ravioli Spinach Ricotta",
            p:"Adipiscing elit eiusmod tempor incididunt",
            span:"Our Favorites Menu"
        },
        {
            id:5,
            image:"https://goldenplaterestaurant.net/wp-content/uploads/2023/09/Golden-plate-Restaurant-Branded-Images13-1024x724-1-640x480-1-150x150.jpg",
            h1:"Tenderloin Steak",
            p:"Tenderloin Steak with red wine sauce, spinach & mushed potato",
            span:"Our Favorites Menu"
        },
        {
            id:6,
            image:"https://goldenplaterestaurant.net/wp-content/uploads/2023/09/photo1695213363-1-150x150.jpeg",
            h1:"Grilled Sirloin Steak​",
            p:"Tenderloin Steak with red wine sauce, spinach & mushed potato",
            span:"Our Favorites Menu"
        },
        {
            id:7,
            image:"https://goldenplaterestaurant.net/wp-content/uploads/elementor/thumbs/top-view-of-plate-with-beef-steaks-chicken-wings-and-wine-on-table-e1664110794933-q9mq2z5lb6r5ejdfkh2vkpml270fuuy8ygnp1r96ko.jpg",
            h1:"Grilled Chicken",
            p:"Adipiscing elit eiusmod tempor incididunt",
            span:"Appetizer Menu"
        },
        {
            id:8,
            image:"https://goldenplaterestaurant.net/wp-content/uploads/elementor/thumbs/top-view-of-plate-with-beef-steaks-chicken-wings-and-wine-on-table-e1664110794933-q9mq2z5lb6r5ejdfkh2vkpml270fuuy8ygnp1r96ko.jpg",
            h1:"Grilled Chicken",
            p:"Adipiscing elit eiusmod tempor incididunt",
            span:"Appetizer Menu"
        },
        {
            id:9,
            image:"https://goldenplaterestaurant.net/wp-content/uploads/elementor/thumbs/top-view-of-plate-with-beef-steaks-chicken-wings-and-wine-on-table-e1664110794933-q9mq2z5lb6r5ejdfkh2vkpml270fuuy8ygnp1r96ko.jpg",
            h1:"Grilled Chicken",
            p:"Adipiscing elit eiusmod tempor incididunt",
            span:"Appetizer Menu"
        },
        {
            id:10,
            image:"https://goldenplaterestaurant.net/wp-content/uploads/2023/08/Golden-plate-Restaurant-Branded-Images24-1024x724-1-e1695212154607-150x150.jpg",
            h1:"Staffed chicken",
            p:"Staffed chicken with nefro risotto",
            span:"Main Courses Menu"
        },
        {
            id:11,
            image:"https://goldenplaterestaurant.net/wp-content/uploads/2023/07/Golden-plate-Restaurant-Branded-Images18-1024x724-2-e1695212263720-150x150.jpg",
            h1:"Ravioli Spinach Ricotta",
            p:"Adipiscing elit eiusmod tempor incididunt",
             span:"Main Courses Menu"
        },
        {
            id:12,
            image:"https://goldenplaterestaurant.net/wp-content/uploads/2023/10/Golden-plate-Restaurant-Branded-Images24-1024x724-1-150x150.jpg",
            h1:"Grilled Sirloin Steak​",
            p:"Adipiscing elit eiusmod tempor incididunt",
             span:"Main Courses Menu"
        },
        {
            id:13,
            image:"https://goldenplaterestaurant.net/wp-content/uploads/2023/09/photo_2023-09-21_09-45-50-1-150x150.jpg",
            h1:"Grilled Nile Perch",
            p:"Adipiscing elit eiusmod tempor incididunt",
             span:"Main Courses Menu"
        },
        {
            id:14,
            image:"https://goldenplaterestaurant.net/wp-content/uploads/2023/09/msg352214439-381534-150x150.jpg",
            h1:"Staffed Chicken",
            p:"Adipiscing elit eiusmod tempor incididunt",
             span:"Main Courses Menu"
        },
        {
            id:15,
            image:"https://goldenplaterestaurant.net/wp-content/uploads/2023/09/msg352214439-381533-2-150x150.jpg",
            h1:"Stir fried chicken pasta",
            p:"Adipiscing elit eiusmod tempor incididunt",
             span:"Main Courses Menu"
        },
        
    ]
  return (
    
      <div className="w-full h-[7460px]  md:h-[4040px] lg:h-[2640px] bg-[rgb(30,30,30)] ">
                <div className="container">
                <div className="flex flex-col pt-16 ">
                    <motion.h1  viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="text-yellow text-2xl font-semibold text-center">Food Menu</motion.h1>
                    < motion.h2 className="text-4xl font-semibold text-white py-6 text-center">Discover Our Menu</ motion.h2>
                    <div className="container">
                        <div   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                              {
                                MenuFoodList.map((menu) => (
                                    <motion.div viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay: menu.id * 0.35}} key={menu.id} className="hover:bg-[rgb(36,36,36)] duration-300 w-[300px] h-[450px] bg-green rounded-2xl flex flex-col py-16 items-center">
                                        <div className=" flex flex-col items-center space-y-4">
                                           <img className='w-40 h-40 rounded-full border border-[rgb(149,149,149)] object-cover bg-[rgb(29,32,36)] p-2' src={menu.image} alt="foodimage" />
                                           <h1 className="text-xl text-yellow/90 font-semibold text-center">{menu.h1}</h1>
                                           <h2 className="text-sm px-2 font-medium text-balance text-center line-clamp-2 text-white">{menu.p}</h2>
                                           <span className="px-8 py-2 border-b-2 border-[rgb(235,0,41)] text-white rounded-3xl">{menu.span}</span>
                                       </div>
                                    </motion.div>
                                ))
                              }
                        </div>
                    </div>
                </div>
            </div>
           </div>
    
  )
}

export default FoodLists