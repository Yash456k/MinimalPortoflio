import React from "react";
import { motion, transform } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "NodeJS",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
  "REST API Design",
  "Authentication & Security",
  "WebSockets",
];

const animationVariant = {
  initial: { opacity: 0, y: 100 },
  animate: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.08 * index,
    },
  }),
};

const SkillsPage = () => {
  return (
    <section className="bg-emerald-950 min-h-screen flex justify-center items-center">
      <div className="h-full md:w-1/2 w-3/4 flex flex-col justify-evenly items-center">
        <div className="md:text-8xl text-6xl font-custom text-white text-center">
          My Skills
        </div>
        <motion.ul className="flex flex-wrap justify-center gap-2 md:text-lg  text-gray-800">
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className="bg-white border-black px-5 py-3 rounded-xl shadow-lg font-acme"
              variants={animationVariant}
              initial="initial"
              whileInView="animate"
              whileHover={{ scale: 1.1 }}
              viewport={{ once: true }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default SkillsPage;
