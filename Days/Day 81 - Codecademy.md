# [11/30/2023, 14:45-16:16]
- **Today's Progress**: Fetch Data w/ Hooks
- **Thoughts:** really struggled to focus this session but with #ChatGPT to explain the entire code i feel like i understood this lesson. we've built upon the formal introduction of the dependency array, placed after the effect code body of a useEffect call.
	- though in these past several lessons, i don't like how it's been more fill in the blank rather than what felt like a more well-rounded building upon a sample of code.
	- asking chatty to expand upon the lesson itself will prove beneficial going forward too
---
# Fetch Data
- When building software, we often start with default behaviors and then modify them to improve performance.
	- We’ve learned that the default behavior of the Effect Hook is to call the effect function after every single render.
		- Next, we learned that we can pass an empty array as the second argument for [`useEffect()`](https://www.codecademy.com/resources/docs/react/hooks/useEffect) if we only want our effect to be called after the component’s first render.
- In this exercise, we’ll learn to use the dependency array to further configure exactly when we want our effect to be called!
- When our effect is responsible for fetching data from a server, we pay extra close attention to when our effect is called.
	- Unnecessary round trips back and forth between our React components and the server can be costly in terms of:
		- Processing
		- Performance
		- Data usage for mobile users
		- API service fees
			- When the data that our components need to render doesn’t change, we can pass an empty dependency array so that the data is fetched after the first render.
				- When the response is received from the server, we can use a [state](https://www.codecademy.com/resources/docs/react/state) setter from the State Hook to store the data from the server’s response in our local component state for future renders.
				- Using the State Hook and the Effect Hook together in this way is a powerful pattern that saves our components from unnecessarily fetching new data after every render!
	- An empty dependency array signals to the Effect Hook that our effect never needs to be re-run, that it doesn’t depend on anything.
		- Specifying zero dependencies means that the result of running that effect won’t change and calling our effect once is enough.
			- A dependency array that is not empty signals to the Effect Hook that it can skip calling our effect after re-renders unless the value of one of the variables in our dependency array has changed.
				- If the value of a dependency has changed, then the Effect Hook will call our effect again!
					- Here’s a nice example from the [official React docs](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects):
			```
			useEffect(() => {
				document.title = `You clicked ${count} times`;
			}, [count]); // Only re-run the effect if the value stored by count changes
			```
## quiz
1. We’ve started building a weather planner app that will fetch data about the weather and allow our users to write some notes next to the forecast. A lot of good code has already been written, but there currently isn’t anything rendering to the screen.
	- Let’s read through the code and start to wrap our heads around what is going on here. What part of our code do we think is keeping the component from rendering?
		- In our JSX, we are trying to map over an array stored by the `data` state variable, but our effect that fetches this data doesn’t get called until after the first render.
			- So during the first render, data is `undefined` and attempting to call `map()` on `undefined` is causing our error!
				- Let’s prevent this error by checking to see if the data has loaded yet.
					- If it hasn’t, then we want our function component to just return a paragraph tag with the text “Loading…”.
					- If the data is no longer undefined, then the data has been loaded, and we can go ahead and render the full JSX!
2. Our data fetching is being done in our effect. Notice how we are currently just using `alert()` messages to keep track of requesting and receiving data from our server.
	- Instead of just stringifying the response data and showing it in an alert message, let’s store that data in our state.
		- When the data has been fetched, use our state setter function to store that data in our component’s state!
			- Remember that we want to store an array in our `data` state variable, not the whole response object.
3. Type in each of the notes’ input fields in our table. What do you notice? Why do you think this is happening?
- Each time that we type in an input field, the component re-renders to show the new value of that field. Even though we don’t need any new data from the backend, our component is fetching new data after every render!
	- Use an empty dependency array to ensure that data is only fetched after our component’s first render.
4. Wow, that small code change made a huge difference in the performance of our weather planner app!
	- Let’s make one more improvement. Did you notice the buttons at the top of our app? We want our users to be able to choose between planning around daily weather forecasts and weekly weather forecasts. Clicking on these buttons currently doesn’t change anything. Let’s fix that!
		- The server has two different endpoints called: `/daily` and `/hourly`.
			- Let’s use the value of the `forecastType` state variable to determine which endpoint our effect should request data from.
				- After making this change, our effect behaves differently based on the value of `forecastType`. You could say that how we use our effect depends on it!
					- Add this variable to our dependency array so that the effect is called again, updating `data` appropriately, after re-renders where the user has selected a different forecast type.
```
Forecast.js

// Imports the React library and two hooks - useState and useEffect
import React, { useState, useEffect } from "react";
// Imports the 'get' function from a local mock backend file
import { get } from './mockBackend/fetch';

// Defines a functional component named Forecast, exported as the default export of this file
export default function Forecast() {
  // Initializes a state variable 'data' with the initial value as undefined
  const [data, setData] = useState();
  // Initializes a state variable 'notes' as an empty object
  const [notes, setNotes] = useState({});
  // Initializes a state variable 'forecastType' with the initial value '/daily'
  const [forecastType, setForecastType] = useState('/daily');

  // useEffect hook to perform side effects; in this case, fetching data
  useEffect(() => {
    // Alerts the user that a data request is being made
    alert('Requested data from server...');
    // Fetches data based on the current forecastType
    get(forecastType).then((response) => {
      // Alerts the user with the received response
      alert('Response: ' + JSON.stringify(response,'',2));
      // Updates the 'data' state with the received response's data
      setData(response.data);
    });
    // This effect runs every time 'forecastType' changes
  }, [forecastType]);

  // Function to handle changes in the notes input fields
  const handleChange = (index) => ({ target }) =>
    // Updates the 'notes' state with new values
    setNotes((prev) => ({
      ...prev,
      [index]: target.value
    }));
  
  // Conditional rendering: if 'data' is not available, shows a loading message
  if (!data) {
    return <p>Loading...</p>;
  }

  // The main render method of the component
  return (
    // A container div with a class name 'App'
    <div className='App'>
      // Heading of the app
      <h1>My Weather Planner</h1>
      // Div containing buttons to switch forecast types
      <div>
        // Button to set forecast type to daily
        <button onClick={() => setForecastType('/daily')}>5-day</button>
        // Button to set forecast type to hourly
        <button onClick={() => setForecastType('/hourly')}>Today</button>
      </div>
      // Table to display weather data
      <table>
        // Table header
        <thead>
          <tr>
            <th>Summary</th>
            <th>Avg Temp</th>
            <th>Precip</th>
            <th>Notes</th>
          </tr>
        </thead>
        // Table body, which dynamically renders rows based on 'data'
        <tbody>
          {data.map((item, i) => (
            // Each row is uniquely identified by item's id
            <tr key={item.id}>
              // Displaying the weather summary
              <td>{item.summary}</td>
              // Displaying the average temperature
              <td> {item.temp.avg}°F</td>
              // Displaying the precipitation percentage
              <td>{item.precip}%</td>
              // Input field for notes, bound to the corresponding item in 'notes' state
              <td>
                <input
                  value={notes[item.id] || ''}
                  onChange={handleChange(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```
### The Basics of Fetching Data
1. **useState Hook**: This hook is used to declare state variables in functional components. For data fetching, you typically need at least two states: one to store the data and another to track the loading status.
	- Example:
		- const [data, setData] = useState(null);
		- const [loading, setLoading] = useState(false);
2. **useEffect Hook**: This hook is perfect for handling side effects, such as data fetching, subscriptions, or manually changing the DOM. It runs after every render by default, but you can control when it runs by specifying dependencies.
### Fetching Data with useEffect
- The `useEffect` hook can be used to perform the data fetching after the component mounts or when certain conditions change (like a change in URL or a query parameter).
	- Example:
```
useEffect(() => {
  // Set loading true when the fetch starts
  setLoading(true);

  // Fetch data from an API or other source
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Update the state with the fetched data
      setData(data);
    })
    .catch(error => {
      // You might want to handle errors as well
      console.error('Error fetching data: ', error);
    })
    .finally(() => {
      // Set loading false when the fetch is complete
      setLoading(false);
    });
}, [url]); // This effect runs when 'url' changes
```
### Handling Loading and Errors
- **Loading State**: It's a good practice to show some feedback while the data is being fetched. You can use a loading state for this.
- **Error Handling**: Catching and handling errors during data fetch is crucial for a robust application.
### Optimizing Performance
1. **Avoiding Unnecessary Fetches**: By using the dependency array of `useEffect`, you can control when the data should be re-fetched. If the dependencies haven't changed, the effect won't rerun, preventing unnecessary fetches.
2. **Cleanup Function**: In some cases, you might need a cleanup function to cancel the fetch request if the component unmounts before the request completes, preventing setting state on an unmounted component.
### Advanced Patterns
- **Custom Hooks**: For reusability, you can create a custom hook for data fetching. This hook can encapsulate the data fetching logic and be used across different components.
    - Example:
```
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetching logic here
  }, [url]);

  return { data, loading };
};
```
- **useReducer for Complex State**: In cases where the state logic becomes complex, `useReducer` can be a better alternative to `useState`.
- **Suspense for Data Fetching**: React 18 introduced Suspense for data fetching, allowing components to “wait” for something before rendering, which can be used to streamline the handling of loading states.
### Conclusion
- React's hooks provide a powerful and elegant way to fetch, display, and manage data in your applications. By understanding and applying these patterns correctly, you can build highly interactive and efficient web applications.










































