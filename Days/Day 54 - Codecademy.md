# [11/3/2023, 20:12-21:12]
- **Today's Progress**: continuing #React course w/ React being referred to as the *virtual* #DoM. stopping at lesson 6/16 in *Advanced* #JSX. 
- **Thoughts:** using React is a manner of improving code performance in a sense by subverting what most #Javascript frameworks are inclined to do, that which is inefficient.
	- the syntax for self-closing tags threw me but i got it now
	- "markup that is based on our logic", interesting concept
	- codecademy's really dog walking me through these concepts, it's clicking
---
# React: The Virtual DOM
- ## The Problem
	- DOM manipulation is the heart of the modern, interactive web.
		- Unfortunately, it is also a lot slower than most JavaScript operations.
			- This slowness is made worse by the fact that **most JavaScript frameworks update the DOM much more than they have to.**
	- As an example, let’s say that you have a list that contains ten items.
		- You check off the first item.
		- Most JavaScript frameworks would rebuild _the entire list_.
			- That’s ten times more work than necessary!
			- Only one item changed, but the remaining nine get rebuilt exactly how they were before.
		- Rebuilding a list is no big deal to a web browser, but modern websites can use huge amounts of DOM manipulation.
		- Inefficient updating has become a serious problem.
			- To address this problem, the people at React popularized something called the _virtual DOM._
