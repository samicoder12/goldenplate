import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion} from"framer-motion"
const Staff = () => {
  const MenuItems= [
    {
      id:1,
      images:"https://goldenplaterestaurant.net/wp-content/uploads/2023/09/DSC01227-1536x1024.jpg",
      text:"Services Team Presenting our warm hospitality, unmatched service, and commitment to making sure you have a wonderful dining experience.",
      h1:"Service Team"
    },
    {
      id:2,
      images:"https://goldenplaterestaurant.net/wp-content/uploads/2023/09/ssdsd-1-1-1536x1024.jpg",
      text:"Services Team Presenting our warm hospitality, unmatched service, and commitment to making sure you have a wonderful dining experience.",
      h1:"Service Team"
    },
    {
      id:3,
      images:"https://goldenplaterestaurant.net/wp-content/uploads/2023/09/photo_2023-09-20_15-25-25-e1695215150285.jpg",
      text:"Services Team Presenting our warm hospitality, unmatched service, and commitment to making sure you have a wonderful dining experience.",
      h1:"Service Team"
    },
    {
      id:4,
      images:"https://goldenplaterestaurant.net/wp-content/uploads/2023/09/photo_2021-12-10_13-34-10.jpg",
      text:"Become acquainted with our culinary experts, skilled in all facets of food preparation to guarantee that your cuisine meets high standards.",
      h1:"Kitchen Team"
    },
    {
      id:5,
      images:"https://goldenplaterestaurant.net/wp-content/uploads/2023/10/DSC00957-copy-scaled-e1696935216335.jpg",
      text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      h1:"Kitchen Team"
    },
    {
      id:6,
      images:"https://goldenplaterestaurant.net/wp-content/uploads/2023/10/DSC00999-e1696935048585.jpg",
      text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      h1:"Kitchen Team"
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
    <div className="relative w-full h-[800px] ">
        <img className='w-full h-[800px] object-cover absolute top-0' src="https://goldenplaterestaurant.net/wp-content/uploads/2023/10/update-scaled.jpg" alt="image" />
        <h1 className="absolute top-0 w-full h-[800px] bg-black/60"></h1>
      <div className="flex flex-col justify-center items-center  space-y-4 pt-12">
          <motion.h1 viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}}
           className="text-3xl font-bold text-yellow">Meet Our Staff</motion.h1>
           <motion.h1 viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}}
           className="text-xl font-bold text-white text-center text-balance">Where taste meets excellence service.</motion.h1>
      </div>
      <div className="container pt-32 px-2 md:px-4 xl:px-0">
      <Slider {...settings}>
      {
        MenuItems.map((menu) => (
          <div  key={menu.id} className="w-[300px] h-[450px] bg-white drop-shadow-lg rounded-xl">
            <img className='w-full bg-gray-400 rounded-t-xl h-[200px] object-center' src={menu.images} alt="images" />
            <p className="text-sm font-light text-center px-2 text-gray-700 mt-8">{menu.text}</p>
            <div className="flex justify-center items-center mt-8">
             <p className="w-10 h-1 bg-green "></p>
            </div>
            <h1 className="text-lg pt-4 font-bold text-green text-center">{menu.h1}</h1>
          </div>
        ))
      }
      </Slider>
      </div>
    </div>
  )
}

export default Staff