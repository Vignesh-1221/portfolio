// // // import React, { useState } from "react";

// // // // Skill icons
// // // import reactIcon from "../assets/skills/reactjs.png";
// // // import nodeIcon from "../assets/skills/nodejs.png";
// // // import expressIcon from "../assets/skills/expressjs.png";
// // // import postgresIcon from "../assets/skills/postgres.png";
// // // import htmlIcon from "../assets/skills/html.png";
// // // import cssIcon from "../assets/skills/css.png";
// // // import tailwindIcon from "../assets/skills/tailwind.png";
// // // import cIcon from "../assets/skills/c.png";
// // // import tensIcon from "../assets/skills/tensorflow-logo.svg";
// // // import mongoseIcon from "../assets/skills/mongodb-logo.svg";
// // // import postmanIcon from "../assets/skills/postman.png";
// // // import sciIcon from "../assets/skills/sklearn-logo.svg";
// // // import javaIcon from "../assets/skills/java.png";
// // // import pythonIcon from "../assets/skills/python.png";
// // // import gitIcon from "../assets/skills/git.png";
// // // import numpyIcon from "../assets/skills/numpy.png";
// // // import pandasIcon from "../assets/skills/pandas.png";

// // // const SkillCard = ({ icon, name }) => (
// // //   <div className="hover:scale-105 transition p-4 bg-gray-800 rounded-xl shadow-md flex flex-col items-center">
// // //     <img src={icon} alt={name} className="h-12 w-12 mb-2" />
// // //     <p className="text-white text-center font-medium">{name}</p>
// // //   </div>
// // // );

// // // const Section = ({ skills }) => (
// // //   <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
// // //     {skills.map((skill, index) => (
// // //       <SkillCard key={index} icon={skill.icon} name={skill.name} />
// // //     ))}
// // //   </div>
// // // );

// // // const Skills = () => {
// // //   const categories = {
// // //     "All Skills": [
// // //       { icon: pythonIcon, name: "Python" },
// // //       { icon: javaIcon, name: "Java" },
// // //       { icon: cIcon, name: "C" },
// // //       { icon: reactIcon, name: "React" },
// // //       { icon: nodeIcon, name: "Node.js" },
// // //       { icon: expressIcon, name: "Express" },
// // //       { icon: postgresIcon, name: "PostgreSQL" },
// // //       { icon: mongoseIcon, name: "MongoDB" },
// // //       { icon: htmlIcon, name: "HTML" },
// // //       { icon: cssIcon, name: "CSS" },
// // //       { icon: tailwindIcon, name: "TailwindCSS" },
// // //       { icon: postmanIcon, name: "Postman" },
// // //       { icon: gitIcon, name: "Git" },
// // //       { icon: numpyIcon, name: "NumPy" },
// // //       { icon: pandasIcon, name: "Pandas" },
// // //       { icon: sciIcon, name: "Scikit-learn" },
// // //       { icon: tensIcon, name: "TensorFlow" }
// // //     ],
// // //     Languages: [
// // //       { icon: pythonIcon, name: "Python" },
// // //       { icon: javaIcon, name: "Java" },
// // //       { icon: cIcon, name: "C" }
// // //     ],
// // //     "Web Dev": [
// // //       { icon: reactIcon, name: "React" },
// // //       { icon: nodeIcon, name: "Node.js" },
// // //       { icon: expressIcon, name: "Express" },
// // //       { icon: htmlIcon, name: "HTML" },
// // //       { icon: cssIcon, name: "CSS" },
// // //       { icon: tailwindIcon, name: "TailwindCSS" }
// // //     ],
// // //     Databases: [
// // //       { icon: postgresIcon, name: "PostgreSQL" },
// // //       { icon: mongoseIcon, name: "MongoDB" }
// // //     ],
// // //     "ML/AI": [
// // //       { icon: pythonIcon, name: "Python" },
// // //       { icon: numpyIcon, name: "NumPy" },
// // //       { icon: pandasIcon, name: "Pandas" },
// // //       { icon: sciIcon, name: "Scikit-learn" },
// // //       { icon: tensIcon, name: "TensorFlow" }
// // //     ],
// // //     Tools: [
// // //       { icon: gitIcon, name: "Git" },
// // //       { icon: postmanIcon, name: "Postman" }
// // //     ]
// // //   };

