import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Technology = () => {
  const refer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refer,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], ["-200%", "0%", "300%"]);

  const opacityOld = useTransform(scrollYProgress, [1, 0.5], [0, 1]);

  const opacity = useSpring(opacityOld, {
    stiffness: 250,
    damping: 100,
    mass: 20,
  });

  return (
    <section
      className=" flex justify-center items-center relative"
      style={{ background: "linear-gradient(180deg,#111132,#0c0c1d)" }}
    >
      {/* Background Image */}
      <motion.div
        className="h-full w-full absolute "
        style={{
          overflow: "hidden",
          x,
          backgroundImage:
            "url(https://github.com/Yash456k/React_Portfolio/blob/main/public/stars.png?raw=true)",
          backgroundSize: "fit",
          zIndex: 2,
        }}
      ></motion.div>
      <motion.div
        className="h-full w-full absolute"
        style={{
          y,
          backgroundImage: "url(/mountainsNew.png)",
          scale: 1.3,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></motion.div>

      {/* Content */}
      <motion.div
        ref={refer}
        className="text-5xl md:text-8xl font-bold font-custom text-white"
        style={{ opacity, zIndex: 3 }}
      >
        Skills Section
      </motion.div>
    </section>
  );
};

export default Technology;
