# [11/8/2023, 12:30-13:36]
- **Today's Progress**: beginning module on creating a function component
- **Thoughts:** #PascalCase is def new but yet another little itty bitty syntax characteristic that can trip you up. this is filling in my knowledge gap when people would say they're using hooks/components. i've been instructed to use components in [[web3]] bootcamps but this is more of a formal introduction. 
---
- ## YOUR FIRST REACT COMPONENT
	- ### Create a Function Component
		- You’ve learned that a _React component_ is a small, reusable chunk of code that is responsible for one job, which often involves rendering HTML and re-rendering it whenever some data changes.
		- It’s useful to think of components as smaller pieces of our interface.
			- Combined, they are the building blocks that make up a React application.
			- In a website, we can create a component for the search bar, another component for the navigation bar, and another component for the dashboard content itself.
		- Here’s another fact about components:
			- we can use JavaScript functions to define a new React component.
				- This is called a **function component**.
					- In the past, React components were defined using Javascript classes.
					- But since the introduction of [Hooks](https://www.codecademy.com/resources/docs/react/hooks) (something we’ll discuss later), function components have become the standard in modern React applications.
				- After we define our functional component, we can use it to create as many instances of that component as we want.
		- Let’s take a look at the example from the first exercise:
```
import React from 'react';

function MyComponent() {
  return <h1>Hello, I'm a functional React Component!</h1>;
}

export default MyComponent;
```
- On the third line, a function is defined with the name `MyComponent`.
	- Inside, the function returns a React element in [JSX](https://www.codecademy.com/resources/docs/react/jsx) syntax:
```
return <h1>Hello, I'm a functional React Component!</h1>;
- Combined, this makes a basic React functional component.
	- On the last line of the above code block, `MyComponent` is exported so it can be used later.
```
- #### quiz
	- 1. In line 4 of **App.js**, declare a new _function component_. You can call this whatever you’d like.
		- Don’t put anything between the curly braces just yet!
```
import React from 'react';

// Declare a new function component
function MyJadedComponent() {// i was listening to Drake
  
}
```
- ### Question
	- In the context of this [exercise 32](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-101-react-components-u/lessons/your-first-react-component/exercises/component-class), what else does the `React.Component` class provide?
		- ### Answer
			- The `React.Component` class provides several methods in addition to `render()`, some of which are automatically invoked through the lifecycle of the component.
				- The `constructor()` method is invoked by the component before it is added to the #DoM.
					- This is usually used to run code to set up the component such as initializing some state and binding methods to the component.
				- The class also provides a `componentDidMount()` method which is run right after the component is inserted into the DOM tree, and is invoked only one time.
				- Another method is `componentDidUpdate()`, which runs immediately after any updates to the component occurs.
					- This is typically used for code such as network requests which should be run if any updates occur to the component.

==N==
- ### Name a Functional Component
	- Creating a JavaScript function is the way to declare a new _functional component_.
		- When you declare a new functional component, you need to give that component a _name._
			- On our finished component, our component’s name was `MyComponent`:
```
function MyComponent() {
  return <h1>Hello world</h1>;
}
```
- ## Function component names must start with capitalization and are conventionally created with #PascalCase!
	- Due to how [JSX](https://www.codecademy.com/resources/docs/react/jsx) tags are compiled, capitalization indicates that it is a React component rather than an #HTML tag.
		- ==This is a React-specific nuance!==
			- If you are creating a component, be sure to name it starting with a capital letter so it interprets it as a React component.
				- If it begins with a lowercase letter, React will begin looking for a built-in component such as `div` and `input` instead and fail.
- ### quiz
	- 1. Edit the code so that the functional component is named `MyComponent` with a capitalized first letter and follows the Pascal case naming convention.
```
import React from 'react';

// Declare a new function component
function MyComponent() {

}
```
==N==
- ### Function Component Instructions
	- Let’s review what you’ve learned so far! Find each of these points in **App.js** and **index.js**:
		- On line 1 of **App.js** and **index.js**, `import React from 'react'` creates a JavaScript object.
			- This object contains properties that are needed to make React work, such as `React.createElement()`.
```
app.js

import React from 'react';

function MyComponent() {
  return <h1>Hello, this is a function component body.</h1>;
}
```
- On line 2 of **index.js** `import ReactDOM from 'react-dom/client'` creates another JavaScript object.
	- This object contains methods that help React interact with the DOM, such as `ReactDOM.createRoot()`.
```
index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
```
- On line 3 of **App.js**, by writing a JavaScript function, a function component was defined.
	- We can’t see this component quite yet, as it’s more of a factory that produces instances of itself when used.
		- If we want to see it, we need to render it into the DOM.
			- Whenever you create a function component, you need to give that function component a name.
				- That name should be written in Pascal case like this: UpperCamelCase.
- Something that we _haven’t_ talked about yet is the _body_ of your function component:
	- the pair of curly braces after the function definition and all of the code between those curly braces.
		- Like all JavaScript functions, this one needs a body.
		- The body will act as a set of instructions, explaining to your function component how it should build a React component.
			- Here’s what your function body would look like on its own, without the rest of the function declaration syntax.
				- Find it in **App.js**:
```
return <h1>Hello, this is a function component body.</h1>;
```
- That doesn’t look like a set of instructions explaining how to build a React component!
	- Yet that’s exactly what it is.
		- Click Next, and we’ll go into how these instructions work.
==N==
- ### The Return Keyword in Functional Components
	- When we define a functional component, we essentially define a factory that can build the appropriate combination of elements every time we reference its name.
		- It builds it by consulting a set of instructions that you must provide.
	- If you’re thinking, “That sounds just like what a regular Javascript function is for”, then you’re right!
		- Functional components can be thought of in a very similar vein to regular Javascript functions, except that their job is to assemble a portion of the interface based on instructions given!
	- Let’s talk a bit more about these instructions.
		- For starters, these instructions should take the form of a function declaration body.
			- That means that they will be delimited by curly braces, like this:
```
function Button() {
  // Instructions go here, between the curly braces.
}
```
- Our instructions can include a combination of markup, CSS, and JavaScript to produce the desired result.
	- ==The one thing we must always include is a **return** statement.==
		- The function is expected to produce [JSX](https://www.codecademy.com/resources/docs/react/jsx) code that can be used to render something onto the browser screen.
			- Thus, when we define functional components, we must return a JSX element.
```
function BackButton() {
 return <button>Back To Home</button>;
}
```
- Of course, this doesn’t quite make `<button>Back To Home</button>` render onto the browser screen yet. We’ve only defined our component.
	- Let’s keep going so we can see how to render it and why the return statement was necessary!
- #### quiz
	- 1. Time to complete the component we’ve been working on.
		- In the body of your component definition, write `return`.
	- 2. Now let’s fill out that line.
		- Have the `return` statement return the JSX expression `<h1>Hello world</h1>`.
```
import React from 'react';

function MyComponent() {
  return <h1>Hello world</h1>;
}
```

























