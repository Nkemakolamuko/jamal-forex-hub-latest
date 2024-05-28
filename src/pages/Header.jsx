import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import useInView from "../useInView";
import { Link } from "react-scroll";
import logo from "../assets/Candlestick.gif";
import { FormContext } from "../App";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [ref, isInView] = useInView({ threshold: 0.1 });

  const { isFormVisible, setIsFormVisible } = useContext(FormContext);

  const openForm = () => setIsFormVisible(true);

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
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
          className="text-xl font-bold flex items-center"
        >
          <img src={logo} alt="Logo" className="w-10 h-7" />
          JFH
        </motion.div>

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
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={`text-[#071F7E] hover:text-[#031663] block mt-4 md:inline-block md:mt-0 header transition-all duration-300 ${
              active === "Home" ? "bg-[#0000f1]/20" : ""
            } px-2 py-1 rounded hover:bg-[#0000f1]/20 cursor-pointer`}
            onClick={() => setActive("Home")}
          >
            Home
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className={`text-[#071F7E] hover:text-[#031663] block mt-4 md:inline-block md:mt-0 header transition-all duration-300 ${
              active === "Features" ? "bg-[#0000f1]/20" : ""
            } px-2 py-1 rounded hover:bg-[#0000f1]/20 cursor-pointer`}
            onClick={() => setActive("Features")}
          >
            Features
          </Link>
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            className={`text-[#071F7E] hover:text-[#031663] block mt-4 md:inline-block md:mt-0 header transition-all duration-300 ${
              active === "Pricing" ? "bg-[#0000f1]/20" : ""
            } px-2 py-1 rounded hover:bg-[#0000f1]/20 cursor-pointer`}
            onClick={() => setActive("Pricing")}
          >
            Pricing
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            className={`text-[#071F7E] hover:text-[#031663] block mt-4 md:inline-block md:mt-0 header transition-all duration-300 ${
              active === "Testimonials" ? "bg-[#0000f1]/20" : ""
            } px-2 py-1 rounded hover:bg-[#0000f1]/20 cursor-pointer`}
            onClick={() => setActive("Testimonials")}
          >
            Testimonials
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={`text-[#071F7E] hover:text-[#031663] block mt-4 md:inline-block md:mt-0 header transition-all duration-300 ${
              active === "Contact" ? "bg-[#0000f1]/20" : ""
            } px-2 py-1 rounded hover:bg-[#0000f1]/20 cursor-pointer`}
            onClick={() => setActive("Contact")}
          >
            Contact
          </Link>
        </nav>

        {/* Call to Action Button */}
        <motion.a
          href="#signup"
          onClick={openForm}
          className="bg-[#071F7E] hover:bg-[#031663] text-white px-4 py-2 rounded hidden md:inline-block outline border border-black outline-offset-2 outline-blue-300 hover:outline-blue-500"
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
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-gray-700 hover:text-blue-500 active:text-blue-500 block py-2 hover:bg-slate-100 active:bg-slate-100 transition-all duration-300 px-4 md:inline-block md:mt-0 font-bold text-xl cursor-pointer"
          onClick={toggleMenu}
        >
          Jamal Forex Hub
        </Link>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-gray-700 hover:text-blue-500 active:text-blue-500 block py-2 hover:bg-slate-100 active:bg-slate-100 transition-all duration-300 px-4 md:inline-block md:mt-0 border-t cursor-pointer"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="features"
          smooth={true}
          duration={500}
          className="text-gray-700 hover:text-blue-500 active:text-blue-500 block py-2 hover:bg-slate-100 active:bg-slate-100 transition-all duration-300 px-4 md:inline-block md:mt-0 cursor-pointer"
          onClick={toggleMenu}
        >
          Features
        </Link>
        <Link
          to="pricing"
          smooth={true}
          duration={500}
          className="text-gray-700 hover:text-blue-500 active:text-blue-500 block py-2 hover:bg-slate-100 active:bg-slate-100 transition-all duration-300 px-4 md:inline-block md:mt-0 cursor-pointer"
          onClick={toggleMenu}
        >
          Pricing
        </Link>
        <Link
          to="testimonials"
          smooth={true}
          duration={500}
          className="text-gray-700 hover:text-blue-500 active:text-blue-500 block py-2 hover:bg-slate-100 active:bg-slate-100 transition-all duration-300 px-4 md:inline-block md:mt-0 cursor-pointer"
          onClick={toggleMenu}
        >
          Testimonials
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-gray-700 hover:text-blue-500 active:text-blue-500 block py-2 hover:bg-slate-100 active:bg-slate-100 transition-all duration-300 px-4 md:inline-block md:mt-0 border-b cursor-pointer"
          onClick={toggleMenu}
        >
          Contact
        </Link>
        <motion.a
          href="#signup"
          onClick={openForm}
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
        onClick={openForm}
        className="text-white  bg-[#071F7E] hover:bg-[#031663] outline border border-black outline-offset-2 outline-blue-300 hover:outline-blue-500 px-4 py-2 block md:hidden text-center shadow-2xl w-[95%] mx-auto rounded"
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
