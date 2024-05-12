import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Technology = () => {
  const refer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refer,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);

  const opacityOld = useTransform(scrollYProgress, [1, 0.5], [0, 1]);

  const opacity = useSpring(opacityOld, {
    stiffness: 250,
    damping: 100,
    mass: 20,
  });

  return (
    <section className="bg-purple-600 flex justify-center items-center relative">
      {/* Background Image */}
      <motion.div
        className="h-full w-full absolute "
        style={{
          overflow: "hidden",
          x,
          backgroundImage:
            "url(https://github.com/Yash456k/React_Portfolio/blob/main/public/stars.png?raw=true)",
          backgroundSize: "fit",
        }}
      ></motion.div>

      {/* Content */}
      <motion.div
        ref={refer}
        className="text-3xl font-bold font-custom"
        style={{ opacity }}
      >
        Skilss Section
      </motion.div>
    </section>
  );
};

export default Technology;
