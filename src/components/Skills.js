import React from 'react';

const SkillBar = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-blue-700 dark:text-white">{skill}</span>
      <span className="text-sm font-medium text-blue-700 dark:text-white">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${level}%`}}></div>
    </div>
  </div>
);

const Skills = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "CSS", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 70 },
  ];

  return (
    <section id="skills" className="p-8 bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">My Skills</h2>
      <div className="max-w-xl mx-auto">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill.name} level={skill.level} />
        ))}
      </div>
    </section>
  );
};

export default Skills;