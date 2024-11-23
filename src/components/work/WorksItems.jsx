import React from "react";
import "./work.css";

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__flex">
        {/* Conditionally render the Demo button only if item.links is not empty */}
        {item.links && (
          <div>
            <a href={item.links} className="work__button">
              Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
          </div>
        )}
        <div> 
          <a
            href={item.gitLink}
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorksItems;
