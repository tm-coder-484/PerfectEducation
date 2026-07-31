function Card({ text, paragraph, link, imgsrc }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-image-container">
          <img src={imgsrc} alt="card image" className="card-image"></img>
        </div>
        <h2 className="card-text">{text}</h2>
        <p className="card-paragraph">{paragraph}</p>
      </div>
    </div>
    
  );
}

export default Card;
