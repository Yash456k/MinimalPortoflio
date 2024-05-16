import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ProjectsIntro = () => {
  const refer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refer,
  });

  const xmyold = useTransform(scrollYProgress, [1, 0.5, 0], [-300, 0, 300]);
  const xmy = useSpring(xmyold, { stiffness: 400, damping: 30, mass: 3 });

  const xprojectsold = useTransform(
    scrollYProgress,
    [1, 0.5, 0],
    [200, 0, -200]
  );
  const xprojects = useSpring(xprojectsold, {
    stiffness: 400,
    damping: 30,
    mass: 3,
  });

  const yoldmy = useTransform(scrollYProgress, [1, 0.5, 0], [-800, 0, 800]);
  const yoldprojects = useTransform(
    scrollYProgress,
    [1, 0.5, 0],
    [800, 0, -800]
  );
  const y = useSpring(yoldmy, { stiffness: 400, damping: 30, mass: 3 });
  const yprojects = useSpring(yoldprojects, {
    stiffness: 400,
    damping: 30,
    mass: 3,
  });

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
        className="h-[32rem] md:text-[11rem] text-4xl text-white font-bold font-sans flex flex-col justify-around items-center"
        style={{ opacity }}
      >
        <motion.div style={{ y, x: xmy }}>My </motion.div>
        <motion.div style={{ y: yprojects, x: xprojects }}>
          {" "}
          projects
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsIntro;
