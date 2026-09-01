import { LessonSidebarButton } from '../Button.jsx'
import { MathRenderer } from '../MathRenderer.jsx';
import { Algebra, Trigonometry, Calculus } from './Math/Chapters.jsx'
import { useSearchParams } from 'react-router';
import PElogo from '../assets/logo.png'



function LessonContent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const subjectQuery = searchParams.get('subject') || '';
  const lessonQuery = searchParams.get('lesson') || '';
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchParams({ query: value});
  };
  return (
    <>

      <div className="lesson-container">
        <div className="lesson-sidebar-container">
          <div className="lesson-sidebar">
            <h2>Table of Contents</h2>
            {subjectQuery == "math" && (
              <>
                <LessonSidebarButton text="Algebra" link="/lessons/content?subject=math&lesson=algebra" onClick={handleSearchChange}></LessonSidebarButton>
                <LessonSidebarButton text="Trigonometry" link="/lessons/content?subject=math&lesson=trigonometry" onClick={handleSearchChange}></LessonSidebarButton>
                <LessonSidebarButton text="Calculus" link="/lessons/content?subject=math&lesson=calculus" onClick={handleSearchChange}></LessonSidebarButton>
              </>
            )}

          </div>
        </div>
        <div className="lesson-content">
          <LessonWrapper lesson={lessonQuery} subject={subjectQuery}/>


        </div>
      </div>
    </>
  );
}

function LessonWrapper({ lesson, subject}) {
  if (subject == "math") {
    if (lesson) {
      if (lesson == "algebra") {
        return <Algebra />
      } else if (lesson == "trigonometry") {
        return <Trigonometry />
      } else if (lesson == "calculus") {
        return <Calculus />
      }
    }
    return (
      <>
      <h1>Click on one of the lessons on the sidebar to get started!</h1>
      <MathRenderer content={String.raw`
        We have everything from calculus to algebra, get started on your math journey now!

        `} />
      <img src={PElogo}></img>
      </>
    )

  }
}

export default LessonContent;
