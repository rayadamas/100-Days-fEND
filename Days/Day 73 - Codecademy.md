# [11/22/2023, 15:20-16:57]
- **Today's Progress**: reviewing the previous day's quiz, then continuing w/ Initializing State
	- Use State Setter Outside of JSX
- **Thoughts:** will need to review on the WHEN to use object destructuring vs. array destructuring.
	- i'm gonna review the intro to this lesson before the quiz again tomorrow because the syntax of separation of the #JSX and our event handlers is not fully clicking, like the reasoning behind such. 
---
# ![[Day 72 - Codecademy#Update Function Component State]]
# Initialize State
- Like how you used the [State](https://www.codecademy.com/resources/docs/react/state) Hook to manage a variable with string values, we can use the State Hook to manage the value of any primitive data type and even data collections like arrays and objects!
	- Have a look at the following function component. What data type does this state variable hold?
```
import React, { useState } from 'react';

function ToggleLoading() {
  const [isLoading, setIsLoading] = useState();

  return (
    <div>
      <p>The data is {isLoading ? 'Loading' : 'Not Loading'}</p>
      <button onClick={() => setIsLoading(true)}>
        Turn Loading On
      </button>
      <button onClick={() => setIsLoading(false)}>
        Turn Loading Off
      </button>
    </div>
  );
}
```
- The `ToggleLoading()` function component above uses the simplest of all data types, a boolean.
	- Booleans are frequently used in React applications to represent whether data has loaded or not.
		- In the example above, we see that `true` and `false` values are passed to the state setter, `setIsLoading()`.
- This code works just fine as is, but what if we want our component to start off with `isLoading` set to `true`?
	- To initialize our state with any value we want, we simply pass the initial value as an argument to the [`useState()`](https://www.codecademy.com/resources/docs/react/hooks/useState) function call.
		- `const [isLoading, setIsLoading] = useState(true);`
- There are three ways in which this code affects our component:
	1. During the first render, the _initial state argument_ is used.
	2. When the state setter is called, React ignores the initial state argument and uses the new value.
	3. When the component re-renders for any other reason, React continues to use the same value from the previous render.
		- If we don’t pass an initial value when calling `useState()`, the current value of the state during the first render will be `undefined`.
			- Often, this is perfectly fine for the computers running the code, but it can be unclear to the humans reading our code.
				- So, we prefer to explicitly initialize our state. If we don’t have the value needed during the first render, we can explicitly pass `null` instead of passively leaving the value as `undefined`.
- ## quiz
1. Professional web development is a team sport.
	- Thankfully, a coworker was able to help refactor the code from your `ColorPicker()` component to support more colors.
		- Now, our product owner wants the app to start off with the color “Tomato” when it first shows up on the screen.
			- Modify our current `ColorPicker()` component to initialize the state so that “Tomato” is the selected `color` for our component’s first render.
```
ColorPicker.js

import React, { useState } from 'react';

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

export default function ColorPicker() {
  const [color, setColor] = useState('Tomato');

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName)=>(
        <button 
          onClick={() => setColor(colorName)} 
          key={colorName}>
       	     {colorName}
      	</button>
      ))}
    </div>
  );
}

- i don't quite understand where the rendered tomoto color is coming from fr since i put 'grape' as an arg and it didn't render that
```
==N==
## Use State Setter Outside of JSX
- Let’s see an example of managing the changing value of a string as a user types into a text input field:
```
import React, { useState } from 'react';

export default function EmailTextInput() {
  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  }

  return (
    <input value={email} onChange={handleChange} />
  );
}
```
- Here’s a breakdown of how the above code works:
	- We use [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to create our local [state](https://www.codecademy.com/resources/docs/react/state) variable `email` and our local setter function `setEmail()`.
		- The local variable `email` is assigned the current state value at index `0` from the array returned by [`useState()`](https://www.codecademy.com/resources/docs/react/hooks/useState).
			- The local variable `setEmail()` is assigned a reference to the state setter function at index `1` from the array returned by `useState()`.
				- It’s a convention to name the setter variable using the current state variable (in this example, `email`) with “set” prepended.
- The [JSX](https://www.codecademy.com/resources/docs/react/jsx) input tag has an event listener called `onChange`.
	- This event listener calls an _event handler_ each time the user types something in this element.
		- In the example above, our event handler is defined inside of the definition for our function component, but outside of our JSX.
	- Earlier in this lesson, we wrote our event handlers right in our JSX.
		- Those inline event handlers work perfectly fine, but when we want to do something more interesting than just calling the state setter with a static value, it’s a good practice to separate that logic from our JSX.
			- This separation of concerns makes our code easier to read, test, and modify.
```
- It’s common in React code to simplify this:

const handleChange = (event) => {
  const newEmail = event.target.value;
  setEmail(newEmail);
}

- to this:

const handleChange = (event) => setEmail(event.target.value);

- or, using object restructuring, this:

const handleChange = ({target}) => setEmail(target.value);

- All three code snippets above behave the same way, so there really isn’t a right and wrong between these different code snippets. We’ll use the last, most concise version moving forward.
```
### quiz
1. Let’s use the State Hook to make our program only accept numeric input since we want a phone number from the user.
	- First, make sure we can use the State Hook by importing `useState` from the React library.
2. Declare and assign values for our current state and state setter with `useState()`. Use `phone` as the name of our current state variable.
	- Make sure to give the `phone` state variable an initial value of an empty string!
3. Let’s specify the value of our JSX input tag by adding a `value` attribute and setting it to the value of our `phone` state variable.
	- We also want to detect any changes to the input tag while the user types so add an `onChange` event listener and assign it the `handleChange` function.
4. Lastly, complete the `handleChange()` function.
	- This function checks for the validity of the input value the user is typing.
		- If the input is numeric, it should update the state variable through the setter function.
			- In the if-statement of the `handleChange()` function, update the state using the state setter function `setPhone()` and set it to the new value `newPhone`.
```
PhoneNumber.js

import React, { useState } from 'react';

// regex to match numbers between 1 and 10 digits long
const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber() {
  // declare current state and state setter
  const [ phone, setPhone] = useState(''); 

  const handleChange = ({ target })=> {
    const newPhone = target.value;
    const isValid = validPhoneNumber.test(newPhone);
    if (isValid) {
        // update state
        setPhone(newPhone);
    }
    // just ignore the event, when new value is invalid
  };

  return (
    <div className='phone'>
      <label for='phone-input'>Phone: </label>
      <input value={phone} onChange={handleChange} id='phone-input' />
    </div>
  );
}

```
1. **Using `{}` for Object Destructuring:**
    - This is used when you want to extract properties from objects.
    - The syntax `{ propertyName }` is used to create a new variable named `propertyName` that holds the value of the property with the same name from the object.
	    - Example:
	        `const person = { name: 'Alice', age: 30 }; const { name, age } = person; // name = 'Alice', age = 30`
        
2. **Using `[]` for Array Destructuring:**
    - This is used when you want to extract elements from arrays.
    - The syntax `[element1, element2]` is used to create new variables `element1`, `element2`, etc., that hold the corresponding items from the array based on their position.
	- Example:
			`const numbers = [1, 2, 3]; const [first, second] = numbers; // first = 1, second = 2`
        
- In summary, use `{}` for objects when you want to extract values based on property names, and `[]` for arrays when you want to extract values based on their order in the array.







































