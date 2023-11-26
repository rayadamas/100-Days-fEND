# [11/24/2023, 13:50-14:55]
- **Today's Progress**: continuing starting from Set From Previous State
	- arrays in state
- **Thoughts:** thought i would need more guidance in the 1st quiz but i didn't! i flowed through each task & didn't need to look at the solution code so i pat my back. 
	- i've completed the 1st task in the next quiz which i'll save for tomorrow
---
# Set From Previous State
- In the previous exercise, we learned to update the [state](https://www.codecademy.com/resources/docs/react/state) by passing it a new value like this:
	- `setState(newStateValue);`
		- However, React state updates are _asynchronous_.
			- This means that there are some scenarios where portions of your code will run before the state is finished updating.
				- This is a good and a bad thing! Grouping the state updates together can improve performance in your application, but it can result in outdated state values. Consequently, it is best practice to update a state with a callback function, preventing accidental outdated values.
- Let’s take a look at the following code to see how it’s done:
```
import React, { useState } from 'react';
 
export default function Counter() {
  const [count, setCount] = useState(0);
 
  const increment = () => setCount(prevCount => prevCount + 1);
 
  return (
    <div>
      <p>Wow, you've clicked that button: {count} times</p>
      <button onClick={increment}>Click here!</button>
    </div>
  );
}
```
- When the button is pressed, the `increment()` event handler is called.
	- Inside this function, we use our `setCount()` state setter with a callback function.
		- Because the next value of `count` depends on the previous value of `count`, we pass a callback function as the argument for `setCount()` instead of a value (as we’ve done in previous exercises).
			- `setCount(prevCount => prevCount + 1)`
				- When our state setter calls the callback function, this _state setter callback function_ takes our previous `count` as an argument.
					- The value returned by this state setter callback function is used as the next value of `count` (in this case, `prevCount + 1`).
			- We can also just call `setCount(count +1)` and it would work the same in this example, but for reasons that are out of scope for this lesson, it is safer to use the callback method.
## quiz
1. Let’s get some practice by creating a navigation bar for a quiz. The navigation bar will let us go back or go to the next question in a quiz.
	- First, define a `goBack()` event handler function. It should allow us to navigate to the previous quiz question.
		- Because our next value of state depends on the previous state value, this function should call the state setter with a callback function.
			- Our state setter callback function needs to compute the next value of `questionIndex` using an argument named `prevQuestionIndex`.
2. Next, add an event listener to the “Go Back” button that will call our newly defined event handler.
3. If we can go back to a previous question, we should also be able to go to the next question.
	- Define a `goToNext()` event handler.
		- Because our next value of state depends on the previous state value, this function should call the state setter with a callback function.
			- Our state setter callback function needs to compute the next value of `questionIndex` using an argument named `prevQuestionIndex`.
4. Add an event listener to the “Next Question” button that will call our newly defined event handler.
5. Lastly, add an `onFirstQuestion` variable with a boolean value, then use that value to toggle the `disabled` attribute of the “Go Back” button on and off.
```
QuizNavBar.js

import React, { useState } from "react";

export default function QuizNavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // define event handlers
  const goBack = () =>
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);

  const goToNext = () =>
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);

  // determine if on the first question or not
  const onFirstQuestion = questionIndex === 0;

  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button onClick={goBack} disabled={onFirstQuestion}>
          Go Back
        </button>
        <button onClick={goToNext} disabled={onLastQuestion}>
          Next Question
        </button>
      </div>
    </nav>
  );
}

```
==N==
### Arrays in State
- #JavaScript arrays are the best data model for managing and rendering [JSX](https://www.codecademy.com/resources/docs/react/jsx) lists. Let’s take a look at the code for a website for a pizza restaurant.
```
import React, { useState } from 'react';

//Static array of pizza options offered. 
const options = ['Bell Pepper', 'Sausage', 'Pepperoni', 'Pineapple'];

export default function PersonalPizza() {
  const [selected, setSelected] = useState([]);

  const toggleTopping = ({target}) => {
    const clickedTopping = target.value;
    setSelected((prev) => {
     // check if clicked topping is already selected
      if (prev.includes(clickedTopping)) {
        // filter the clicked topping out of state
        return prev.filter(t => t !== clickedTopping);
      } else {
        // add the clicked topping to our state
        return [clickedTopping, ...prev];
      }
    });
  };

  return (
    <div>
      {options.map(option => (
        <button value={option} onClick={toggleTopping} key={option}>
          {selected.includes(option) ? 'Remove ' : 'Add '}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(', ')} pizza</p>
    </div>
  );
}

```
- In the above example, we are using two arrays:
	- The `options` array contains the names of all of the pizza toppings available.
		- The `options` array contains _static data_, meaning that it does not change.
			- It’s best practice to define static data models outside of function components since they don’t need to be recreated each time our component re-renders
				- In our JSX, we use the JavaScript `.map()` method to render a button for each of the toppings in our `options` array.
	- The `selected` array represents the selected toppings for our personal pizza.
		- The `selected` array contains _dynamic data_, meaning that it changes, usually based on a user’s actions.
			- We initialize `selected` as an empty array. When a button is clicked, the `toggleTopping()` event handler is called.
				- Notice how this event handler uses information from the event object to determine which topping was clicked.
- When updating an array in a [state](https://www.codecademy.com/resources/docs/react/state), we do not just add new data to the previous array.
	- We replace the previous array with a brand new array.
	- This means that any information that we want to save from the previous array needs to be explicitly copied over to our new array.
		- That’s what this [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) does for us: `...prev`.
- Notice how we use the [`.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [`.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), and [`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) methods of our arrays. If these are new to you, or you just want a refresher, take a minute to review these array methods. We don’t need to be full-fledged JavaScript gurus to build React applications but know that investing time to strengthen our JavaScript skills will always help us do more faster (and have a lot more fun doing it) as React developers.













































