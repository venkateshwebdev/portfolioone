import "./projects.css"
import HeadingUnder from "../../components/HeadingDesign/HeadingUnder";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import fash from './projectThumb.png'
import todo from './projectThumb2.png'
import stream from './projectThumb3.png'
import sneaker from './projectThumb1.png'
import argus from "./argus.png"
import bike from "./bike.png"
import {Link} from "react-router-dom"
const Card = (props)=>{
    return(
        <div className={`projectcard  ${props.align}`}>
            <div className={`project-content`}>
                <div className="text-[92px] font-bold opacity-30">0{props.num}</div>
                <div className="text-[48px] font-bold">{props.title}</div>
                <div className="text-sm">{props.des}</div>
                <div>Tech Stack : {props.tech}</div>
            </div>
            <Link to={props.url}><div className="project-image" data-aos="slide-up"><img src={props.img}/></div></Link>
        </div>
    )
}
const Projects = () => {
    useEffect(()=>{
        AOS.init({duration:1500})
    },[])
    return ( 
        <div className="projects-container" id="projects">
            <HeadingUnder name="Projects" />
            <div className="project-wrap">
            <Card num="1" title="StreamZ" des="Watch and save your favorite videos on this YouTube-like website."  align="reverse" tech="ReactJS" img={stream} url={"https://streamzz.vercel.app"} />
            <Card num="2" title="ArgusB" des="A beautiful 3d website with animation and smooth scrolling." tech="ReactJS , React three fiber , Threejs"  img={argus} url={"https://argusb.vercel.app/"} />
            <Card num="3" title="SneakerSpot" des="Upgrade your sneaker game with our premier online store for stylish, high-quality sneakers from top brands like Puma, Nike, and Adidas." align="reverse"  tech="ReactJS, ExpressJS ,mongoDB"  img={sneaker} url={"https://sneakerspots.vercel.app"} />
            <Card num="4" title="Bike" des="A beautiful 3d website with animation and smooth scrolling." tech="ReactJS , React three fiber , Threejs"  img={bike} url={"https://venkateshr3f-bike.vercel.app/"} />
            <Card num="5" title="Fashion-ed" des="Style, Shop, Blog: Fashion Hub for Trendsetters and Enthusiasts."  tech="NextJS,ReactJS" img={fash} align="reverse" url={"https://fashion-ed.vercel.app"} />
            </div>
        </div>
     );
}
 
export default Projects;
