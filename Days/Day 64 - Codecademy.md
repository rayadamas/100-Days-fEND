# [11/13/2023, 10:30-11:30]
- **Today's Progress**: continuing w/ a review of `Components render other Components`, then it's extra credit challenge.
	- finished w/ this section, moving on to: `Props`
	- continuing tomorrow w/ passing props to a component
- **Thoughts:** during that quiz i felt i was aware of what. i was being asked to produce, though i still needed to reference past lessons. i had some silly mistakes like forgetting a `;`, or recreating the body of a function twice until i realized oh just call what i already made, here. the closing tag space is tricky cuz i feel like i see it both observed and ignored through lessons w/o explanation, though me forgetting it at the top import section is entirely on me. 
---
- # Review
	- Let’s recap:
		- A React application can contain multiple components.
		- Components can interact with each other by returning instances of each other.
		- Components interacting allows them to be broken into smaller components, stored into separate files, and reused when necessary.
- ## quiz
1. If you want to practice your skills, use what you’ve learned about components interacting to create a page from scratch!
	- In the code editor, we’ve provided three files, **App.js**, **index.js**, and **HelloWorld.js**.
		- Render a “Hello World!” greeting onto the screen with the appropriate file structure, where **App.js** contains the top-level component and **index.js** renders it.
```
HelloWorld.js

import React from 'react';

function HelloWorld(){
  return (<h1>Sup yall!</h1>);
}

export default HelloWorld;

App.js

import React from 'react';
import HelloWorld from './HelloWorld';

function App(){
  return <HelloWorld />;
}

export default App;

index,js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
```
==N==
- ### #React_props
	- When thinking in the frame of a React application, components are small pieces of a whole.
		- Together, they make up the interface that users will see.
			- With each component playing a role in the interface, there are times when components must be able to communicate with other components.
				- In this lesson, you will learn another way that components can interact: a component _passing information_ to another component.
- Information that gets passed from one component to another is known as [**props**](https://www.codecademy.com/resources/docs/react/props).
	- Props can be used to customize the output of each component depending on the information that is passed in.
		- By allowing components to communicate with each other, we can add a level of flexibility that was not possible before.
- By the end of this lesson, you should be able to:
	- Pass, access, and display props.
	- Use props to create conditional statements.
	- Define event handlers in a component and pass them to other components.
	- Work with a component’s children.
	- Assign default values to props.
- ### Question
	- In the context of this [lesson 7](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-101-components-interacting-u/lessons/this-props/exercises/this-props-intro), is `props` short for “properties”?
		- ### Answer
			- Yes, `props` is short for the word “properties”.
				- One possible reason for this naming is that `props` are essentially JavaScript objects, and JavaScript objects contain properties.
					- Furthermore, when we pass props from a component to a child component, the props are sent as an object containing the “properties” of the component.
==N==
- ### Access a Component's props
	- Every component has something called `props`.
		- A component’s `props` is an object.
			- It holds information about that component.
				- You’ve seen this before, but you might not have realized it!
				- Let’s take a look at the HTML button tag.
					- There are several pieces of information we can pass to the button tag, such as the `type` of the button.
					- `<button type="submit" value="Submit"> Submit </button>`
						- In this example, we’ve passed two pieces of information to the button tag:
							- a `type`
							- and a `value`.
								- Depending on what `type` attribute we give to the `<button>` element, it will treat the form differently.
								- In the same way, we can pass information to our own components to specify how they behave!
	- Props serve the same purpose for components as arguments do for functions.
		- To access a component’s `props` object, you can reference the `props` object and the dot notation for its properties.
			- Here’s an example:
				- `props.name`
					- This would retrieve the `name` property from the `props` object.
- #### quiz
1. Look at **PropsDisplayer.js**.
	- This component has `props` as a part of its parameter.
		- Inside the function body, there is a `stringProps` variable which contains the string data of `props`.
			- Let’s display it on the screen and see what’s inside by injecting the `stringProps` variable between the `<h2></h2>` tags.
2. Now that we’ve finished the `PropsDisplayer` component, let’s use it in our top-level component, `App`, and have it render to the screen.
	- Open up **App.js**. Take a look at the `App` component definition, and have it return the `PropsDisplayer` component.
		- As always, `App` is exported to **index.js** and rendered.
3. Click Run and think about what you see.
	- If you’re seeing an empty object, you’re on the right track.
		- The `props` object isn’t _really_ empty.
			- It has some properties that `JSON.stringify()` doesn’t detect.
				- But even if you could see those properties, the `props` object still wouldn’t have much to show you right now.
```
PropsDisplayer.js

import React from 'react';

function PropsDisplayer(props) {
  const stringProps = JSON.stringify(props);
  return (
    <div>
      <h1>CHECK OUT MY PROPS OBJECT</h1>
      <h2>{stringProps}</h2>
    </div>
  );
}

export default PropsDisplayer;

App.js

import React from 'react';
import ReactDOM from 'react-dom';

import PropsDisplayer from './PropsDisplayer';

function App() {
  return <PropsDisplayer />;
}

export default App;
```
- ### Question
	- In the context of this [exercise 62](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-101-components-interacting-u/lessons/this-props/exercises/access-props), what does `JSON.stringify` do?
		- ### Answer
			- `JSON.stringify` is a method that converts a JavaScript object into a string. One use of the method is to store the object as a string in a database, and then convert back to an object when obtaining it.
				- For example,
```
JSON.stringify({ a: 1, b: 2 });
// "{"a": 1, "b": 2}"
```











































