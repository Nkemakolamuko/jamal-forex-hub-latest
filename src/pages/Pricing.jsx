import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useInView from "../useInView";
import pricingPlansDb from "../db/pricingPlansDb";

const Pricing = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      id="pricing"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Section Introduction */}
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Pricing Plans
        </motion.h2>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlansDb.map(({ name, id, price, features }) => (
            <motion.div
              key={id}
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl flex flex-col justify-between transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: id * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{name}</h3>
              <p className="text-3xl font-bold mb-4">{price}</p>
              <ul className="mb-6 text-left">
                {features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    - {feature}
                  </li>
                ))}
              </ul>
              <Link to={`/plan-checkout/${id}`}>
                <motion.p
                  className="bg-[#071F7E] text-white px-4 py-2 md:py-3 rounded hover:bg-[#031663] shadow-lg shadow-black/30 active:scale-95"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Choose Plan
                </motion.p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;
