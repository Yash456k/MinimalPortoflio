import React, { useRef, useEffect, useState } from "react";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import ProjectsIntro from "./ProjectsIntro";

const items = [
  {
    id: 1,
    title: "Fullstack Notes App",
    text: `The project is Notes app which uses the MERN stack fully , 
    Frontend i use Zustand for state management , and it communicates with a
    hosted server written in express , i use mongoDb for database management the user can 
    login / signup ( i store info using JWT and make sure user is logged in for hours before 
    they choose to logout ) the user can make a note , update it or delete the notes as they 
    choose , the notes get saved to each user in database`,
    color: "bg-black",
    cardColor: "bg-white",
    textColor: "text-black",
    btnColor: "bg-black",
    url: "/NotesApp.png",
  },
  {
    id: 2,
    title: "Qoutes by Marcus Aurelius",
    text: `A fullstack website , allowing you to signup/login , and bookmark some handpicked 
    quotes by Marcus Aurelius. Uses Express, nodeJs and MongoDB(The website might take time to 
    load on first try ! This is because it is hosted on render's free tier)`,
    color: "bg-emerald-900",
    cardColor: "bg-green-600",
    textColor: "text-black",
    btnColor: "bg-green-700",
    url: "/marcus.png",
  },
  {
    id: 3,
    title: `My Current Porfolio Website! (The one you are viewing right now)`,
    text: `A porfolio website I made using React, framer-motion and TailwindCSS.I wanted to 
    try out framer-motion and I have used it extensively in every part of this website`,
    color: "bg-white",
    cardColor: "bg-[#F5F5DC]",
    textColor: "text-black",
    btnColor: "bg-black",
    url: "/NotesApp.png",
  },
];

const Singles = ({ item }) => {
  const refNew = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refNew,
  });

  const yold = useTransform(
    scrollYProgress,
    [0, 0.000000000001, 0.9999999999, 1],
    [-200, 0, 0, 200]
  );
  const y = useSpring(yold, { stiffness: 400, damping: 30, mass: 3 });

  const opacityold = useTransform(
    scrollYProgress,
    [1, 0.9999999999, 0.000000000001, 0],
    [0, 1, 1, 0]
  );
  const opacity = useSpring(opacityold, {
    stiffness: 1000,
    mass: 8,
    damping: 200,
  });

  const xold = useTransform(scrollYProgress, [0.5, 0.49, 0], [0, 10, 400]);
  const x = useSpring(xold, {
    stiffness: 300,
    mass: 3,
    damping: 100,
  });

  const rotate = useTransform(scrollYProgress, [0.5, 0], ["0deg", "20deg"]);

  return (
    <motion.section
      className={`flex flex-col items-center justify-center full-height ${item.color} ${item.textColor}`}
    >
      <motion.div
        ref={refNew}
        style={{ y, x, rotate, opacity }}
        className={`max-w-3xl m-4 ml-8 ${item.cardColor} rounded-lg shadow-lg hover:shadow-2xl overflow-hidden transition-shadow duration-300 ease-in-out`}
      >
        <div
          className="bg-cover bg-center h-64 w-full"
          style={{
            backgroundImage: `url(${item.url}`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Image section */}
        </div>

        <div className="p-6">
          <h2 className="text-xl font-bold mb-3">{item.title}</h2>
          <p className="text-lg sm:text-sm mb-4">{item.text}</p>
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
    </motion.section>
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
    [1, 0.66, 0.33, 0],
    ["#F5F5DC", "#108445", "#FFFFFF", "#FFFFFF"]
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

  // Update vh property on window resize
  useEffect(() => {
    const updateVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    updateVh();
    window.addEventListener("resize", updateVh);

    return () => {
      window.removeEventListener("resize", updateVh);
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
      <ProjectsIntro />

      {items.map((item, index) => (
        <Singles key={index} item={item} />
      ))}
    </div>
  );
};

export default ScrollAnimations;