- ## The Virtual DOM
	- Here is a refresher of what happens behind the scenes in **[The Virtual DOM](https://www.youtube.com/watch?v=jwRAdGLUarw)**.
		- In React, for every [DOM object](http://eloquentjavascript.net/13_dom.html), there is a corresponding “virtual DOM object.”
		- A virtual DOM object is a _representation_ of a DOM object, like a lightweight copy.
			- A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen.
				- Manipulating the DOM
					- Manipulating the DOM is slow.
						- Manipulating the virtual DOM is much faster because nothing gets drawn onscreen.
							- Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.
- ## How It Helps
	- When you render a JSX element, every single virtual DOM object gets updated.
	- This sounds incredibly inefficient, but the cost is insignificant because the virtual DOM can update so quickly.
		- Once the virtual DOM has been updated, then React compares the virtual DOM with a virtual DOM _snapshot_ that was taken right before the update.
			- By comparing the new virtual DOM with a pre-update version, React figures out _exactly which virtual DOM objects have changed._
				- This process is called “diffing.”
			- Once React knows which virtual DOM objects have changed, then React updates those objects, _and only those objects,_ on the real DOM.
				- In our example from earlier, React would be smart enough to rebuild your one checked-off list-item and leave the rest of your list alone.
	- This makes a big difference! React can update only the necessary parts of the DOM. React’s reputation for performance comes largely from this innovation.
- In summary, here’s what happens when you try to update the DOM in React:
	1. The entire virtual DOM gets updated.
	2. The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.
	3. The changed objects, and the changed objects only, get updated on the _real_ DOM.
	4. Changes on the real DOM cause the screen to change.
==N==
- # ADVANCED JSX
	- ### class vs className
		- This lesson will cover more advanced [JSX](https://www.codecademy.com/resources/docs/react/jsx). You’ll learn some powerful tricks and some common errors to avoid.
			- Grammar in JSX is mostly the same as in HTML, but there are subtle differences to watch out for.
			- The most frequent of these involves the word `class`.
				- In HTML, it’s common to use `class` as an attribute name:
```
<h1 class="big">Title</h1>
```
- ### In JSX, you can’t use the word `class`! You have to use `className` instead:
	- ```<h1 className="big">Title</h1>```
		- This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.
			- When JSX is rendered, JSX className attributes are automatically rendered as class attributes.
- ### quiz
	- 1. On line 7, declare a new constant named `myDiv`. Set `myDiv` equal to a JSX `<div>` element.
		- In between the `<div></div>` tags, write the text `I AM A BIG DIV`.
			- Give your `<div>` element the following attribute:
```
className="big"
```
2. Underneath your `<div>` element, call `root.render()` with `myDiv` as an argument.
	- If your rendered `<div>` element has a _class_ of `"big"`, then it should look big in the browser!
```
import React from 'react';
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
const myDiv = <div className="big">I AM A BIG DIV</div>;
root.render(myDiv);
```
==N==
- ### Self-Closing Tags
	- Another common JSX error involves _self-closing tags_.
		- What’s a self-closing tag?
			- Most HTML elements use two tags:
				- an _opening tag_ (`<div>`),
				- and a _closing tag_ (`</div>`).
					- However, some HTML elements such as `<img>` and `<input>` use only one tag.
		- The tag that belongs to a single-tag element isn’t an opening tag or a closing tag; it’s a _self-closing tag._
			- When you write a self-closing tag in HTML, it is _optional_ to include a forward slash immediately before the final angle bracket:
```
// Fine in HTML with a slash:
<br />
// Also fine, without the slash:
<br>
```
- ==But, in JSX, you _have to_ include the slash.==
	- If you write a self-closing tag in JSX and forget the slash, you will raise an error:
```
// Fine in JSX:
<br />
// NOT FINE AT ALL in JSX:
<br>
```
- ### quiz
	- 1. In **app.js**, fix the broken JSX by adding slashes to all of the self-closing tags.
```
Before
const profile = (
  <div>
    <h1>John Smith</h1>
    <img src="images/john.png">
    <article>
      My name is John Smith.
      <br>
      I am a software developer.
      <br>
      I specialize in creating React applications.
    </article>
  </div>
);

Fix
const profile = (
  <div>
    <h1>John Smith</h1>
    <img src="images/john.png" />
    <article>
      My name is John Smith.
      <br />
      I am a software developer.
      <br />
      I specialize in creating React applications.
    </article>
  </div>
);
```
==N==
- ### JavaScript In Your JSX In Your JavaScript
	- In this lesson, we’re going to add something new: regular JavaScript, written inside of a JSX expression, written inside of a JavaScript file.
- #### quiz
	- 1. Starting on line 7, carefully write the following code.
```
root.render(<h1>2 + 3</h1>);
```
- What do you think will appear in the browser?
```
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
root.render(<h1>2 + 3</h1>);
```
- ## Question
	- Why would we want to put JavaScript in our JSX?
		- ## Answer
			- We want to use JavaScript in our JSX to render logic!
				- When we inject JS into JSX we can make this process of rendering logic (based on things like data, events, and data changing over time) more seamless by putting our markup, the HTML part of JSX, that is based on our logic, the JS part of JSX, together in the same file.
==N==
- ### Curly Braces in JSX
	- The code in the last exercise didn’t behave as one might expect.
		- Instead of adding 2 and 3, it printed out “2 + 3” as a string of text. Why?
			- This happened because `2 + 3` is located in between `<h1>` and `</h1>` tags.
				- Any code in between the tags of a JSX element will be read as JSX, not as regular JavaScript!
		- JSX doesn’t add numbers—it reads them as text, just like HTML.
			- You need a way to write code that says,
				- “Even though I am located in between JSX tags, treat me like ordinary JavaScript and not like JSX.”
- You can do this by wrapping your code in _curly braces_.
- #### quiz
	- 1. Add a pair of curly braces to the code from the last exercise so that your JSX expression looks like this:
```
<h1>{2 + 3}</h1>
```
- Everything inside of the curly braces will be treated as regular JavaScript.
```
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
root.render(<h1>{2 + 3}</h1>);
```
- ## Question
	- Am I always going to use curly braces to write JavaScript inside of JSX?
		- ## Answer
			- Yes! If we want any expression to be treated as JavaScript inside of a JSX element we need to wrap it in curly braces.
				- Even when we assign a JavaScript expression to a variable and want to use that variable inside JSX, the variable name needs to be wrapped in curly braces.
- Example:
```
**app.js**:
import React from 'react';
import ReactDOM from 'react-dom';

let myVar = 'hello!';

const myJsxElement = <h1>myVar value is {myVar}</h1>; // `myVar` without curly braces will render as `myVar` in the browser, while `{myVar}` will render as `hello!` in the browser 

ReactDOM.render(
        myJsxElement,
        document.getElementById('app')
);
```
==N==
- ### 20 Digits of Pi in JSX
	- You can now inject regular JavaScript into JSX expressions! This will be extremely useful.
		- In the code editor, you can see a JSX expression that displays the first twenty digits of pi.
			- Study the expression and notice the following:
				- The code is written in a JavaScript file. By default, it will all be treated as regular JavaScript.
				- Find `<div>` on line 5. From there, up through `</div>`, the code will be treated as JSX.
				- Find `Math`. From there, up through `(20)`, the code will be treated as regular JavaScript again.
				- The curly braces themselves won’t be treated as JSX or as JavaScript.
					- They are _markers_ that signal the beginning and end of a JavaScript injection into JSX, similar to the quotation marks that signal the boundaries of a string.
- #### quiz
	- Declare a new variable named `math`. Set `math` equal to a JSX `<h1>` element.
		- Put the following expression inside of the `<h1>`:
```
2 + 3 = 2 + 3
```
- At the bottom of the file, call `root.render()`.
	- For `root.render()`‘s argument, pass in `math`.
		- As you probably expected, the equation was displayed as a string.
			- Insert a pair of curly braces inside the `<h1></h1>` tags, so that the browser displays `2 + 3 = 5`.
```
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
let math = <h1>2 + 3 = {2 + 3}</h1>;

root.render(math);
```
- ## Question
	- Can I inject other programming languages besides JavaScript into JSX?
		- ## Answer
			- No, we cannot inject other programming languages other than JavaScript into JSX.





























