import React from "react";

const HomePageSection = () => {
  return (
    <section className="bg-green-600 flex">
      <div className="h-full w-full flex-1 flex justify-center items-center flex-col">
        <div>reveal</div>
        <button className=" text-3xl font-sketch font-bold border-1 border-black border-solid">
          tap to reveal
        </button>
      </div>
      <div className=" h-full w-full text-3xl font-bold flex-1 flex justify-center items-center flex-wrap">
        Home thingsss
      </div>
    </section>
  );
};

export default HomePageSection;
