import React from "react";

const OneProject = ({ image, demo, code, tech, title }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
      >
        {/* Hover Effects */}
        <div className="opacity-0 group-hover:opacity-100 group-focus:opacity-100">
          <span className="text-2xl font-bold text-white tracking-wider">
            <p className="items-center">Tech Stack : {tech}</p> 
          </span>
          <div className="pt-8 text-center">
            {demo ?  <a
              href={ demo ? `${demo}` : null}
              className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
            >
              Demo
            </a> : null }
           
            <a
              href={`${code}`}
              className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      <p className="font-bold text-center py-2">{title}</p>
    </div>
  );
};

export default OneProject;
