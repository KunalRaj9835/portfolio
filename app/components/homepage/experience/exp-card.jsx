"use client";

import { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaCheckCircle ,FaPaperPlane } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";
import { MdTimeline } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";

export default function ExperienceCard({ exp }) {
  const [openProjects, setOpenProjects] = useState([]);

  const toggleProject = (index) => {
    if (openProjects.includes(index)) {
      setOpenProjects(openProjects.filter(i => i !== index));
    } else {
      setOpenProjects([...openProjects, index]);
    }
  };

  return (
    <div className="bg-black border border-[#2a2a2a] rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:border-violet-500/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] w-full max-w-5xl mx-auto">
      {/* Top bar with company info */}
      <div className="flex items-center justify-between px-8 py-4 bg-[#0d0d0d] border-b border-[#2a2a2a]">
        <div className="flex items-center gap-4">
          {/* Decorative dots */}
          <div className="flex gap-2">
            <div className="h-3.5 w-3.5 rounded-full bg-red-500"></div>
            <div className="h-3.5 w-3.5 rounded-full bg-yellow-500"></div>
            <div className="h-3.5 w-3.5 rounded-full bg-green-500"></div>
          </div>
          
          {/* Company badge */}
          <div className="flex items-center gap-3">
            <Image src={exp.logo} alt={exp.company} width={32} height={32} className="rounded" />
            <span className="text-sm font-semibold text-violet-400 bg-violet-500/10 px-4 py-1.5 rounded-full border border-violet-500/30">
              {exp.company}
            </span>
          </div>
        </div>
        
        {/* Duration */}
        
      </div>

      {/* Role Header */}
      <div className="px-8 py-5 border-b border-[#2a2a2a]">
<div className="flex flex-col gap-2 mb-3 sm:flex-row sm:items-center sm:justify-between">
  {/* Left */}
  <div className="flex items-start gap-3">
    <IoMdBriefcase
      className="text-violet-400 shrink-0 min-w-[28px]"
      size={28}
    />
    <h3 className="text-2xl font-bold text-white leading-tight">
      {exp.role}
    </h3>
  </div>

  {/* Right */}
  <div className="flex items-center gap-2 text-sm text-gray-400 sm:justify-end">
    <MdTimeline className="text-emerald-400 shrink-0" size={18} />
    <span>{exp.duration}</span>
  </div>
</div>



        {/* Role Highlights */}
        {exp.highlights && exp.highlights.length > 0 && (
          <div className="space-y-2.5">
            {exp.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <HiSparkles className="text-violet-400 mt-1 flex-shrink-0" size={14} />
                <span className="text-sm text-gray-300 leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Notable Projects Section */}
      <div className="px-8 py-5 bg-black">
        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
          Notable Projects
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {exp.projects.map((project, i) => (
            <div key={i}>
              <button
                onClick={() => toggleProject(i)}
                className="w-full text-left group"
              >
                <div className="flex items-center justify-between p-3  bg-[#0d0d0d] border border-[#2a2a2a] hover:border-violet-500/50 transition-all">
                  <span className="text-sm font-medium text-violet-300 group-hover:text-violet-200">
                    {project.name}
                  </span>
                  <div className="flex gap-2 items-center">
                    {project.code && (
                      <a 
                        href={project.code} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all"
                      >
                        <FaGithub className="w-3 h-3" />
                      </a>
                    )}
                    {project.demo2 && (
                      <a 
                        href={project.demo2} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded bg-violet-500/10 text-violet-400 hover:bg-violet-500/20 border border-violet-500/30 transition-all"
                      >
                        <FaPaperPlane className="w-3 h-3" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded bg-violet-500/10 text-violet-400 hover:bg-violet-500/20 border border-violet-500/30 transition-all"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </button>

              {/* Expandable Impact Section */}
              {openProjects.includes(i) && project.impact && (
                <div className="mt-2 p-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a] animate-fadeIn">
                  <div className="flex items-center gap-2 mb-2">
                    <FaCheckCircle className="text-emerald-400 flex-shrink-0 text-xs" />
                    <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wide">
                      Impact
                    </span>
                  </div>
                  <div className="space-y-1.5 pl-5">
                    {project.impact.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></div>
                        <span className="text-xs text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}