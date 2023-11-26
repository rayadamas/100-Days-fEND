# [11/25/2023, 16:50-17:50]
- **Today's Progress**: continuing module on arrays in state
- **Thoughts:** don't understand what's happening in the quiz for the filtering of the items w/ `removeItem`. asking chatty to explain.
	- i think my unfamiliarity w/ the filter method was the source of confusion, but chatty's explanation + https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter helped. 
	- i prefer this method of "crawling" through each lesson even if it means 1 per upload
---
# ![[Day 75 - Codecademy#Arrays in State]]
# quiz
1. Declare and initialize a state variable called `cart` that will keep track of a list of string values.
	- Each of these string values represents a grocery item that we’ve added to our shopping cart.
		- We’ll add event listeners and event handlers to add and remove items to our cart in the coming steps.
			- For now, let’s get started by initializing our `cart` with the value of an empty array for the first render.
2. Take a look at the current code, we have two functions: `addItem()` and `removeItem()`.
	- Let’s add some parameters to these event handling functions, `addItem()` should accept an argument called `item` and `removeItem()` should accept an item called `targetIndex`.
3. Time to shift our focus to the body of the event handler functions. We’ll start with `addItem()`.
	- Update the `cart` state with the state setter function every time `addItem()` is called.
		- Don’t forget to use a callback function for best practice! Inside, use the [array spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) to add a new item to the state array.
4. Last, `removeItem()` should remove from the state when called.
	- Use the array `.filter()` method to remove the item from our state that’s located at the index of the item that was clicked in our list.
```
GroceryCart.js

// Importing React and the useState hook from the React library
import React, { useState } from "react";

// Importing the ItemList component from a local file
import ItemList from "./ItemList";

// Importing produce and pantryItems from a local storeItems module
import { produce, pantryItems } from "./storeItems";

// Defining a functional component named GroceryCart
export default function GroceryCart() {
  // Using the useState hook to create 'cart' state variable with initial value as an empty array
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addItem = (item) => {
    // Updating the cart state by adding the new item at the beginning of the current cart array
    setCart((prev) => {
      return [item, ...prev];
    });
  };

  // Function to remove an item from the cart
  const removeItem = (targetIndex) => {
    // Updating the cart state to filter out the item at the specified index
    setCart((prev) => {
      return prev.filter((item, index) => index !== targetIndex)
    });
  };

  // JSX to render the component
  return (
    // Container div for the entire component
    <div>
      // Heading for the grocery cart
      <h1>Grocery Cart</h1>
      // List to display items in the cart
      <ul>
        { // Mapping each item in the cart to a list element
          cart.map((item, index) => (
            // List item that can be clicked to remove the item from the cart
            <li onClick={() => removeItem(index)} key={index}>
              {item}
            </li>
          ))
        }
      </ul>
      // Heading for the produce section
      <h2>Produce</h2>
      // ItemList component for produce items, with onItemClick set to addItem
      <ItemList items={produce} onItemClick={addItem} />
      // Heading for pantry items
      <h2>Pantry Items</h2>
      // ItemList component for pantry items, with onItemClick set to addItem
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}

ItemList.js

import React from "react";

export default function ItemList({ items, onItemClick }) {
  const handleClick = ({ target }) => {
    const item = target.value;
    onItemClick(item);
  };
  return (
    <div>
      {items.map((item, index) => (
        <button value={item} onClick={handleClick} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
}

storeItems.js

export const produce = [
  "Carrots",
  "Cucumbers",
  "Bell peppers",
  "Avocados",
  "Spinach",
  "Kale",
  "Tomatoes",
  "Bananas",
  "Lemons",
  "Ginger",
  "Onions",
  "Potatoes",
  "Sweet potatoes",
  "Purple cabbage",
  "Broccoli",
  "Mushrooms",
  "Cilantro"
];

export const pantryItems = [
  "Chia",
  "Goji berries",
  "Peanut butter",
  "Bread",
  "Cashews",
  "Pumpkin seeds",
  "Peanuts",
  "Olive oil",
  "Sesame oil",
  "Tamari",
  "Pinto beans",
  "Black beans",
  "Coffee",
  "Rice",
  "Dates",
  "Quinoa"
];
```
- The `removeItem` function in the `GroceryCart` component is designed to remove an item from the cart. Let's break down its functionality in detail:
```
const removeItem = (targetIndex) => {
  setCart((prev) => {
    return prev.filter((item, index) => index !== targetIndex)
  });
};
```
1. **Function Definition**: `removeItem` is defined as a function that takes one argument, `targetIndex`. This `targetIndex` is intended to be the index of the item in the cart array that needs to be removed.
2. **Updating State Using `setCart`**: Inside the function, the `setCart` method is called. `setCart` is a function provided by the `useState` hook that is used to update the state of `cart`. In React, you should use this setter function to update state variables because direct modification of state is not recommended and doesn't trigger a re-render of the component.
3. **Functional Update with Previous State (`prev`)**: The `setCart` method is used here with a function as an argument. This function receives the previous state (`prev`) as its parameter. Using a function to update the state is particularly useful when the new state is derived from the old state.
4. **The `filter` Method**: Inside the function passed to `setCart`, the `filter` method is called on the previous state (`prev`). The `filter` method creates a new array that includes only those elements that pass a certain condition specified in a provided function.
5. **Condition for Filtering**: The condition used in the `filter` method is `(item, index) => index !== targetIndex`. This is a function that takes two arguments: `item` and `index`. It returns `true` for all elements where the `index` is not equal to `targetIndex`. In other words, it keeps all items whose index is different from `targetIndex`, effectively removing the item at `targetIndex` from the array.
6. **Result**: The result of the `filter` operation is a new array that has every item from the original cart except the one at `targetIndex`. This new array is then set as the new state for `cart`, effectively updating the cart by removing the specified item.
7. **React's Re-rendering**: As a result of calling `setCart`, React will re-render the `GroceryCart` component with the updated cart, reflecting the removal of the item.
















































