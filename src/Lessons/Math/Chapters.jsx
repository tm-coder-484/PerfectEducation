import { LessonSidebarButton } from '../../Button.jsx'
import { InlineMath, BlockMath } from 'react-katex';
import {MathRenderer} from '../../MathRenderer.jsx'
import Triangle from '../../assets/images/triangle-diagram.png'
import Tri1 from '../Images/tri1.png'
import Tri2 from '../Images/tri2.png'
import Tri3 from '../Images/tri3.png'
import Tree from '../Images/tree.jpg'
import iTri1 from '../Images/itrig1.png'
import Derivative1 from '../Images/derivative1.jpg'
import ReactMarkdown from 'react-markdown';


import "katex/dist/katex.min.css";

export function Algebra() {
  return (
    <>
      <h1>Introduction to algebra</h1>
      <MathRenderer content={String.raw`
        [**Algebra**](https://en.wikipedia.org/wiki/Algebra) is the branch of math that lets you use letters and symbols to stand for unknown numbers.
        In fact, you may have even used it without even realising! Say you spent 20 dollars on 5 apples, and you want to know how much each apple would cost. Well 4 right, obviously? Because $5\cdot4 = 20$ (note the dot here means multiplication, which we shall use throughout these lessons isntead of the classic x you're used to). Congrats, you solved your first algebraic equation without even realising it!

        ---

        ## The Language of Algebra
        There are certain words we use to describe the math we call [**Algebra**](https://en.wikipedia.org/wiki/Algebra). First, we have [*coefficients*](https://en.wikipedia.org/wiki/Coefficient), they are the number in front of [*variables*](https://en.wikipedia.org/wiki/Variable_(mathematics)), examples include the 5 infront of $5x$ or the 2 infront of $2z$. The letter behind the [*coefficients*](https://en.wikipedia.org/wiki/Coefficient) is called the [*variables*](https://en.wikipedia.org/wiki/Variable_(mathematics)) and the whole thing is called a [*term*](https://simple.wikipedia.org/wiki/Term_(mathematics)), [*terms*](https://simple.wikipedia.org/wiki/Term_(mathematics)) are separated by addition or subtraction. Next, we have the equals sign. The equals signs indicate the two sides are strictly equal, it is NOT an [*operator*](https://en.wikipedia.org/wiki/Operator_(mathematics)), using it wrongly as an [*operator*](https://en.wikipedia.org/wiki/Operator_(mathematics)) includes working like $10/2=5-3=2+6=8$. This is because $10/2$ is not equal to $5-3$ which is not equal to $2+6$. For example, an [*expression*](https://en.wikipedia.org/wiki/Expression_(mathematics)) is a mix of numbers or [*variables*](https://en.wikipedia.org/wiki/Variable_(mathematics)), examples include $1+1$ or $x+4$. [*Equations*](https://en.wikipedia.org/wiki/Equation) are slightly different, they have an equal sign while [*expressions*](https://en.wikipedia.org/wiki/Expression_(mathematics)) do not, examples include $1+1=2$, $x-2=5$ and $5y+2=12$

        ---
        
        ## Like and unlike terms
        You cannot compare apples to oranges. The same goes for [*like*](https://en.wikipedia.org/wiki/Like_terms) and unlike [*terms*](https://simple.wikipedia.org/wiki/Term_(mathematics)). [*Like terms*](https://en.wikipedia.org/wiki/Like_terms) are [*expressions*](https://simple.wikipedia.org/wiki/Expression_(mathematics)) that share a common [*variable*](https://en.wikipedia.org/wiki/Variable_(mathematics)) and can be [*simplified*](https://en.wikipedia.org/wiki/Simplification) when adding. For example $3x$ and $5x$ are [*like terms*](https://en.wikipedia.org/wiki/Like_terms) because they share a common [*variable(x)*](https://en.wikipedia.org/wiki/Variable_(mathematics)), and adding them gives $3x+5x=8x$. In contrast, $2x$ and $8y$ are not [*like terms*](https://en.wikipedia.org/wiki/Like_terms), this is because they have different [*variables*](https://en.wikipedia.org/wiki/Variable_(mathematics)) attached(x and y) and therefore cannot be added.
        
        ---

        ## Solving basic equations
        To solve [*algebraic equations*](https://en.wikipedia.org/wiki/Algebraic_equation), you must isolate your [*variable*](https://en.wikipedia.org/wiki/Variable_(mathematics)) by adding, subtracting, multiplying or dividing numbers on both sides. You can think of this as keeping a see saw balanced. For example to solve $x+4=10$, you first subtract 4 from both sides, as in order to get rid of the +4 we must take it away, so we get $x=10-4$ or $x=6$. For subtraction, we add values to both sides to cancel out the subtraction. For example to solve $x-1=2$, add 1 to both sides to get $x=2+1$ or $x=3$. For multipication, you divide on both sides to cancel out the multiplication, for example to solve $2x=4$, you divide by two on both sides to get $x=\dfrac{4}{2}$ or $x=2$. For divison, multiply on both sides. For example to solve $\dfrac{x}{4}=2$, you multiply by 4 on both sides to get $x=4\cdot 2$ or $x=8$.
        
        ---
        
        ## Verifying solutions
        To verify your solutions to [*equations*](https://en.wikipedia.org/wiki/Equation), you can simply replace all values of x with the number you solved x to be equal to and check if the left hand side equals the right hand side. To verify $x=4$ as the solution to $3x=12$, replace the x with 4 (as that is the solution we found) to get $3 \cdot 4=12$, and [*simplifying*](https://en.wikipedia.org/wiki/Simplification) further we got $12=12$, verifying our solution is correct.
        
        ---
        
        ## Two step equations
        Two step equations combine two [*operations*](https://en.wikipedia.org/wiki/Operation_(mathematics)) into one [*equation*](https://en.wikipedia.org/wiki/Equation) with a [*variable*](https://en.wikipedia.org/wiki/Variable_(mathematics)), adding an extra layer of complexity. Examples include $2x+4=10$ and $3x-2=13$. To solve the [*equation*](https://en.wikipedia.org/wiki/Equation), you have to apply two of our two previous steps to isolate x. To solve $2x+4=10$, we first subtract 4 from both sides to get $2x=6$, now, apply our second step of dividing by 2 in order to fully isolate x and get our result of $x=3$
        `} />

    </>
  )
}

