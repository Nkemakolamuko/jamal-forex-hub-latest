import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const MessageUs = () => {
  const [chat, setChat] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed top-[50%] left-0 z-50 border bg-[#010e42] border-white text-white rounded-r flex items-center shadow-lg cursor-pointer"
    >
      {chat ? (
        <span className="p-2" onClick={() => setChat(false)}>
          <FaTimes className="text-rose-500" />
        </span>
      ) : (
        <span
          onClick={() => setChat(true)}
          className="p-2 relative overflow-hidden"
        >
          <FaRegBell className="w-5 h-5" />
          <span className="text-[9px] rounded-full text-white bg-rose-500 absolute top-[2px] right-0 py-[3px] px-2 opacity-90">
            1
          </span>
        </span>
      )}
      {chat && (
        <motion.a
          href="https://www.whatsapp.com"
          target="_blank"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm bg-green-500 p-2 rounded-r"
        >
          Chat us on WhatsApp
        </motion.a>
      )}
    </motion.div>
  );
};

export default MessageUs;
