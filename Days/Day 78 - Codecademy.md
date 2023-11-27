# [11/27/2023, 12:00-13:14]
- **Today's Progress**: review of this past module first
- **Thoughts:** going to feed the statements from this review to #ChatGPT and tell it to produce a code example of such
	- WAY more useful of a review session using AI instead of trying to piece together my previous days tbh
---
### Review
- We can now build stateful function components using the `useState` React Hook!
	- Let’s review what we learned and practiced in this lesson:
# With React, we feed static and dynamic data models to [JSX](https://www.codecademy.com/resources/docs/react/jsx) to render a view to the screen.
Sure, I can help with that. JSX, or JavaScript XML, is a syntax extension for JavaScript used in React to describe what the UI should look like. It allows you to write HTML elements in JavaScript and place them in the DOM without any `createElement()` and `appendChild()` methods. In React, JSX is transformed into React elements, which are then rendered to the DOM.

Here's an example of a simple React component using JSX that demonstrates both static and dynamic data:
```
// Importing the React library
import React from 'react';

// A simple React component
class MyComponent extends React.Component {
  // State of the component - represents dynamic data
  state = {
    message: "Hello, world!"
  };

  render() {
    // Rendering the JSX to the screen
    // It includes both static and dynamic content
    return (
      <div>
        <h1>Static Content</h1> {/* This is a static JSX element */}
        <p>{this.state.message}</p> {/* Dynamic content: data from the component's state */}
      </div>
    );
  }
}

export default MyComponent;
```
- In this example:
	- The `<h1>` tag contains static content. This is content that doesn't change over time.
	- The `<p>` tag contains dynamic content. This is rendered from the component's state (`this.state.message`).
		- This part of the JSX will update on the screen if the state changes.

---
# [Hooks](https://www.codecademy.com/resources/docs/react/hooks) are used to “hook into” the internal component [state](https://www.codecademy.com/resources/docs/react/state) for managing dynamic data in function components.
- React Hooks, introduced in React 16.8, allow you to use state and other React features without writing a class. They are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.
- The most commonly used hooks are `useState` and `useEffect`. Here's an example to demonstrate how they work:
	1. **`useState`**: This hook lets you add state to functional components.
	2. **`useEffect`**: This hook lets you perform side effects in functional components. It's similar to `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.
		- Here's a simple example:
```
import React, { useState, useEffect } from 'react';

function MyFunctionalComponent() {
  // useState hook for managing dynamic data
  const [count, setCount] = useState(0); // Initializes 'count' state variable

  // useEffect hook for side effects
  useEffect(() => {
    document.title = `You clicked ${count} times`; // Side effect: updates document title on state changes
  });

  return (
    <div>
      <p>You clicked {count} times</p> {/* Dynamic content */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> {/* Button to update the state */}
    </div>
  );
}

export default MyFunctionalComponent;
```
- In this example:
	- `useState` is used to create a `count` state variable. The `count` state starts at 0 and can be updated by calling `setCount`.
		- `useEffect` is used to perform a side effect after rendering. It updates the document's title every time the `count` state changes.
			- The button in the JSX calls `setCount` to update the `count` state, which triggers a re-render and updates the document's title through `useEffect`.

---
- We employ the State Hook using the code below.
	- The `currentState` references the current value of the state and `initialState` initializes the value of the state for the component’s first render.
		- `const [currentState, stateSetter] = useState( initialState );`
---
# State setters can be called in event handlers.
- In React, state setters are functions provided by the `useState` hook that let you update the state of a component.
	- When the state changes, the component re-renders.
		- One common way to use state setters is in event handlers, such as `onClick` for a button or `onChange` for an input field.
- Here's an example to illustrate this concept:
```
import React, { useState } from 'react';

function CounterComponent() {
  // useState hook to create a state variable 'count' and its setter 'setCount'
  const [count, setCount] = useState(0);

  // Event handler function that uses the state setter
  function handleIncrement() {
    setCount(count + 1); // Increment the count when the button is clicked
  }

  return (
    <div>
      <p>Count: {count}</p> {/* Displaying the current count */}
      <button onClick={handleIncrement}>Increment</button> {/* Button with onClick event */}
    </div>
  );
}

export default CounterComponent;
```
- In this example:
	- `useState` is used to create a state variable `count` and its setter function `setCount`.
		- `handleIncrement` is an event handler function that calls `setCount` to update the `count` state by incrementing it.
			- The `<button>` element's `onClick` attribute is set to the `handleIncrement` function.
			- When the button is clicked, it triggers the event handler, which in turn calls `setCount` to update the state.
