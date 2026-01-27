import React from "react";

const experiences = [
  {
    role: "Intern (On-site)",
    company: "ISRO SHAR (SDSC Sriharikota)",
    duration: "May 2025 - June 2025",
    projectTitle:
      "Project: Design of Informative Web Portal for Third Launch Pad Project",
    description:
      "Worked on developing an internal web-based portal to manage, visualize, and track project-related data to support planning and operational workflows.",
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
    description:
      "Developed a web-based quiz application focused on Computer Science interview preparation as part of an AICTE–Edunet Foundation internship.",
    points: [
      "Built an interactive quiz platform with multiple-choice questions and score evaluation logic.",
      "Designed responsive and user-friendly interfaces using HTML, CSS, and JavaScript.",
      "Implemented client-side validation and smooth navigation between quiz questions.",
      "Improved understanding of front-end development fundamentals and best practices through hands-on implementation.",
      "Version-controlled the project using Git and published the source code on GitHub.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#020617] text-[#E5E7EB] py-16 px-6 md:px-16"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-[#14B8A6]">
          Experience
        </h2>
        <p className="text-center text-[#94A3B8] mb-10">
          {/* visual-only spacing helper, no text changes */}
        </p>

        <div className="relative mt-6">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#14B8A6] via-[#5EEAD4]/60 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:pl-16">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-7 top-5 -translate-x-1/2 items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#14B8A6] shadow-[0_0_0_4px_rgba(20,184,166,0.25)]" />
                </div>

                <div className="group rounded-2xl bg-[#020617]/80 backdrop-blur-xl border border-[#14B8A6]/15 hover:border-[#5EEAD4]/40 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 p-6 md:p-7">
                    <div className="flex-1 space-y-1.5">
                      <h3 className="text-xl font-semibold text-[#E5E7EB]">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-[#94A3B8]">
                        {exp.company}
                      </p>

                      {/* Date pill */}
                      <div className="inline-flex items-center mt-2">
                        <span className="inline-flex items-center rounded-full border border-[#14B8A6]/40 bg-[#020617]/80 px-3 py-1 text-xs font-medium text-[#5EEAD4]">
                          {exp.duration}
                        </span>
                      </div>

                      <p className="mt-3 font-medium text-[#E5E7EB]">
                        {exp.projectTitle}
                      </p>
                      <p className="mt-2 text-sm md:text-base text-[#E5E7EB]">
                        {exp.description}
                      </p>
                    </div>

                    <div className="md:w-1/2">
                      <ul className="list-disc list-inside space-y-1.5 text-sm text-[#94A3B8]">
                        {exp.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
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
