import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const MessageUs = () => {
  const [chat, setChat] = useState(false);
  return (
    <div className="fixed top-[50%] left-0 z-50 border bg-[#010e42] border-white text-white rounded-r flex items-center shadow-lg cursor-pointer">
      {chat ? (
        <span className="bg-rose-500 p-2" onClick={() => setChat(false)}>
          <FaTimes className="text-white" />
        </span>
      ) : (
        <span onClick={() => setChat(true)} className="p-2 relative">
          <FaRegBell />
          <span className="text-[9px] rounded-full text-white bg-rose-500 absolute top-0 right-0 py-[2px] px-2">
            1
          </span>
        </span>
      )}
      {chat && (
        <span className="text-sm bg-green-500 p-2">Chat us on WhatsApp</span>
      )}
    </div>
  );
};

export default MessageUs;
