import PageButton from "./Button.jsx";
import Card from "./Card.jsx";
import Math from "./assets/images/math.jpg";
import Coding from "./assets/images/coding.png";
import English from "./assets/images/english.jpeg";

function About() {
  return (
    <>
      <div className="content">
        <h1 className="main-heading">
          About Us
        </h1>
        <p className="paragraph">
          We are a group of students from academic honours who are passionate about education and wish to spread our knowledge with others. By engaging with this program, we hope you are able to meet your full potential and achieve your desired grades.
        </p>
        <h2 className="sub-heading">
          Our team
          
        </h2>
        <p className="paragraph">
        Stanley: Programmer and math specialist
        </p>
        <p className="paragraph">
        Tom: Programmer, science, hass and Chinese specialist
        </p>
        <p className="paragraph">
        Jason: German, music, English and arts specialist
        </p>
        <p className="paragraph">
        Ryan: Video and filming
        </p>
      </div>
    </>
  );
}

export default About;
