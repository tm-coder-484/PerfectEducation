function Card({ text, paragraph, link }) {
  return (
    <div className="card">
      <div className="card-image-container"></div>
      <h2 className="card-text">{text}</h2>
      <p className="card-paragraph">{paragraph}</p>
    </div>
  );
}

export default Card;
