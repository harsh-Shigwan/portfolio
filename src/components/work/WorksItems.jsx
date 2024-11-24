import React, { useState } from "react";
import "./work.css";

const WorksItems = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="work__card"
      key={item.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`work__img-container ${isHovered ? "hovered" : ""}`}>
        <img src={item.image} alt={item.title} className="work__img" />
        {isHovered && (
          <button
            className="work__preview-button"
            onClick={() =>
              item.links ? window.open(item.links, "_blank") : window.open(item.gitLink, "_blank")
            }
          >
            Preview
          </button>
        )}
      </div>
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
