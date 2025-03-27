import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

// Importing React Icons for each technology
import {SiHtml5, SiCss3, SiJavascript, SiFlutter, SiMysql, SiPython, SiPostgresql, SiGithub, SiRenpy, SiSupabase} from "react-icons/si";
import {FaMobileAlt, FaDatabase } from "react-icons/fa"; // Additional icons
import { MdOutlineComputer } from "react-icons/md";

// Mapping skill names to their respective icons
const iconMapping = {
  supabase: <SiSupabase size={40} color="#45CE8B" />,
  database:<FaDatabase size={40} color="#808080 " />,
  desktop: <MdOutlineComputer size={40} color="#808080 " />,
  mobile: <FaMobileAlt size={40} color="#808080 " />,
  renpy: <SiRenpy size={40} color="#F7DF1E" />,
  html5: <SiHtml5 size={40} color="#E34F26" />,
  css3: <SiCss3 size={40} color="#1572B6" />,
  javascript: <SiJavascript size={40} color="#F7DF1E" />,
  flutter: <SiFlutter size={40} color="#02569B" />,
  "sql-database": <SiMysql size={40} color="#4479A1" />,
  postgresql: <SiPostgresql size={40} color="#336791" />,
  python: <SiPython size={40} color="#3776AB" />,
  github: <SiGithub size={40} color="#181717" />,
};

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {(skillsSection?.softwareSkills ?? []).map((skill, i) => {
            const keyName = skill.skillName.toLowerCase().replace(/\s/g, "-"); // Normalize names
            return (
              <li key={i} className="software-skill-inline" name={skill.skillName}>
                {iconMapping[keyName] || <SiJavascript size={40} />} {/* Default to JavaScript */}
                <p>{skill.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