// // //   const [activeTab, setActiveTab] = useState("All Skills");

// // //   return (
// // //     <section id="skills" className="bg-gray-900 py-12 px-6 md:px-20">
// // //       <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-6">
// // //         Technical Expertise
// // //       </h1>
// // //       <p className="text-center text-gray-400 mb-10">
// // //         Comprehensive skill set spanning multiple technologies and domains
// // //       </p>

// // //       <div className="flex flex-wrap justify-center gap-3 mb-8">
// // //         {Object.keys(categories).map((category) => (
// // //           <button
// // //             key={category}
// // //             className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
// // //               activeTab === category
// // //                 ? "bg-purple-600 text-white shadow-md"
// // //                 : "bg-gray-700 text-gray-300 hover:bg-gray-600"
// // //             }`}
// // //             onClick={() => setActiveTab(category)}
// // //           >
// // //             {category}
// // //           </button>
// // //         ))}
// // //       </div>

// // //       <Section skills={categories[activeTab]} />
// // //     </section>
// // //   );
// // // };

// // // export default Skills;

// // import React from "react";

// // // Skill icons
// // import reactIcon from "../assets/skills/reactjs.png";
// // import nodeIcon from "../assets/skills/nodejs.png";
// // import expressIcon from "../assets/skills/expressjs.png";
// // import postgresIcon from "../assets/skills/postgres.png";
// // import htmlIcon from "../assets/skills/html.png";
// // import cssIcon from "../assets/skills/css.png";
// // import tailwindIcon from "../assets/skills/tailwind.png";
// // import cIcon from "../assets/skills/c.png";
// // import tensIcon from "../assets/skills/tensorflow-logo.svg";
// // import mongoseIcon from "../assets/skills/mongodb-logo.svg";
// // import postmanIcon from "../assets/skills/postman.png";
// // import sciIcon from "../assets/skills/sklearn-logo.svg";
// // import javaIcon from "../assets/skills/java.png";
// // import pythonIcon from "../assets/skills/python.png";
// // import gitIcon from "../assets/skills/git.png";
// // import numpyIcon from "../assets/skills/numpy.png";
// // import pandasIcon from "../assets/skills/pandas.png";

// // const SkillCard = ({ icon, name }) => (
// //   <div className="hover:scale-105 transition duration-200 p-3 bg-gray-700 rounded-lg shadow-sm flex flex-col items-center">
// //     <img src={icon} alt={name} className="h-8 w-8 mb-2" />
// //     <p className="text-white text-sm font-medium text-center">{name}</p>
// //   </div>
// // );

// // const CategoryCard = ({ title, skills, icon, color }) => (
// //   <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700 hover:border-gray-600 transition duration-300">
// //     <div className="flex items-center mb-4">
// //       <div className={`p-2 rounded-lg ${color} mr-3`}>
// //         <span className="text-xl">{icon}</span>
// //       </div>
// //       <h3 className="text-xl font-bold text-white">{title}</h3>
// //     </div>
// //     <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
// //       {skills.map((skill, index) => (
// //         <SkillCard key={index} icon={skill.icon} name={skill.name} />
// //       ))}
// //     </div>
// //   </div>
// // );

// // const Skills = () => {
// //   const categories = [
// //     {
// //       title: "Languages",
// //       icon: "💻",
// //       color: "bg-blue-600",
// //       skills: [
// //         { icon: pythonIcon, name: "Python" },
// //         { icon: javaIcon, name: "Java" },
// //         { icon: cIcon, name: "C" }
// //       ]
// //     },
// //     {
// //       title: "Web Development",
// //       icon: "🌐",
// //       color: "bg-green-600",
// //       skills: [
// //         { icon: reactIcon, name: "React" },
// //         { icon: nodeIcon, name: "Node.js" },
// //         { icon: expressIcon, name: "Express" },
// //         { icon: htmlIcon, name: "HTML" },
// //         { icon: cssIcon, name: "CSS" },
// //         { icon: tailwindIcon, name: "TailwindCSS" }
// //       ]
// //     },
// //     {
// //       title: "Databases",
// //       icon: "🗄️",
// //       color: "bg-purple-600",
// //       skills: [
// //         { icon: postgresIcon, name: "PostgreSQL" },
// //         { icon: mongoseIcon, name: "MongoDB" }
// //       ]
// //     },
// //     {
// //       title: "Machine Learning",
// //       icon: "🤖",
// //       color: "bg-red-600",
// //       skills: [
// //         { icon: pythonIcon, name: "Python" },
// //         { icon: numpyIcon, name: "NumPy" },
// //         { icon: pandasIcon, name: "Pandas" },
// //         { icon: sciIcon, name: "Scikit-learn" },
// //         { icon: tensIcon, name: "TensorFlow" }
// //       ]
// //     },
// //     {
// //       title: "Tools & Technologies",
// //       icon: "🛠️",
// //       color: "bg-orange-600",
// //       skills: [
// //         { icon: gitIcon, name: "Git" },
// //         { icon: postmanIcon, name: "Postman" }
// //       ]
// //     }
// //   ];

