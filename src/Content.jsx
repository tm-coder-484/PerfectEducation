import {PageButton} from "./Button.jsx";
import { Routes, Route, Link } from 'react-router'
import Card from "./Card.jsx";
import Math from "./assets/images/math.jpg";
import Coding from "./assets/images/coding.png";
import English from "./assets/images/english.jpeg";
import History from "./assets/images/history.png";
import Science from "./assets/images/science.png";
import Music from "./assets/images/music.webp";
import German from "./assets/images/german.webp";
import Arts from "./assets/images/art.jpg";
import Logo from "./assets/logo.png";
import Apply from "./Apply.jsx";

function Content() {
  return (
    <>
      <div className="content">
        <h1 className="main-heading">
          Learning that <span className="text-primary-color">adapts</span> to
          you
        </h1>
        <PageButton text={"Get started"} link={"/apply"}/>
        <h2 className="sub-heading">
          What we Teach
        </h2>
        <div className="card-row">
          <Card
            text="Math"
            paragraph="Our members have the capability of comfortably teaching at a year 10 math level with alot of year 11-12 knowledge aswell! We teach all the from fractions to the order of operations to algebra to trigonometry and finally calculus!"
            imgsrc={Math}
          />
          <Card
            text="Digital Technologies"
            paragraph="Many of our members have exceptional coding skills. They created this website you're looking at right now. If you want to learn how to code in html, css and javascript along with other select languages like python, this is the place!"
            imgsrc={Coding}
            disabled={true}
          />
          <Card
            text="English"
            paragraph="The exceptional English skills of our team allows us to be able to teach you whatever you need! From writing peel paragraphs to analysing."
            imgsrc={English}
            disabled={true}
          />
          <Card
            text="History"
            paragraph="Our team has exceptional skills in History. We can guide you through writing essays and analysing sources. We can also help you understand the content you're working on."
            imgsrc={History}
            disabled={true}
          />
          <Card
            text="Science"
            paragraph="Our team has great skills in Science. We can guide you through understanding complex concepts and reviewing your experiment results. We can also help you with your exams stile work."
            imgsrc={Science}
            disabled={true}
          />
          <Card
            text="Music"
            paragraph="Our team is skilled in music playing making and reading (Jason). Setting up instruments may be tricky though, but we are happy to help!"
            imgsrc={Music}
            disabled={true}
          />
          <Card
            text="German"
            paragraph="Our team are very skilled in German, we have the top ep champions, and someone from the German Immersion program. We can help you with everything, from exams to pronunciation."
            imgsrc={German}
            disabled={true}
          />
          <Card
            text="Arts"
            paragraph="Although not the subject our team are most skilled at, we can certainly help you get through any subject."
            imgsrc={Arts}
            disabled={true}
          />
          <Card
            text="Apply"
            paragraph="Our team can help you through almost any subject, letting you get good marks and helping you understand the subject."
            imgsrc={Logo}
            link="/apply"
          />
        </div>
      </div>
    </>
  );
}

export default Content;
