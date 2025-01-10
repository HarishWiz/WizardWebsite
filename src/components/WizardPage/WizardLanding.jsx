import React from "react";
import backgroundvideo from "./Wizard page Assets/backgroundvideo - Trim.mp4";
import backgroundposter from './Wizard page Assets/backgroundposter.png'
import { motion } from 'framer-motion'
const WizardLanding = () => {
  return (
    <>
      <motion.div className="relative h-screen w-full flex justify-center font-cinzel">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 h-full w-full object-cover"
          poster={backgroundposter}
        >
          <source src={backgroundvideo} type="video/mp4" />
        </video>
        <div className="relative z-10 flex items-center">
          <h1 className="text-violet-900 text-4xl font-bold text-center pt-40 animate-bounce transition-all">
            Welcome to Wizard World !
          </h1>
        </div>
      </motion.div>
    </>
  );
};

export default WizardLanding;
