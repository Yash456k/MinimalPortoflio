import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ProjectsIntro = () => {
  const refer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refer,
  });

  const yold = useTransform(scrollYProgress, [1, 0.5, 0], [-800, 0, 800]);
  const y = useSpring(yold, { stiffness: 400, damping: 30, mass: 3 });

  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);

  const opacityOld = useTransform(scrollYProgress, [1, 0.5], [0, 1]);

  const opacity = useSpring(opacityOld, {
    stiffness: 250,
    damping: 100,
    mass: 20,
  });

  return (
    <section
      className="= flex justify-center items-center relative"
      style={{ background: "linear-gradient(180deg,#111132,#505064)" }}
    >
      {/* Background Image */}
      <motion.div
        className="h-full w-full absolute "
        style={{
          x,
          backgroundImage:
            "url(https://github.com/Yash456k/React_Portfolio/blob/main/public/stars.png?raw=true)",
          backgroundSize: "cover",
          zIndex: 2,
        }}
      ></motion.div>

      {/* Content */}
      <motion.div
        ref={refer}
        className=" md:text-8xl text-4xl text-white font-bold font-customSerif"
        style={{ opacity, y }}
      >
        Projects Intro
      </motion.div>
    </section>
  );
};

export default ProjectsIntro;
