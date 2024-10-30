import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title"> Harsh Shigwan</h1>
        <ul className="footer__list">
          <li>
            <a href="#" className=" footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#" className=" footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className=" footer__link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className=" footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/harsh-shigwan-7bb012228/"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className=" bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/harsh-Shigwan"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://leetcode.com/u/harsh_shigwan/"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-shigwan-7bb012228/"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className=" bx  bxl-facebook"></i>
          </a>
        </div>
        <span className="footer__copy"> &#169; Harsh. All right reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
