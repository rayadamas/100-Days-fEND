# [11/21/2023, 12:38-13:40]
- **Today's Progress**: continuing progress w/ State Hooks in #React. 
	- next lesson we learn to initialize the state
- **Thoughts:** straightforward lesson, only thing that stuttered me was declaring the const in the last quiz for today; i tried to declare an OBJECT instead of an array like so `const [ color, setColor ] = useState();`.
---
# THE STATE HOOK
- ## Why Use Hooks?
	- What should we do if we want to add a [state](https://www.codecademy.com/resources/docs/react/state) to our function component? How about if we wanted our app to respond to the changes in data?
		- In this lesson, we’ll learn about _React Hooks_ and how they can help us powerfully wield function components.
	- React Hooks, plainly put, are functions that let us manage the internal state of components and handle post-rendering side effects directly from our function components.
	- Using Hooks, we can determine what we want to show the users by declaring how our user interface should look based on the state.
		- React offers a number of built-in Hooks. A few of these include:
			- [`useState()`](https://www.codecademy.com/resources/docs/react/hooks/useState)
			- [`useEffect()`](https://www.codecademy.com/resources/docs/react/hooks/useEffect)
			- [`useContext()`](https://www.codecademy.com/resources/docs/react/hooks/useContext)
			- `useReducer()`
			- and `useRef()`.
				- See [the full list](https://react.dev/reference/react) in the React docs.
	- In this lesson, we’ll learn how to:
		- Build a “stateful” function component.
		- Use the State Hook.
		- Initialize a state and set a state.
		- Define event handlers.
		- Use state setter callback functions.
		- Use state with arrays and objects.
- ### quiz
	1. Open the **AppFunction.js** file. We will learn how this code works in the next few exercises. Don’t worry about the details of what is going on here just yet, but take a few moments to read through the definition of this function component and develop some theories about what this code may be doing.
		- Press “Run” to see how the code behaves!
```
AppFunction.js

import React, { useState } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default function AppFunction() {
  const [newTask, setNewTask] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };
  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
  };

  return (
    <main>
      <h1>Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  );
}

```
==N==
# Update Function Component State
- Let’s get started with the **State Hook**, the most common Hook used for building React components.
	- The [State](https://www.codecademy.com/resources/docs/react/state) Hook is a named export from the React library, so we import with [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) like the following:
		- `import React, { useState } from 'react';`
	- State Object:
		- The **`state`** object holds data in a [component](https://www.codecademy.com/resources/docs/react/components) that is expected to change over time.
			- It is created and maintained by the component itself, and when it changes, the component re-renders.
		- [Props](https://www.codecademy.com/resources/docs/react/props) are passed down by parent components, whereas `state` is created and maintained by the component itself.
		- Class and functional components handle state differently.
			- Functional components use [hooks](https://www.codecademy.com/resources/docs/react/hooks) to manage state.
		- The following will address how class components manage state.
		- Syntax:
```
class ComponentName extends React.Component {
  // With constructor
  constructor(props) {
    super(props);
    this.state = {
      property: value,
    };
  }

  // With property initializer
  state = {
    property: value,
  };

  render() {
    return (
      /* Value of property is rendered */
      <div>{this.state.property}</div>
    );
  }
}

- The snippet above features two common ways of initializing state in a class component:
	- The `constructor()` method assigns a new object to `this.state`.
	- A `state` object is directly assigned with property initializers.

- Only ONE of these two ways can be applied when making a class component.
```
- When we call the [`useState()`](https://www.codecademy.com/resources/docs/react/hooks/useState) function, it returns an array with two values:
	- The _current state_:
		- The current value of this state.
	- The _state setter_:
		- A function that we can use to update the value of this state.
- We can use these two values to track the current state of a data value or property and change it when we need to.
	- To extract the two values from the array, we can assign them to local variables by using array destructuring.
	- For example:
		- `const [currentState, setCurrentState] = useState();`
- Let’s have a look at another example of a function component that uses the State Hook:
```
import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState();
// toggle = state. setToggle = setState

  return (
    <div>
      <p>The toggle is {toggle}</p>
      <button onClick={() => setToggle("On")}>On</button>
      <button onClick={() => setToggle("Off")}>Off</button>
    </div>
  );
}
```
- Notice how the state setter function, `setToggle()`, is called by our `onClick` _event listeners_.
	- To update the value of `toggle` and re-render this component with the new value, all we need to do is call the `setToggle()` function with the next state value as an argument.
		- With the State Hook, updating the state is as simple as calling a state setter function.
			- Calling the state setter signals to React that the component needs to re-render, so the whole function defining the component is called again.
- The magic of `useState()` is that it allows React to keep track of the current value of the state from one render to the next!
	- ## quiz
		1. Import the default export from the `'react'` library and call it `React`. We also will be using the State Hook, so go ahead and import the named export `useState` from the `'react'` library as well.
		2. Use `const` to declare and assign the return values from calling `useState()` to `color` and `setColor`.
			- Recall that the return value of the `useState()` function is an array with two values in it:
				- `const [currentState, stateSetter] = useState();`
		3. In the JSX, use `onClick` event listeners to call the `setColor()` state setter function with the appropriate color when the user clicks on each of these buttons.
		4. Update the `divStyle` object so that the `backgroundColor` property is set to our current state value instead of always showing purple.
```
ColorPicker.js

// import the default export and the named export `useState` from the 'react' library
import React, { useState } from 'react';

export default function ColorPicker() {
  // call useState and assign its return values to `color` and `setColor`
  const [ color, setColor ] = useState();

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor('Aquamarine')}>
        Aquamarine
      </button>
      <button onClick={() => setColor('BlueViolet')}>
        BlueViolet
      </button>
      <button onClick={() => setColor('Chartreuse')}>
        Chartreuse
      </button>
      <button onClick={() => setColor('CornflowerBlue')}>
        CornflowerBlue
      </button>
    </div>
  );
}

```







































