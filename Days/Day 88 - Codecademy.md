# [12/7/2023, 20:46-22:58]
- **Today's Progress**: reviewing REACT PROGRAMMING PATTERNS w/ #ChatGPT 
- **Thoughts:** late ADHD review co-work session w/ chatty
---
# REACT PROGRAMMING PATTERNS review
- Congrats! You’ve learned your first programming pattern to help organize your React code. You divided a complex React component into a container component and a couple of presentational components.
- Here are the steps we took:
# Identified that the original component needed to be refactored: it handled calculations/logic and presentation/rendering.
1. **"Identified that the original component needed to be refactored":** This means that upon review, it was decided that the existing React component was not structured optimally and needed changes in its design or code.
    
2. **"It handled calculations/logic and presentation/rendering":** This indicates that the component was doing too much. In React (and front-end development in general), it's often considered good practice to separate concerns:
    
    - **Calculations/Logic:** This refers to the 'brains' of the component, where data is processed, calculations are made, and business logic is applied.
    - **Presentation/Rendering:** This is about how things are displayed on the screen – the HTML structure, CSS styling, and how the user interacts with it.
- When a single component handles both these aspects, it can become complex, hard to maintain, and challenging to test.
	- The solution is often to refactor the component, splitting it into smaller, more focused components.
		- Let's illustrate this with a simple example. Suppose we have a React component that calculates the price after tax and also renders it. Initially, it might look something like this:
```
import React from 'react';

class PriceComponent extends React.Component {
    calculatePriceAfterTax(price) {
        const taxRate = 0.2; // 20% tax
        return price + (price * taxRate);
    }

    render() {
        const { price } = this.props;
        const priceAfterTax = this.calculatePriceAfterTax(price);

        return (
            <div>
                <h2>Price Details</h2>
                <p>Original Price: ${price}</p>
                <p>Price after Tax: ${priceAfterTax.toFixed(2)}</p>
            </div>
        );
    }
}

export default PriceComponent;

- In this example, the `PriceComponent` is responsible for both calculating the price after tax (logic) and rendering the details (presentation). A refactoring to separate these concerns might look like this:

import React from 'react';

// Logic Component
function calculatePriceAfterTax(price) {
    const taxRate = 0.2; // 20% tax
    return price + (price * taxRate);
}

// Presentation Component
class PriceDisplayComponent extends React.Component {
    render() {
        const { price, priceAfterTax } = this.props;

        return (
            <div>
                <h2>Price Details</h2>
                <p>Original Price: ${price}</p>
                <p>Price after Tax: ${priceAfterTax.toFixed(2)}</p>
            </div>
        );
    }
}

// Container Component
class PriceContainer extends React.Component {
    render() {
        const { price } = this.props;
        const priceAfterTax = calculatePriceAfterTax(price);

        return <PriceDisplayComponent price={price} priceAfterTax={priceAfterTax} />;
    }
}

export default PriceContainer;

- In the refactored code, the logic for calculating the price is moved outside of the component, making it easier to manage and test.
	- The `PriceDisplayComponent` is solely responsible for presenting the price details, and the `PriceContainer` binds the logic and presentation together.
		- This separation makes the code more modular, maintainable, and readable.
```
# Created a container component containing all the stateful logic.
- The statement "Created a container component containing all the stateful logic" in the context of a React module review refers to an architectural pattern commonly used in React applications.
	- This pattern involves separating components into two types: container components and presentational components. Here's what this means:
1. **Container Components:**
    
    - **Role:** These components are responsible for managing state, handling logic, and connecting to data sources (like APIs or Redux stores). They are concerned with how things work.
    - **Characteristics:** They may contain stateful logic, lifecycle methods, and are not concerned with UI rendering. They usually don't have their own markup and style but instead, use presentational components for rendering UI.
2. **Presentational Components:**
    
    - **Role:** These components are concerned with how things look. They receive data and callbacks exclusively via props and focus on rendering the UI.
    - **Characteristics:** They are often stateless, meaning they don't manage or mutate state (though they can have internal state for UI purposes). They are usually written as functional components.
- By creating a container component containing all the stateful logic, you separate the concerns of data handling and UI rendering. This makes the components easier to manage and reuse.
	- Let's illustrate this with an example:
		- Suppose we have a simple application where we display a list of items and have the ability to add items to the list. Here's how we can structure it using the container/presentational pattern:
