import React, { useState } from "react";
import { useAnimate, useSpring, useMotionValue } from "framer-motion";

const HomePageSection = () => {
  return <Basic></Basic>;
};

const Basic = () => {
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
    animate("#box", { opacity: 0 });
  };

  return (
    <section
      className={`${isBlack ? "bg-black" : "bg-[#F5F5DC]"} flex relative`}
    >
      <div
        ref={scope}
        className="relative h-full w-1/2 flex-1 flex justify-center items-center flex-col"
      >
        <button
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
          className="z-20 absolute top-8 text-3xl md:text-4xl font-sketch font-bold border-2 p-0.5 border-black border-solid"
        >
          Tap to reveal
        </button>
        <div
          id="box"
          className="absolute h-10 w-10 top-24 rounded-full bg-black opacity-0 overflow-hidden"
        ></div>
        <div id="target" className="text-2xl font-custom m-3">
          Tap the button above to reveal my current work status!
        </div>
        <div
          id="hidden"
          className={`${isBlack ? "text-white" : "text-black"} absolute`}
          style={{ opacity: 0 }}
        >
          Hidden text this will be the new div
        </div>
      </div>
      <div
        className={`${
          isBlack ? "text-white" : "text-black"
        }  m-3 h-full w-1/2 z-50 text-3xl font-bold flex-1 flex justify-center items-center flex-wrap `}
      >
        Home thingsss
      </div>
    </section>
  );
};
export default HomePageSection;
