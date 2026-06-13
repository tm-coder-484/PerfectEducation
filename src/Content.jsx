import {PageButton} from "./Button.jsx";
import Card from "./Card.jsx";
import Math from "./assets/images/math.jpg";
import Coding from "./assets/images/coding.png";
import English from "./assets/images/english.jpeg";

function Content() {
  return (
    <>
      <div className="content">
        <h1 className="main-heading">
          Learning that <span className="text-primary-color">adapts</span> to
          you
        </h1>
        <PageButton text={"Get started"} />
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
            paragraph="Many of our members have exceptional coding skills. They created this website you're looking at right now. If you want to learn how to code in html, css and javascript along with other select languages this is the place!"
            imgsrc={Coding}
          />
          <Card
            text="English"
            paragraph="The exceptional English skills of our team allows us to be able to teach you whatever you need! From writing peel paragraphs to analysing."
            imgsrc={English}
          />
        </div>
      </div>
    </>
  );
}

export default Content;
