import React, { useState } from "react";
import { motion } from "framer-motion";
import useInView from "../useInView";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <motion.header
      ref={ref}
      className="bg-white !sticky top-0 z-50 shadow-md pb-1"
      initial={{ opacity: 0, y: -50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:py-2 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">JFH</div>
        {/* <img src={logo} alt="Logo" className="w-14" /> */}

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Menu Large */}
        <nav className={`md:flex space-x-6 hidden`}>
          <a
            href="#home"
            className="text-[#071F7E] hover:text-[#031663] block mt-4 md:inline-block md:mt-0 header"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-[#071F7E] hover:text-[#031663] block mt-4 md:inline-block md:mt-0 header"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-[#071F7E] hover:text-[#031663] block mt-4 md:inline-block md:mt-0 header"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="text-[#071F7E] hover:text-[#031663] block mt-4 md:inline-block md:mt-0 header"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-[#071F7E] hover:text-[#031663] block mt-4 md:inline-block md:mt-0 header"
          >
            Contact
          </a>
        </nav>

        {/* Call to Action Button */}
        <motion.a
          href="#signup"
          className="bg-[#071F7E] hover:bg-[#031663] text-white px-4 py-2 rounded hidden md:inline-block"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get Started
        </motion.a>
      </div>

      {/* Navigation Menu Small */}
      <motion.nav
        className={`absolute z-[99] w-[80%] bg-white top-0 left-0 h-screen shadow-2xl ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, x: -50 }}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="#home"
          className="text-gray-700 hover:text-blue-500 active:text-blue-500 block py-2 hover:bg-slate-100 active:bg-slate-100 transition-all duration-300 px-4 md:inline-block md:mt-0 font-bold text-xl"
        >
          Jamal Forex Hub
        </a>
        <a
          href="#home"
          className="text-gray-700 hover:text-blue-500 active:text-blue-500 block py-2 hover:bg-slate-100 active:bg-slate-100 transition-all duration-300 px-4 md:inline-block md:mt-0 border-t"
        >
          Home
        </a>
        <a
          href="#features"
          className="text-gray-700 hover:text-blue-500 active:text-blue-500 block py-2 hover:bg-slate-100 active:bg-slate-100 transition-all duration-300 px-4 md:inline-block md:mt-0"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="text-gray-700 hover:text-blue-500 active:text-blue-500 block py-2 hover:bg-slate-100 active:bg-slate-100 transition-all duration-300 px-4 md:inline-block md:mt-0"
        >
          Pricing
        </a>
        <a
          href="#testimonials"
          className="text-gray-700 hover:text-blue-500 active:text-blue-500 block py-2 hover:bg-slate-100 active:bg-slate-100 transition-all duration-300 px-4 md:inline-block md:mt-0"
        >
          Testimonials
        </a>
        <a
          href="#contact"
          className="text-gray-700 hover:text-blue-500 active:text-blue-500 block py-2 hover:bg-slate-100 active:bg-slate-100 transition-all duration-300 px-4 md:inline-block md:mt-0 border-b"
        >
          Contact
        </a>
        <motion.a
          href="#signup"
          className="text-white bg-[#071F7E] hover:bg-[#031663] px-4 py-2 mt-4 w-[80%] rounded mx-auto block md:hidden text-center shadow-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get Started
        </motion.a>
      </motion.nav>

      {/* Call to Action Button for small screens */}
      <motion.a
        href="#signup"
        className="text-white bg-[#071F7E] hover:bg-[#031663] px-4 py-2 block md:hidden text-center shadow-2xl w-[95%] mx-auto rounded"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Get Started
      </motion.a>
    </motion.header>
  );
};

export default Header;