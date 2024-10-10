import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion} from"framer-motion"
const MenuList = () => {
  const MenuItems= [
    {
      id:1,
      images:"https://lh5.googleusercontent.com/p/AF1QipMMtkelG93zMrT0Z2EIsmEjBjpTYnymB2_mJoFc=w330-h248-p-k-no",
      text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      h1:"Bruschetta Trio",
      p:"Main Courses"
    },
    {
      id:2,
      images:"https://lh5.googleusercontent.com/p/AF1QipNJLrZMvQvy3QUJEW2_1vroSAXPvwuDZMPrQU7y=s868-k-no",
      text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      h1:"Stuffed Mushrooms",
      p:"Appetizer"
    },
    {
      id:3,
      images:"https://goldenplaterestaurant.net/wp-content/uploads/2023/09/photo_2023-09-21_09-21-56.jpg",
      text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      h1:"Bruschetta Trio",
      p:"Main Courses"
    },
    {
      id:4,
      images:"https://lh5.googleusercontent.com/p/AF1QipMMtkelG93zMrT0Z2EIsmEjBjpTYnymB2_mJoFc=w330-h248-p-k-no",
      text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      h1:"Stuffed Mushrooms",
      p:"Appetizer"
    },
    {
      id:5,
      images:"https://goldenplaterestaurant.net/wp-content/uploads/2023/09/photo_2023-09-21_09-45-50-1.jpg",
      text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      h1:"Crispy Calamari",
      p:"Desserts"
    },
    {
      id:6,
      images:"https://goldenplaterestaurant.net/wp-content/uploads/2023/08/Golden-plate-Restaurant-Branded-Images18-1024x724-1.jpg",
      text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      h1:"Bruschetta Trio",
      p:"Appetizer"
    },
  ]


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
    ]
  };
 
  return (
    <div className="w-full h-[800px] bg-green">
      <div className="flex justify-center items-center pt-12">
          <motion.h1 viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}}
           className="text-3xl font-bold text-yellow">Our Menu</motion.h1>
      </div>
      <div className="container pt-32 px-2 d:px-4 xl:px-0">
      <Slider {...settings}>
      {
        MenuItems.map((menu) => (
          <div  key={menu.id} className="w-[300px] h-[450px] bg-white drop-shadow-lg rounded-xl">
            <img className='w-full rounded-t-xl h-[200px] object-center' src={menu.images} alt="images" />
            <h1 className="text-lg pt-4 font-bold text-green text-center">{menu.h1}</h1>
            <p className="text-sm font-medium text-[rgb(79,78,78)] py-2 text-center">{menu.p}</p>
            <p className="text-sm font-light text-center px-2 text-gray-700">{menu.text}</p>
          </div>
        ))
      }
      </Slider>
      </div>
    </div>
  )
}

export default MenuList