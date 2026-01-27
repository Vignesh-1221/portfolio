import React from "react";
import { FaGitlab, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, image, description, techStack = [], projectLink, gitlabLink }) => {
  return (
    <div className="group perspective-1000 h-80">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-44 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300 text-sm mb-4 line-clamp-3">{description}</p>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(techStack) &&
                techStack.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              {techStack.length > 3 && (
                <span className="text-gray-400 text-xs">+{techStack.length - 3} more</span>
              )}
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-[#1e293b] to-[#334155] rounded-2xl shadow-lg flex flex-col items-center justify-center p-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-300 text-sm mb-6">{description}</p>
            
            {/* All Tech Stack */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {Array.isArray(techStack) &&
                techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3">
              {gitlabLink && (
                <a
                  href={gitlabLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <FaGitlab className="text-lg" />
                  View on GitLab
                </a>
              )}
              {projectLink && (
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <FaExternalLinkAlt className="text-lg" />
                  Live Preview
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
