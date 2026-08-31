import { LessonSidebarButton } from '../Button.jsx'
import { Algebra, Trigonometry, Calculus } from './Math/Chapters.jsx'
import { useSearchParams } from 'react-router';




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
                <LessonSidebarButton text="Algebra" link="/lessons/content?subject=math&lesson=algebra"></LessonSidebarButton>
                <LessonSidebarButton text="Trigonometry" link="/lessons/content?subject=math&lesson=trigonometry"></LessonSidebarButton>
                <LessonSidebarButton text="Calculus" link="/lessons/content?subject=math&lesson=calculus"></LessonSidebarButton>
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
    if (lesson == "algebra") {
      return <Algebra />
    } else if (lesson == "trigonometry") {
      return <Trigonometry />
    } else if (lesson == "calculus") {
      return <Calculus />
    }
  }
}

export default LessonContent;
