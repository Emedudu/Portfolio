import React from "react";
import Skill from "../components/skills";

const Skills = ({ appState }) => {
  return (
    <div className="pt-5 skills-font">
      <div>
        <p>Here are my skills:</p>
        <div>
          {Object.entries(appState).map((item, i) => {
            return (
              <Skill
                key={i}
                entry={item[0]}
                color={
                  item[1] > 66 ? "success" : item[1] > 50 ? "warning" : "danger"
                }
                value={item[1]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
