// CookieConsent.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setShow(false);
    // Add any other logic for accepting cookies
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="cookie-consent outline outline-slate-400 outline-offset-1"
        >
          <div className="cookie-content">
            <p>
              We use cookies to improve your experience. By using our site, you
              accept our use of cookies.
            </p>
            <div className="flex items-center gap-2 justify-center">
              <button className="btnB rounded" onClick={handleAccept}>
                Decline
              </button>
              <button className="btnA rounded" onClick={handleAccept}>
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
