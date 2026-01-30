"use client";

import { useState } from 'react';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(projectsData.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      {/* Section header */}
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#2F2F2F] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            FEATURED PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#2F2F2F]"></span>
        </div>
      </div>


      {/* Filter buttons */}
      <div className="mt-16 mb-8 flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              filter === category
                ? 'bg-[#a78bfa] text-black shadow-lg shadow-violet-500/50 scale-105'
                : 'bg-[#2F2F2F] text-gray-300 hover:bg-[#3a3a4a] hover:text-white border border-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects with sticky stacking */}
      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {filteredProjects.map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={project.id}
              className="sticky-card w-full mx-auto max-w-4xl sticky"
              style={{ top: `${100 + index * 50}px` }}
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;