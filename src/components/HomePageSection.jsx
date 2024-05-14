import React, { useRef, useState } from "react";
import {
  useAnimate,
  useScroll,
  useSpring,
  useTransform,
  motion,
} from "framer-motion";

const HomePageSection = () => {
  return <Basic></Basic>;
};

const Basic = () => {
  const refNew = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refNew,
  });

  const yupold = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const ydownold = useTransform(scrollYProgress, [1, 0], [400, -350]);

  const yup = useSpring(yupold);
  const ydown = useSpring(ydownold);

  const [scope, animate] = useAnimate();
  const [isBlack, setBlack] = useState(false);

  const handleAnimation = async () => {
    // Start animation sequence

    await animate("#box", { opacity: 1, scale: 1 });
    await animate("#box", { y: 250 }, { duration: 0.9 });
    await animate("#box", { scale: 70 }, { duration: 0.6 });
    await animate("#target", { opacity: 0 });
    setBlack(true);
    animate(
      "#button",
      { opacity: 0, pointerEvents: "none" },
      { duration: 0.01 }
    );

    animate("#hidden", { opacity: 1 }, { duration: 0.01 });

    animate("#home", { opacity: 0 }, { duration: 0.01 });
    animate("#box", { opacity: 0 });
    animate("#home", { opacity: 1 }, { duration: 3 });
  };

  return (
    <section
      className={`${isBlack ? "bg-black" : "bg-[#F5F5DC]"} flex relative`}
    >
      <div
        ref={scope}
        className="relative h-full w-1/2 flex-1 flex justify-evenly items-center flex-col"
      >
        <motion.button
          onMouseEnter={() => {
            animate("#button", { rotate: "-20deg" });
          }}
          onMouseLeave={async () => {
            animate("#button", { rotate: "0deg" });
          }}
          id="button"
          onClick={() => {
            handleAnimation();
          }}
          style={{ y: yup }}
          className="z-50 text-3xl md:text-4xl font-sketch font-bold border-2 p-0.5 border-black border-solid"
        >
          Tap to reveal
        </motion.button>
        <div
          id="box"
          className="absolute h-10 w-10 top-24 rounded-full bg-black opacity-0 overflow-hidden"
        ></div>
        <motion.div
          style={{ y: yup }}
          id="target"
          className="text-2xl md:text-5xl font-custom m-3 pl-4"
        >
          Tap the button above to reveal my current work status!
        </motion.div>

        <motion.div
          id="hidden"
          className={`${
            isBlack ? "text-white" : "text-black"
          } md:text-6xl text-3xl font-sketch font-bold absolute text-center pl-4 m-3 flex
          flex-col justify-evenly items-center h-full`}
          style={{ opacity: 0, y: yup }}
        >
          <div>Currently working on a few projects</div>
          <div>I'm open to any Internships/ freelance work!</div>
        </motion.div>
      </div>
      <motion.div
        id="home"
        className={`${
          isBlack ? "text-white" : "text-black"
        } text-center pr-4 m-3 h-full w-1/2 md:text-6xl text-3xl font-bold flex-1 flex 
        flex-col justify-around items-center flex-wrap font-sketch `}
        style={{ y: ydown }}
      >
        <div>Hi! I'm Yash </div>
        <div ref={refNew}>I am a Full-stack developer</div>
        <div>Scroll down to see my projects</div>
      </motion.div>
    </section>
  );
};
export default HomePageSection;
