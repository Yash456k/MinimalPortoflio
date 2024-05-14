import { useState } from "react";
import { motion } from "framer-motion";

const SidebarToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants = {
    open: { width: 300, transition: { type: "spring", stiffness: 100 } },
    closed: { width: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const menuItems = ["Home", "About", "Services", "Contact"];

  return (
    <div className="relative">
      {/* Button to toggle sidebar */}
      <motion.div
        className="fixed top-4 right-4 bg-blue-500 rounded-full p-3 cursor-pointer z-20"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
      >
        <span className="block w-5 h-5 bg-white rounded-full"></span>
      </motion.div>

      {/* Sidebar container */}
      <motion.div
        className="fixed top-0 right-0 bottom-0 bg-gray-100 shadow-lg z-10"
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>
        <div className="flex flex-col items-center justify-center h-full">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={"#" + item.toLowerCase()}
              className="text-lg py-2 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SidebarToggle;
