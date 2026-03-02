import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  title,
  image,
  description,
  techStack = [],
  projectLink,
  gitlabLink,
  impact,
  featured,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="group relative project-card"
      data-project-title={title}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="project-image-container relative">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="project-placeholder">
            <span className="project-placeholder-text">
              {Array.isArray(techStack) && techStack.length > 0 ? techStack[0] : 'MERN'}
            </span>
          </div>
        )}
        {/* Case study overlay on hover */}
        <div
          className={`absolute inset-0 bg-[#080c10]/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-wrap gap-2 justify-center mb-3">
            {Array.isArray(techStack) &&
              techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="project-tag"
                >
                  {tech}
                </span>
              ))}
          </div>
          {impact && (
            <p className="text-sm text-[#f0ede8] text-center max-w-xs">
              {impact}
            </p>
          )}
        </div>
      </div>

      <div className="project-body">
        <h3 className="project-title mb-2">{title}</h3>
        <p className="project-description mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {Array.isArray(techStack) &&
            techStack.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="project-tag"
              >
                {tech}
              </span>
            ))}
          {techStack.length > 4 && (
            <span className="text-[#94A3B8] text-xs">+{techStack.length - 4}</span>
          )}
        </div>

        <div className="mt-4 flex gap-3">
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-footer-link"
            >
              View Project
              <span>→</span>
            </a>
          )}
            {gitlabLink && (
              <a
                href={gitlabLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#00d4ff] hover:text-[#e8edf2] transition font-['JetBrains_Mono']"
              >
                GitLab
              </a>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
