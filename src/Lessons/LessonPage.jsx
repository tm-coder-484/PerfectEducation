import { LessonSidebarButton } from '../Button.jsx'
import { Algebra, Trigonometry } from './Math/Chapters.jsx'

function MathSidebar() {
  return (
    <>
      <LessonSidebarButton text="Algebra"></LessonSidebarButton>
      <LessonSidebarButton text="Trigonometry"></LessonSidebarButton>
      <LessonSidebarButton text="Calculus"></LessonSidebarButton>
    </>
  )
}


function LessonContent() {
  return (
    <>
      <div className="lesson-container">
        <div className="lesson-sidebar-container">
          <div className="lesson-sidebar">
            <h2>Table of Contents</h2>
            <MathSidebar/>
          </div>
        </div>
        <div className="lesson-content">
          <Trigonometry/>
        </div>
      </div>
    </>
  );
}

export default LessonContent;
