# [11/9/2023, 13:45-14:51]
- **Today's Progress**: continuing w/ my 1st #React_Components w/ importing/exporting
- **Thoughts:** putting JSX in args is toughhh cuz it's so unconventional in my head to put #HTML syntax there of all places. in review i highlighted what i struggled with. 
	- nothing was rendering after i made `NewComponent` in `apps.js` in that post-review quiz, it was because I forgot the `return` keyword. i was processing the definition in my head but forgetting the syntax itself smh.
	- completed the Advanced JSX module. Next is COMPONENTS AND ADVANCED JSX. imma read but ion want the notes to be fractured so i'll save it for tomorrow. 
---
- ### Importing and Exporting React Components
	- There’s a little bit more work we have to do before we can use our defined component and have it rendered onto the #DoM.
		- We previously mentioned that a React application typically has two core files: **App.js** and **index.js**. **App.js** file is the top level of your application, and **index.js** is the entry point.
			- So far, we’ve defined the component inside of **App.js**, but because **index.js** is the entry point, we have to export it to **index.js** to render.
	- #React_Components are great because they are reusable.
		- We can keep our component pieces separated, organized, and reusable by putting them into separate files and exporting them to where we need them.
			- To export them, we can prefix it with the `export` declaration and specify if it is a default or named export.
			- In this case, we’ll stick with `default`. If you need a refresher on `export`, peruse the [MDN web docs](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export).
				- #### export
					- The **`export`** declaration is used to export values from a JavaScript module.
						- Exported values can then be imported into other programs with the [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) declaration or [dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import).
							- The value of an imported binding is subject to change in the module that exports it — when a module updates the value of a binding that it exports, the update will be visible in its imported value.
								- In order to use the `export` declaration in a source file, the file must be interpreted by the runtime as a [module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).
									- In HTML, this is done by adding `type="module"` to the [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) tag, or by being imported by another module. Modules are automatically interpreted in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode).
	- After the function component definition, in **App.js**, we can default export our component like so:
```
export default MyComponent;
```
- We can head into our **index.js** file to import our component from `'./App'`:
```
import MyComponent from './App';
```
- This will allow us to use `MyComponent` in **index.js**.
- ##### quiz
	1. In **App.js**, export your function component.
	2. In **index.js**, import your function component at the top with the variable name `MyComponent`.
```
App.js

import React from 'react';

function MyComponent() {
  return <h1>Hello world</h1>;
}

export default MyComponent;

index,js

import React from 'react';
import ReactDOM from 'react-dom/client';

import MyComponent from './App';
```
==N==
- ### Using and Rendering a Component
	- Now that we have a defined function component, we can start using it.
		- We can use it with an HTML-like syntax that resembles a self-closing tag:
```
<MyComponent />
```
- If you need to nest other components in between, you may also use an opening and corresponding closing tag structure:
```
<MyComponent>  <OtherComponent /></MyComponent>
```
- However, to render our component to the browser, we must rely on the `.createRoot()` and `.render()` methods from the `react-dom` library.
	- This should be done in our entry point, **index.js**.
		- First, we call the `createRoot` method to create a React root container for displaying content. React applications typically have a single root DOM node, and everything inside it is managed by React DOM.
			- In other words, we give `createRoot` a DOM element to render in, and React will take over managing the DOM inside it.
				- Here’s an example:
```
ReactDOM.createRoot(document.getElementById('app'));
```
- Let’s break it down a bit further:
	- `document.getElementById('app')` returns a DOM element from **index.html**.
		- (an ID of 'app' inside of a `main` tag, within a `body` tag)
			- `.createRoot()` receives the DOM element as the first argument and creates a root for it.
				- `.createRoot()` returns a reference to the root container on which you can call methods like `.render()`.
	- After the root is created, all that’s left to do is call the `.render()` method on the returned root and display the React component like so:
```
ReactDOM.createRoot(document.getElementById('app')).render(<MyComponent />);
```
- From here, React will display `<MyComponent />` in the root and make it appear on the screen.
	- In an application fully built with React, you will only need to do this once.
		- Once this is set up, React will manage the DOM of your application, and any updates to the UI is taken care of efficiently.
		- Adding more components should take place in your top-level **App.js** file.
	- #### quiz
1. It’s time to practice rendering your own component.
	- To start, tell React where to render components by specifying a DOM element as the root element for your app.
		- Open up **index.js** and begin by calling `.createRoot()` to create a React root to display your content in the `<main>` element with the id of `app`.
2. Now that you have the root, it’s time to call `.render()` on it and display the React component.
	- In **index.js**, use `.render()` and pass in the `MyComponent` component.
		- Click Run to test out your code. The world waves hello back!
```
index.js

import React from 'react';
import ReactDOM from 'react-dom/client';

import MyComponent from './App';

ReactDOM.createRoot(document.getElementById('app')).render(<MyComponent/>);

app.js

import React from 'react';

function MyComponent() {
  return <h1>Hello world</h1>;
}

export default MyComponent;

index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <main id="app">
  </main>
	<script src="https://content.codecademy.com/courses/React/react-18-course-bundle.min.js"></script>
  <script src="/index.compiled.js"></script>
</body>
</html>

```
==N==
- ### Review
	- In this lesson, you’ve learned about a foundational React concept: #React_Components 
		- Before you go, here’s a recap:
			- React applications are made up of **components**.
				- Components are responsible for rendering pieces of the user interface.
					- To create components and render them, `react` and `reactDOM` must be imported.
						- React components can be defined with Javascript functions to make **function components**.
							- ==Function component names must start with a capitalized letter, and #PascalCase is the adopted naming convention.==
								- Function components must return some React elements in [JSX](https://www.codecademy.com/resources/docs/react/jsx) syntax.
									- React components can be exported and imported from file to file.
										- ==A React component can be used by calling the component name in an HTML-like self-closing tag syntax.==
											- Rendering a React component requires using `.createRoot()` to specify a root container and calling the `.render()` method on it.
- #### quiz
1. If you would like to practice your learned skills, consider these challenges:
	- Create a new JavaScript file in the file directory. Inside, define a new function component and export it.
	- Modify the existing code to render the newly defined component to the browser screen.
```
index.js

import React from 'react';
import ReactDOM from 'react-dom/client';

import MyComponent from './App';

ReactDOM.createRoot(document.getElementById('app')).render(<MyComponent/>);

app.js

import React from 'react';

function MyComponent() {
  return <h1>Hello world</h1>;
}

export default MyComponent;

app2.js

import React from "react";

function NewComponent() {
  return <h1>Wassup</h1>;
}

export default NewComponent;


index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <main id="app">
  </main>
	<script src="https://content.codecademy.com/courses/React/react-18-course-bundle.min.js"></script>
  <script src="/index.compiled.js"></script>
</body>
</html>
```


































