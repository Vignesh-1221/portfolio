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
      className="bg-gray-900 text-white py-12 px-6 md:px-16"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-sm text-gray-400">{exp.company}</p>
            <p className="text-sm text-gray-400 italic">{exp.duration}</p>
            <p className="mt-2 font-medium">{exp.projectTitle}</p>
            <p className="mt-2">{exp.description}</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-sm">
              {exp.points.map((point, idx) => (
                <li key={idx} className="text-gray-300">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
