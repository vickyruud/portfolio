import React from "react";
import Wordle from "../assets/wordle.png";
import TrivAi from "../assets/triv-ai.png";
import Jamming from "../assets/jamming.png";
import PetStore from "../assets/petstore.png";
import Nutri from "../assets/nutri.png";
import StoryBoard from "../assets/story.png";
import OneProject from "./OneProject";

const projectList = [
  {
    id: 1,
    title: "Wordle Clone",
    image: Wordle,
    demo: "https://wordle-clone-vickyruud.netlify.app/",
    code: "https://github.com/vickyruud/wordle-clone",
    tech: "React JS",
  },
  {
    id: 2,
    title: "Jamming",
    image: Jamming,
    demo: "https://jamming-vickyruud.netlify.app/",
    code: "https://github.com/vickyruud/jamming",
    tech: "React JS",
  },
  {
    id: 3,
    title: "Triv-Ai",
    image: TrivAi,
    demo: "https://triv-ai.netlify.app/",
    code: "https://github.com/vickyruud/fun-with-gpt-3",
    tech: "React JS",
  },
  {
    id: 4,
    title: "Pet Store",
    image: PetStore,
    demo: "https://replit.com/@vickyruud/pets-store",
    code: "https://github.com/vickyruud/pet-store",
    tech: "Ruby on Rails",
  },
  {
    id: 5,
    title: "NutriRecipe",
    image: Nutri,
    code: "https://github.com/vickyruud/NutriRecipe",
    tech: "Ruby on Rails, React JS",
  },
  {
    id: 6,
    title: "StoryBoard",
    image: StoryBoard,
    code: "https://github.com/vickyruud/StoryBoard",
    tech: "Node JS, Express, PSQL",
  },
];

const Projects = () => {
  const arrayOfProjects = projectList.map((project) => {
    return (
      <OneProject
        key={project.id}
        tech={project.tech}
        title={project.title}
        code={project.code}
        demo={project.demo}
        image={project.image}
      />
    );
  });

  return (
    <div
      id="projects"
      className="w-full md:h-screen text-gray-300 bg-[#2d0202]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {arrayOfProjects}
        </div>
      </div>
    </div>
  );
};

export default Projects;