---
# We can define simple event handlers inline in our JSX and complex event handlers outside of our JSX.
- In React, event handlers can be defined either inline directly in the JSX or as separate methods outside of the JSX.
	- Inline event handlers are typically used for simple operations, while more complex logic is usually handled by separate methods defined in the component.
- Here's an example to demonstrate both approaches:
```
import React, { useState } from 'react';

function MyComponent() {
  // useState hook for managing dynamic data
  const [count, setCount] = useState(0);

  // A complex event handler defined outside of JSX
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button> {/* Inline event handler */}
      <button onClick={handleDecrement}>Decrement</button> {/* External event handler */}
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```
- In this example:
	- The `Increment` button uses an inline event handler. It's simple: just increment the `count` state by 1 when clicked.
		- The `Decrement` button uses an external event handler `handleDecrement`. This function contains more complex logic, checking if the `count` is greater than 0 before decrementing it, to prevent negative values.
---
# We use a state setter callback function when our next value depends on our previous value.
- When updating the state in React, especially when the new state value depends on the previous state value, it's recommended to use a state setter callback function.
	- This approach ensures that you're working with the most recent state value, avoiding potential issues due to React's asynchronous state updates.
- Here's an example to illustrate this:
```
import React, { useState } from 'react';

function CounterComponent() {
  // useState hook for the count state
  const [count, setCount] = useState(0);

  // Correct way to increment count when it depends on the previous value
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Correct way to decrement count with previous value dependency
  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default CounterComponent;
```
- In this example:
	- The `incrementCount` and `decrementCount` functions use the state setter callback function.
		- `setCount(prevCount => prevCount + 1)` and `setCount(prevCount => prevCount - 1)` use the previous value of `count` (`prevCount`) to calculate the next value.
			- This ensures that the increment or decrement is based on the most current value of `count`, even if there are multiple updates happening in quick succession.
---
# We use arrays and objects to organize and manage related data that tend to change together.
- In React, using arrays and objects to organize and manage related data is a common and effective practice, especially when dealing with data that tends to change together.
	- Arrays and objects allow you to group related data in a structured way, making it easier to read, maintain, and update the state in a consistent manner.
- Here's an example to illustrate this concept:
```
import React, { useState } from 'react';

function TodoList() {
  // useState hook with an array to manage a list of todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false }
  ]);

  // Function to add a new todo
  const addTodo = text => {
    const newTodo = { id: todos.length + 1, text, completed: false };
    setTodos([...todos, newTodo]);
  };

  // Function to toggle the completion status of a todo
  const toggleTodo = id => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <button onClick={() => addTodo('New Task')}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
            {todo.text} {todo.completed ? '(Completed)' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```
- In this example:
	- The `todos` state is an array of objects, where each object represents a todo item with properties like `id`, `text`, and `completed`.
		- The `addTodo` function updates the `todos` array by adding a new todo object. This demonstrates how an array can be used to manage a list of related items.
			- The `toggleTodo` function updates the completion status of a todo item.
			- It uses the `map` method to create a new array, updating only the item that matches the specified `id`.
			- This shows how you can manage the state of individual items within an array without affecting the others.
---
# Use the spread syntax on collections of dynamic data to copy the previous state into the next state like so: `setArrayState((prev) => [ ...prev ])` and `setObjectState((prev) => ({ ...prev }))`.
- In React, the spread syntax (`...`) is a useful feature of ES6 JavaScript that can be used to copy elements from one array or properties from one object into another.
	- This is particularly helpful in React when dealing with state updates for dynamic data collections like arrays and objects.
		- The spread syntax ensures that you create a new array or object while preserving the previous state, which is important for maintaining immutability in React.
