import { LessonSidebarButton } from '../Button.jsx'
import { M1_1 } from './Math/Chapters.jsx'

function MathSidebar() {
  return (
    <>
      <LessonSidebarButton text="1.1 Introduction to Algebra"></LessonSidebarButton>
      <LessonSidebarButton text="1.2 Algebraic expressions"></LessonSidebarButton>
      <LessonSidebarButton text="1.3 Solving equations"></LessonSidebarButton>
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
          <M1_1/>
        </div>
      </div>
    </>
  );
}

export default LessonContent;
