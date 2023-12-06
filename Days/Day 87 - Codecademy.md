# [12/6/2023, 14:31-15:44]
- **Today's Progress**: Parent/Child and Sibling/Sibling Communication
	- Render Presentational Components in Container Component
	- pausing here. tomorrow will be a review session 
- **Thoughts:** did a quick review of the preview i got from #ChatGPT. quiz was straightforward, followed the flow from the prior lesson. 
	- in 2nd quiz i incorrectly had the two imports wrapped in `{}`
		- initially had `isFavorite={true}`, and passed that step but that was unexpected since i was trying to get an error message for guidance. the correct code is `isFavorite={currentGP === favoriteGP}`, but since both eval as true booleans i passed.
			- just passed the 3rd step when i was looking for an error, i didn't even define the prop! what it was calling for was what i though it was, but again is a boolean so it eval'd to true and let me pass. 
---
# ![[Day 86 - Codecademy#Parent/Child and Sibling/Sibling Communication preview]]
# Parent/Child and Sibling/Sibling Communication
- We’ve seen how container components communicate with presentational components by passing their [state](https://www.codecademy.com/resources/docs/react/state) through [props](https://www.codecademy.com/resources/docs/react/props), but how do presentational components communicate changes to the container?
	- One idea would be to update the props directly like this:
```
function Presentational(props) {
  const buttonClickHandler = () => {
    props.isActive = !props.isActive
  }
  // rest of code
}
```
- But this would not be correct because components should never directly update their props.
	- Recall that React functional components should be ==pure functions== and updating prop values directly would violate that principle.
		- In order for a presentation (stateless) component to communicate changes to a container (stateful) component, the (stateful) container component must define and provide a way for the (stateless) presentational component to communicate with it using a change handler function passed as a prop.
- For Example:
```
function Container() {
  const [isActive, setIsActive] = useState(false);                              
                                
  return (
    <>
      <Presentational active={isActive} toggle={setIsActive}/>
      <OtherPresentational active={isActive}/>
    </>
    );                          
  }
                        
function Presentational(props) {
  return (
    <h1>Engines are {props.active}</h1>
    <button onClick={() => props.toggle(!props.active)}>Engine Toggle</button>
  );
}
                            
function OtherPresentational(props) {
  // render...
}
```
- In the example above, `Container` maintains the `isActive` state and passes `setIsActive` to `Presentational` through the `toggle` prop.
	- When `Presentational` needs to communicate a change to the `active` prop, it uses the function passed to it through the `toggle` prop.
		- Using this pattern also indirectly results in communication between sibling components (components with a common parent), as shown in the example above.
			- When `Presentational` communicates a change through `toggle`, it causes a state update in `Container`, which provides the updated value for `isActive` to both `Presentational` and `OtherPresentational` through the `active` prop.
## quiz
1. Let’s start separating the form rendering logic from `GuineaPigs` component into a new presentational component called `GuineaPigsForm`.
	- Near the top left of the code editor, click on the folder icon. Inside **components/**, create a new file named **GuineaPigsForm.js**.
		- Next, open **components/GuineaPigsForm.js** and create and export a functional component called `GuineaPigsForm`. Using object destructuring, extract `favoriteGP`, `onSelectFavorite`, and `onResetFavorite` props.
			- Finally, click Run.
2. Open **containers/GuineaPigsContainer.js**.
	- Locate the `<div>` element with the `id` of `guineaPigsForm`. Copy this `div` and its content.
		- Now, open **components/GuineaPigsForm.js**. Inside the function, let’s return the JSX you’ve copied.
			- Finally, replace `resetFavoriteHandler` with `onResetFavorite` and replace `favoriteChangeHandler` with `onSelectFavorite`.
```
GuineaPigsForm.js

import React from "react";

function GuineaPigsForm( {favoriteGP, onSelectFavorite, onResetFavorite} ) {
  return (
    <div data-testid="guineaPigsForm" id="guineaPigsForm">	
			  <label>Choose Your Favorite Guinea Pig:
          <select value={favoriteGP} onChange={onSelectFavorite}>
            <option value="0">Alex</option>
            <option value="1">Izzy</option>
            <option value="2">Brandon</option>
            <option value="3">DJ</option>
          </select>
        </label>
        <button onClick={onResetFavorite}>Reset Favorite</button>
		  </div>
  )
};

export default GuineaPigsForm;

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
```
==N==
# Render Presentational Components in Container Component preview
1. **Container and Presentational Components**: First, it's important to understand the distinction between these two types of components:
    
    - **Container Components**: These are concerned with how things work. They are responsible for managing data, state, and any business logic. They usually handle tasks like data fetching, transforming data, and managing application state.
    - **Presentational Components**: These are concerned with how things look. They are responsible for rendering the UI. They receive data through props and display it, and are often stateless and reusable.
2. **Rendering Presentational Components in a Container**:
    
    - **Structure**: In this pattern, a container component handles all the logic, data fetching, and state management. It then renders one or more presentational components, passing the necessary data and callbacks as props.
    - **Data Flow**: The container component retrieves and processes the data, then passes it down to the presentational components. These presentational components then use this data to render the UI.
    - **Separation of Concerns**: This pattern allows for a clear separation of concerns. The container component deals with the 'how', while the presentational components deal with the 'what'.
    - **Reusability and Maintainability**: Presentational components become easily reusable and maintainable, as they are not tied up with the business logic or the state of the application.
3. **Example**:
    
    - Imagine you're building a blog application. You have a `BlogContainer` component that fetches blog posts from an API. The `BlogContainer` then renders a `BlogList` presentational component, passing it the list of blog posts as a prop. The `BlogList` is solely responsible for displaying the posts. It can be styled and structured independently of how the data is fetched or managed.
4. **Advantages**:
    
    - **Testability**: Container components can be tested for their business logic and data handling, while presentational components can be tested separately for their rendering behavior.
    - **Clarity and Organization**: This pattern provides a clear structure to your code, making it easier to understand and navigate.
    - **Flexibility**: It allows for more flexibility in development. You can easily swap out or modify presentational components without affecting the data logic.
5. **Considerations with Hooks**:
    
    - With the introduction of hooks in React, the line between container and presentational components can become blurred. Hooks allow for more functional components that can handle state and side effects, potentially reducing the need for traditional container components.
	- In summary, rendering presentational components within a container component is a powerful pattern in React that promotes separation of concerns, reusability, and maintainability. It helps in structuring applications in a way that separates data and logic handling from UI rendering, making the codebase more organized and efficient.

# Render Presentational Components in Container Component
- We’ve learned how to separate logic in a container component and render [JSX](https://www.codecademy.com/resources/docs/react/jsx) in a presentational component.
	- The container component should now render the presentational components instead of rendering JSX. The container component’s [state](https://www.codecademy.com/resources/docs/react/state) will be passed down as [props](https://www.codecademy.com/resources/docs/react/props) to the presentation components to keep them reactive.
## quiz
1. Let’s start by importing the two presentation components we created earlier, **components/GuineaPigsForm.js** and **components/GuineaPigsSlideShow.js**
2. Next, in the return statement, go ahead and delete the content inside the fragment (`<></>`).
	- Inside the fragment, render the `GuineaPigsSlideShow` with the `src` prop with the value of the `src` state constant and set the value of the `isFavorite` prop to `true` when `currentGP` is equal to `favoriteGP` and `false` otherwise.
3. Inside the fragment, under `GuineaPigsSlideShow`, render the `GuineaPigsForm` with the `favoriteGP` prop with the value of the `favoriteGP` state constant, and set the prop `onSelectFavorite` equal to the `favoriteChangeHandler` function, and the `onResetFavorite` prop equal to `resetFavoriteHandler` function.
4. Let’s change the component’s name in **./containers/GuineaPigsContainer.js** from `GuineaPigs` to `GuineaPigsContainer` and fix the export from `GuineaPigs` to `GuineaPigsContainer`.
	- Navigate to the **index.js** file and:
		- Remove `GuineaPigs` import from **./components/GuineaPigs.js** and import `GuineaPigsContainer` from **./containers/GuineaPigsContainer**.
		- Replace `root.render(<GuineaPigs />)` with `root.render(<GuineaPigsContainer />)`
			- Finally, click run and you should see the application load and “look” the same to the user but for the developer, our application is cleaner and more maintainable.
```
GuineaPigsContainer.js

import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import GuineaPigsSlideShow from "../components/GuineaPigsSlideShow";
import GuineaPigsForm from "../components/GuineaPigsForm";


const GUINEAPATHS = [
  "https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
];

function GuineaPigsContainer() {
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
      <GuineaPigsSlideShow src={src} isFavorite={currentGP === favoriteGP}/>
      <GuineaPigsForm favoriteGP={favoriteGP} onSelectFavorite={favoriteChangeHandler} onResetFavorite={resetFavoriteHandler}/>
  </>
  );
}

export default GuineaPigsContainer;

GuineaPigsForm.js

import React from "react";

function GuineaPigsForm({favoriteGP, onSelectFavorite, onResetFavorite}) {
  return (
    <div data-testid="guineaPigsForm" id="guineaPigsForm">	
      <label>Choose Your Favorite Guinea Pig:
        <select value={favoriteGP} onChange={onSelectFavorite}>
          <option value="0">Alex</option>
          <option value="1">Izzy</option>
          <option value="2">Brandon</option>
          <option value="3">DJ</option>
        </select>
      </label>
      <button onClick={onResetFavorite}>Reset Favorite</button>
		</div>
  );
}

export default GuineaPigsForm;


GuineaPigsSlideShow.js

import React from "react";

function GuineaPigsSlideShow({src, isFavorite}) {
  return (
      <div data-testid="guineaPigsSlideShow" id="guineaPigsSlideShow">
        <h1>Cute Guinea Pigs</h1>
        <img alt="Guinea Pigs Slideshow" src={src} className={isFavorite? "favorite" : ""}/>
      </div>
  );

}

export default GuineaPigsSlideShow;


index.js

import React from "react";
import { createRoot } from "react-dom/client";
import GuineaPigsContainer from "./components/GuineaPigs"

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<GuineaPigsContainer />);
```



































