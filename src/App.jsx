import Bar from "./Bar.jsx";
import Content from "./Content.jsx";
import About from "./About.jsx";
import Apply from "./Apply.jsx";

import { Routes, Route, Link } from 'react-router'

function App() {
  return (
    <>
      <div className="main">
        <Bar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
