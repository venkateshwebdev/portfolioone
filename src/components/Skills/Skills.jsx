import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Python from "./SkillsEssentials/python.png";
import JavaScript from "./SkillsEssentials/js.png";
import ReactNative from "./SkillsEssentials/react-native.svg";
import React from "./SkillsEssentials/logo192.png";
import HTML from "./SkillsEssentials/html.png";
import CSS from "./SkillsEssentials/css-3.png";
import EXPRESS from "./SkillsEssentials/expressjs.svg";
import mongoDB from "./SkillsEssentials/mongoDB.png";
import next from "./SkillsEssentials/next-js.svg";
import nodejs from "./SkillsEssentials/nodejs.png";
import firebase from "./SkillsEssentials/firebase.png";
import { SiFirebase } from "react-icons/si";
import { useContext, useEffect } from "react";
import ThemeContext from "../../themeContext";
import HeadingUnder from "../HeadingDesign/HeadingUnder";
import { github } from "./SkillsEssentials/githublogo.png";
import { SiExpress } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import ThreeJs from "./SkillsEssentials/Threejs-logo.png";
import { SiGithub } from "react-icons/si";
const imageArray = [
  { src: ReactNative, name: "Mobile Apps" },
  { src: React, name: "ReactJS" },
  { src: <SiNextdotjs className="sicon" />, name: "NextJS", icon: true },
  { src: JavaScript, name: "JavaScript" },
  { src: ThreeJs, name: "Three JS" },
  { src: ThreeJs, name: "R3F" },
  { src: nodejs, name: "Node.Js" },
  { src: <SiExpress className="sicon" />, name: "Express.Js", icon: true },
  { src: Python, name: "Python" },
  { src: HTML, name: "HTML" },
  { src: CSS, name: "CSS" },
  { src: mongoDB, name: "mongoDB" },
  { src: firebase, name: "Firebase" },
];

const Skills = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const cxt = useContext(ThemeContext);
  const createSkill = (img) => {
    return (
      <div className="skill-main">
        {img.icon ? img.src : <img className="sicon" src={img.src} alt="" />}
        <p>{img.name}</p>
      </div>
    );
  };
  return (
    <div className={`skill-container ${cxt.addDiv}`} id="skills">
      <HeadingUnder name=" ` Skills ` " />

      <div className="skill-wrap">
        <div className="skill-image-container" data-aos="fade-up">
          {imageArray.map((e) => createSkill(e))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

{
  /* <p>And few more.. 😂</p> */
}
