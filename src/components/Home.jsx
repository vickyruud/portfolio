import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Photo from '../assets/photo.jpg'


const Home = () => {
  return (
    <div id='home' className="bg-[#2c2e30] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <img src={Photo} alt="profile" className="object-contain w-48 h-48 mb-8 pt-4" />
        <p className="text-[#FF1616]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Aprajit Kumar
        </h1>
        <h2 className="text-4xl dm:text-7xl font bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          {" "}
          I specialize in building and designing exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div className="flex flex-row gap-16">
          <a href="#projects" className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500 focus:border-red-500 focus:opacity-100">
              Projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </a>
         
          <a href="https://drive.google.com/file/d/1QXUP30RD4E9iOy5R2PBOKBlvQuh3q3uk/view?usp=sharing" className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500 focus:border-red-500 focus:opacity-100">
              Resume
          </a>
        </div>         
      </div>
    </div>
  );
};

export default Home;
