import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useInView from "../useInView";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import axios from "axios";

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fname.trim() || !email.trim() || !msg.trim()) {
      setErr("All fields are required!");
      return;
    }

    try {
      await axios.post("https://formspree.io/f/xaygjagd", {
        name: fname,
        email: email,
        message: msg,
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      setEmail("");
      setFname("");
      setMsg("");
    } catch (error) {
      setErr(
        "There was an error sending your message. Please try again later."
      );
    }
  };

  useEffect(() => {
    setErr("");
  }, [fname, email, msg]);

  return (
    <motion.section
      ref={ref}
      className="py-16 bg-white overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      id="contact"
    >
      <FaEnvelope className="w-60 h-60 opacity-30 text-blue-300 absolute top-[50%] left-0 -rotate-12 hidden md:flex" />
      <FaEnvelope className="w-64 h-64 opacity-30 text-blue-300 absolute top-0 left-[50%] rotate-12 hidden md:flex" />
      <FaEnvelope className="w-28 h-28 opacity-30 text-blue-300 absolute top-[50%] right-0 -rotate-12" />
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {err && <span className="text-rose-500">{err}</span>}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {success && (
            <span className="text-green-500">
              Congratulations, your message has been sent
            </span>
          )}
        </motion.p>

        <motion.form
          className="max-w-xl mx-auto mb-8 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-slate-700 text-left" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border-2 rounded-lg outline-none text-black"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-slate-700 text-left" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border-2 rounded-lg outline-none text-black"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-slate-700 text-left" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border-2 rounded-lg outline-none text-black resize-none"
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            onClick={handleSubmit}
            className="text-white px-4 py-2 rounded bg-[#071F7E] hover:bg-[#031663] outline border border-black outline-offset-2 outline-blue-300 hover:outline-blue-500"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>Email: supportjfh@gmail.com</p>
          <p>Phone: +234 7040876440</p>
          <p>Address: Apo Sunrise Gudu, Abuja</p>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
