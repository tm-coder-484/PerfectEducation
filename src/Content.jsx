import PageButton from "./Button.jsx";
import Card from "./Card.jsx";

function Content() {
  return (
    <>
      <div className="content">
        <h1 className="main-heading">
          Learning that <span className="text-primary-color">adapts</span> to
          you
        </h1>
        <PageButton text={"Get started"} />
        <div className="card-row">
          <Card
            text="Lorem ipsum"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia odio non nunc sollicitudin ultricies. Nulla dictum consectetur lectus, non varius dolor sodales vel."
          />
          <Card
            text="Lorem ipsum"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia odio non nunc sollicitudin ultricies. Nulla dictum consectetur lectus, non varius dolor sodales vel."
          />
          <Card
            text="Lorem ipsum"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia odio non nunc sollicitudin ultricies. Nulla dictum consectetur lectus, non varius dolor sodales vel."
          />
        </div>
      </div>
    </>
  );
}

export default Content;
