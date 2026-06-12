import { Routes, Route, Link } from 'react-router'

function BarButton({ text, link }) {
  return (
    <Link to={link}className="bar-button-container">
      <button className="bar-button">{text}</button>
    </Link>
  );
}

export default BarButton;
