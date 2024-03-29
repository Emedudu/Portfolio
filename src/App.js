import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navbar";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Earn_FTImage from "./images/earn_ft.png";
import MevoteImage from "./images/mevote.png";
import Fun_D_CrowdImage from "./images/fun_d_crowd.png";
import DadaMotorsImage from "./images/dadamotors.png";
import { Unavailable } from "./images";
import Skills from "./screens/Skills";

const App = () => {
  let [appState, setAppState] = useState({
    skills: {
      HTML: 85,
      CSS: 70,
      JAVASCRIPT: 90,
      "REACT.JS": 85,
      REDUX: 70,
      BOOTSTRAP: 75,
      "NODE.JS": 80,
      EXPRESS: 75,
      MONGODB: 60,
      SOLIDITY: 80,
      PYTHON: 90,
    },
    projects: {
      APPS: {
        WORKTALK: {
          image: Unavailable,
          description: "To ease communication between bosses and workers",
          completed: false,
          codeLink: "https://github.com/Emedudu/worktalk",
        },
        DADAMOTORS: {
          image: DadaMotorsImage,
          description: "A site for trading cars",
          completed: true,
          codeLink: "https://github.com/Emedudu/CarsWorld",
          siteLink: "https://dadamotors1.herokuapp.com",
        },
        // 'RANDOM':{
        //   'description':"A program to generate random numbers",
        //   'completed':true,
        //   'siteLink':'http://localhost:3000/home'
        // }
      },
      DAPPS: {
        MEVOTE: {
          image: MevoteImage,
          description: "A decentralized application for voting",
          completed: true,
          codeLink: "https://github.com/Emedudu/Mevote",
          siteLink: "https://emedudu.github.io/Mevote",
        },
        EARN_FT: {
          image: Earn_FTImage,
          description: "A market for trading Non-Fungible Tokens",
          completed: true,
          codeLink: "https://github.com/Emedudu/nft-marketplace",
          siteLink: "https://earn-ft.herokuapp.com/",
        },
        "FUN-D-CROWD": {
          image: Fun_D_CrowdImage,
          description: "A crowdfunding platform",
          completed: true,
          codeLink: "https://github.com/Emedudu/Fun-d-crowd",
          siteLink: "https://fun-d-crowd.herokuapp.com/",
        },
      },
    },
  });
  return (
    // <div className="" style={{'backgroundImage': 'linear-gradient(to right,rgba(255,255,255,0.2),rgba(0,100,0,0.2))'}}>
    <div className="App-font">
      <Navigation />
      <div
        className="shadow-lg p-3 bg-transparent rounded overflow-auto align-items-center"
        style={{
          height: "90vh",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/skills"
            element={<Skills appState={appState.skills} />}
          />
          <Route
            exact
            path="/projects"
            element={<Projects appState={appState.projects} />}
          />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
