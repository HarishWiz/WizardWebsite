import React from "react";
import about1 from './Wizard page Assets/about1.jpeg'
import about2 from './Wizard page Assets/about2.jpeg'
import about3 from './Wizard page Assets/about3.jpg'
import about4 from './Wizard page Assets/about4.avif'
import about5 from './Wizard page Assets/about5.webp'
import { motion} from 'framer-motion';


const textVarients={
    hidden:(reverse)=>({
        opacity:0,
        x:reverse?100:-100,
    }),
    visible:{
        opacity:1,
        x:0,
        transition:{duration:0.5}
    }
}

const imageVarients={
    hidden:(reverse)=>({
        opacity:0,
        x:reverse?-100:100,
    }),
    visible:{
        opacity:1,
        x:0,
        transition:{duration:0.5}
    }
}
const WizardAboutUs = () => {

    const section=([
        {
            id:1,
            heading:"Step into the World of Magic and Wonder",
            text:"Welcome to Wizard's Emporium, your gateway to the magical realm! We are more than just a store – we are a community for witches, wizards, and magical beings from every corner of the enchanted world.",
            image:about1,
            reverse:false
        },
        {
            id:2,
            heading:"Our Story",
            text:"Born from the dreams of an aspiring wizard, Wizard's Emporium was founded with the vision of creating a haven where magic and imagination come to life.",
            image:about2,
            reverse:true
        },
        {
            id:3,
            heading: "Our Mission",
            text:"At Wizard's Emporium, we aim to inspire and empower every magical soul. We meticulously craft and source our products, ensuring they resonate with the rich traditions and modern needs of the wizarding community.",
            image:about3,
            reverse:false
        },
        {
            id:4,
            heading:"What We Offer",
            text:"From enchanting outfits to powerful wands and rare artifacts, we provide everything you need to bring magic into your world.",
            image:about4,
            reverse:true
        },
        {
            id:5,
            heading:"Join the Magic",
            text:"Explore Wizard's Emporium and let us help you bring your magical visions to life. Follow us on this enchanting journey!",
            image:about5,
            reverse:false
        }
    ])
  return (
    <>
      <div className=" pb-20 h-full w-full bg-gradient-to-b from-gray-800 to-black pt-20 font-cinzel">
        < motion.h1 className="text-3xl text-center text-violet-600 pt-4 font-bold "
            initial={{opacity:0,y:200}}
            animate={{opacity:1,y:0}}
        >About Us</motion.h1>
        <motion.section className='mt-8 mx-auto text-center overflow-hidden'>
            {section.map((item)=>(
                <div key={item.id} className={`flex flex-col items-center md:flex-row ${item.reverse ?'md:flex-row-reverse':""} my-8`}>
                    <motion.div className='md:w-1/2 px-4'
                       variants={textVarients}
                       custom={item.reverse}
                       initial='hidden'
                       whileInView='visible'
                       viewport={{once:true, amount:0.3}}
                    >
                    <h2 className='text-3xl font-extrabold text-purple-600 mb-4' >{item.heading}</h2>
                    <p className=' text-lg text-white font-semibold'>{item.text}</p>
                    </motion.div>
                    <motion.div className='md:w-1/2 px-4'
                        variants={imageVarients}
                        custom={item.reverse}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once:true,amount:0.3}}
                    >
                        <img src={item.image} alt={item.heading} className='w-full h-[450px] object-cover rounded-xl shadow-lg pt-10' />
                    </motion.div>
                </div>
            ))}
        </motion.section>
      </div>
    </>
  );
};

export default WizardAboutUs;
