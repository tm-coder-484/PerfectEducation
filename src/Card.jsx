import { Routes, Route, Link } from 'react-router' // Im dumb, I imported this in context.jsx and I realised I needed it here
// I'm starting to like react, so easy to do stuff with
function Card({ text, paragraph, link, imgsrc }) {
  return (
    <div className="card-container">
      <Link to={link} className="card-link"> 
        <div className="card">
          <div className="card-image-container">
            <img src={imgsrc} alt="card image" className="card-image" />
          </div>
          <h2 className="card-text">{text}</h2>
          <p className="card-paragraph">{paragraph}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
