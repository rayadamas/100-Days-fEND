# [11/2/2023, 16:25-17:33]
- **Today's Progress**: continuing #React course via #Codecademy 
- **Thoughts:** left off yesterday at `Attributes in JSX`
	- JSX elements w/ attributes look crazy to me rn. 
	- how it's explaining outer elements in context to nesting them is confusing, i understand that you can't nest a 'p' within a 'p', but it's not saying that verbatim. 
	- had to switch to Safari cuz #ArcBrowser ironically wasn't rendering all of the text. 
		- working properly on reload? idk. i think it's because the connection to the live code window dies out and needs to be reestablished?
	- finished intro module which introduced me to some funky looking syntax but the principles make sense. 
---
# prev notes ![[Day 52 - Codecademy#^898689]]
- Here are some JSX elements with _attributes_:
```
<a href='http://www.example.com'>Welcome to the Web</a>;

const title = <h1 id='title'>Introduction to React.js: Part I</h1>; 
```
- A single JSX element can have many attributes, just like in HTML:
```
const panda = <img src='images/panda.jpg' alt='panda' width='500px' height='500px'>;
```
1. Declare a constant named `p1`.
	- Set `p1` equal to a JSX `<p>` element containing the text `foo`.
2. On the next line, declare a constant named p2.
	- Set p2 equal to another JSX `<p>` element containing the word bar.
3. Give the `<p>` stored in p1 an id attribute of 'large'.
	- Give the `<p>` stored in p2 an id attribute of 'small'.
```
const p1 = <p id='large'>foo</p>;

const p2 = <p id='small'>bar</p>;
```
==N==
- ### Nested JSX
	- You can _nest_ JSX elements inside of other JSX elements, just like in HTML.
		- Here’s an example of a JSX `<h1>` element, _nested_ inside of a JSX `<a>` element:
```
<a href="https://www.example.com"><h1>Click me!</h1></a>

- To make this more readable, you can use HTML-style line breaks and indentation:

<a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a>
```
- ### ==If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses.==
	- This looks strange at first, but you get used to it:
```
(
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
)
```
- *Nested* JSX expressions can be saved as variables, passed to functions, etc., just like non-nested JSX expressions can!
	- Here’s an example of a _nested_ JSX expression being saved as a variable:
```
const theExample = (
   <a href="https://www.example.com">
     <h1>
       Click me!
     </h1>
   </a>
 );
```
- ## quiz
1. Declare a new variable named `myDiv`. Set `myDiv` equal to a JSX `<div>` element.
	- Wrap the `<div></div>` in parentheses, and use indentation and line breaks like in the examples.
	- In between the `<div></div>` tags, _nest_ an `<h1></h1>` containing the text `Hello world`.
```
const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>
);
```
- ### JSX Outer Elements
	- ==In order for the code to compile, a JSX expression must have exactly one outermost element.==
		- **Good Code**
