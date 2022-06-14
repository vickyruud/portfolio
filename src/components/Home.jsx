import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    
    <div className="bg-[#0a192F] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#FF1616]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Aprajit Kumar</h1>
        <h2 className="text-4xl dm:text-7xl font bold text-[#8892b0]">I'm a Full Stack Developer.</h2>
        <p>  I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.</p>
        <div>
          <button>View Work <HiArrowNarrowRight /> </button>
        </div>
      </div>
    </div>
    )
};

export default Home;
