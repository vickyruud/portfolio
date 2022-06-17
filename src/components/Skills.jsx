import React from 'react';
import HTML from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Rails from '../assets/rails.png';
import OneSkill from './OneSkill';



const skillsList = [
    {
        id: 1,
        text: 'HTML',
        image: HTML
    },
       {
        id: 2,
        text: 'JavaScript',
        image: JavaScript
    },
          {
        id: 3,
        text: 'React',
        image: ReactImg
    },
             {
        id: 4,
        text: 'Ruby on Rails',
        image: Rails
    },
                {
        id: 5,
        text: 'Github',
        image: GitHub
    },
                   {
        id: 6,
        text: 'Node JS',
        image: Node
    },
                      {
        id: 7,
        text: 'Mongo DB',
        image: Mongo
    },
                         {
        id: 8,
        text: 'Tailwind CSS',
        image: Tailwind
    }
]

const arrayOfSkills = skillsList.map(skill => {
    return <OneSkill text={skill.text} image={skill.image} />
})


const Skills = () => {
  return (
    <div id='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>These are some of the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              {arrayOfSkills}
          </div>
      </div>
    </div>
  );
};

export default Skills;
