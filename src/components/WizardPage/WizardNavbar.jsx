import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FaHatWizard } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import {motion} from 'framer-motion'

const WizardNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      < motion.header className="flex justify-between w-full items-center px-2 md:px-5 py-2 bg-violet-400 shadow-lg fixed top-0 left-0 z-20 font-cinzel"
        initial={{opacity:0,y:"-100vh"}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.5}}
      >
        <h1 className="flex px-2 items-center cursor-pointer">
          <FaHatWizard className="text-5xl text-purple-900 animate-pulse" />
          <span className="text-xl md:text-3xl text-white font-bold">
            Wizard's Emporium
          </span>
        </h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
              <NavLink className="text-white cursor-pointer font-semibold hover:border-b-1 border-white hover:font-bold" to="/">Home</NavLink>
              <NavLink className="text-white cursor-pointer font-semibold hover:border-b-1 border-white hover:font-bold" to="/products">Products</NavLink>
              <NavLink className="text-white cursor-pointer font-semibold hover:border-b-1 border-white hover:font-bold" to="/cart">Cart</NavLink>
              <NavLink className="text-white cursor-pointer font-semibold hover:border-b-1 border-white hover:font-bold" to="/about">About</NavLink>
              <NavLink className="text-white cursor-pointer font-semibold hover:border-b-1 border-white hover:font-bold" to="/contact">Contact</NavLink>
          </ul>
        </nav>

        <nav
          className={`absolute top-16 left-0 w-full bg-gray-800 overflow-hidden md:hidden transition-all duration-300 ${
            toggleMenu ? 'max-h-62 opacity-100' : 'max-h-0 opacity-0 '
          }`}
        >
          <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col w-full h-full py-4 items-center justify-center">
              <NavLink className="text-white text-xl cursor-pointer font-semibold w-full py-2 text-start px-6 " to="/">Home</NavLink>
              <NavLink className="text-white text-xl cursor-pointer font-semibold w-full py-2 text-start px-6 " to="/products">Products</NavLink>
              <NavLink className="text-white text-xl cursor-pointer font-semibold w-full py-2 text-start px-6 " to="/cart">Cart</NavLink>
              <NavLink className="text-white text-xl cursor-pointer font-semibold w-full py-2 text-start px-6 " to="/about">About</NavLink>
              <NavLink className="text-white text-xl cursor-pointer font-semibold w-full py-2 text-start px-6 " to="/contact">Contact</NavLink>
          </ul>
        </nav>

        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="block md:hidden"
        >
          <MdMenu className="text-white h-9 w-9" />
        </button>
      </motion.header>
    </>
  );
};

export default WizardNavbar;
