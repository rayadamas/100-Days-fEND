# [12/12/2023, 11:05-12:05]
- **Today's Progress**: setting the input's initial state
	- updating an Input's value
	- Controlled vs Uncontrolled
- **Thoughts:** no issues. coming back to the cont vs uncont lesson tomorrow for the extra reading on such plus the forum Q, then will close out the module. 
---
# Set the Input's Initial State
- Good! Any time that someone types or deletes in the `<input>` field, the `handleUserInput()` function will update `userInput` with the `<input>`‘s text.
	- Since we’re using `setUserInput`, that means that `userInput` needs an initial state! We’ll need to use the State hook. What should the state’s initial _value_ be?
		- Well, `userInput` will be displayed in the `<input>` element. What should the _initial_ text in the `<input>` be when a user first visits the page?
			- The initial text should be an empty string! Otherwise, it would look like someone had already typed something.
## quiz
1. Use a State Hook to define the state variable `userInput` and the `setUserInput` state setter function.
2. Initialize the value of `userInput` to an empty string.
```
Input.js

import React, { useState } from "react";
import styles from "./Input.module.css";

const [ userInput, setUserInput ] = useState('');

function Input() {
  function handleUserInput(e) {
    setUserInput(e.target.value);
  }
  return (
    <>
      <div className={styles.emailContainer}>
        <h2>Let's stay in touch.</h2>
        <p>
          Sign up for our newsletter to stay up-to-date on the latest products,
          receive exclusive discounts, and connect with other programmers who
          share your passion for all things tech.
        </p>
        <form>
          <label for="email">Email: </label>
          <input id="email" type="text" onChange={handleUserInput} />
        </form>
      </div>
      <div className={styles.inputDisplay}>
        <h2>Current User Input: </h2>
        <h4></h4>
      </div>
    </>
  );
}

export default Input;
```
### Question
- In the context of this [exercise 20](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-102-advanced-react-u/lessons/react-forms/exercises/set-input-initial-state), how does this update the text on every change?
### Answer
- The way this works is generally as follows.
	- Every time we change the input of the text field, whether by adding or deleting some text, it will trigger the `onChange` attribute’s function, `handleUserInput()`.
		- When this function is invoked, it will update the state of the component to the current value of the text field using `setState()`.
			- Any time `setState()` is called for a component, it will trigger a call to the `render()` method, which will re-display the text to the latest value of the text field.
==N==
# Update an Input's Value
- When a user types in the `<input>` field, then that will trigger a _change_ event, which will call `handleUserInput()`. That’s good!
- `handleUserInput()` will set `userInput` equal to whatever text is currently in the `<input>` field. That’s also good!
- There’s only one problem:
	- you can set `userInput` to whatever you want, but `<input>`‘s `value` prop will not update.
- In #React, the `value` prop of an input element is used to control the value of the input and keep it in sync with the component’s state.
	- Without setting the `value` prop, changes made to the input would not be reflected in the component’s state, leading to inconsistencies and potential bugs down the line.
		- To ensure that the input’s value matches the component state, we can set the `value` prop and use the `onChange` event to update the state with the new value.
			- When the state is updated, the component re-renders, and the `value` prop is set to the new value from the component’s state.
			- This makes the component state the “source of truth” for the input’s value, ensuring that the form data is consistent and can be easily managed and submitted.
- For example, if we had a login form with an email and password input, we would set the value prop for both inputs and update the component’s state whenever the user types in a new email or password. This way, the form data is always up to date with the user’s input.
## quiz
1. Inside of `Input`‘s return statement, give the `<input>` tag a `value` attribute with the value of `{userInput}`.
2. That should do it! An idiomatically correct React form!
	- This example doesn’t have a server per se, but any time that a user updates `<input>`, the new text is immediately stored in `Input`‘s `state`.
	- We could easily connect that `state` with a server. What matters is that the text is sent somewhere to be stored on every character change.
		- Inside of the `<h4></h4>` tags, write:
			- `{userInput}`
```
import React, { useState } from "react";
import styles from "./Input.module.css";

function Input() {
  const [userInput, setUserInput] = useState('');
  function handleUserInput(e) {
    setUserInput(e.target.value);
  }
  return (
    <>
      <div className={styles.emailContainer}>
        <h2>Let's stay in touch.</h2>
        <p>
          Sign up for our newsletter to stay up-to-date on the latest products,
          receive exclusive discounts, and connect with other programmers who
          share your passion for all things tech.
        </p>
        <form>
          <label for="email">Email: </label>
          <input value={userInput} id="email" type="text" onChange={handleUserInput} />
        </form>
      </div>
      <div className={styles.inputDisplay}>
        <h2>Current User Input: </h2>
        <h4>{userInput}</h4>
      </div>
    </>
  );
}

export default Input;
```
### Question
- In the context of this [exercise 71](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-102-advanced-react-u/lessons/react-forms/exercises/update-input-value), can we set a placeholder value for the input field?
### Answer
- Yes, there are a few ways you can do this.
	- The first method was covered in the previous exercise, which is done by setting an initial value to the state.
		- This method places some actual text in the field, so a user would have to edit it. For instance,
			- `this.state = { userInput: 'Some initial text' };`
	- Another method is to utilize the `input` HTML element’s attribute `placeholder`, which sets some placeholder text in the field, but unlike the previous method, it will not be an actual value.
		- It can be done like so, by adding the parameter,
			- `<input placeholder="placeholder text" />`
==N==
# Controlled vs Uncontrolled
- There are two terms that will probably come up when you talk about React forms:
	- **controlled component**
		- A _controlled component_ is a component that does not maintain any internal state.
		- Since a controlled component has no state, it must be _controlled_ by someone else.
	- **uncontrolled component**.
		- An _uncontrolled component_ is a component that maintains its own internal state. 
- Think of a typical `<input type='text' />` element.
	- It appears on the screen as a text box.
		- If you need to know what text is currently in the box, then you can ask the `<input>` element, possibly with some code like this:
			- `let input = document.querySelector('input[type="text"]');`
			- `let typedText = input.value; // input.value will be equal to whatever text is currently in the text box.`
				- The important thing here is that the `<input>` element _keeps track of_ its own text. You can access what its text is at any time.
					- The fact that `<input>` keeps track of information makes it an _uncontrolled component_. It maintains its own internal state by remembering data about itself.
- A controlled component, on the other hand, has no memory.
	- If you ask it for information about itself, then it will have to get that information through `props`.
	- Most React components are _controlled_.
		- In React, when you give an `<input>` element a `value` attribute, then something strange happens:
			- the `<input>` element _becomes controlled_.
			- It stops using its internal storage. This is a more “React” way of doing things.
- Recall that in our exercises, the page updated every time we typed into the input. React controlled the input’s value with the state.
- We’ve been demonstrating the idea of a controlled component all along!









































