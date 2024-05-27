import React from "react";
import { motion } from "framer-motion";
import useInView from "../useInView";
import LottieBackground from "../components/LottieBackground.jsx";

const Hero = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      className="relative bg-cover bg-center h-screen"
      // style={{
      //   backgroundImage:
      //     "url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvcmV4fGVufDB8fDB8fHww)",
      // }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <LottieBackground />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000414] to-[#010e42] opacity-90"></div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white relative">
        {/* Headline */}
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Trade Forex with Confidence
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join thousands of traders leveraging our platform at - Jamal Forex Hub
          - for real-time data, advanced analytics and signals.
        </motion.p>

        {/* Call to Action Button */}
        <motion.a
          href="#signup"
          className="text-white px-8 py-3 rounded bg-[#071F7E] hover:bg-[#031663] border"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Get Started
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;
