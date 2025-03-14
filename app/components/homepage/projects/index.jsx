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
      <div className="pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.slice(0, 5).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="relative w-full mx-auto max-w-2xl transform transition-all duration-[0.5s] hover:scale-105"
            >
              {/* Aplicando sticky ao contêiner com z-index e ajuste do layout */}
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s] sticky top-6 z-10">
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
