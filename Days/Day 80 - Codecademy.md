# [11/29/2023, 14:43-16:00]
- **Today's Progress**: Control WHEN Effects are called
- **Thoughts:** contention w/ the first part of this quiz, had to figure out how to properly use setInterval, then had to reference yesterday's quiz to properly setup the callback function. i was trying call setInterval, then place setTime as the function, then have the callback occur, i didn't actually code the callback function out. initially put the 2nd state var in the wrong place. initially placed the dependency array too early within useEffect instead of at it's bottom.
	- fed the completed quiz to chatty to explain line-by-line
---
# Control When Effects Are Called
- The [`useEffect()`](https://www.codecademy.com/resources/docs/react/hooks/useEffect) function calls its first argument (the effect) after each time a component renders.
	- We’ve learned how to return a cleanup function so that we don’t create performance issues and other bugs, but sometimes we want to skip calling our effect on re-renders altogether.
- It is common, when defining function components, to run an effect only when the component **mounts** (renders the first time), but not when the component re-renders.
	- The Effect Hook makes this very easy for us to do! If we want to only call our effect after the first render, we pass an empty array to `useEffect()` as the second argument.
		- This second argument is called the **dependency array**.
		- The dependency array is used to:
			- tell the `useEffect()` method when to call our effect
			- and when to skip it.
				- Our effect is always called after the first render but only called again if something in our dependency array has changed values between renders.
- We will continue to learn more about this second argument over the next few exercises, but for now, we’ll focus on using an empty dependency array to call an effect when a component first mounts, and if a cleanup function is returned by our effect, calling that when the component unmounts.
```
	useEffect(() => {  
	  alert("component rendered for the first time");  
	  return () => {  
	    alert("component is being removed from the DOM");  
	  };  
	}, []);
```
- Without passing an empty array as the second argument to the `useEffect()` above, those alerts would be displayed before and after every render of our component, which is clearly not when those messages are meant to be displayed.
	- Simply passing `[]` to the `useEffect()` function is enough to configure when the effect and cleanup functions are called!
## quiz
1. Let’s get started by using the following four functions to advance the number stored in `time` each second:
	- `useEffect()`: the Effect Hook, imported from the ‘react’ library.
	- JavaScript [`setInterval()` function](https://developer.mozilla.org/en-US/docs/Web/API/setInterval).
	- `setTime()`: our state setter function.
	- A state setter callback function: used by `setTime()` to calculate the next value of `time` based on the previous value of `time`.
	- Add an effect that uses the `setInterval()` function to call `setTime()` every second (or 1000 ms).
2. Our `time` value is updating way too quickly because the Effect Hook calls our effect after every render!
	- Our effect is creating a new interval that updates the value of `time` each second. We keep adding more and more intervals that keep updating the same `time` variable. We need to clean up our old intervals before adding new ones!
		- Let’s start by creating a variable, `intervalId` and assign it to our `setInterval()` code from the previous step.
			- Then, below your `intervalId` declaration, use the `return` keyword to return a cleanup function. Our cleanup function should use the [`clearInterval()` function](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval).
3. That seems to have solved our way-too-many-intervals-all-updating-the-same-variable bug!
	- Let’s add an extra variable to our timer and allow the user to type a message while the timer is counting up.
		- First, let’s create a state variable called `name` with a state setter called `setName()` to manage the value of the input box. Set the state variable to the initial value of an empty string.
4. Great! Let’s go ahead and put that `input` tag in.
	- Add an `<input>` element to our JSX. Set its `value` attribute to our state variable `name`.
5. Next, define an event handler function named `handleChange()`. This event handler will take in the value of the user’s input and update the state variable.
	- `handleChange()` should use object destructuring on its parameter to take in `target` and use the state setter `setName` to set the value of `name` to `target.value`.
6. Excellent job! Put that `handleChange()` event handler to work!
	- Add the `onChange` event listener to the input tag, setting it to `handleChange`.
	- Try typing now!
7. Uh oh. More bugs. Did you notice it yet? Type your full name in the text input field. See how the timer seems to stop counting while you are typing? That’s not what we want!
	- What is going on here? We are creating a new interval after each render, that interval will call our state setter to update `time` exactly one second after each render. When we type in the input field, our component keeps re-rendering, cleaning up old intervals, and starting new ones… but our state setter never gets called until one second after we are done typing!
	- Let’s fix this once and for all! We really want to use a single interval. We want that interval to start ticking away after our first render and we want it to be cleaned up after the final render.
		- To accomplish this, use an empty dependency array!
```
Timer.js

// Importing necessary hooks and features from React.
import React, { useState, useEffect } from 'react'; 

// Defining a functional component named Timer.
export default function Timer() {
  // useState hook to create a 'time' state variable with initial value 0.
  const [time, setTime] = useState(0);

  // useState hook to create a 'name' state variable with initial value as an empty string.
  const [name, setName] = useState("");

  // useEffect hook to set up a side effect in the component.
  useEffect(() => {
    // Creating an interval that updates the 'time' state by 1 every 1000 milliseconds (1 second).
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts or dependencies change.
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render.

  // Function to update the 'name' state based on input field changes.
  const handleChange = ({ target }) => setName(target.value);

  // JSX to render the component UI.
  return (
    // React fragment to return multiple elements without adding extra nodes to the DOM.
    <>
      {/* Displaying the current 'time' state value. */}
      <h1>Time: {time}</h1>

      {/* Input field that updates the 'name' state on every change. */}
      <input onChange={handleChange} value={name} type='text' /> 
    </>
  );
}
```













