- Here's an example to demonstrate this:
```
import React, { useState } from 'react';

function MyComponent() {
  // useState hook with an object to manage user information
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 30,
    hobbies: ['reading', 'gaming']
  });

  // Function to update the user's age
  const incrementAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  // Function to add a new hobby
  const addHobby = hobby => {
    setUser({ ...user, hobbies: [...user.hobbies, hobby] });
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Hobbies: {user.hobbies.join(', ')}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <button onClick={() => addHobby('running')}>Add Hobby</button>
    </div>
  );
}

export default MyComponent;
```
- In this example:
	- The `incrementAge` function updates the `user` state's `age` property. It uses the spread syntax to copy all the existing properties of `user` and then updates the `age`.
		- The `addHobby` function adds a new hobby to the `user` state's `hobbies` array.
			- It uses the spread syntax twice: first to copy all existing properties of `user`, and second to copy all the existing hobbies and add a new one.
---
# It’s best practice to have multiple, simpler states instead of having one complex state object.
- In React, it is often considered a best practice to use multiple, simpler state variables rather than a single complex state object. This approach has several advantages:
	1. **Easier State Management**: Managing smaller, distinct pieces of state can be simpler than handling a complex, nested state object. It reduces the complexity and potential for bugs, especially when updating parts of the state.
	2. **Better Performance**: Updating a smaller piece of state can be more efficient. React's reconciliation process can more quickly determine what needs to be re-rendered.
	3. **Clearer Code**: Having separate state variables can make your component's code more readable and easier to understand. Each piece of state has a clear purpose and is not tangled with other unrelated state logic.
		- Here's an example to illustrate this best practice:
```
import React, { useState } from 'react';

function UserProfile() {
  // Separate simple state variables
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState(30);
  const [hobbies, setHobbies] = useState(['Reading', 'Gaming']);

  // Function to update the age
  const incrementAge = () => {
    setAge(age + 1);
  };

  // Function to add a new hobby
  const addHobby = hobby => {
    setHobbies([...hobbies, hobby]);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Hobbies: {hobbies.join(', ')}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <button onClick={() => addHobby('Running')}>Add Hobby</button>
    </div>
  );
}

export default UserProfile;
```
- In this example:
	- `name`, `age`, and `hobbies` are separate state variables, each representing a distinct piece of data.
		- `incrementAge` and `addHobby` are functions to update `age` and `hobbies`, respectively.
			- Each function is responsible for updating only one piece of the state, making them simpler and more focused.
---
## quiz
1. Take a look at this task list program from the beginning of this lesson. Read through **AppFunction.js** again and see how much you can understand!
```
AppFunction.js

// Importing the React and useState hook from the React library
import React, { useState } from "react";

// Importing the NewTask and TasksList components from their respective paths
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

// Defining the functional component AppFunction
export default function AppFunction() {
  // useState hook to manage the state of the new task being created
  // Initially, newTask is an empty object
  const [newTask, setNewTask] = useState({});

  // handleChange function for updating newTask based on input changes
  const handleChange = ({ target }) => {
    const { name, value } = target; // Destructuring to get name and value from the event target
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value })); // Updating newTask with the current input values and a unique ID
  };

  // useState hook to manage the state of all tasks
  // Initially, allTasks is an empty array
  const [allTasks, setAllTasks] = useState([]);

  // handleSubmit function for handling the submission of a new task
  const handleSubmit = (event) => {
    event.preventDefault(); // Preventing the default form submission behavior
    if (!newTask.title) return; // If newTask has no title, return without doing anything
    setAllTasks((prev) => [newTask, ...prev]); // Adding the new task to the beginning of allTasks
    setNewTask({}); // Resetting newTask to an empty object
  };

  // handleDelete function for deleting a task by its ID
  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter(
      (task) => task.id !== taskIdToRemove
    )); // Filtering out the task with the given ID
  };

  // Returning the JSX to render the component
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
- This component is a task manager application.
	- It includes functionality to add new tasks, display a list of tasks, and delete tasks.
		- The state is managed using the `useState` hook, and the functions `handleChange`, `handleSubmit`, and `handleDelete` are used to update the state based on user interactions.
			- The `NewTask` and `TasksList` components are imported and used to handle the presentation of the task input form and the task list, respectively.

















































