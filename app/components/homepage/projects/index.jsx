"use client";

import { useEffect, useState } from "react";
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      {/* Cabeçalho */}
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            Projetos
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Lista de Projetos */}
      <div className="pt-24 relative">
        <div className="flex flex-col gap-8">
          {projectsData.map((project, index) => (
            <div
              id={`project-card-${index}`}
              key={index}
              className="w-full mx-auto max-w-2xl transform transition-all duration-500 hover:scale-105"
            >
              <div className="box-border flex items-center justify-center rounded shadow-lg bg-[#1a1443] p-6">
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
