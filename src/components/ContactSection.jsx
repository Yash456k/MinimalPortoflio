import React from "react";
import { motion } from "framer-motion";

const parentVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

const childVariant = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ContactsSection = () => {
  return (
    <motion.section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-500 to-indigo-800 text-white"
    >
      <motion.div
        variants={parentVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-5xl m-4 p-8 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Contact Me</h2>
        <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={childVariant}
            className="p-4 bg-gray-100 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">Email</h3>
            <p className="text-lg mb-4">yash456k@gmail.com</p>
            <a
              href="mailto:yash456k@gmail.com"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none transition-colors duration-200"
            >
              Send Email
            </a>
          </motion.div>
          <motion.div
            variants={childVariant}
            className="p-4 bg-gray-100 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">Twitter</h3>
            <p className="text-lg mb-4">@yash654k</p>
            <a
              href="https://twitter.com/yash654k"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none transition-colors duration-200"
            >
              Visit Twitter
            </a>
          </motion.div>
          <motion.div
            variants={childVariant}
            className="p-4 bg-gray-100 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-lg mb-4">linkedin.com/in/yash-khambhatta</p>
            <a
              href="https://www.linkedin.com/in/yash-khambhatta/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none transition-colors duration-200"
            >
              Visit LinkedIn
            </a>
          </motion.div>
          <motion.div
            variants={childVariant}
            className="p-4 bg-gray-100 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">Github</h3>
            <p className="text-lg mb-4">Yash456k</p>
            <a
              href="https://github.com/Yash456k"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none transition-colors duration-200"
            >
              Visit GitHub
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactsSection;
