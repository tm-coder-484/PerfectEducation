import { LessonSidebarButton } from '../../Button.jsx'
import { InlineMath, BlockMath } from 'react-katex';
import {MathRenderer} from '../../MathRenderer.jsx'

export function M1_1() {
  return (
    <>
      <h1>Introduction to algebra</h1>
      <MathRenderer content={String.raw`
        Algebra is the branch of math that lets you use letters and symbols to stand for unknown numbers.
        Infact, you may have even used it without even realising! Say you spent 20 dollars on 5 apples, and you want to know how much each apple would cost. Well 4 right, obviously? Because $5\cdot4 = 20$ (note the dot hear means multiplication, which we shall use throughout these lessons isntead of the classic x you're used to). Congrats, you solved your first algebraic equation without even realising it!
        ## The Language of Algebra
        There are certain words we use to describe the math we call Algebra. First, we have coefficients, they are the number in front of variables, examples include the 5 infront of $5x$ or the 2 infront of $2z$. The letter behind the coefficient is called the variable and the whole thing is called a term, terms are separated by addition or subtraction. Next, we have the equals sign. The equals signs indicate the two sides are strictly equal, it is NOT an operator, using it wrongly as an operator includes working like $10/2=5-3=2+6=8$. This is because $10/2$ is not equal to $5-3$ which is not equal to $2+6$. For example, an expression is a mix of numbers or variables, examples include $1+1$ or $x+4$. Equations are slightly different, they have an equal sign while expressions do not, examples include $1+1=2$, $x-2=5$ and $5y+2=12$
        ## Like and unlike terms
        You cannot compare apples to oranges. The same goes for like and unlike terms. Like terms are expressions that share a common variable and can be simplified when adding. For example $3x$ and $5x$ are like terms because they share a common variable(x), and adding them gives $3x+5x=8x$. In contrast, $2x$ and $8y$ are not like terms, this is because they have different variables attached(x and y) and therefore cannot be added.
        `} />

    </>
  )
}
