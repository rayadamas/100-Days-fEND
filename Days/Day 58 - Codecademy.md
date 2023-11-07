# [11/7/2023, 12:08-13:19]
- **Today's Progress**: continuing w/ Animal Fun Facts proj. 
- **Thoughts:** reviewed all the code i walked through yesterday & pulled up the companion video to help isolate where my code's incorrect. it was ~15m into the session where i decided to paste app.js into #ChatGPT and ask what's wrong. i was told i was using an addition operator where it was calling for multiplication :/. simple. it also gave me a few other improvement that are above my competency rn. going to recreate the env in my repo.
	- ceasing at crafting a function component
	- multiple choice quiz tripped me up for moving a lil too fast but wasn't difficult.
	- i don't understand the methodology in coding lessons that'll dog-walk you in an exercise to do something simple, but not initially give you the simple thing. For example, i'm tasked w/ importing a library at the top of a file, simple. however, i've never done this in the module's eyes, yet it places the exact manner i need to import this library behind a 'hint'. idk i feel it breeds the notion that you're accessing something to help you complete the task. this could be pessimistic, and it could be designed like such to breed the notion that you need to be familiar w/ searching for your solution.
---
```
Animal Fun Facts

app.js

import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");

const root = createRoot(container);

const title = ""; //stores header content

const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

function displayFact(e) {
  const animal = e.target.alt;
  const index = Math.floor(Math.random() * animals[animal].facts.length);
  const funFact = animals[animal].facts[index];
  const p = document.getElementById("fact");
  p.innerHTML = funFact;
}

const images = [];
for (const animal in animals) {
  const image = (
    <img
      onClick={displayFact}
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
    />
  );

  images.push(image);
}

const showBack = true;
const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact!" : title}</h1>
    {showBack && background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

root.render(animalFacts);


animals.js

export const animals = {
  dolphin: {
    image: '/images/dolphin.jpg',
    facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
  },
  lobster: {
    image: '/images/lobster.jpg',
    facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
  },
  starfish: {
    image: '/images/starfish.jpg',
    facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
  }
};

index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main id="app">
  </main>
	<script src="https://content.codecademy.com/courses/React/react-18-course-bundle.min.js"></script>
  <script src="/app.compiled.js"></script>
</body>
</html>

```
==N==
- # quiz
	- What problem does the virtual DOM attempt to solve?
		- Updating the DOM is not time efficient.
			- 👏Correct! Manipulating the virtual DOM is much faster, because it finds out exactly which objects have changed, and only those objects get updated on the DOM.
	- Can a web browser read JSX directly?
		- No, JSX must be compiled before it can be read by a web browser.
			- 👏Correct! JSX is compiled to code read-able by a browser.
	- Given a React root called `root`, which will render `100` to the screen?
		- ```root.render(<h1>{10 * 10}</h1>);```
			- 👏That’s right! The expression wrapped in curly braces, `{10 * 10}`, will render as `100` in the browser.
	- What’s a difference between a DOM object and a virtual DOM object?
		- All presented answers are correct.
			- 👏Correct! The entire virtual DOM, without directly affecting any HTML, can be updated much more quickly than the regular DOM when a JSX element is rendered.
	- Which of the following statements correctly gets a reference to a DOM element with an `id` attribute of `app` and creates a React root from this element?
		- ```const container = document.getElementById('app');const root = createRoot(container);```
			- 👏Correct! The `document` object’s `getElementById()` method is used to get a reference to a DOM element with the specified id used as an argument and `createRoot` creates a React root at that element.
	- got it wrong, put `root.render(container)` at first
	- Fill in the code to render the following JSX.
	- ```const welcomeHeader = <h1>Hello world</h1>;```
```
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(welcomeHeader);
```
- What is the correct way to attach the function `yo` to a click event? ```let yo = () => {  alert('Yo');};```
	- ```<button onClick={yo}></button>```
		- 👏That’s right! The function `yo`, wrapped in curly braces because it is JavaScript, is set as the value of the `onClick` event handler.
- got it wrong, chose B C D E A initially
- Place the following steps in the right order:
	- a. Changes on the real DOM cause the screen to change.
	- b. A JSX element renders.
	- c. The virtual DOM is compared to what it looked like before it updated to figure out which objects have changed.
	- d. The entire virtual DOM gets updated.
	- e. The changed objects, and the changed objects only, get updated on the real DOM.
		- B D C E A
			- b. A JSX element renders.
			- d. The entire virtual DOM gets updated.
			- c. The virtual DOM is compared to what it looked like before it updated to figure out which objects have changed.
			- e. The changed objects, and the changed objects only, get updated on the real DOM.
			- a. Changes on the real DOM cause the screen to change.
