# [12/3/2023, 18:31-19:36]
- **Today's Progress**: reviewing The Effect Hook module
- **Thoughts:** doing the same as last time, asking chatty to expand on the review topics with examples
	- think i'm almost done with what i can do for free with #Codecademy :/
---
# THE EFFECT HOOK
## Review
- In this lesson, we learned how to write effects that manage timers, manipulate the #DoM, and fetch data from a server.
	- With the Effect Hook, we can perform these types of actions in function components with ease!
- Let’s review the main concepts from this lesson:
### We can import the `useEffect()` function from the `'react'` library and call it in our function components.
- The `useEffect()` function is an essential part of React, especially when working with function components.
	- It's a hook that allows you to perform side effects in your components.
		- Side effects are operations that can affect other components or cannot be done during rendering, such as data fetching, subscriptions, or manually changing the DOM in React components.
### How `useEffect()` Works:
1. **Importing `useEffect`**: First, you import `useEffect` from the React library.
2. **Using `useEffect`**: You call `useEffect` within your function component. It takes two arguments: a function where your side effect code will go, and a dependency array.
3. **Dependency Array**: The dependency array is a list of dependencies that, when changed, will trigger the effect. If you pass an empty array `[]`, the effect will run once when the component mounts and then never again. If you omit the array, the effect will run after every render.
### Example:
- Let's say you have a component that fetches user data from an API and displays it:
```
import React, { useState, useEffect } from 'react';

function UserDataComponent() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/user')
      .then(response => response.json())
      .then(data => setUserData(data));
  }, []); // The empty array means this effect runs once when the component mounts

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Data</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      {/* other user data */}
    </div>
  );
}

export default UserDataComponent;
```
- In this example, `useEffect` is used to fetch user data when the component is first rendered.
	- The empty dependency array `[]` means that the effect only runs once, akin to a `componentDidMount` lifecycle method in class components.
		- The fetched data is then stored in the `userData` state variable, which is used to display the user's information once the data is loaded.
### _Effect_ refers to a function that we pass as the first argument of the `useEffect()` function. By default, the Effect Hook calls this effect after each render.
- In the context of the `useEffect()` hook in React, the term "effect" refers to the function you provide as the first argument to `useEffect()`. This function contains the code that performs the side effect you want to execute.
### Understanding the Effect in `useEffect()`:
1. **After Each Render**: By default, the effect is called after every completed render of the component. This means that whenever your component re-renders (due to state or props changes), the effect function will be invoked.
    
2. **Cleanup**: Optionally, your effect function can return a cleanup function. This cleanup function is executed before the component is removed from the UI and before the effect runs the next time. It's useful for clearing up resources taken by the effect, like subscriptions or timers.
    
3. **Control Over Execution**: The second argument to `useEffect()`, the dependency array, gives you control over when the effect should run. If the array includes specific values (state or props), the effect will only rerun if those values change. If the array is empty, the effect runs once after the initial render and not again, mimicking the behavior of `componentDidMount` in class components.
### Example:
- Consider a component that needs to perform an action after each render, such as logging the current count value:
```
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render.
    console.log(`You clicked ${count} times`);
  }); // No dependency array is provided, so it runs after every render.

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
```
- In this `Counter` component, the effect logs a message to the console after every render.
	- Since there's no dependency array, any update to the state (in this case, updating the `count` state) will trigger a re-render and subsequently call the effect function.
		- This behavior is useful for reacting to changes in the component or performing actions that need to happen every time the component updates.
### The _cleanup function_ is optionally returned by the effect. If the effect does anything that needs to be cleaned up to prevent memory leaks, then the effect returns a cleanup function, then the Effect Hook will call this cleanup function before calling the effect again as well as when the component is being unmounted.
### Cleanup Function in `useEffect()`:
1. **Purpose**: The cleanup function is used to perform any necessary cleanup operations to prevent memory leaks or other unwanted behavior. This is particularly important for effects that set up subscriptions, timers, or manually alter the DOM.
    
2. **When It's Called**:
    
    - **Before Re-running the Effect**: If your component re-renders and the effect is due to run again (based on its dependency array), React first runs the cleanup function from the previous effect execution.
    - **Component Unmounting**: When the component is being removed from the UI, the cleanup function is called to ensure that any resources set up by the effect are properly disposed of.
3. **Returning the Cleanup Function**: The cleanup function is returned by the effect function itself. It's optional; not all effects need a cleanup.
### Example:
- Consider a component that sets up an interval timer when it's mounted and needs to clear this timer when the component is unmounted or before the effect runs again:
```
import React, { useState, useEffect } from 'react';

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Return the cleanup function
    return () => clearInterval(intervalId);
  }, []); // The empty array means this effect runs once when the component mounts

  return (
    <div>
      <p>Seconds elapsed: {seconds}</p>
    </div>
  );
}

export default TimerComponent;
```
- In this `TimerComponent`, an interval is set up in the effect to increment the `seconds` state every second.
	- The cleanup function, returned by the effect, clears this interval.
		- Since the dependency array is empty, the effect (and hence the setup of the interval) happens once after the component mounts.
			- When the component is about to unmount, or if the effect is to run again (which it won't in this specific case due to the empty dependency array), the interval is cleared, preventing any memory leaks or unintended behavior.
### The _dependency array_ is the optional second argument that the `useEffect()` function can be called with in order to prevent repeatedly calling the effect when this is not needed. This array should consist of all variables that the effect depends on.
### The Dependency Array in `useEffect()`:
1. **Function**: The dependency array is an optional second argument to `useEffect()` that controls when the effect function should be executed.
2. **Dependencies**: The array should include all the variables (state or props) that the effect depends on. The effect will only re-run if one or more of these dependencies have changed since the last render.
3. **Optimization**: By specifying dependencies, you can prevent unnecessary re-runs of the effect, optimizing performance and avoiding potential bugs in your application.
### Rules and Behavior:
1. **No Dependencies**: If you don't provide a dependency array, the effect will run after every render, which is the default behavior.
2. **Empty Array**: Providing an empty array (`[]`) means the effect runs once after the initial render and then never runs again. This mimics the behavior of `componentDidMount` and `componentWillUnmount` in class components.
3. **Specified Dependencies**: If you list specific variables in the array, the effect will only re-run when those variables change.
### Example:
- Imagine a component that fetches data based on a user ID and displays it. The data should be re-fetched whenever the user ID changes:
```
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.example.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUserData(data));
  }, [userId]); // Dependency array with userId

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      {/* Display user data */}
    </div>
  );
}

export default UserProfile;
```
- In this `UserProfile` component, the `useEffect()` hook is used to fetch user data.
	- The `userId` prop is included in the dependency array.
		- Therefore, the effect only re-runs (and the data is re-fetched) when `userId` changes.
			- This ensures the effect is not unnecessarily executed, which would happen if the dependency array were omitted, or executed only once, which would be the case with an empty dependency array.
The Effect Hook is all about scheduling when our effect’s code gets executed. We can use the dependency array to configure when our effect is called in the following ways:

|Dependency Array|Effect called after first render & …|
|---|---|
|undefined|every re-render|
|Empty array|no re-renders|
|Non-empty array|when any value in the dependency array changes|
- Hooks gives us the flexibility to organize our code in different ways, grouping related data as well as separating concerns to keep code simple, error-free, reusable, and testable!







































