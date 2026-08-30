import { LessonSidebarButton } from '../../Button.jsx'
import { InlineMath, BlockMath } from 'react-katex';
import {MathRenderer} from '../../MathRenderer.jsx'
import Triangle from '../../assets/images/triangle-diagram.png'

export function Algebra() {
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
        ## Solving basic equations
        To solve algebraic equations, you must isolate your variable by adding, subtracting, multiplying or dividing numbers on both sides. You can think of this as keeping a see saw balanced. For example to solve $x+4=10$, you first subtract 4 from both sides, as in order to get rif of the +4 we must take it away, so we get $x=10-4$ or $x=6$. For subtraction, we add values to both sides to cancel out the subtraction. For example to solve $x-1=2$, add 1 to both sides to get $x=2+1$ or $x=3$. For multipication, you divide on both sides to cancel out the multiplication, for example to solve $2x=4$, you divide by two on both sides to get $x=4/2$ or $x=2$. For divison, multiply on both sides. For example to solve $x/4=2$, you multiply by 4 on both sides to get $x=4\cdot 2$ or $x=8$. 
        ## Verifying solutions
        To verify your solutions to equations, you can simply replace all values of x with the number you solved x to be equal to and check if the left hand side equals the right hand side. To verify $x=4$ as the solution to $3x=12$, replace the x with 4(as that is the solution we found) to get $3 \cdot 4=12$, and simplifying further we got $12=12$, verifying our solution is correct.
        ## Two step equations 
        Two step equations combine two operations into one equation with a variable, adding an extra layer of complexity. Examples include $2x+4=10$ and $3x-2=13$. To solve the equation, you have to apply two of our two previous steps to isolate x. To solve $2x+4=10$, we first subtract 4 from both sides to get $2x=6$, now, apply our second step of dividing by 2 in order to fully isolate x and get our result of $x=3$
        `} />

    </>
  )
}

export function Trigonometry() {
  return (
    <>
      <h1>Introduction to trigonometry</h1>
      <MathRenderer content={String.raw`
        Trigonometry is a branch of math that deals with the relationships between the sides and angles of triangles. We can use it to solve for unknown sides and angles in a triangle making it very useful. 
        ## Trigonometric ratios
        The three quintessential trigonometry ratios are sine, cosine and tangent. They are equal to the ratio of two sides of a right angled triangle. 
      `} />
      <img src={Triangle} className='trig-image'/>
      <MathRenderer content={String.raw`
        $\sin(\theta)=\frac{opposite}{hypotenuse}$
        $\cos(\theta)=\frac{adjacent}{hypotenuse}$
        $\tan(\theta)=\frac{opposite}{adjacent}$
      `} />
      <MathRenderer content={String.raw`
        Where $\theta$ is the angle of a right angled triangle. These can be memorised using the acronym SohCahToa
        
      `} />
    </>
  )
}