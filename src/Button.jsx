import { Routes, Route, Link } from 'react-router'

export function PageButton({ text, link }) {
  return (
    <Link to={link} className="page-button-link">
      <button className="page-button">{text}</button>
    </Link>
  );
}

export function BarButton({ text, link }) {
  return (
    <Link to={link}className="bar-button-container">
      <button className="bar-button">{text}</button>
    </Link>
  );
}

export function LessonSidebarButton({ text, link }) {
  return (
    <Link to={link}className="lesson-sidebar-button-container">
      <button className="lesson-sidebar-button">
        {text}
      </button>
    </Link>
  );
}
