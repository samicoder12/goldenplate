import React from 'react'
import Slider from 'react-slick/lib/slider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swal from 'sweetalert2'
import { motion } from 'framer-motion';
const Book = () => {
    const Slide = [
        {
            id:1,
            image:'https://angularfrontend.goldencatering.net/assets/images01.jpg',

        },
        {
            id:2,
            image:'https://angularfrontend.goldencatering.net/assets/images02.jpg',

        },
        {
            id:3,
            image:'https://angularfrontend.goldencatering.net/assets/images03.jpg',

        },
        
    ]
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "57417ab9-a58d-4f8c-a67c-d470dedc2f84");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Your Message Sent Successfully!",
                icon: "success"
              });
        }
      };
    var setting = {
        dots: true,
        infinite: true,
        arrow:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
    }
  return (
    <div id='reserve' className='w-full h-[1400px] md:h-[900px] bg-green pt-10 md:pt-24 overflow-hidden'>
        <motion.h1 viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="text-3xl pb-2 md:text-4xl text-yellow font-semibold text-center">Make a Reservation</motion.h1>
        <motion.p viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="text-center text-base md:text-lg font-normal text-white">Making your special occasion more special.</motion.p>
        <div className="container overflow-hidden mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 space-y-10 px-2 md:space-y-0">
        <div className="w-full">
            <motion.h1  viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="text-lg flex items-center text-white w-full py-1 bg-black px-2 rounded-lg font-semibold">Total number of tables :<span className='text-yellow'>40</span> </motion.h1>
            <motion.h1  viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="text-lg flex items-center mt-2 text-white w-full py-1 bg-black px-2 rounded-lg font-semibold">Available number of tables :<span className='text-yellow'>40</span> </motion.h1>
           <form onSubmit={onSubmit}>
            <motion.div viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="flex flex-col">
                <input name="name" type="text" className='mt-2 w-full py-2 px-5 placeholder-black/60 outline-yellow rounded-lg' placeholder='Enter Your Full Name' required/>
                <div className="flex items-center space-x-6">
                    <input type="text" name="text" className='my-4 w-1/2 py-2 px-5 placeholder-black/60 outline-yellow rounded-lg' placeholder='Phone No' required/>
                    <input type="date" name="data" className='my-4 w-1/2 py-2 px-5 outline-yellow rounded-lg' required/>
                </div>
                <div className="flex items-center space-x-6 -mt-3 ">
                    <input type="email"  name="email" className='my-4 w-1/2 py-2 px-5 placeholder-black/60 outline-yellow rounded-lg' placeholder='Enter Your Email'required />
                    <input type="time" name="time" className='my-4 w-1/2 py-2  px-5 outline-yellow rounded-lg 'required/>
                </div>
                <div className="flex items-center space-x-6 -mt-3">
                    <input id="number" name="number" type="number"min={2} className='my-4 w-1/2 py-2 px-5 placeholder-black/60 outline-yellow rounded-lg' required/>
                    <select name='option' className='my-4 w-1/2 py-2 pr-3 pl-3 placeholder-black/60 outline-yellow rounded-lg' required>
                      <option name="Select Occasion" value="Select Occasion" className='my-4 w-1/2 py-2  placeholder-black/60 outline-yellow rounded-lg'>Select Occasion</option>
                      <option name="Birth Day" value="Birth Day" className='my-4 w-1/2 py-2  placeholder-black/60 outline-yellow rounded-lg'>Birth Day</option>
                      <option name="Anniversary" value="Anniversary" className='my-4 w-1/2 py-2  placeholder-black/60 outline-yellow rounded-lg'>Anniversary</option>
                      <option name="Engagement" value="Engagement" className='my-4 w-1/2 py-2  placeholder-black/60 outline-yellow rounded-lg'>Engagement</option>
                      <option name="Graduation"  value="Graduation" className='my-4 w-1/2 py-2  placeholder-black/60 outline-yellow rounded-lg'>Graduation</option>
                      <option name="Farewell" value="Farewell" className='my-4 w-1/2 py-2  placeholder-black/60 outline-yellow rounded-lg'>Farewell</option>
                      <option name="Other Special Even" value="Other Special Event" className='my-4 w-1/2 py-2  placeholder-black/60 outline-yellow rounded-lg'>Other Special Event</option>
                    </select>
                </div>
                    <textarea className='w-full  outline-yellow h-20 rounded-lg px-2 pt-1' name="message"  placeholder='Message'required></textarea>
                   <button type='submit' className='w-full py-3  text-black rounded-xl mt-3 bg-yellow text-lg font-normal hover:scale-105 duration-300'>
                     Book Reservation
                    </button>
            </motion.div>
           </form>
        </div>
        <div className="px-1 xl:px-0 md:px-4 ">
            <Slider {...setting} >
             {
                Slide.map((slide) =>(
                       <div key={slide.id} className="w-full h-[500px] ">
                          <img className="w-full h-full object-cover rounded-lg" src={slide.image} alt="image" />
                       </div>
                ))
             }
             </Slider>
        </div>
        </div>
    </div>
  )
}

export default Book