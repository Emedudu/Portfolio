import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-5 home-font">
      <div>
        <div style={{ color: "gold", fontWeight: "bold", fontSize: "25px" }}>
          Hello!👋
        </div>{" "}
        <br />
        <p>
          I am Eme😊, a Software developer with about 3 years of experience. I
          currently develop Web and Web3 applications for open source,
          individuals and organizations. You may check out👉 my
          <Link to="/skills" className="route-links">
            {` skills `}
          </Link>
          or
          <Link to="/projects" className="route-links">
            {` projects `}
          </Link>
        </p>
        <p>
          Outside coding💻, I love watching Animes📺, playing football video
          games⚽, and playing Tennis🎾.
        </p>
        <p>
          You may
          <Link to="/contact" className="route-links">
            {` contact `}
          </Link>
          me to collaborate on any of your interesting projects😉, or any other
          fun stuff😁.
        </p>
      </div>
    </div>
  );
};

export default Home;