```
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);
```
- **Bad Code**
```
const paragraphs = (
  <p>I am a paragraph.</p> 
  <p>I, too, am a paragraph.</p>
);
```
- The _first opening tag_ and the _final closing tag_ of a JSX expression must belong to the same JSX element!
- ## quiz
1. Your friend’s blog is down! He’s asked you to fix it. You immediately diagnose the problem: a JSX expression with multiple outer elements. Repair your friend’s broken code by wrapping the JSX in a `<div>` element.
```
Bad Code
const blog = (
  <img src="pics/192940u73.jpg" />
  <h1>
    Welcome to Dan's Blog!
  </h1>
  <article>
    Wow I had the tastiest sandwich today. I <strong>literally</strong> almost freaked out.
  </article>
);

Correct Code
const blog = (
  <div>
    <img src="pics/192940u73.jpg" />
    <h1>Welcome to Dan's Blog!</h1>
    <article>
      Wow I had the tastiest sandwich today. I <strong>literally</strong> almost
      freaked out.
    </article>
  </div>
);
```
==N==
- ### Rendering JSX
	- You’ve learned how to write [JSX](https://www.codecademy.com/resources/docs/react/jsx) elements! Now it’s time to learn how to _render_ them. 
	- To _render_ a JSX expression means to make it appear on screen.
- The following code will render a JSX expression:
```
const container = document.getElementById('app');

const root = createRoot(container);

root.render(<h1>Hello world</h1>);

- Starting on line 5, carefully copy the above code into the code editor. We’ll go over how it works in the next exercise.

import React from 'react';
import { createRoot } from 'react-dom/client';

// Copy code here:
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Hello world</h1>);
```
- ### Rendering JSX Explained
	- #React relies on two things to render:
		- what content to render
		- where to place the content.
- With that in mind, let’s look at the first line:
```
const container = document.getElementById('app')
```
- This line:
	- Uses [the `document` object](https://developer.mozilla.org/en-US/docs/Web/API/Document) which represents our web page.
	- Uses the `getElementById()` method of `document` to get [the `Element` object](https://developer.mozilla.org/en-US/docs/Web/API/Element) representing the HTML element with the passed in id (`app`).
	- Stores the element in `container`.
		- In the next line:
			- `const root = createRoot(container)`
			- we use `createRoot()` from the `react-dom/client` library, which creates a React root from `container` and stores it in `root`.
				- `root` can be used to render a JSX expression.
					- This is the “where to place the content” part of React rendering.
		- Finally, the last line:
			- `root.render(<h1>Hello world</h1>)`
			- uses the `render()` method of `root` to render the content passed in as an argument.
				- Here we pass an `<h1>` element, which displays `Hello world`.
					- This is the “what content to render” part of React rendering.
- ## quiz
1. Below the import statements, define a constant called `container` and set its values equal to the expression below:
```
document.getElementById('container');
```
2. Next, define a constant called `root` and set its value equal to the expression below:
```
createRoot(container);
```
3. Finally, paste the following expression to render some content:
```
root.render(<h1>Hello world</h1>);
```
```
import React from 'react';
import { createRoot } from 'react-dom/client';

// Write code here:
const container = document.getElementById('container');

const root = createRoot(container);
root.render(<h1>Hello world</h1>);
```
==N==
- ### Passing a Variable to render()
	- In the previous exercise, we saw how we can create a React root using `createRoot()` and use its `render()` method to render [JSX](https://www.codecademy.com/resources/docs/react/jsx).
		- The `render()` method’s argument doesn’t need to be JSX, but it should _evaluate_ to a JSX expression.
		- The argument could also be a variable, so long as that variable evaluates to a JSX expression.
	- In this example, we save a JSX expression as a _variable_ named `toDoList`.
		- We then pass `toDoList` as the argument of `render()`:
```
const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(toDoList);
```
- ## quiz
1. On line 7, declare a variable named `myList`.
	- Set `myList` equal to a JSX `<ul>` element.
	- Wrap your `<ul></ul>` tags in parentheses.
	- Add several `<li>` elements in between your `<ul></ul>` tags.
	- Put some text in each `<li></li>` tags.
		- Use line breaks and indentations similar to the above example.
2. At the bottom of the file, use `root` and call its `render()` method with `myList` as an argument.
```
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
const myList = (
  <ul>
    <li>wake up</li>
    <li>rock out</li>
  </ul>
  );

  root.render(myList);
```
==N==
- ### The Virtual DOM
	- One special thing about a React root’s `render()` method is that it ==_only updates DOM elements that have changed_.==
		- That means that if you render the exact same thing twice in a row, ==the second render will do nothing:==
```
const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:
root.render(hello, document.getElementById('app'));

// This won't do anything at all:
root.render(hello, document.getElementById('app'));
```
- Only updating the necessary DOM elements is a large part of what makes React so successful.
	- This is accomplished using React’s *virtual* #DoM.
==N==
- ### Review
	- Congratulations! You’ve learned to create and render [JSX](https://www.codecademy.com/resources/docs/react/jsx) elements! This is the first step toward becoming fluent in React.
		- In this lesson, we learned that:
			- React is a modular, scalable, flexible, and popular front-end framework.
				- #JSX is a **syntax extension** for #JavaScript which allows us to treat #HTML as expressions.
					- They can be stored in variables, objects, arrays, and more!
						- JSX elements can have attributes and be nested within each other, just like in HTML.
						- JSX must have exactly one outer element, and other elements can be nested inside.
				- `createRoot()` from `react-dom/client` can be used to create a React root at the specified DOM element.
					- A React root’s `render()` method can be used to render JSX on the screen.
					- A React root’s `render()` method only updates DOM elements that have changed using the virtual DOM.












