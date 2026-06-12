import logo from "./assets/logo.png";
import BarButton from "./BarButton.jsx";
import { FaGithub } from "react-icons/fa";

import { Routes, Route, Link } from 'react-router'

function Bar() {
  return (
    <>
      <div className="bar">
        <Link to="/">
          <img src={logo} alt="logo" className="main-logo" />
        </Link>
        <BarButton text="Lessons"/>
        <BarButton text="Apply"  />
        <BarButton text="About us" link="/about"/>
        <div className="horizontal-spacer"></div>
        <a
          href="https://github.com/tm-coder-484/PerfectEducation"
          className="github-btn"
        >
          <FaGithub className="github-icon" color="#FFFFFF" />
        </a>
      </div>
    </>
  );
}

export default Bar;
