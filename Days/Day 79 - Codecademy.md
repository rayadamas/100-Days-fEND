# [11/28/2023, 15:26-16:45]
- **Today's Progress**: starting new module, THE EFFECT HOOK: Why Use useEffect?
	- function component effects
	- clean up effects
- **Thoughts:** in the "second" quiz, i had initially misplaced the useEffect hook. it was AFTER our function component definition, as well as the initialization of our state variables, i moved it to be directly
	- for the 3rd quiz i defined an event handler named increment() all fine, made it an arrow function calling setClockCount(), but got stuck on how to write the callback function. i initially had a function body and was adding + 1 to clickCount. i had to peep the solution to see that as a parameter to setClockCount, we place our call to add to our previous amount. 
---
# THE EFFECT HOOK
## Why Use useEffect?
- Before [Hooks](https://www.codecademy.com/resources/docs/react/hooks), function components were only used to accept data in the form of [props](https://www.codecademy.com/resources/docs/react/props) and return some [JSX](https://www.codecademy.com/resources/docs/react/jsx) to be rendered.
	- However, as we learned in the last lesson, the [State](https://www.codecademy.com/resources/docs/react/state) Hook allows us to manage dynamic data, in the form of component state, within our function components.
- In this lesson, we’ll use the **Effect Hook** to run some JavaScript code after each render to:
	- fetch data from a back-end service.
	- subscribe to a stream of data.
	- manage timers and intervals.
	- read from and make changes to the #DoM.
- Components will re-render multiple times throughout their lifetime. These key moments present the perfect opportunity to execute these “side effects”.
	- There are three key moments when the Effect Hook can be utilized:
		1. When the component is first added, or _mounted_, to the DOM and renders.
		2. When the state or props change, causing the component to re-render.
		3. When the component is removed, or _unmounted_, from the DOM.
### quiz
- In the code editor, we’ve defined a function component with “side effects”.
	- In the function component in **PageTitleFunction.js**, the logic is written in one place: `useEffect()`. Take a peek and see if you can parse what it’s currently doing.
```
// Importing React and specific hooks (useState and useEffect) from the 'react' package
import React, { useState, useEffect } from 'react';

// Defining a functional component named PageTitle
export default function PageTitle() {
  // useState hook to create a state variable 'name' and a function 'setName' to update it.
  // The initial value of 'name' is set to an empty string.
  const [name, setName] = useState('');
 
  // useEffect hook to perform side effects.
  // This particular effect sets the document's title to "Hi, [name]" whenever 'name' changes.
  useEffect(() => {
    document.title = `Hi, ${name}`;
  }, [name]);
 
  // The component renders a div containing a paragraph and an input field.
  return (
    <div>
      // Displaying a paragraph that prompts the user to use the input field.
      <p>Use {name} input field below to rename this page!</p>
      // Input field for user input.
      // It updates the 'name' state with the current value of the input field whenever it changes.
      <input 
        onChange={({target}) => setName(target.value)} 
        value={name} 
        type='text' />
    </div>
  );
}
- This component renders an input field that allows the user to change the title of the current webpage dynamically.
	- As the user types in the input field, the `name` state updates, triggering the `useEffect` hook, which then updates the document's title accordingly.
```
- Ah, I see! Yes, in terms of syntax, the function you pass to `useEffect` is indeed a callback function. Here's how it breaks down:
	- ``useEffect(() => {   document.title = `Hi, ${name}`; }, [name]);``
		- **Callback Function**:
			- The first parameter of `useEffect` is a function `() => { document.title =` Hi, ${name}`; }`.
				- This is your callback function.
					- It's defined as an arrow function and contains the code you want to execute when the effect is triggered.
		- **Dependency Array**:
			- The second parameter `[name]` is the dependency array.
				- This tells React to re-run the callback function in `useEffect` whenever the value of `name` changes.
					- If `name` is the same between renders, React skips running the effect.
==N==
# Function Component Effects
- The Effect Hook tells our component to do something every time it’s rendered (or re-rendered).
- Combined with states, we can use the Effect Hook to create interesting dynamic changes in our web pages!
	- Suppose we want to allow a user to change the title of the web page tab every time they type.
		- We can implement this with the Effect Hook ([`useEffect()`](https://www.codecademy.com/resources/docs/react/hooks/useEffect)) like so:
```
// Importing React and two hooks (useState and useEffect) from the 'react' package.
import React, { useState, useEffect } from 'react';
 
// Declaring a functional component named PageTitle.
function PageTitle() {
  // Using the useState hook to create a state variable 'name' and a setter function 'setName'.
  // The initial value of 'name' is set to an empty string.
  const [name, setName] = useState('');
 
  // Using the useEffect hook without a dependency array. 
  // This means the effect runs after every render, updating the document's title each time.
  useEffect(() => {
    document.title = `Hi, ${name}`; // Sets the document's title to "Hi, [name]".
  });
 
  // Rendering a div element containing a paragraph and an input field.
  return (
    <div>
      // Displaying a paragraph with a message.
      <p>Use the input field below to rename this page!</p>
      // Input field for user input.
      // It updates the 'name' state with the current value of the input field whenever it changes.
      <input 
        onChange={({target}) => setName(target.value)} // Handling the change event to update 'name'.
        value={name} // The input's value is controlled by the 'name' state.
        type='text' // Setting the input type to 'text'.
      />
    </div>
  );
}
```
- Let’s take a look at the above example in more detail. First, we import the Effect Hook from the `'react'` library:
	```
	import { useEffect } from 'react';
	```
	- The `useEffect()` function has no return value as the Effect Hook is used to call another function.
		- We pass the callback function, or _effect_, to run after a component renders as the argument of the `useEffect()` function.
		- In our example, the following effect runs after each time the `PageTitle` component renders:
			```
			() => { document.title = `Hi, ${name}`;}
			```
			- Here, we assign `Hi, ${name}` as the value of [`document.title`](https://developer.mozilla.org/en-US/docs/Web/API/Document/title).
				- The `onChange` event listener triggers the `PageTitle` component to be re-rendered every time the user types in the input.
					- Consequently, this triggers `useEffect()` and changes the document’s title.
- Notice how we use the current [state](https://www.codecademy.com/resources/docs/react/state) inside of our effect.
	- Even though our effect is called after the component renders, we still have access to the variables in the scope of our function component!
		- When React renders our component, it will update the DOM as usual, and then run our effect after the DOM has been updated.
			- This happens for every render, including the first and last one.
## quiz
1. Import the Effect Hook, the State Hook, and React from the `'react'` library.
	- Make sure to import everything in one line.
2. Call `useEffect()` with a callback function that creates an alert with the current value of `count`.
	- Start clicking the button to see when our `alert()` function is called and be sure that it is logging the values that we’d expect!
3. Use a [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) so that the message in our alert dialog reads: “Count: 0”, then “Count: 1”, then “Count: 2”, etc.
```
Counter.js

import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`Count: ${count}`);
  });

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```
==N==
# Clean Up Effects
- Some effects require **cleanup**.
	- For example, we might want to add event listeners to some element in the DOM, beyond the [JSX](https://www.codecademy.com/resources/docs/react/jsx) in our component.
	- When we add event listeners to the DOM, it is important to remove those event listeners when we are done with them to avoid memory leaks!
- Let’s consider the following effect:
	```
	useEffect(()=>{
		document.addEventListener('keydown', handleKeyPress);
		// Specify how to clean up after the effect:
		return () => {
			document.removeEventListener('keydown', handleKeyPress);
		};
	})
	```
	- If our effect didn’t return a _cleanup function_, a new event listener would be added to the DOM’s `document` object every time that our component re-renders.
		- Not only would this cause bugs, but it could cause our application performance to diminish and maybe even crash!
- Because effects run after every render and not just once, React calls our cleanup function before each re-render and before unmounting to clean up each effect call.
	- If our effect returns a function, then the [`useEffect()`](https://www.codecademy.com/resources/docs/react/hooks/useEffect) Hook always treats that as the cleanup function.
		- React will call this cleanup function before the component re-renders or unmounts.
- Since this cleanup function is optional, it is our responsibility to return a cleanup function from our effect when our effect code could create memory leaks.
## quiz
1. Let’s create a program that documents how many times you’ve clicked on the page.
	- Write an event handler named `increment()` that will be responsible for tracking how many times a user has clicked.
		- Define this function so that it calls `setClickCount()` with a state setter callback function, adding `1` to the previous value of `clickCount`.
2. Import the `useEffect()` hook and call it with an effect that adds an event listener for `'mousedown'` events on the `document` object.
	- When a `'mousedown'` event occurs anywhere on the `document`, we want our `increment()` event handler to be called.
3. If you haven’t already, run our code and click around the browser window. What is happening? Why is this happening?
	- Each time that our component renders, our effect is called, adding another event listener.
		- With just a few clicks and rerenders, we have attached a lot of event listeners to the DOM! We need to clean up after ourselves!
			- Update our effect so that it returns a cleanup function that will remove our last event listener from the DOM.
```
Counter.js

import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  // your code here
  const increment = () => setClickCount((prev) => prev + 1);

  useEffect(()=>{
    document.addEventListener('mousedown', increment);

    return () => {
      document.removeEventListener('mousedown', increment);
    };
  })

  return (
      <h1>Document Clicks: {clickCount}</h1>
  );
}
```




