- What’s wrong with this code?
- ```let skateboardDog = (  <img src="alfie.jpg" />  <h1>Hiya kids!  I'm a dog on a skateboard.</h1>);```
	- JSX expressions need an outermost element.
		- 👏Correct! This expression is wrong because it has two outermost elements.
==N==
- ### #React_Components
	- React applications are made of **components.**
		- What’s a component?
			- A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML and re-render it when some data changes.
				- Take a look at the code below. This code will create and render a new React component:
```
import React from 'react';
import ReactDOM from 'react-dom/client';

function MyComponent() {
  return <h1>Hello world</h1>;
}

ReactDOM.createRoot(
document.getElementById('app')
).render(<MyComponent />);
```
- hate looking at multi-line #React fr. the arg in that createRoot call after accessing the ID is an HTML h1 element, looks so weird. 
	- ### Question
		- In the context of this [lesson 153](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-101-react-components-u/lessons/your-first-react-component/exercises/hello-world-component), can we declare multiple components in a single file?
			- ### Answer
				- Yes, you can declare multiple components within a single file. For example, there can be a file containing the following components,
		- Choosing to have multiple components in a file or only one component per file can be up to preference. However, keeping classes in separate files can be preferred for the sake of organization.
```
class Class1 extends React.Component {
  render() { ... }  
};

class Class2 extends React.Component {
  render() { ... }  
};
```
==N==
- ### Import React
	- The first React component we created in the last exercise started with importing `react`.
		- The line that did this is:
```
import React from 'react';
```
- This creates an object named `React`, which contains methods necessary to use the React library.
	- `React` is imported from the `'react'` package, which should be installed in your project as a dependency.
		- With the object, we can start utilizing features of the `react` library!
- By importing the library, we can use important features such as [Hooks](https://www.codecademy.com/resources/docs/react/hooks), which we’ll explore in detail later.
	- For the next few exercises, we’ll be working in two files: **App.js** and **index.js**.
		- In a React application, the **App.js** file typically is the top level of your application, and **index.js** is the entry point
- #### quiz
1. In line 1 of **App.js**, use `import` to import the React library.
	- Save the library in a variable named `React`.
2. **index.js** also needs React.
	- In line 1 of **index.js**, use `import` to import the React library. Save the library in a variable named `React`.
```
App.js

import React from 'react';
```
```
index,js

import React from 'react';
```
- ### Question
	- In the context of this [exercise 42](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-101-react-components-u/lessons/your-first-react-component/exercises/import-react), can you import multiple objects from a library at once?
		- ### Answer
			- Yes, you can do this using “unpacking” when importing from a library.
				- For example, say that you wanted to import multiple functions from some library, you could do so as follows,
					- `import { functionA, functionB, functionC } from 'library';`
				- Another, more concrete, example is importing objects from the ‘react-router’ library.
					- `import { Router, Switch } from 'react-router';`

==N==
- ### Import ReactDOM
	- Another import we need in addition to React is **ReactDOM**:
		- `import ReactDOM from 'react-dom/client';`
			- The methods imported from `'react-dom'` interact with the DOM.
- ==The methods imported from `'react'` do not deal with the DOM at all.==
	- ==They don’t engage directly with anything that isn’t part of React.==
- To clarify:
	- the #DoM is _used_ in React applications, but it isn’t _part_ of React.
		- After all, the DOM is also used in countless non-React applications.
			- Methods imported from `'react'` are only for pure React purposes, such as creating components or writing [JSX](https://www.codecademy.com/resources/docs/react/jsx) elements.
- #### quiz
1. Although we imported React in both **App.js** and **index.js** in the previous exercise, we will only import ReactDOM in **index.js**.
	- ReactDOM deals with DOM-specific methods that should be used in **index.js**, which is the entry point of our application.
		- In **index.js**, import the `ReactDOM` library on line 2. Store the result in a variable named `ReactDOM`.
```
index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
```
- ### Question
	- In the context of this [exercise 50](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-101-react-components-u/lessons/your-first-react-component/exercises/import-reactdom), is the ReactDOM `render()` method the same as the component `render()` method?
		- ### Answer
			- No, although they have the same name, they are not the same.
				- The `ReactDOM.render()` method is used to render a React element into the DOM within the specified container, and returns a reference to that component in the following way:
```
ReactDOM.render(
  <MyClass />, 
  document.getElementById('app')
);
```
- On the other hand, the React component `render()` method returns the elements that make up the component. For instance,
```
class MyClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
```



































