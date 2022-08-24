import React from "react";
import {
  Facebook,
  Github,
  Gmail,
  Instagram,
  LinkedIn,
  Twitter,
  Whatsapp,
} from "../images";
// import './contact.css';

const Contact = () => {
  return (
    <div className="pt-5 contact-font">
      <p style={{ textAlign: "center" }}>
        <b>Let's Talk😃</b>
      </p>
      <p>Want to get in touch? You may contact me via any of these links:</p>
      <p>
        <div className="d-flex flex-column">
          <div className="p-2">
            <a
              href="mailto:itzemedev@gmail.com?body=Hello%20Eme,"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gmail <img src={Gmail} alt="Gmail" width="48px" height="48px" />
            </a>
          </div>
          <div className="p-2">
            <a
              href="https://www.github.com/Emedudu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github{" "}
              <img src={Github} alt="Github" width="48px" height="48px" />
            </a>
          </div>
          <div className="p-2">
            <a
              href="https://twitter.com/emeduduna"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter{" "}
              <img src={Twitter} alt="Twitter" width="48px" height="48px" />
            </a>
          </div>
          <div className="p-2">
            <a
              href="https://www.linkedin.com/in/emeduduna-akerejola-823a72230/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn{" "}
              <img src={LinkedIn} alt="LinkedIn" width="48px" height="48px" />
            </a>
          </div>
          <div className="p-2">
            <a
              href="https://wa.me/2347040169179"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp{" "}
              <img src={Whatsapp} alt="Whatsapp" width="48px" height="48px" />
            </a>
          </div>
          <div className="p-2">
            <a
              href="https://www.instagram.com/emeduduna/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram{" "}
              <img src={Instagram} alt="Instagram" width="48px" height="48px" />
            </a>
          </div>
          <div className="p-2">
            <a
              href="https://www.facebook.com/Emeduduna Akerejola"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook{" "}
              <img src={Facebook} alt="Facebook" width="48px" height="48px" />
            </a>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Contact;
