# [12/11/2023, 10:30-11:30]
- **Today's Progress**: Input onChange
	- gonna preview read the next lesson: Set the Input's Initial State
- **Thoughts:** 1st quiz was really a walk thru, not any work
	- 2nd went well too, accidentally tried to use '=' when trying to assign a value to the stateSetter property instead of '()'
	- very pleased w/ the return of the forum Q&As, very helpful
---
# Input onChange
- Let’s talk about how forms are handled in React.
- In a regular HTML form, the [state](https://www.codecademy.com/resources/docs/react/state) of the form is typically managed by the browser.
	- It doesn’t update the server until the user hits _submit_.
		- Things work a bit differently in React.
		- In a React form, the state of the form can be managed by the component, and updates are triggered by the `onChange` event.
			- When the user interacts with an input, such as entering or deleting any characters, the `onChange` event fires and updates the component state.
				- This allows the component to immediately reflect any changes made by the user and update the view accordingly.
- Let’s dive into how it works.
## quiz
1. Take a look at the existing code. This is an input form for a newsletter! The form currently only asks for the user’s email address. Under it is some text stating “Current User Input”. We’ll use the space here to see the data the user is entering.
	- Now, open **Input.js**.
		- View the return statement and try typing into the input field on the browser.
			- Then, press Run!
2. Not much happened! Current User Input in the browser still shows nothing despite there being input! Don’t worry; once `Input` has been set up correctly, then you will be able to see the data received from the `<input>` element live as you type.
3. To change our code so that it responds to any changes in the input field, start by listening for a “change” event on the `<input>` tag.
	- Give `<input>` an `onChange` attribute. Set `onChange`‘s _value_ equal to `{handleUserInput}`.
		- Don’t worry about the fact that there is no `handleUserInput()` function yet. You’ll write one!
```
import React, { useState } from 'react';
import styles from './Input.module.css';

function Input() {
  return (
    <>
      <div className={styles.emailContainer}>
        <h2>Let's stay in touch.</h2>
        <p>Sign up for our newsletter to stay up-to-date on the latest products, receive exclusive discounts, and connect with other programmers who share your passion for all things tech.</p>
        <form>
          <label for="email">Email: </label>
          <input onChange={handleUserInput} id="email" type="text"/>
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
- In the context of this [exercise 12](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-102-advanced-react-u/lessons/react-forms/exercises/input-onchange), what does `onChange` mean?
### Answer
- `onChange` means to invoke some function on each change of an input field.
	- It is similar to `onClick` in that it follows a similar naming convention, and it is applied in a similar way to an element.
		- A “change” happens whenever there is a change to the value of the input form, such as by typing in a character, deleting characters, or copying and pasting text into the field.
==N==
# Write an Input Event Handler
- Let’s define an _event handler_ function that gets called whenever a user enters or deletes any character inside the `<input>` element.
	- The event handler function will listen for `change` events. You can see an example of an event handler listening for change events in **Example.js**.
## quiz
1. Select **Input.js**.
	- Before `Input`‘s return statement, write a new function called `handleUserInput()`.
		- Give this function one parameter named `e`.
2. Inside the `handleUserInput()` function’s body, call `setUserInput`. Set the state’s `userInput` property equal to `e.target.value`.
	- `e.target.value` will equal the text in the `<input>` field. You are setting `userInput` equal to whatever text is currently in `<input>`.
```
import React, { useState } from 'react';
import styles from './Input.module.css';

function Input() {
  function handleUserInput(e) {
    setUserInput(e.target.value);
  };
  return (
    <>
      <div className={styles.emailContainer}>
        <h2>Let's stay in touch.</h2>
        <p>Sign up for our newsletter to stay up-to-date on the latest products, receive exclusive discounts, and connect with other programmers who share your passion for all things tech.</p>
        <form>
          <label for="email">Email: </label>
          <input id="email" type="text" onChange={handleUserInput}/>
        </form>
      </div>
      <div className={styles.inputDisplay}>
        <h2>Current User Input: </h2>
        <h4></h4>
      </div>
    </>
    );
}

export default Input
```
### Question
- In this [exercise 40](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-102-advanced-react-u/lessons/react-forms/exercises/input-event-handler), we define the method `handleUserInput(e)` with a parameter `e`. What is this `e` parameter?
### Answer
- The `e` parameter of the function is an optional parameter of the input event handler which equals to a JavaScript `Event` object that contains information regarding what action or event just happened.
	- When the `handleUserInput()` function is invoked, the action that occurs, like a change in the input field, is passed as the value of `e`.
		- Then, the information about the action can be accessed, such as `e.target.value`, which would be the value of the text input element.














































