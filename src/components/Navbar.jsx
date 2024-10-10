import { motion,  } from 'framer-motion'
import React, { useState } from 'react'
import { FaHamburger } from 'react-icons/fa'
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi'
import { NavLink} from 'react-router-dom'
const Navbar = () => {
  const Menu =[
    {
      id:1,
      title:"Home",
      url:"/",
    },
    {
      id:2,
      title:"About Us",
      url:"/about",
    },
    {
      id:3,
      title:"Menu",
      url:"/menu",
    },
    {
      id:4,
      title:"Reservation",
      url:"/reservation",
    },
    {
      id:5,
      title:"Gallery",
      url:"/gallery",
    },
    {
      id:6,
      title:"Contact",
      url:"/contact",
    },
  ]
  const linkClass = ({isActive}) => 
    isActive ? "px-2 py-2 bg-green text-white rounded-md font-semibold text-sm 2xl:text-xl" :"px-2 py-2 hover:bg-[#1E4F45] hover:text-white rounded-md 2xl:text-xl font-semibold text-sm"
 
  const linkBar = ({isActive}) => 
    isActive ? "w-full text-center py-2 bg-green text-white rounded-md font-semibold text-sm 2xl:text-xl" :"text-center w-full py-2 hover:bg-[#1E4F45] hover:text-white rounded-md 2xl:text-xl font-semibold text-sm"
 
  //  navbar functionality
  const [open, setOpen] = useState(false)
  const toggleBar = () => {
    setOpen(!open)
  }
  
  return (
    <motion.div 
    variants={{
      hidden:{opacity:0 , y:-75},
      visible:{opacity:1 ,y:0}
    }} 
    initial= "hidden"
    animate="visible"
    transition={{
      duration:0.5, delay:0.25,
      y:{type:"spring" , stiffness:60}
    }}

 
    className="container fixed top-4 z-30 drop-shadow-md overflow-hidden ">
       <div className="mx-2 sm:mx-0 w-[94%] sm:w-[97%] xl:w-full bg-white rounded-xl px-3">
           <div className="flex items-center justify-between">
           <div className="flex">
                <img width={100} height={100} src="https://goldenplaterestaurant.net/wp-content/uploads/2023/07/Golden-Plate-Logo-1-e1690315050305-300x187.png" alt="" />
            </div>
            <div className="">
               <ul className='hidden md:flex  items-center space-x-2 xl:space-x-4'>
                {
                    Menu.map((data) =>(
                      <NavLink className={linkClass} key={data.id} to={data.url}><li>{data.title}</li></NavLink>
                    ))
                }
               </ul>
            </div>
            <div className="flex md:hidden">
              <button onClick={toggleBar} className="text-4xl  text-green">
                {
                  open ? <HiOutlineX /> : <HiMenuAlt4 />
                }
              </button>
            </div>
           </div>
       </div>
       {
        open && (
          <div className="flex md:hidden bg-gray-500/80 w-[97%] mt-2 h-[320px] rounded-xl mx-1">
            <div className="w-full  mt-7 px-2 ">
               <ul className='flex flex-col items-center mr-4 space-y-1 space-x-2 xl:space-x-4'>
                {
                    Menu.map((data) =>(
                      <NavLink onClick={toggleBar} className={linkBar} key={data.id} to={data.url}><li>{data.title}</li></NavLink>
                    ))
                }
               </ul>
            </div>
          </div>
        )
       }
    </motion.div>
  )
}

export default Navbar