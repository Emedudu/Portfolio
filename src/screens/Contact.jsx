import React from "react";
import {
  Facebook,
  Gmail,
  Instagram,
  LinkedIn,
  Twitter,
  Whatsapp,
} from "../images";
// import './contact.css';

const Contact = () => {
  return (
    <div className="pt-5">
      <p style={{ textAlign: "center", textDecoration: "underline" }}>
        <b>Let's Talk</b>
      </p>
      <p>
        Want to get in touch or talk about a <b>project</b>? Feel free to
        contact me via email at{" "}
        <a href="mailto:itzemedev@gmail.com" target="_blank">
          itzemedev@gmail.com{" "}
        </a>
      </p>
      <p style={{ textAlign: "center", textDecoration: "underline" }}>
        <b>Let's go social</b>
      </p>
      <p>
        You may also reach me on
        <span>
          <a
            href="https://wa.me/2347040169179"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Whatsapp} alt="Whatsapp" width="48px" height="48px" />
          </a>
          ,
          <a
            href="https://www.instagram.com/emeduduna/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" width="48px" height="48px" />
          </a>
          ,
          <a
            href="https://www.facebook.com/Emeduduna Akerejola"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="Facebook" width="48px" height="48px" />
          </a>
          ,
          <a
            href="mailto:itzemedev@gmail.com?body=Hello%20Eme,"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Gmail} alt="Gmail" width="48px" height="48px" />
          </a>
          ,
          <a
            href="https://www.linkedin.com/in/emeduduna-akerejola-823a72230/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" width="48px" height="48px" />
          </a>
          ,and
          <a
            href="https://twitter.com/emeduduna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="Twitter" width="48px" height="48px" />
          </a>
        </span>
      </p>
    </div>
  );
};

export default Contact;