export function Trigonometry() {
  return (
    <>
      <h1>Introduction to trigonometry</h1>
      <MathRenderer content={String.raw`
        [**Trigonometry**](https://en.wikipedia.org/wiki/Trigonometry) is a branch of [*math*](https://en.wikipedia.org/wiki/Mathematics) that deals with the relationships between the sides and [*angles*](https://en.wikipedia.org/wiki/Angle) of [*triangles*](https://en.wikipedia.org/wiki/Triangle). We can use it to solve for unknown sides and [*angles*](https://en.wikipedia.org/wiki/Angle) in a [*triangle*](https://en.wikipedia.org/wiki/Triangle) making it very useful.
        
        ---
        
        ## Trigonometric ratios
        The three quintessential [*trigonometry*](https://en.wikipedia.org/wiki/Trigonometry) ratios are [*sine*](https://en.wikipedia.org/wiki/Sine), [*cosine*](https://en.wikipedia.org/wiki/Cosine) and [*tangent*](https://en.wikipedia.org/wiki/Tangent_(trigonometry)). They are equal to the ratio of two sides of a [*right angled triangle*](https://en.wikipedia.org/wiki/Right_triangle).
      `} />
      <img src={Triangle} className='trig-image'/>
      <MathRenderer content={String.raw`
        $\sin(\theta)=\dfrac{opposite}{hypotenuse}$
        $\cos(\theta)=\dfrac{adjacent}{hypotenuse}$
        $\tan(\theta)=\dfrac{opposite}{adjacent}$
      `} />
      <MathRenderer content={String.raw`
        Where $\theta$ is the [*angle*](https://en.wikipedia.org/wiki/Angle) of a [*right angled triangle*](https://en.wikipedia.org/wiki/Right_triangle). These can be memorised using the acronym [*soh-cah-toa*](https://en.wikipedia.org/wiki/Mnemonics_in_trigonometry).
        
        ---
        
        ## Applying trigonometric ratios
        Now you may be wondering how these weird looking [*functions*](https://en.wikipedia.org/wiki/Function_(mathematics)) could possibly help us to find the sides of a [*triangle*](https://en.wikipedia.org/wiki/Triangle). Which is why I shall show you how. First, lets look at some simpler [*equations*](https://en.wikipedia.org/wiki/Equation).
        Now to put this into practice.
        To solve $\dfrac{x}{4} =2$, you would multiply both sides by 4 in order to get $x=8$. Now lets apply this logic to our [*triangles*](https://en.wikipedia.org/wiki/Triangle).

      `} />
      <img src={Tri1} className='trig-image' />
      <MathRenderer content={String.raw`
        Our given sides are the opposite(x, because its opposite the given angle 32) and the [*hypotenuse*](https://en.wikipedia.org/wiki/Hypotenuse) (4), therefore we use sine(sin) because $\sin(\theta)=\dfrac{opposite}{hypotenuse}$. Now sub in the values for $\theta$, the opposite side and the [*hypotenuse*](https://en.wikipedia.org/wiki/Hypotenuse) to get $\sin(32^\circ)=\dfrac{x}{4}$. Now just like we solved the previous [*equation*](https://en.wikipedia.org/wiki/Equation), we multiply both sides to obtain $x=4 \cdot \sin(32^\circ)$. Plugging into a calculator we get $x \approx 2.12$ ($\approx$ means they are almost equal, since we rounded)
        
        ---
        ### Now lets try some different examples.
      `} />
      <img src={Tri2}  />
      <MathRenderer content={String.raw`
        This time, we are given the adjacent side (x, because its right next to the angle 30 but is not the [*hypotenuse*](https://en.wikipedia.org/wiki/Hypotenuse)), and the [*hypotenuse*](https://en.wikipedia.org/wiki/Hypotenuse) (17). We must use [*cosine*](https://en.wikipedia.org/wiki/Sine_and_cosine) (cos), because $\cos(\theta)=\dfrac{adjacent}{hypotenuse}$. Sub our values for $\theta$, adjacent and [*hypotenuse*](https://en.wikipedia.org/wiki/Hypotenuse) in to get $\cos(30^\circ)=\dfrac{x}{17}$. Now multiply both sides by 17 to get $x= 17 \cdot \cos(30^\circ)$, which with a calculator approximately equals $14.72$
      `} />
      <img src={Tri3} />
      <MathRenderer content={String.raw`
        For this triangle, we use tangent(tan), $\tan(\theta)=\dfrac{opposite}{adjacent}$ as because we are given the opposite side to 33(f) and the adjacent side to 33(4.3). Now, sub in the values to obtain $\tan(33^\circ)=\dfrac{x}{4.3}$, then isolate x by multiplying both sides by 4.3 to get $x=4.3 \cdot \tan(33^\circ)$ or with a calculator $ x \approx 2.79$
      `} />
      <MathRenderer content={String.raw`
        ## How is this even useful in real life?
        Say you want to find the height of a tree, you know your angle of elevation from the top of where you're standing from the tree as well as how far you are standing away from it. Well we can use trigonometry to figure out how far we are away!
      `} />
      <img src={Tree} />
      <MathRenderer content={String.raw`
        Now try to solve for the height of the tree in the image (hint: identify your sides you have been given and use sohcahtoa to know which ratio you use!).
      `} />
      <MathRenderer content={String.raw`
        # Evil trig(inverse trig, aka finding angles)
        Remember our three trig ratios? If not, they're down below
        $$
        \sin(\theta)=\dfrac{opposite}{hypotenuse}
        \cos(\theta)=\dfrac{adjacent}{hypotenuse}
        \tan(\theta)=\dfrac{opposite}{adjacent}
        $$
        Well isolating for our angle $\theta$ using the inverse trig functions, we get
        $$
        \theta = \sin^{-1}(\dfrac{opposite}{hypotenuse}) , ~
        \theta = \cos^{-1}(\dfrac{adjacent}{hypotenuse}) , ~
        \theta = \tan^{-1}(\dfrac{opposite}{adjacent})
        $$
        Which we can use for finding the angle of a triangle when we know 2 sides (note that the -1 superscript does not mean to the power of -1 and is just notation for an inverse function that undoes the original function)
      `} />
      <img src={iTri1}></img>
      <MathRenderer content={String.raw`
        To find the value of $\theta$ in the above triangle, we use the inverse sine function as we know both the opposite(7) and the hypotenuse(10).
        Sub our values into the above equations to get $\theta=\sin^{-1}(\dfrac{7}{10})$
      `} />
    </>
  )
}

