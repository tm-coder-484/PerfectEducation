import Bar from "./Bar.jsx";
import Content from "./Content.jsx";
import About from "./About.jsx";
import Apply from "./Apply.jsx";
import Lessons from "./Lessons/Lessons.jsx";
import LessonContent from "./Lessons/LessonPage.jsx";
import { Routes, BrowserRouter, Route, Link } from 'react-router'
import Scroll from "./Scroll.jsx";
function App() {
  return (
    <>
      <div className="main">
        <Bar />
        <Scroll />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/content/:id" element={<LessonContent />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
