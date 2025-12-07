// @flow strict

import * as React from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {

  return (
    <div className="bg-[#2F2F2F] border-[#1b2c68a0] relative rounded-lg">
      {/* Top Gradient Line */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Title Bar */}
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-[#23950A]"></div>
        </div>
        <p className="text-center ml-3 text-[#fff] text-base lg:text-xl">
          {project.name}
        </p>
      </div>

      {/* Project Code Display */}
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base leading-relaxed">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">&apos;</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">&apos;,</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">tools:</span>
            <span className="text-gray-400"> [&apos;</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300">{tag}</span>
                {project.tools?.length - 1 !== i && (
                  <span className="text-gray-400">&apos;, &apos;</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-gray-400">&apos;],</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">description:</span>
            <span className="text-cyan-400">{' ' + project.description}</span>
          </div>

          {project.code && (
            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white">code:</span>{' '}
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline inline-flex items-center gap-1"
              >
                <FaGithub className="inline" /> <span>&apos;View Code&apos;</span>
              </a>
              <span className="text-gray-400">,</span>
            </div>
          )}

          {project.demo && (
            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white">demo:</span>{' '}
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300 underline inline-flex items-center gap-1"
              >
                <FaExternalLinkAlt className="inline" /> <span>&apos;Live Demo&apos;</span>
              </a>
              <span className="text-gray-400">,</span>
            </div>
          )}

          <div>
            <span className="text-gray-400">{'};'}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
