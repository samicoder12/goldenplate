import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import Swal from 'sweetalert2'
import {motion} from 'framer-motion'
const ContactUs = () => {
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
  return (
    <div className='w-full h-[700px] md:h-[500px] bg-green'>
        <div className="container  pt-16">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center md:px-0 px-3">
                <div className="flex flex-col space-y-6 ">
                  <motion.div viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="flex gap-3">
                  <div className="">
                  <MdEmail className='text-yellow text-3xl' />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h1 className="text-white text-2xl font-semibold">Email Address :</h1>
                    <p className="text-sm text-white">info@goldenplaterestaurant.net</p>
                  </div>
                  </motion.div>
                  <motion.div viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="flex gap-3">
                  <div className="">
                  <FaPhoneAlt className='text-yellow text-3xl'/>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h1 className="text-white text-2xl font-semibold">Call Us Today :</h1>
                    <p className="text-sm text-white">+251-975745252</p>
                  </div>
                  </motion.div>
                  <motion.div viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} className="flex gap-3">
                  <div className="">
                  <FaLocationDot  className='text-yellow text-3xl'/>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h1 className="text-white text-2xl font-semibold">Physical Address :</h1>
                    <p className="text-sm text-white">Bole Medhanialem, Abyssinia Plaza Mezzanine floor.</p>
                  </div>
                  </motion.div>
                </div>
                
                <div className="flex ">
                   <motion.form viewport={{once: true}} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"easeInOut" , y:{type:"spring", stiffness:60 }, delay:0.35}} onSubmit={onSubmit}>
                    <div className="flex flex-col space-y-4 ">
                        <input className='w-full outline-yellow px-1 py-3 rounded-md text-left' name="name" type="text" placeholder='Name' required />
                        <input className='w-full outline-yellow px-1 py-3 rounded-md' name="email" type="email" placeholder='Enter Your Email' required />
                    </div>
                        <textarea className='w-full outline-yellow h-20 rounded-lg px-2 my-3 pt-1' name="message" id="message" placeholder='Enter Your Message'required ></textarea >
                        <button className='bg-red-700 text-white font-semibold text-lg hover:bg-red-600 w-full py-2 rounded-2xl' type='submit'>Submit</button>
                   </motion.form>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default ContactUs