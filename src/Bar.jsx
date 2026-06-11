import logo from "./assets/logo.png";
import BarButton from "./BarButton.jsx";
import { FaGithub } from "react-icons/fa";

function Bar() {
  return (
    <>
      <div className="bar">
        <img src={logo} alt="logo" className="main-logo" />
        <BarButton text="Lessons" />
        <BarButton text="Apply" />
        <BarButton text="About us" />
        <div className="horizontal-spacer"></div>
        <a
          href="https://github.com/tm-coder-484/PerfectEducation"
          className="github-btn"
        >
          <FaGithub className="github-icon" />
        </a>
      </div>
    </>
  );
}

export default Bar;
