import React, { useEffect, useState } from "react";

const experiences = [
  {
    role: "Intern (On-site)",
    company: "ISRO SHAR (SDSC Sriharikota)",
    duration: "May 2025 - June 2025",
    projectTitle: "Project: Design of Informative Web Portal for Third Launch Pad Project",
    description: "Worked on developing an internal web-based portal to manage, visualize, and track project-related data to support planning and operational workflows.",
    points: [
      "Designed and developed an internal web portal that improved visibility of 15+ project milestones and streamlined documentation and financial tracking workflows.",
      "Built responsive UI components using JSP, Bootstrap, and jQuery for structured and user-friendly data presentation.",
      "Integrated backend workflows using Apache Tomcat to enable automated data visualization and reporting.",
      "Refactored existing reporting processes, achieving approximately 25% improvement in operational efficiency.",
      "Collaborated on-site with mentors and team members to refine usability and ensure accurate representation of project information.",
    ],
  },
  {
    role: "Front End Web Development Intern",
    company: "Edunet Foundation (AICTE)",
    duration: "August 2025 - September 2025",
    projectTitle: "Project: CSE Interview Quiz Web Application",
    description: "Developed a web-based quiz application focused on Computer Science interview preparation as part of an AICTE–Edunet Foundation internship.",
    points: [
      "Built an interactive quiz platform with multiple-choice questions and score evaluation logic.",
      "Designed responsive and user-friendly interfaces using HTML, CSS, and JavaScript.",
      "Implemented client-side validation and smooth navigation between quiz questions.",
      "Improved understanding of front-end development fundamentals and best practices through hands-on implementation.",
      "Version-controlled the project using Git and published the source code on GitHub.",
    ],
  },
];

const highlightMetric = (text) => {
  const patterns = [
    { regex: /(\d+%|[0-9]+\+)/g, cls: "metric-highlight" },
  ];
  let result = text;
  for (const { regex, cls } of patterns) {
    result = result.replace(regex, (m) => `<span class="${cls}">${m}</span>`);
  }
  return result;
};

const Experience = () => {
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const section = document.getElementById("experience");
    const line = document.getElementById("timeline-line");
    const update = () => {
      if (!section || !line) return;
      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const start = rect.top - viewportH * 0.5;
      const end = rect.bottom;
      const total = end - start;
      if (total <= 0 || rect.top > viewportH) {
        setLineHeight(0);
        return;
      }
      const progress = Math.min(1, Math.max(0, (viewportH * 0.6 - rect.top) / total));
      setLineHeight(progress);
    };
    window.addEventListener("scroll", update);
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section
      id="experience"
      className="text-[#f0ede8] px-6 md:px-16"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-['JetBrains_Mono'] text-[#00d4ff] tracking-[0.15em] uppercase text-center mb-1">
          // 03
        </p>
        <h2 className="experience-heading text-3xl md:text-4xl mb-2 text-center">
          Experience
        </h2>
        <p className="text-center text-[#94A3B8] mb-4">&nbsp;</p>

        <div className="relative mt-6">
          <div
            id="timeline-line"
            className="hidden md:block timeline-line"
            style={{ height: "100%" }}
          >
            <div
              className="w-full bg-[rgba(0,212,255,0.8)] transition-all duration-500 ease-out"
              style={{ height: `${lineHeight * 100}%` }}
            />
          </div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:pl-16">
              <div className="hidden md:flex timeline-dot-outer shadow-[0_0_16px_rgba(0,212,255,0.35)]">
                  <div className="timeline-dot-inner" />
                </div>

                <div className="group experience-card backdrop-blur-xl">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 p-6 md:p-7">
                    <div className="flex-1 space-y-1.5">
                      <div className="flex items-center gap-3">
                        <div className="experience-company-badge flex items-center justify-center">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-[#f0ede8]">{exp.role}</h3>
                          <p className="text-sm text-[#94A3B8]">{exp.company}</p>
                        </div>
                      </div>

                      <div className="inline-flex items-center mt-2">
                        <span className="inline-flex items-center experience-date-badge px-3 py-1">
                          {exp.duration}
                        </span>
                      </div>

                      <p className="mt-3 font-medium text-[#f0ede8]">{exp.projectTitle}</p>
                      <p className="mt-2 text-sm md:text-base text-[#94A3B8]">
                        {exp.description}
                      </p>
                    </div>

                    <div className="md:w-[48%]">
                      <ul className="space-y-2 text-sm text-[#94A3B8]">
                        {exp.points.map((point, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-[#00d4ff] mt-0.5 shrink-0">→</span>
                            <span dangerouslySetInnerHTML={{ __html: highlightMetric(point) }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
