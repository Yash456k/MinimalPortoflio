import React, { useRef, useEffect, useState } from "react";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    text: "White Section",
    color: "bg-white",
    cardColor: "bg-white",
    textColor: "text-black",
    btnColor: "bg-black",
  },
  {
    id: 2,
    text: "Red Section",
    color: "bg-emerald-900",
    cardColor: "bg-green-600",
    textColor: "text-black",
    btnColor: "bg-green-700",
  },
  {
    id: 3,
    text: "Black Section",
    color: "bg-black",
    cardColor: "bg-gray-700",
    textColor: "text-gray-100",
    btnColor: "bg-black",
  },
];

const Singles = ({ item }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  console.log(scrollYProgress);
  const yold = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 400]);
  const y = useSpring(yold, { stiffness: 400, damping: 30, mass: 3 });

  const opacityold = useTransform(scrollYProgress, [0.5, 0], [1, 0]);
  const opacity = useSpring(opacityold, {
    stiffness: 1000,
    mass: 8,
    damping: 200,
  });

  const xold = useTransform(scrollYProgress, [0.5, 0.49, 0], [0, 10, 1000]);
  const x = useSpring(xold, {
    stiffness: 300,
    mass: 3,
    damping: 100,
  });

  const rotate = useTransform(scrollYProgress, [0.5, 0], ["0deg", "20deg"]);

  return (
    <section
      className={`flex flex-col items-center justify-center h-screen ${item.color} ${item.textColor}`}
    >
      <motion.div
        ref={ref}
        style={{ y, x, rotate, opacity }}
        className={`max-w-3xl m-4 ml-6 ${item.cardColor} rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-shadow duration-300 ease-in-out`}
      >
        <div
          className="bg-cover bg-center h-64 w-full"
          style={{
            backgroundImage: `url(https://t3.ftcdn.net/jpg/01/90/61/20/360_F_190612024_BKjOap5f9q8vf3g5M1G6QXcR73jhd2Fe.jpg`,
          }}
        >
          {/* Image section */}
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-3">{item.text}</h2>
          <p className="text-base mb-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
          </p>
          <a
            href="www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block ${item.btnColor} text-white font-bold py-2 px-4 rounded focus:outline-none transition-colors duration-200`}
          >
            Visit Project
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const ScrollAnimations = () => {
  const ref = useRef(null);
  const [progressBarOpacity, setProgressBarOpacity] = useState(1);

  // Use Framer Motion's useScroll to track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Transformations for the progress bar
  const background = useTransform(
    scrollYProgress,
    [1, 0.5, 0],
    ["#FFFFFF", "#108445", "#000000"]
  );

  const scaleBound = useTransform(scrollYProgress, [0, 1], [0, 0.97]);

  const scaleY = useSpring(scaleBound, {
    stiffness: 100,
    damping: 30,
  });

  // Effect to hide the progress bar based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const totalScrollHeight = scrollHeight - clientHeight;
      const startFade = totalScrollHeight * 0.7; // Adjust based on when you want to start fading out the bar
      const endFade = totalScrollHeight;

      if (scrollTop < startFade) {
        setProgressBarOpacity(1);
      } else if (scrollTop >= startFade && scrollTop <= endFade) {
        setProgressBarOpacity(
          0.9 - ((scrollTop - startFade) / (endFade - startFade)) * 10
        );
      } else {
        setProgressBarOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={ref}>
      <motion.div
        className="progress-bar border border-black border-solid"
        style={{
          scaleY,
          background,
          opacity: progressBarOpacity, // Use dynamic opacity
        }}
      />

      {items.map((item, index) => (
        <Singles key={index} item={item} />
      ))}
    </div>
  );
};

export default ScrollAnimations;