export function Calculus() {
  return (
    <>
      <h1>Introduction to basic calculus</h1>
      <MathRenderer content={String.raw`
        Calculus is a very complicated topic, and this page will only touch the tip of the iceberg. I will try my best to explain it the best as possible however there may be gaps in your knowledge.
        ## The derivative
        To find the slope of a linear function, we use the formula $m=\frac{y_2-y_1}{x_2-x_1}$, where $(x_1, y_1)$ and $(x_2, y_2)$ are points the function passes through. But what do we do if we have only one point and the function? Using the formula we get $m=\dfrac{y_1-y_1}{x_1-x_1}$ which is equal to $\dfrac{0}{0}.$
        This is famously undefined. To figure out how, we can take a small step in x, lets call it h. This makes our new x value($x_2$) $x+h$ and our correspending new y value($y_2$) $f(x+h)$
        `} />
      <img src={Derivative1} className='trig-image' />
      <MathRenderer content={String.raw`
        Using the previously afformentioned slope formula, we obtain the slope is equal to $\dfrac{f(x+h)-f(x)}{x+h-x}$, which simplifies to $\dfrac{f(x+h)-f(x)}{h}$
        To find the slope at the exact point x, consider how if we make h smaller and smaller the line becomes closer and closer then the line closes in and almost becomes the tangent line that we want.
        Using standard derivative notation(the slope function being $slope=f'(x)$), we can write this mathematically as $f'(x) = \lim_{h \to 0} \dfrac{f(x+h)-f(x)}{h}$. We can use this to find the slope or derivative of any function at a point.
        ## Examples of finding derivatives of functions
        To find the derivative of $f(x) = x^2$, lets use our newly found formula. Sub in $f(x)=x^2$ and $f(x+h)=(x+h)^2$ to get $f'(x) = \lim_{h \to 0} \dfrac{(x+h)^2-x^2}{h}$. Using the identity $(a+b)^2=a^2+2ab+b^2$, our new limit becomes $f'(x) = \lim_{h \to 0} \dfrac{x^2+2xh+h^2-x^2}{h}$, the $x^2$ terms in the numerator nicely cancel out, and we can factor out a h from the top. This gives us $f'(x) = \lim_{h \to 0} \dfrac{h(2x+h)}{h}$, the h in the numerator and denominator now cancel out because $\dfrac{h}{h}=1$ for non zero values of h, and we are finding what happens as h becomes close to 0 not equal to zero. After this, we just get the simple limit $f'(x) = \lim_{h \to 0} (2x+h)$. To consider what happens as h gets really tiny(close to 0), we simply plug in h=0 to get $f'(x)=2x+0$ or just $f'(x)=2x$. To find the slope at the point (2,4), sub in our x value of 2 to get $f'(2)= 2 \cdot 2$ or $f'(2) = 4$. Congrats, we have succesfully been able to find the slope of a function at a point!

        ## Derivative rules
        By doing some complex funky math and the binomial expansion theorem, we can find that for any power function $f(x)=x^n$, the derivative $f'(x)$ is equal to $nx^{n-1}$. Some examples include the derivative of $x^2$ being $2x$ (our previous example), the derivative of $x^3$ being $3x^2$, the derivative of $x^4$ being $4x^3$, and so on. We also have the derivative of a constant, $f(x)=c$, is simply equal to 0. This becomes intuitive when you realise this is because the value does not change. The derivative of some real number C multiplied by a function is also equal to the constant C multiplied by the derivative of the function, written as if $f(x)=C \cdot g(x)$ then $f'(x) = C \cdot g'(x)$.

        ## Alternate notations
        The mathematical operator for differentiating a function is simply $\dfrac{d}{dx}$. An alternate notation for the derivative $y=f(x)$ is $\dfrac{dy}{dx}$, meaning the derivative of y with respect to x. Combining these we get $\dfrac{d}{dx} f(x) = \dfrac{dy}{dx}$

        ## More advanced derivative rules
        By doing some more complex math with our definition of the derivative $f'(x) = \lim_{h \to 0} \dfrac{f(x+h)-f(x)}{h}$, we can find that $\dfrac{d}{dx}(f(x)g(x))=f(x)g'(x)+f'(x)g(x)$, this is known as the product rule. There is an arguably more important rule however known as the chain rule, used for finding the derivative of composite functions. It states $\dfrac{d}{dx}f(g(x))= f'(g(x)) \cdot g'(x)$,
        or with our alternative notation, $\dfrac{dy}{dx}= \dfrac{dy}{du} \cdot \dfrac{du}{dx}$(notice how it appears the du's cancel out in the numerator and denominator), where y and u are functions. By combining the product and chain rule together, we get our third derivative rule, known as the quotient rule which states $\dfrac{d}{dx}(\dfrac{f(x)}{g(x)})=\dfrac{f'(x)g(x)-f(x)g'(x)}{(g(x))^2}$

        ## Derivatives of non power functions
        Using the derivative definition we found earlier, we can find the derivatives of non numerous power functions, basic ones include the exponentials, $\dfrac{d}{dx}e^x= e^x$ (yes, the derivative is equal to itself) and $\dfrac{d}{dx}a^x=a^x \cdot \ln(a)$. Trigonometric functions include $\dfrac{d}{dx} \sin(x) = \cos(x)$, $\dfrac{d}{dx} \cos(x) = -\sin(x)$ and finally logarithmic which include $\dfrac{d}{dx} \ln(x)=\dfrac{1}{x}$ $\dfrac{d}{dx} \log_b(x)=\dfrac{1}{x\ln(b)}$.

        # Integrals(The opposite of derivatives)
        `} />




    </>
  )
}
