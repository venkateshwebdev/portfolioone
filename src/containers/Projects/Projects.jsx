import "./projects.css";
import HeadingUnder from "../../components/HeadingDesign/HeadingUnder";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import fash from "./projectThumb.png";
import todo from "./projectThumb2.png";
import stream from "./ishaare.png";
import sneaker from "./projectThumb1.png";
import argus from "./ishaareMobile.png";
import bike from "./bike.png";
import watchface from "./watchface.png";
import magnim from "./magn.png";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className={`projectcard  ${props.align}`}>
      <div className={`project-content`}>
        <div className="text-[92px] font-bold opacity-30">0{props.num}</div>
        <div className="text-[48px] font-bold">{props.title}</div>
        <div className="text-sm">{props.des}</div>
        <div>Tech Stack : {props.tech}</div>
      </div>
      <Link to={props.url}>
        <div className="project-image" data-aos="slide-up">
          <img src={props.img} />
        </div>
      </Link>
    </div>
  );
};
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="projects-container" id="projects">
      <HeadingUnder name="Projects" />
      <div className="project-wrap">
        <Card
          num="1"
          title="Ishaare"
          des="Matrimony mobile app & web application. Designed with South Asians in mind. Ishaare enables users to connect on a more profound level, fostering meaningful and lasting bonds."
          align="reverse"
          tech="NextJs, and a lot 🙂"
          img={stream}
          url={"https://ishaare.com/"}
        />
        <Card
          num="2"
          title="Ishaare Mobile"
          des="Matrimony mobile app & web application. Designed with South Asians in mind. Ishaare enables users to connect on a more profound level, fostering meaningful and lasting bonds."
          tech="React Native 🔥"
          img={argus}
          url={
            "https://apps.apple.com/us/app/ishaare-com-love-marriage-app/id6587575218"
          }
        />
        <Card
          num="3"
          title="Bike 3D"
          des="A 3d website with animation and smooth scrolling for product showcasing."
          tech="ReactJS , React three fiber , Threejs ⚡️"
          img={bike}
          url={"https://venkateshr3f-bike.vercel.app/"}
        />
        <Card
          num="4"
          title="Dhyan"
          align="reverse"
          des="(PS: Visit, scroll down & interact with the watch in real-time 🔥 ) ..
          A meditation and spiritual education platform, featuring smooth animations, an integrated
blogging system, and a library of spiritual audiobooks. Created an interactive watch interface for virtual tours,
meditation music, and audiobook listings. Integrated an AI chatbot for real-time user support"
          tech="ReactJS , React three fiber, NextJS , Threejs 🤯"
          img={watchface}
          url={"https://dhyanapp.epilepto.com/"}
        />
        <Card
          num="5"
          title="Overview site"
          des="A comprehensive corporate website featuring various sections such as blogs,
leaderboard, and admin pages. Utilized React and Next.js to create a highly interactive user interface, and
implemented SEO best practices to enhance search engine rankings"
          tech="A fully packed tech stack ⚡️"
          img={magnim}
          url={"https://www.magnimus.com/"}
        />
        <Card
          num="H.. 🚀"
          title="And many more"
          des="I have worked on many more projects, you can check them out on my github profile."
          align="reverse"
          tech="Check out my skills sections for an overview"
          img={sneaker}
          url={"https://github.com/venkateshwebdev?tab=repositories"}
        />
      </div>
    </div>
  );
};

export default Projects;