// //   return (
// //     <section id="skills" className="bg-gray-900 py-12 px-6 md:px-20">
// //       <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-6">
// //         Technical Expertise
// //       </h1>
// //       <p className="text-center text-gray-400 mb-10">
// //         Comprehensive skill set spanning multiple technologies and domains
// //       </p>

// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //         {categories.map((category, index) => (
// //           <CategoryCard
// //             key={index}
// //             title={category.title}
// //             skills={category.skills}
// //             icon={category.icon}
// //             color={category.color}
// //           />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Skills;

// import React, { useState } from "react";

// // Skill icons
// import reactIcon from "../assets/skills/reactjs.png";
// import nodeIcon from "../assets/skills/nodejs.png";
// import expressIcon from "../assets/skills/expressjs.png";
// import postgresIcon from "../assets/skills/postgres.png";
// import htmlIcon from "../assets/skills/html.png";
// import cssIcon from "../assets/skills/css.png";
// import tailwindIcon from "../assets/skills/tailwind.png";
// import cIcon from "../assets/skills/c.png";
// import tensIcon from "../assets/skills/tensorflow-logo.svg";
// import mongoseIcon from "../assets/skills/mongodb-logo.svg";
// import postmanIcon from "../assets/skills/postman.png";
// import sciIcon from "../assets/skills/sklearn-logo.svg";
// import javaIcon from "../assets/skills/java.png";
// import pythonIcon from "../assets/skills/python.png";
// import gitIcon from "../assets/skills/git.png";
// import numpyIcon from "../assets/skills/numpy.png";
// import pandasIcon from "../assets/skills/pandas.png";

// const SkillCard = ({ icon, name }) => (
//   <div className="hover:scale-105 transition duration-200 p-3 bg-gray-700 rounded-lg shadow-sm flex flex-col items-center">
//     <img src={icon} alt={name} className="h-8 w-8 mb-2" />
//     <p className="text-white text-sm font-medium text-center">{name}</p>
//   </div>
// );

// const CategoryCard = ({ title, skills, icon, color }) => (
//   <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700 hover:border-gray-600 transition duration-300">
//     <div className="flex items-center mb-4">
//       <div className={`p-2 rounded-lg ${color} mr-3`}>
//         <span className="text-xl">{icon}</span>
//       </div>
//       <h3 className="text-xl font-bold text-white">{title}</h3>
//     </div>
//     <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//       {skills.map((skill, index) => (
//         <SkillCard key={index} icon={skill.icon} name={skill.name} />
//       ))}
//     </div>
//   </div>
// );

// const Skills = () => {
//   const [activeTab, setActiveTab] = useState("All Skills");

//   const categories = [
//     {
//       title: "Languages",
//       icon: "💻",
//       color: "bg-blue-600",
//       skills: [
//         { icon: pythonIcon, name: "Python" },
//         { icon: javaIcon, name: "Java" },
//         { icon: cIcon, name: "C" }
//       ]
//     },
//     {
//       title: "Web Dev",
//       icon: "🌐",
//       color: "bg-green-600",
//       skills: [
//         { icon: reactIcon, name: "React" },
//         { icon: nodeIcon, name: "Node.js" },
//         { icon: expressIcon, name: "Express" },
//         { icon: htmlIcon, name: "HTML" },
//         { icon: cssIcon, name: "CSS" },
//         { icon: tailwindIcon, name: "TailwindCSS" }
//       ]
//     },
//     {
//       title: "Databases",
//       icon: "🗄️",
//       color: "bg-purple-600",
//       skills: [
//         { icon: postgresIcon, name: "PostgreSQL" },
//         { icon: mongoseIcon, name: "MongoDB" }
//       ]
//     },
//     {
//       title: "ML/AI",
//       icon: "🤖",
//       color: "bg-red-600",
//       skills: [
//         { icon: pythonIcon, name: "Python" },
//         { icon: numpyIcon, name: "NumPy" },
//         { icon: pandasIcon, name: "Pandas" },
//         { icon: sciIcon, name: "Scikit-learn" },
//         { icon: tensIcon, name: "TensorFlow" }
//       ]
//     },
//     {
//       title: "Tools",
//       icon: "🛠️",
//       color: "bg-orange-600",
//       skills: [
//         { icon: gitIcon, name: "Git" },
//         { icon: postmanIcon, name: "Postman" }
//       ]
//     }
//   ];

