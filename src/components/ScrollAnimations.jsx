import React, { useRef, useEffect, useState } from "react";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    text: "White Section",
    color: "bg-white",
    textColor: "text-black",
  },
  {
    id: 2,
    text: "Red Section",
    color: "bg-red-300",
    textColor: "text-blue-700",
  },
  {
    id: 3,
    text: "Black Section",
    color: "bg-black",
    textColor: "text-white",
  },
];

const Singles = ({ item }) => {
  return (
    <section
      className={`${item.color} text-3xl font-bold snap-center flex items-center justify-center`}
    >
      <div className={`${item.textColor}`}>{item.text}</div>
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
    ["#FFFFFF", "#000000", "#000000"]
  );

  const scaleBound = useTransform(scrollYProgress, [0, 1], [0, 0.8]);

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
      const startFade = totalScrollHeight * 0.8; // Adjust based on when you want to start fading out the bar
      const endFade = totalScrollHeight;

      if (scrollTop < startFade) {
        setProgressBarOpacity(1);
      } else if (scrollTop >= startFade && scrollTop <= endFade) {
        setProgressBarOpacity(
          1 - (scrollTop - startFade) / (endFade - startFade)
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
        className="progress-bar"
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
