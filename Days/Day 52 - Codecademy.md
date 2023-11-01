# [11/1/2023, 17:08-18:13]
- **Today's Progress**: starting #React lessons via #Codecademy
- **Thoughts:** JSX is just JS mixed w/ HTML, thus far it looks fairly intuitive and i think codecademy's style of module will be conducive to my understanding of the concepts. 
---
- ### Why React?
	- React.js is a JavaScript library developed by engineers at Facebook. Here are just a few of the reasons why people choose to program with React:
		- React is _fast_.
			- Apps made in React can handle complex updates and still feel quick and responsive.
		- React is _modular_.
			- Instead of writing large, dense files of code, you can write many smaller, reusable files. React’s modularity can be a beautiful solution to JavaScript’s [maintainability problems](https://en.wikipedia.org/wiki/Spaghetti_code).
		- React is _scalable_.
			- Large programs that display a lot of changing data are where React performs best.
		- React is _flexible_.
			- You can use React for interesting projects that have nothing to do with making a web app. People are still figuring out React’s potential. [There’s room to explore](https://github.com/jiwonbest/amazing-react-projects).
		- React is _popular_.
			- While this reason has admittedly little to do with React’s quality, the truth is that understanding React will make you more employable.
			- If you are new to React, then this course is for you—no prior React knowledge is expected. We will start at the very beginning and move slowly. By the end, you will be ready to program in React with a real understanding of what you’re doing.

---
- # INTRO TO JSX
	- ### Hello World
- Take a look at the following line of code:
	- `const h1 = <h1>Hello world</h1>;`
		- What kind of weird hybrid code is that? Is it JavaScript? HTML? Or something else?
		- It seems like it must be JavaScript since it starts with `const` and ends with `;`.
			- If you tried to run that in an HTML file, it wouldn’t work.
			- However, the code also contains `<h1>Hello world</h1>`, which looks exactly like HTML.
				- _That_ part wouldn’t work if you tried to run it in a JavaScript file.
	- ## Concept Review
		- ### JSX className
			- In JSX, you can’t use the word `class`!
				- You have to use `className` instead.
					- This is because JSX gets translated into JavaScript, and `class` is a reserved word in JavaScript.
				- When JSX is rendered, JSX `className` attributes are automatically rendered as `class` attributes.
		- ### The Mystery, Revealed
			- Take another look at the line of code that you wrote. Does this code belong in a JavaScript file, an HTML file, or somewhere else?
				- The answer is… a JavaScript file! Despite what it looks like, your code doesn’t actually contain any HTML at all.
					- The part that looks like HTML, `<h1>Hello world</h1>`, is something called [_JSX_](https://www.codecademy.com/resources/docs/react/jsx).
		- ### What is JSX?
			- [_JSX_](https://www.codecademy.com/resources/docs/react/jsx) is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.
			- What does “syntax extension” mean?
				- ==In this case, it means that JSX is not valid JavaScript. Web browsers can’t read it!==
					- If a JavaScript file contains JSX code, then that file will have to be _compiled_.
						- This means that before the file reaches a web browser, a _JSX compiler_ will translate any JSX into regular JavaScript.
					- Codecademy’s servers already have a JSX compiler installed, so you don’t have to worry about that for now. Eventually we’ll walk through how to set up a JSX compiler on your personal computer.
	- ### JSX Elements
		- A basic unit of [JSX](https://www.codecademy.com/resources/docs/react/jsx) is called a JSX _element_.
			- Here’s an example of a JSX element:
				```
				<h1>Hello world</h1>
				```
				- This JSX element looks exactly like HTML! The only noticeable difference is that you would find it in a JavaScript file, instead of in an HTML file.
	- In **app.js**, write a JSX `<p>` element containing the text, `Hello world`. Use the example code above as a guide.
		- `const p = <p>Hello world</p>;`
	- ### JSX Elements And Their Surroundings
		- A basic unit of [JSX](https://www.codecademy.com/resources/docs/react/jsx) elements are treated as JavaScript _expressions_.
		- They can go anywhere that JavaScript expressions can go.
			- This means that a JSX element can be saved in a variable, passed to a function, stored in an object or array… you name it.
			- Here’s an example of a JSX element being saved in a variable:
				- `const navBar = <nav>I am a nav bar</nav>;`
			- Here’s an example of several JSX elements being stored in an object:
```
const myTeam = {
	center: <li>Benzo Walli</li>,
	powerForward: <li>Rasha Loa</li>,
	smallForward: <li>Tayshaun Dasmoto</li>,
	shootingGuard: <li>Colmar Cumberbatch</li>,
	pointGuard: <li>Femi Billon</li>
};
```
- Create a JSX `<article>` element. Save it in a variable named `myArticle`.
	- `const myArticle = <article></article>;`
- ### Attributes In JSX
	- A basic unit of [JSX](https://www.codecademy.com/resources/docs/react/jsx) elements can have _attributes_, just like how HTML elements can.
		- A JSX attribute is written using HTML-like syntax:
			- a _name_, followed by an equals sign, followed by a _value_.
				- The _value_ should be wrapped in quotes, like this:
					- `my-attribute-name="my-attribute-value"`


















































