import React from "react";
import Wordle from "../assets/wordle.png";
import TrivAi from "../assets/triv-ai.png";
import Jamming from "../assets/jamming.png";
import PetStore from "../assets/petstore.png";
import Nutri from "../assets/nutri.png";
import StoryBoard from "../assets/story.png"


const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#2d0202]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div>
            <div
              style={{ backgroundImage: `url(${Wordle})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Tech Stack : React JS
                </span>
                <div className="pt-8 text-center">
                  <a href="https://wordle-clone-vickyruud.netlify.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/vickyruud/wordle-clone">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <p className="font-bold text-center py-2">Wordle Clone</p>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${TrivAi})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Tech Stack : React JS
                </span>
                <div className="pt-8 text-center">
                  <a href="https://triv-ai.netlify.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/vickyruud/fun-with-gpt-3">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <p className="font-bold text-center py-2">Triv-AI</p>
          </div>
          {/* Grid Item */}
          <div>
            <div
              style={{ backgroundImage: `url(${Jamming})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
               <span className="text-2xl font-bold text-white tracking-wider">
                  Tech Stack : React JS
                </span>
                <div className="pt-8 text-center">
                  <a href="https://jamming-vickyruud.netlify.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/vickyruud/jamming">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <p className="font-bold text-center py-2">Jamming</p>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${PetStore})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-xl font-bold text-white tracking-wider p-2 text-center">
                  Tech Stack : Ruby on Rails
                </span>
                <div className="pt-8 text-center">
                  <a href="https://replit.com/@vickyruud/pets-store">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/vickyruud/pet-store">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <p className="font-bold text-center py-2">Pet Store</p>
          </div>
          {/* Grid Item */}
          <div>
          <div
            style={{ backgroundImage: `url(${Nutri})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Tech Stack: <p>Ruby on Rails</p>
                <p>React JS</p>

              </span>
              <div className="pt-8 text-center">             
                <a href="https://github.com/vickyruud/NutriRecipe">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            <p className="font-bold text-center py-2">NutriRecipe</p>
            
        </div>
        <div>
          <div
            style={{ backgroundImage: `url(${StoryBoard})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Tech Stack: <p>Node JS</p>
                <p>Express</p>
                <p>PSQL</p>
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/vickyruud/StoryBoard">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        <p className="font-bold text-center py-2">StoryBoard</p>
        </div>
        </div>            

      </div>
    </div>
  );
};

export default Work;
