# [12/1/2023, 15:16-16:22]
- **Today's Progress**: Rules of Hooks.
- **Thoughts:** immediately companioning w/ #ChatGPT to get a breakdown.
	- no issues w/ the quiz. it was clear that what was trying to be conveyed was that you *cannot* place side-effects within a conditional, but you *can* place a conditional within a side-effect for more efficient performance.
	- going to prompt chatty w/ the next lessons headline and read on it to finish up
---
# Rules of Hooks
- React Hooks are a powerful feature for managing state and lifecycle features in functional components. Here are some key rules and best practices to keep in mind when using Hooks in React:
1. ==**Only Call Hooks at the Top Level**==:
	- Avoid calling Hooks inside loops, conditions, or nested functions. This ensures that Hooks are called in the same order each time a component renders, which is essential for React to correctly preserve the state of Hooks between multiple useState and useEffect calls.
2. ==**Only Call Hooks from React Functions**==:
	- You should only call Hooks from React function components or custom Hooks. This rule ensures that all stateful logic in a component is clearly visible from its source code.
3. **Use the State Hook for Local State**:
	- The `useState` Hook is a way to add state to functional components. When using `useState`, remember that state doesn't have to be an object – it can be any type, and updating state is asynchronous.
4. **Use the Effect Hook for Side Effects**:
	- The `useEffect` Hook is used for side effects in functional components. It's a close replacement for `componentDidMount`,` componentDidUpdate`, and` componentWillUnmount` in class components. Always include a dependency array to control when the effect runs, and return a cleanup function if needed to prevent memory leaks.
5. ==**Custom Hooks for Complex Logic**==:
	- When you have complex logic that needs to be reused across multiple components, consider writing a custom Hook. This allows you to extract component logic into reusable functions.
6. **Avoid Unnecessary Renders**:
	- Be cautious with dependencies in `useEffect`. Including values that change too often can lead to excessive re-rendering, impacting performance.
7. **Keep Hooks Pure**:
	- Avoid introducing side-effects or asynchronous logic directly inside `useState` or `useReducer`. These Hooks are meant to be pure functions.
8. **Optimize with `useMemo` and `useCallback`**:
	- Use `useMemo` to memoize expensive calculations and `useCallback` to memoize functions, especially if they are dependencies of other Hooks like `useEffect`.
9. **Testing and Linting**:
	- Regularly test your components with Hooks and use the ESLint plugin for React Hooks to enforce these rules and avoid common mistakes.
10. **Understand Hook Dependencies**:
	- Be mindful of the dependency array in `useEffect`, `useMemo`, and `useCallback`. Missing dependencies can lead to bugs, while unnecessary dependencies can cause performance issues.
## Rules of Hooks
- There are two main rules to keep in mind when using Hooks:
	1. Only call Hooks at the top level.
	2. Only call Hooks from React functions.
