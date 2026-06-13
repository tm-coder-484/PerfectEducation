import { Routes, Route, Link } from 'react-router'

export function PageButton({ text, link }) {
  return <button className="page-button">{text}</button>;
}

export function BarButton({ text, link }) {
  return (
    <Link to={link}className="bar-button-container">
      <button className="bar-button">{text}</button>
    </Link>
  );
}
