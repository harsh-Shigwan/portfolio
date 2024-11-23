import React from "react";

const backendSkills = [
  { name: "Node.js", level: "Intermediate" },
  { name: "MySQL", level: "Advance" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Firebase", level: "Basic" },
];

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {backendSkills.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className="bx bxs-badge-check" aria-hidden="true"></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
             {/*   <span className="skills__level">{skill.level}</span>*/}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backend;