//   // Get all skills for "All Skills" tab
//   const allSkills = categories.reduce((acc, category) => {
//     return [...acc, ...category.skills];
//   }, []);

//   // Filter categories or show all skills based on active tab
//   const getDisplayContent = () => {
//     if (activeTab === "All Skills") {
//       return (
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
//           {allSkills.map((skill, index) => (
//             <SkillCard key={index} icon={skill.icon} name={skill.name} />
//           ))}
//         </div>
//       );
//     } else {
//       const filteredCategories = categories.filter(category => category.title === activeTab);
//       return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredCategories.map((category, index) => (
//             <CategoryCard
//               key={index}
//               title={category.title}
//               skills={category.skills}
//               icon={category.icon}
//               color={category.color}
//             />
//           ))}
//         </div>
//       );
//     }
//   };

//   const tabNames = ["All Skills", "Languages", "Web Dev", "Databases", "ML/AI", "Tools"];

//   return (
//     <section id="skills" className="bg-gray-900 py-12 px-6 md:px-20">
//       <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-6">
//         Technical Expertise
//       </h1>
//       <p className="text-center text-gray-400 mb-10">
//         Comprehensive skill set spanning multiple technologies and domains
//       </p>

//       {/* Filter Tabs */}
//       <div className="flex flex-wrap justify-center gap-3 mb-8">
//         {tabNames.map((tab) => (
//           <button
//             key={tab}
//             className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
//               activeTab === tab
//                 ? "bg-purple-600 text-white shadow-md"
//                 : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Dynamic Content */}
//       {getDisplayContent()}
//     </section>
//   );
// };

// export default Skills;


import React, { useState, useEffect } from "react";
import { fetchSkills } from '../utils/api';

// Skill icons
import reactIcon from "../assets/skills/reactjs.png";
import nodeIcon from "../assets/skills/nodejs.png";
import expressIcon from "../assets/skills/expressjs.png";
import postgresIcon from "../assets/skills/postgres.png";
import htmlIcon from "../assets/skills/html.png";
import cssIcon from "../assets/skills/css.png";
import tailwindIcon from "../assets/skills/tailwind.png";
import cIcon from "../assets/skills/c.png";
import tensIcon from "../assets/skills/tensorflow-logo.svg";
import mongoseIcon from "../assets/skills/mongodb-logo.svg";
import postmanIcon from "../assets/skills/postman.png";
import sciIcon from "../assets/skills/sklearn-logo.svg";
import javaIcon from "../assets/skills/java.png";
import pythonIcon from "../assets/skills/python.png";
import gitIcon from "../assets/skills/git.png";
import numpyIcon from "../assets/skills/numpy.png";
import pandasIcon from "../assets/skills/pandas.png";

// Image mapping for API image paths to imported images
const skillImageMap = {
  '/skills/python.png': pythonIcon,
  '/skills/java.png': javaIcon,
  '/skills/c.png': cIcon,
  '/skills/reactjs.png': reactIcon,
  '/skills/nodejs.png': nodeIcon,
  '/skills/expressjs.png': expressIcon,
  '/skills/html.png': htmlIcon,
  '/skills/css.png': cssIcon,
  '/skills/tailwind.png': tailwindIcon,
  '/skills/postgres.png': postgresIcon,
  '/skills/mongodb-logo.svg': mongoseIcon,
  '/skills/numpy.png': numpyIcon,
  '/skills/pandas.png': pandasIcon,
  '/skills/sklearn-logo.svg': sciIcon,
  '/skills/tensorflow-logo.svg': tensIcon,
  '/skills/git.png': gitIcon,
  '/skills/postman.png': postmanIcon,
};

