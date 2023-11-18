# [11/18/2023, 11:58-13:00]
- **Today's Progress**: review of Props module + quiz. 
- **Thoughts:** spent the entire session: figuring out how to solve the challenge, then running the prompts through #ChatGPT to have it explain each line in detail. then i spent a lot of time simple talking/walking through the code so my eyes become familiar with it. 
---
# PROPS
## Review
- That completes our lesson on props! Here are some of the skills that you’ve learned:
	- Passing a prop by giving an _attribute_ to a component instance.
	- Accessing a passed-in prop via `props.propName`.
	- Displaying a prop.
	- Using a prop to make decisions about what to display.
	- Defining an event handler in a function component.
	- Passing an event handler as a prop.
	- Receiving a prop event handler and attaching it to an event listener.
	- Naming event handlers and event handler attributes according to a convention.
	- Accessing `props.children`.
	- Assigning default values to [props](https://www.codecademy.com/resources/docs/react/props).
- ### quiz
- For further practice, consider the following challenge:
	- Create a simple online grocery store with reusable React function components. Your store should provide users with at least four buttons for possible items they can purchase. Every time a user clicks on a button, it should alert that the thing they’ve clicked on has been added to the cart via an alert message.
		1. Click on the folder icon next to the **App.js** file and create a **GroceryItem.js** file.
		2. Define a `GroceryItem` function component.
		3. The component should accept props and return a button that displays the grocery item’s name and contain an event handler for the `onClick` event.
		4. The component should be used to render the four grocery items, passing in the appropriate props.
		5. In **App.js**, return four instances of the `GroceryItem` component with names such as `Eggs`, `Banana`, `Strawberry`, or `Bread`. The items are up to you!
```
GroceryItem.js

// Importing React to use JSX and React features
import React from 'react';

// Defining the GroceryItem functional component.
// It takes props as an argument to receive data from the parent component( App() ).
function GroceryItem(props) {
    // Destructuring the itemName from props.
    // This will be the name of the grocery item passed from the parent component.
    const { itemName } = props;

    // Defining a function (our handler function) that will be called when the button is clicked.
    // It displays an alert with the item name.
    const handleAddToCart = () => {
        alert(`${itemName} has been added to the cart.`);
    };

    // Rendering a button with the item name.
    // The onClick event is set to call handleAddToCart when the button is clicked.
    return <button onClick={handleAddToCart}>{itemName}</button>;
}

// Exporting the GroceryItem component so it can be used in other files.
export default GroceryItem;

App.js

// Importing React to use JSX and React features.
import React from 'react';
// Importing the GroceryItem component from the GroceryItem.js file.
import GroceryItem from './GroceryItem';

// Defining the App functional component.
function App() {
    // Returning JSX to render the UI.
    return (
        <div>
            {/* Rendering four GroceryItem components with different itemNames. */}
            {/* Each GroceryItem represents a button for a grocery item. */}
            <GroceryItem itemName="Eggs" />
            <GroceryItem itemName="Banana" />
            <GroceryItem itemName="Strawberry" />
            <GroceryItem itemName="Bread" />
        </div>
    );
}

// Exporting the App component so it can be used as the root component.
export default App;

```
- ### Question
	- In the context of this [exercise 11](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-101-components-interacting-u/lessons/this-props/exercises/props-recap), what types of values can be passed as props?
		- ### Answer
			- The types of values that can be passed as props are mostly the same data types that are available in #JavaScript.
			- The most common ones are as follows:
```
// array
[1, 2, 3]

// boolean
true

// function
function add(a, b) {
  return a + b;
}

// number
3.14

// object
var dog = {
  name: "Cookie",
  age: 8
}

// string 
"Hello world"

// symbol
Symbol('foo')
```
==N==




















