- As we have been practicing with the [State](https://www.codecademy.com/resources/docs/react/state) Hook and the Effect Hook, we’ve been following these rules with ease, but it is helpful to keep these two rules in mind as you take your new understanding of Hooks out into the wild and begin using [more Hooks](https://react.dev/reference/react) in your React applications.
	- When React builds the [Virtual DOM](https://www.codecademy.com/resources/docs/react/virtual-dom), the library calls the functions that define our components over and over again as the user interacts with the user interface.
		- React keeps track of the data and functions that we are managing with Hooks based on their order in the function component’s definition.
		- For this reason, we always call our Hooks at the top level; we never call hooks inside of loops, conditions, or nested functions.
			- Instead of confusing React with code like this:
				```
				if (userName !== '') {
					useEffect(() => {
						localStorage.setItem('savedUserName', userName);
					});
				}
				```
				- We can accomplish the same goal while consistently calling our Hook every time:
					```
					useEffect(() => {
						if (userName !== '') {
							localStorage.setItem('savedUserName', userName);
						}
					});
					```
					- Secondly, Hooks can only be used in React Functions.
						- We’ve been working with [`useState()`](https://www.codecademy.com/resources/docs/react/hooks/useState) and [`useEffect()`](https://www.codecademy.com/resources/docs/react/hooks/useEffect) in _function_ components, and this is the most common use.
							- The only other place where Hooks can be used is within custom hooks.
								- [Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components) are incredibly useful for organizing and reusing stateful logic between function components.
### quiz
1. The code that we are starting with has a lot of good ideas, but there are some bugs that we need to help sort out. Let’s get started by refactoring the code so that the State Hook is always called at the top level.
	- It looks like the developers that wrote this code wanted to hold off on using the `selectedCategory` and `items` state variables until after the `categories` have been fetched. Conceptually this makes sense, but React requires that all hooks be called on every render, so nesting these `useState()` calls is not a valid option.
		- First, remove the `if (categories)` statement, and the surrounding curly braces `{ }` to bring all of our State Hook calls to the top level.
2. Next, to be clear about initial values, let’s explicitly set the initial state value for `categories` and `selectedCategory` to `null`.
3. It looks like the idea behind using this expression: `if (!categories)` was to only fetch the categories data from the server once.
	- Nesting a call to the Effect Hook inside of a condition like this will cause different hooks to be called on different re-renders, resulting in errors. Luckily, we know a better way!
		- Refactor this code so that the effect responsible for fetching the `categories` data from the backend and saving it to local state follows the rules for Hooks and only fetches the categories data once.
4. Whew, we’re making great progress! It’s such a nice feeling to turn error screens into working code, isn’t it?
	- Now that we are fetching the list of categories from the backend and successfully rendering buttons for each of these to the screen, we are ready to use another effect to fetch the items for each of these categories, when the user clicks on each of them!
		- Uncomment the block of code that was attempting to do this, and refactor it so that we follow the rules of Hooks. To optimize performance, only call the backend for data when we don’t yet have it stored in the component’s state like this code was trying to do.
```
Shop.js

// Importing necessary hooks and functions from React and a custom 'get' function.
import React, { useState, useEffect } from "react";
import { get } from "./mockBackend/fetch";

// Exporting the Shop component as the default export of this module.
export default function Shop() {
  // Using the useState hook to create 'categories' state with initial value null.
  const [categories, setCategories] = useState(null);

  // Using the useState hook to create 'selectedCategory' state with initial value null.
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Using the useState hook to create 'items' state with an initial empty object.
  const [items, setItems] = useState({});

  // useEffect hook to perform side effects. This effect runs only once after the initial render.
  useEffect(() => {
    // Fetching categories data from the backend.
    get("/categories").then((response) => {
      // Updating the 'categories' state with data received from the backend.
      setCategories(response.data);
    });
  }, []); // Empty dependency array means this effect runs only once after the initial render.

  // useEffect hook to fetch items based on the selected category.
  useEffect(() => {
    // Checking if a category is selected and if items for that category have not been fetched yet.
    if (selectedCategory && !items[selectedCategory]) {
      // Fetching items for the selected category from the backend.
      get(`/items?category=${selectedCategory}`).then((response) => {
        // Updating the 'items' state with the new data while preserving the previous state.
        setItems((prev) => ({ ...prev, [selectedCategory]: response.data }));
      });
    }
  }, [items, selectedCategory]); // This effect runs when 'items' or 'selectedCategory' changes.

  // Conditional rendering: if categories data is not yet loaded, show a loading message.
  if (!categories) {
    return <p>Loading..</p>;
  }

  // Main render block of the component.
  return (
    <div className="App">
      <h1>Clothes 'n Things</h1>
      <nav>
        {/* Mapping through categories and rendering buttons for each category. */}
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </nav>
      <h2>{selectedCategory}</h2>
      <ul>
        {/* Conditional rendering of items based on the selected category. */}
        {!items[selectedCategory]
          ? null
          : items[selectedCategory].map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

```
---
- In React, the "Separate Hooks for Separate Effects" principle is a guideline for organizing the `useEffect` hook in your components. This principle is important for several reasons, particularly for maintaining clean, understandable, and efficient code.
	- Here's a breakdown of what it means and why it's important:
1. **What `useEffect` Does**: The `useEffect` hook in React is used to perform side effects in function components. Side effects are operations that can affect other components and cannot be done during rendering. Examples include data fetching, subscriptions, or manually changing the DOM.
2. **Separation of Concerns**: Traditionally, in software development, separation of concerns means organizing code into distinct sections, each handling a specific task. In the context of React and the `useEffect` hook, this principle suggests using separate `useEffect` calls for logically separate side effects.
3. **Why Separate Hooks?**
    - **Clarity and Maintainability**: When each `useEffect` serves a single purpose, it's easier to understand what each part of the component is doing. This clarity becomes crucial for maintaining and debugging the code, especially as the component grows in complexity.
    - **Optimized Performance**: `useEffect` allows you to specify dependencies for each effect. By separating effects into different hooks, you ensure that each effect only re-runs when its specific dependencies change, rather than re-running all effects in a large, combined `useEffect` whenever any of a wide array of dependencies change. This can lead to performance improvements.
    - **Avoiding Unintended Interactions**: Keeping effects separate helps prevent complex interdependencies that can lead to bugs. For example, you might not want a data fetch to happen every time a certain state changes if that state change is also used for a different purpose, like UI updates.
4. **Example**: Consider a component that fetches user data and also has a timer that updates a counter every second. If both these operations are in the same `useEffect`, the data fetching would happen every time the counter updates, which is unnecessary and inefficient. Separating these into two `useEffect` hooks means the data fetching only happens when it needs to, and the timer runs independently.
5. **Best Practices**:
    - **One `useEffect` per Side Effect**: As a rule of thumb, use one `useEffect` for each side effect in your component.
    - **Minimal Dependencies**: Include only the dependencies each effect actually relies on in the dependency array.
    - **Cleanup**: If your effect creates subscriptions or timers, use the cleanup function in `useEffect` to avoid memory leaks and unintended behavior.
- In summary, "Separate Hooks for Separate Effects" in React is about keeping your components organized and efficient by using multiple `useEffect` hooks, each dedicated to a specific task or side effect. This approach aligns with good coding practices and can lead to more readable, maintainable, and performant React applications.















