// Original static categories data (fallback)
const staticCategories = [
  {
    title: "Languages",
    icon: "💻",
    color: "bg-blue-600",
    skills: [
      { icon: pythonIcon, name: "Python" },
      { icon: javaIcon, name: "Java" },
      { icon: cIcon, name: "C" }
    ]
  },
  {
    title: "Web Dev",
    icon: "🌐",
    color: "bg-green-600",
    skills: [
      { icon: reactIcon, name: "React" },
      { icon: nodeIcon, name: "Node.js" },
      { icon: expressIcon, name: "Express" },
      { icon: htmlIcon, name: "HTML" },
      { icon: cssIcon, name: "CSS" },
      { icon: tailwindIcon, name: "TailwindCSS" }
    ]
  },
  {
    title: "Databases",
    icon: "🗄️",
    color: "bg-purple-600",
    skills: [
      { icon: postgresIcon, name: "PostgreSQL" },
      { icon: mongoseIcon, name: "MongoDB" }
    ]
  },
  {
    title: "ML/AI",
    icon: "🤖",
    color: "bg-red-600",
    skills: [
      { icon: pythonIcon, name: "Python" },
      { icon: numpyIcon, name: "NumPy" },
      { icon: pandasIcon, name: "Pandas" },
      { icon: sciIcon, name: "Scikit-learn" },
      { icon: tensIcon, name: "TensorFlow" }
    ]
  },
  {
    title: "Tools",
    icon: "🛠️",
    color: "bg-orange-600",
    skills: [
      { icon: gitIcon, name: "Git" },
      { icon: postmanIcon, name: "Postman" }
    ]
  }
];

const SkillCard = ({ icon, name }) => (
  <div className="hover:scale-105 transition duration-200 p-3 bg-gray-700 rounded-lg shadow-sm flex flex-col items-center">
    <img src={icon} alt={name} className="h-8 w-8 mb-2" />
    <p className="text-white text-sm font-medium text-center">{name}</p>
  </div>
);

const CategoryCard = ({ title, skills, icon, color }) => (
  <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700 hover:border-gray-600 transition duration-300">
    <div className="flex items-center mb-4">
      <div className={`p-2 rounded-lg ${color} mr-3`}>
        <span className="text-xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {skills.map((skill, index) => (
        <SkillCard key={index} icon={skill.icon} name={skill.name} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All Skills");
  // Initialize with static data so UI renders immediately
  const [categories, setCategories] = useState(staticCategories);

  useEffect(() => {
    const loadSkills = async () => {
      const data = await fetchSkills();
      // Only update if API returns valid data (not null and has categories)
      if (data && data.categories && Array.isArray(data.categories) && data.categories.length > 0) {
        // Map API image paths to imported images
        const mappedCategories = data.categories.map(category => ({
          ...category,
          skills: category.skills.map(skill => ({
            ...skill,
            icon: skillImageMap[skill.icon] || skill.icon
          }))
        }));
        setCategories(mappedCategories);
      }
      // If API fails or returns null/empty, keep static data (already set)
    };
    loadSkills();
  }, []);

  // Get all skills for "All Skills" tab
  const allSkills = categories.length > 0 ? categories.reduce((acc, category) => {
    return [...acc, ...category.skills];
  }, []) : [];

  // Filter categories or show all skills based on active tab
  const getDisplayContent = () => {
    if (activeTab === "All Skills") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              color={category.color}
            />
          ))}
        </div>
      );
    } else {
      const filteredCategories = categories.filter(category => category.title === activeTab);
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              color={category.color}
            />
          ))}
        </div>
      );
    }
  };

  const tabNames = ["All Skills", "Languages", "Web Dev", "Databases", "ML/AI", "Tools"];

  return (
    <section id="skills" className="bg-gray-900 py-12 px-6 md:px-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-6">
        Technical Expertise
      </h1>
      <p className="text-center text-gray-400 mb-10">
        Comprehensive skill set spanning multiple technologies and domains
      </p>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {tabNames.map((tab) => (
          <button
            key={tab}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === tab
                ? "bg-purple-600 text-white shadow-md"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      {getDisplayContent()}
    </section>
  );
};

export default Skills;