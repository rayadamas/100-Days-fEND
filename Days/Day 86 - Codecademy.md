# [12/5/2023, 15:00-16:09]
- **Today's Progress**: continuing w/ Create Presentational Component
- **Thoughts:** only issue w/ this quiz was i neglected to add the 's' to make Pigs plural so the test was failing until i noticed.
	- asked #ChatGPT to give me a rundown on the next lesson
---
# Create Presentational Component
1. **Purpose**: Presentational components, as the name suggests, are concerned with how things look. They focus on rendering the UI and are often reusable across different parts of the application.
2. **Characteristics**:
    - **Purely UI**: They primarily render HTML (or JSX in React's case).
    - **No Side Effects**: They don’t interact with backend services or perform any data fetching. Their job is to present something to the DOM.
    - **Props-Driven**: They receive data through props and display it. They might also receive functions as props to handle user interactions (like clicks).
    - **Stateless**: Ideally, they are stateless, meaning they don’t manage or mutate their own state. However, with the advent of hooks in React, this line has blurred a bit. They can have internal state, but it's usually UI state rather than data or business logic.
    - **Styling**: They are often accompanied by styles. They might use CSS modules, styled-components, or other styling methods.
    - **Reusability**: Because they are not tied to the application logic, they are highly reusable.
3. **Example**: A simple button component that takes a label and an onClick handler as props could be a presentational component. It focuses solely on how the button looks and behaves (UI-wise), but it doesn’t know what happens when the button is clicked.
4. **Benefits**:
    - **Maintainability**: Separation of concerns makes it easier to maintain and update components.
    - **Reusability**: They can be easily reused across different parts of the application or even in different projects.
    - **Testability**: Easier to test as they are not tied to the business logic or state of your application.

- Now that we’ve created a container component and separated the logic, we can create a presentational (or stateless) component to render our guinea pig slideshow.
	- The presentational component’s only job is to contain [JSX](https://www.codecademy.com/resources/docs/react/jsx).
		- It should be an exported component and should not render itself because a presentational component will always get rendered by a container component.
			- For example, say we have components called `Presentational` and `Container`. **Presentational.js** must export the component function (or class, when applicable):
```
function Presentational(/*...props*/) {
  // body of the component                      
}
                        
export default Presentational;

- Container.js must import that component:

import { Presentational } from 'Presentational.js';
function Container() {
  // renders Presentational component
}
```
- It’s important to understand that although a presentational component doesn’t maintain [state](https://www.codecademy.com/resources/docs/react/state), it doesn’t mean it is not reactive.
	- Recall that, like state, a change in [props](https://www.codecademy.com/resources/docs/react/props) also triggers a potential change in the rendered JSX.
## quiz
1. Let’s start separating some of the rendering logic from `GuineaPigs` component into a new presentational component called `GuineaPigsSlideShow`.
	- Near the top left of the code editor, click on the folder icon. Inside **components/**, create a new file named **GuineaPigsSlideShow.js**.
		- Next, open **components/GuineaPigsSlideShow.js** and create and export a functional component called `GuineaPigsSlideShow`.
			- Using object destructuring, extract the `src` and `isFavorite` props.
				- Finally, click Run.
2. Open **containers/GuineaPigsContainer.js**.
	- Locate the `div` with the `id` of `guineaPigsSlideShow`. Copy this `div` and its content.
		- Now, open **components/GuineaPigsSlideShow.js**.
			- Inside the function, let’s return the JSX you’ve copied.
				- Finally, the `img`‘s `src` attribute value will automatically pick up its new value from the `src` prop.
				- We’ll need to fix the `className` attribute value from `currentGP === favoriteGP? "favorite" : ""` to `isFavorite? "favorite" : ""` since we no longer have direct access to `currentGP` and `favoriteGP`.
```
GuineaPigsContainer.js

import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const GUINEAPATHS = [
  "https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
];

function GuineaPigs() {
  const [currentGP, setCurrentGP] = useState(0);
	const [favoriteGP, setFavoriteGP] = useState(0);
	const src = GUINEAPATHS[currentGP];

  const favoriteChangeHandler = (event) => {
    setFavoriteGP(parseInt(event.target.value));
  }

  const resetFavoriteHandler = () => {
    setFavoriteGP(0);
  }

  useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentGP(prevGP => {
				const nextGP = prevGP + 1;
				return nextGP % GUINEAPATHS.length;
			});
		}, 5000)
		return () => clearInterval(intervalId);
	}, []);


	return (
    <>
      <div data-testid="guineaPigsSlideShow" id="guineaPigsSlideShow">
        <h1>Cute Guinea Pigs</h1>
        <img alt="Guinea Pigs Slideshow" src={src} className={currentGP === favoriteGP? "favorite" : ""}/>
      </div>
		  <div data-testid="guineaPigsForm" id="guineaPigsForm">	
			  <label>Choose Your Favorite Guinea Pig:
          <select value={favoriteGP} onChange={favoriteChangeHandler}>
            <option value="0">Alex</option>
            <option value="1">Izzy</option>
            <option value="2">Brandon</option>
            <option value="3">DJ</option>
          </select>
        </label>
        <button onClick={resetFavoriteHandler}>Reset Favorite</button>
		  </div>
  </>
  );
}

export default GuineaPigs;


GuineaPigsSlideShow.js

import React from "react";

function GuineaPigsSlideShow( {src, isFavorite} ) {
  return (
    <>
    <div data-testid="guineaPigsSlideShow" id="guineaPigsSlideShow">
        <h1>Cute Guinea Pigs</h1>
        <img alt="Guinea Pigs Slideshow" src={src} className={isFavorite? "favorite" : ""}/>
      </div>
    < />
  )
};

export default GuineaPigsSlideShow;
```
---
## Parent/Child and Sibling/Sibling Communication preview
1. **Parent-Child Communication**:    
    - **One-Way Data Flow**: In React, the data flow is primarily unidirectional, from parent to child. This is achieved through props. A parent component passes data down to its child components as props.
    - **Props**: Props are the standard way to pass data from a parent to a child. For instance, a parent component can pass a string, number, object, array, or even a function as a prop to its child.
    - **Callback Functions**: For child-to-parent communication, parents can pass callback functions as props to the child. When something happens in the child component (like a button click), it calls the callback function, effectively informing the parent about the event.
    - **Example**: A parent `TodoList` component passes individual `todo` items as props to child `TodoItem` components. When a `TodoItem` is clicked, it triggers a callback function passed by the parent to update the state.
2. **Sibling-Sibling Communication**:
    - **Via Parent Component**: Since React's data flow is unidirectional, direct communication between sibling components is not straightforward. Siblings often communicate through their parent component.
    - **Shared State**: The parent component holds the state that is shared between siblings. When one sibling updates the state (via a callback function passed down by the parent), the other sibling receives the updated state as props.
    - **Lifting State Up**: This is a common pattern where shared state is moved up to the closest common ancestor of the components that need it.
    - **Example**: Two sibling components, `AddTodo` and `TodoList`, need to share the list of todos. The `App` component (their parent) holds the state of todos. `AddTodo` adds a todo, updating the state in `App`, which then passes the updated todos list to `TodoList`.
3. **Advanced Patterns**:
    - **Context API**: For more complex scenarios or when passing props through many layers becomes cumbersome, React's Context API can be used. It provides a way to share values like configuration data, themes, etc., across the component tree without explicitly passing props.
    - **Redux or State Management Libraries**: For large-scale applications, state management libraries like Redux manage global state that can be accessed by any component in the application, facilitating communication across deeply nested components.
- Understanding these communication patterns is crucial for structuring a React application efficiently. Parent-child communication is straightforward with props and callback functions, while sibling communication typically involves coordinating through their common parent component or using advanced state management techniques for more complex scenarios.
















































