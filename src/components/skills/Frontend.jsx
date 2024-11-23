import React from "react";
import "./skills.css";
const skills = [
  { name: "HTML", level: "Advance" },
  { name: "CSS", level: "Advance" },
  { name: "Tailwind CSS", level: "Advance" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React", level: "Advance" },
  { name: "Git", level: "Advance" },
];

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {skills.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className="bx bxs-badge-check" aria-hidden="true"></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
             
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
