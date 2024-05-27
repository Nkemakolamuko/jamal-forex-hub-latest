import React from "react";
import { motion } from "framer-motion";
import useInView from "../useInView";

const pricingPlans = [
  {
    name: "Basic",
    price: "$19/month",
    features: ["Real-time Data", "Basic Analytics", "Email Support"],
  },
  {
    name: "Pro",
    price: "$49/month",
    features: [
      "Real-time Data",
      "Advanced Analytics",
      "24/7 Support",
      "Custom Alerts",
    ],
  },
  {
    name: "Elite",
    price: "$99/month",
    features: [
      "Real-time Data",
      "Advanced Analytics",
      "24/7 Priority Support",
      "Custom Alerts",
      "Personal Account Manager",
    ],
  },
];

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
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl flex flex-col justify-between transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-6 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    - {feature}
                  </li>
                ))}
              </ul>
              <motion.a
                href="#signup"
                className="bg-[#071F7E] text-white px-4 py-2 md:py-3 rounded hover:bg-[#031663] shadow-lg shadow-black/30 active:scale-95"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Choose Plan
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;