```
import React, { useState } from 'react';

// Container Component
const ListContainer = () => {
    const [items, setItems] = useState([]);

    const addItem = item => {
        setItems([...items, item]);
    };

    return <ListDisplay items={items} onAddItem={addItem} />;
};

// Presentational Component
const ListDisplay = ({ items, onAddItem }) => {
    const [newItem, setNewItem] = useState('');

    const handleAdd = () => {
        onAddItem(newItem);
        setNewItem('');
    };

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} />
            <button onClick={handleAdd}>Add Item</button>
        </div>
    );
};

export default ListContainer;

- In this example, `ListContainer` is the container component.
	- It manages the state (`items`) and the logic to update the state (`addItem`).
		- `ListDisplay` is the presentational component. It receives the items and the addItem function as props and focuses solely on rendering the list and the input UI.
			- The separation of concerns makes the code more organized and enhances its readability and maintainability.
```
# Created a function that calls the [state](https://www.codecademy.com/resources/docs/react/state) setter method provided by [`useState()`](https://www.codecademy.com/resources/docs/react/hooks/useState).
- The statement "Created a function that calls the state setter method provided by `useState()`" in the context of React development refers to a common pattern when using the React Hook `useState`.
	- Let's dissect this:
1. **`useState()` Hook:** This is a React Hook that lets you add state to functional components. When you use `useState`, you declare a state variable and a method to update this variable. The `useState` hook returns a pair: the current state value and a function that lets you update it.
    
2. **State Setter Method:** When you use `useState`, it provides you with a setter function. This function is used to update the state variable. Whenever this setter function is called, it triggers a re-render of the component with the new state.
    
3. **Creating a Function that Calls the Setter:** The statement implies that a separate function was created which, when invoked, calls the state setter method to update the state.
- Here's a simple example to illustrate this:
```
import React, { useState } from 'react';

function Counter() {
    // useState returns a pair: the current state and a function that updates it
    const [count, setCount] = useState(0);

    // A function that calls the state setter method
    const incrementCount = () => {
        setCount(count + 1); // Updates the state
    };

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={incrementCount}>Click me</button>
        </div>
    );
}

export default Counter;

```
- In this example:
	- `useState(0)` initializes the state variable `count` with a default value of `0`.
	- `setCount` is the setter function provided by `useState`.
	- `incrementCount` is a function that calls `setCount`, incrementing the value of `count` by 1.
	- When the button is clicked, `incrementCount` is called, triggering a re-render with the updated `count` value.
		- This pattern is particularly useful for encapsulating complex state logic or when the same state update logic needs to be reused in multiple places.
# Created and exported presentational components containing only [JSX](https://www.codecademy.com/resources/docs/react/jsx).
- The statement "Created and exported presentational components containing only [JSX](https://www.codecademy.com/resources/docs/react/jsx)" describes a key practice in React development, focusing on the creation of components that are purely for presentation.
	- Let's break this down:
1. **Presentational Components:** These components are concerned with how the UI looks. They typically do not contain any application logic or stateful behavior. Their primary role is to present content and UI elements on the screen.
		
2. **Containing only JSX:** JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe what the UI should look like. When a component contains only JSX, it means that the component is solely responsible for rendering UI elements and does not handle state or business logic.
		
3. **Created and Exported:** The components are not only created but also exported from their module. This means they are made available to be imported and used in other parts of the application.
	- An example of such a component might look like this:
```
import React from 'react';

// Presentational component
const Greeting = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
};

export default Greeting;

- In this example, `Greeting` is a presentational component. It accepts a `name` prop and renders it within an `<h1>` tag.
		- This component is purely for presentation – it only returns JSX and does not engage in any state management or complex logic.
			- It's also exported, so it can be imported and used in other files.

- This approach is part of a larger design philosophy in React, where the separation of concerns is encouraged: separating the logic-heavy "container" components from the purely presentational components.
	- This separation enhances readability, maintainability, and reusability of components.
```
# Imported the presentational components into the container component.
- The statement "Imported the presentational components into the container component" refers to a common practice in React development, especially when following the container/presentational pattern.
	- This pattern involves dividing components into two categories:

1. **Presentational Components:** These components are primarily concerned with how things look. They are often stateless and simply render the provided data via props. They focus on the UI and styling.
    
2. **Container Components:** These components handle the business logic, state management, and data fetching. They are less concerned with how things look and more with how things work.
- The statement indicates that in your project, presentational components (which have been created and possibly exported in separate files) are being used within a container component.
	- The container component manages the state and logic, while the presentational components deal with rendering the UI based on the state and functions passed to them from the container.
- Here's a simplified example to illustrate this:
	- First, imagine you have a presentational component like this (in a file like `Greeting.js`):
