import { experience } from "@/utils/data/experience";
import ExperienceCard from "./exp-card.jsx";

function Experience() {
  // Sort by id to maintain order
  const sortedExperience = [...experience].sort((a, b) => b.id - a.id);

  return (
    <div id='experience' className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#2F2F2F] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            EXPERIENCE
          </span>
          <span className="w-full h-[2px] bg-[#2F2F2F]"></span>
        </div>
      </div>

      {/* Experience cards with sticky stacking */}
      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {sortedExperience.map((exp, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={exp.id}
              className="sticky-card w-full sticky"
              style={{ top: `${100 + index * 50}px` }}
            >
              <ExperienceCard exp={exp} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;