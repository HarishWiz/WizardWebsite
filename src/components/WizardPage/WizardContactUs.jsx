import React from "react";
import image from "./Wizard page Assets/about1.jpeg";
import {motion } from 'framer-motion'
const WizardContactUs = () => {
  return (
    <>
      <motion.div className="w-full h-auto py-20 bg-gradient-to-b from-gray-800 to-black font-cinzel">
        <motion.h1 className="text-violet-600 text-3xl font-bold text-center pt-4"
            initial={{opacity:0,y:200}}
            animate={{opacity:1,y:0}}
        >
          Contact Us
        </motion.h1>
        <motion.div className=" grid grid-cols-1 md:grid-cols-2 w-full h-auto p-8 "
            initial={{opacity:0 }}
            animate={{opacity:1}}
            transition={{duration:0.5}}
        >
          <motion.div className="flex justify-items-center "
            initial={{opacity:0,x:'-100vw'}}
            animate={{ opacity:1,x:0}}
            transition={{duration:0.5}}
          >
            <img src={image} alt="contact " className="w-full h-auto " />
          </motion.div>
          <motion.div className="flex flex-col w-full px-6 items-center"
             initial={{opacity:0,x:'100vw'}}
             animate={{ opacity:1,x:0}}
             transition={{duration:0.5}}
          >
            <p className="text-white text-center p-5 font-bold">
              Have questions or magical inquiries ? Fill out the form, and we'll
              get back to you faster than a flying broomstick !
            </p>
            <form action="" className="flex flex-col w-full space-y-6">
              <div>
                <label
                  htmlFor=""
                  className="block text-violet-600 text-lg font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full mt-2 p-3 bg-gray-700 rounded-md outline-none focus:ring-2 focus:ring-violet-500  text-white font-bold"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block text-violet-600 text-lg font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full mt-2 p-3 bg-gray-700 rounded-md outline-none focus:ring-2 focus:ring-violet-500  text-white font-bold"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block text-violet-600 text-lg font-semibold"
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full mt-2 p-3 bg-gray-700 outline-none rounded-md focus:ring-2 focus:ring-violet-500 text-white font-bold"
                  placeholder="Message"
                ></textarea>
              </div>
              <button className="px-6 py-2 rounded-lg bg-violet-600 text-white font-bold text-lg hover:bg-violet-800">
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default WizardContactUs;