```
import React from 'react';

const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;

export default Greeting;

- Then, in your container component, you would import and use this presentational component:

import React, { useState } from 'react';
import Greeting from './Greeting'; // Importing the presentational component

const GreetingContainer = () => {
    const [name, setName] = useState('John Doe');

    // ... potentially some more logic

    return <Greeting name={name} />;
};

export default GreetingContainer;

- In this example, `GreetingContainer` is a container component.
	- It manages the state (in this case, the `name` state) and any other logic.
		- The `Greeting` presentational component is imported and used within it.
			- The `Greeting` component is solely responsible for displaying the UI, while `GreetingContainer` manages the state and logic.

- This approach results in a clean separation of concerns, making the code more maintainable and easier to test.
	- The presentational components can be reused in different parts of the application with different container components.
```
# Used the presentational components in the return statement of the container component.
- The phrase "Used the presentational components in the return statement of the container component" refers to a common pattern in React, particularly when adopting the container/presentational component structure.
	- Here's what this entails:
1. **Container Component:** This is a component that typically handles logic, state management, and data fetching. It's concerned with how things work. The container component doesn't render the UI directly but delegates that responsibility to presentational components.
    
2. **Presentational Components:** These are components that are primarily concerned with how things look. They are often stateless and receive data and callbacks via props. Their primary role is to render the UI.
    
3. **Using Presentational Components in the Container Component:** This means that inside the container component's `return` statement (which is part of its `render` method in class components or the body of the function in functional components), you utilize the presentational components to construct the UI.
- Here's an example to illustrate:
	- Suppose you have a presentational component `UserProfile`:
```
// UserProfile.js - Presentational Component
import React from 'react';

const UserProfile = ({ name, age }) => (
    <div>
        <h1>{name}</h1>
        <p>Age: {age}</p>
    </div>
);

export default UserProfile;

- And a container component `UserContainer`:

// UserContainer.js - Container Component
import React, { useState, useEffect } from 'react';
import UserProfile from './UserProfile'; // Importing the presentational component

const UserContainer = () => {
    const [user, setUser] = useState({ name: 'John Doe', age: 30 });

    // Imagine some logic here to fetch user data

    return (
        <UserProfile name={user.name} age={user.age} />
    );
};

export default UserContainer;

- In this scenario, `UserContainer` is the container component that might handle fetching and managing user data. Inside its `return` statement, it uses the `UserProfile` presentational component to render the UI.
	- The container passes the necessary data (like `name` and `age`) to `UserProfile` via props.

- This pattern is beneficial because it separates the concerns of data handling and UI rendering, making your components more modular, maintainable, and easier to test.
	- The presentational components can be reused in different contexts and are easier to style and refactor, as they are not tightly coupled with the business logic.
```
# Passed state and functions used to change state as [props](https://www.codecademy.com/resources/docs/react/props) to the rendered presentational components.
- The statement "Passed state and functions used to change state as [props](https://www.codecademy.com/resources/docs/react/props) to the rendered presentational components" describes a typical workflow in React where a container component communicates with presentational components.
	- Let's break it down:
1. **State and Functions in Container Components:** In React, container components often manage state and contain functions to manipulate this state. This is where the business logic of a component or a feature resides.
    
2. **Passing State and Functions as Props:** The container component then passes this state and the functions (that change the state) to the presentational components as props. Props are a way of passing data from parent to child components in React.
    
3. **Presentational Components Receive Props:** The presentational components use these props to render UI and invoke the passed functions to interact with the state managed by the container component.
	- This approach helps in maintaining separation of concerns: the container component handles the logic and state management, while the presentational components focus on how things look (the UI).
- Here's an example to illustrate this:
	- Imagine you have a container component `TodoContainer` that manages a list of to-do items and a function to add a new item:
```
import React, { useState } from 'react';
import TodoList from './TodoList'; // Importing the presentational component

const TodoContainer = () => {
    const [todos, setTodos] = useState(['Item 1', 'Item 2']);

    const addTodo = newTodo => {
        setTodos([...todos, newTodo]);
    };

    return <TodoList items={todos} onAddTodo={addTodo} />;
};

export default TodoContainer;

- And a presentational component `TodoList`:

import React, { useState } from 'react';

const TodoList = ({ items, onAddTodo }) => {
    const [newTodo, setNewTodo] = useState('');

    const handleAddClick = () => {
        onAddTodo(newTodo);
        setNewTodo('');
    };

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddClick}>Add Todo</button>
        </div>
    );
};

export default TodoList;

- In this example, `TodoContainer` is the container component.
	- It manages the `todos` state and contains the `addTodo` function to update this state.
		- It passes the `todos` array and the `addTodo` function to the `TodoList` presentational component as props.
			- `TodoList` then uses these props to render the list of to-do items and provide a way to add new items.
				- This setup keeps the state management and UI rendering concerns neatly separated and organized.
```




















































