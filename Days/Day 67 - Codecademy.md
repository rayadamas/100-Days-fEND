# [11/16/2023, 9:03-10:03]
- **Today's Progress**: starting w/ a review of [[Day 66 - Codecademy]], then continuing w/ the Props module w/ passing event handlers as a Prop.
	- stopping here before the section on children #React_props 
- **Thoughts:** [[Day 67 - Codecademy#handleEvent, onEvent, and props.onEvent]] this portion is where it's a bit confusing w/ the naming conventions and the introduction of *component instances*. [[Day 67 - Codecademy#Answer]] just cleared up that confusion. 
---
# ![[Day 66 - Codecademy#Put an Event Handler in a Function Component]]
# PROPS
## Pass an Event Handler as a prop
- Good! You’ve defined a new method inside the `Talker` component. Now you’re ready to _pass_ that function to another component.
	- You can pass a method in the exact same way that you pass any other data—using curly braces.
- ### quiz
1. Select **Talker.js**.
	- You want to pass `talk()` from here to `<Button />`.
		- To pass a prop, you need to give `<Button />` an _attribute_. Let’s start there.
			- Inside `Talker`‘s return statement, give `<Button />` the following attribute:
				- `foo="bar"`
					- During the next two checkpoints, you’ll replace those values with the values that you need! Keep them as `foo` and `"bar"` for now.
2. Your goal is to pass `talk()` _from_ `<Talker />` _to_ `<Button />`.
	- What `prop` _name_ should you choose?
		- It doesn’t really matter!
			- `prop` attributes will work with just about any name, so long as the name follows the [JavaScript identifier rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variables).
				- Since you’re going to pass a function named `talk()`, you might as well use `talk` as your _name_.
					- Inside the return statement, change your attribute name from `foo` to `talk`.
3. What should your `prop` _value_ be?
	- Your `prop` _value_ should be the information that you want to pass!
		- In this case, you want to pass the method named `talk()`.
			- Inside the return statement, change your attribute’s _value_ to `talk`. Remember to use curly braces to pass in `talk` as Javascript!
```
Talker.js

import React from 'react';
import Button from './Button';

function Talker() {
  function talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button talk={talk} />;
}

export default Talker;

Button.js

import React from 'react';

function Button() {
    return (
      <button>
        Click me!
      </button>
    );
}

export default Button;
```
- ### Question
	- In the context of this [exercise 29](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-101-components-interacting-u/lessons/this-props/exercises/event-handler-pass-prop), what happens if we pass the function with parentheses?
		- ### Answer
			- Say that you passed in a function with parentheses after the function name as a prop, like the following,
				- `render() {   return <Button press={this.press()}/> }`
					- This will call the `press()` function, and then the value passed as the prop will actually be the return value of the function rather than the function itself.
					- By default, functions return `undefined`.
						- As a result, when passing a function as a prop, ==there must not be any parentheses following its name.==
			- The correct way to pass the function to the component would be,
				- `render() {   return <Button press={this.press}/> }`
==N==
# Receive an Event Handler as a prop
- Great! You just passed a function from `<Talker />` to `<Button />`.
	- Take a look at **Button.js** in the code editor.
		- Notice that `Button` returns a `<button>` element.
		- If a user clicks on this `<button>` element, you want your passed-in `talk()` function to get called.
			- This means that you need to attach `talk()` to the `<button>` element as an _event handler_.
	- How do you do that?
		- In the same way that you attach any event handler to a JSX element:
			- you give that JSX element a special _attribute_.
				- The attribute’s _name_ should be an event name like `onClick` or `onHover`.
				- The attribute’s _value_ should be the event handler that you want to attach.
- #### quiz
1. In **Button.js**, add an `onClick` attribute to the `<button>` element in the return statement.
	- Remember that you _named_ your prop `talk` previously. Use the `talk` property of `props` as the _value_ of the `onClick` attribute.
		- Click Run. Once the browser refreshes, click on the button.
```
Button.js

import React from 'react';

function Button(props) {
  return (
    <button onClick={props.talk}>
      Click me!
    </button>
  );
}

export default Button;

Talker.js

import React from 'react';
import Button from './Button';

function Talker() {
  function talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button talk={talk}/>;
}

export default Talker;
```
- ### Question
	- In the context of this [exercise 23](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-101-components-interacting-u/lessons/this-props/exercises/receive-event-handler-prop), can we pass multiple event handlers as props and choose a specific one to attach to a child component?
		- ### Answer
			- Yes!
				- You can pass in multiple event handlers as props to the child component, then to choose a specific one to attach to it.
					- You can utilize something like a ternary statement.
						- For example, say that you have a component whose button should run different code based on its state.
						- We can pass the functions to the child component, then from the child component, use a ternary statement that will attach one of the two functions based on its state.
						- The parent component might look like the following, which passes two event handlers to its child component:
```
class Parent extends React.Component {
  handleClickOne() {
    // Code
  }
  
  handleClickTwo() {
    // Code
  }
  
  render() {
    return <Child onClickOne={this.handleClickOne} 
                  onClickTwo={this.handleClickTwo} />;
  }
}

- Then, the child component will receive both event handlers, and attach one of them to itself, based on its state.

class Child extends React.Component {
  render() {
    return (
      <button onClick={this.state.value == someValue ? 
                       this.props.onClickOne : this.props.onClickTwo}>
        Click me!
      </button>
    );
  }
}
```
==N==
# handleEvent, onEvent, and props.onEvent
- Let’s talk about naming things.
	- When you pass an _event handler_ as a prop, as you just did, there are two names that you have to choose.
	- Both naming choices occur in the _parent_ component, the component that defines the event handler and passes it.
		- The first name that you have to choose is the name of the event handler itself.
			- Look at **Talker.js**, lines 5 through 11. This is our event handler. We chose to name it `talk`.
				- The second name that you have to choose is the name of the prop that you will use to _pass_ the event handler. This is the same thing as the attribute name.
					- For our prop name, we also chose `talk`, as shown on line 12:
						- `return <Button talk={talk} />;`
					- These two names can be whatever we want.
					- However, there is a naming convention that is commonly used.
						- Here’s how the naming convention works:
							- first,
								- think about what _type of event_ you are listening for.
									- In our example, the event type was “click”.
										- If you are listening for a “click” event, then you name your _event handler_ `handleClick`.
										- If you are listening for a “hover” event, then you name your event handler `handleHover`:
```
function myClass() {
  function handleHover() {
    alert('I am an event handler.');
    alert('I will be called in response to "hover" events.');
  }
}
```
- Your prop name should be the word `on`, plus your event type.
	- If you are listening for a “click” event, then you name your prop `onClick`.
	- If you are listening for a “hover” event, then you name your prop `onHover`:
```
function myClass(){
  function handleHover() {
    alert('I am an event handler.');
    alert('I will listen for a "hover" event.');
  }
   return <Child onHover={handleHover} />;
}
```
- ## quiz
```
Talker.js
(before)
import React from 'react';
import Button from './Button';

function Talker() {
  function talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button talk={talk}/>;
}

export default Talker;

Button.js
(before)
import React from 'react';

function Button(props) {
    return (
      <button onClick={props.talk}>
        Click me!
      </button>
    );
}

export default Button;
```
1. In **Talker.js**, change the event handler’s _name_ from `talk` to `handleClick`.
2. In `Talker`‘s return statement, change the `prop`‘s _name_ from `talk` to `onClick`.
	- Change the prop’s _value_ to the newly named event handler, `handleClick`.
3. Select **Button.js**.
	- Change `Button`‘s return statement so that it expects a prop named `onClick` instead of `talk`.
4. One major source of confusion is the fact that names like `onClick` have special meanings, but this is only if they’re used on HTML-like elements.
	- Look at **Button.js**.
		- When you give the `<button>` element an attribute named `onClick`, then this `onClick` attribute has a special purpose.
			- As you’ve learned, this special `onClick` attribute creates an _event listener_ that listens for clicks on the `<button>` element:
```
// In Button.js: The onClick attribute creates an event listener:
<button onClick={props.onClick}>
  Click me!
</button>
```
- Now, look at **Talker.js**. Here, the `onClick` attribute you gave to `<Button />` does _not_ create an event listener—it’s just a name of an attribute:
```
// In Talker.js: The onClick attribute is just a normal attribute name.
<Button onClick={handleClick} />
```
- The reason for this is that `<Button />` is not an HTML-like JSX element;
	- it’s a _component instance_.
		- Names like `onClick` only create event listeners if they’re used on HTML-like JSX elements.
		- Otherwise, they’re just ordinary prop names.
- Run your program to ensure your button is working as intended.
```
Talker.js
(after)

import React from 'react';
import Button from './Button';

function Talker() {
  function handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button onClick={handleClick}/>;
}

export default Talker;

Button.js
(after)

import React from 'react';

function Button(props) {
    return (
      <button onClick={props.onClick}>
        Click me!
      </button>
    );
}

export default Button;
```
- ### Question
	- In the context of this [exercise 18](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-101-components-interacting-u/lessons/this-props/exercises/handleevent-onevent-props-event), what is an #HTML like #JSX element?
### Answer
- An HTML-like JSX element is an element with a lower case tag name.
	- In JSX, lower case tag names will be treated as HTML tags, while upper case tag names will be treated as a component instance.
		- For instance, lower case `<button>` is treated as an HTML element, while upper case `<Button>` would be treated as a component instance of the `Button` class.
			- As a consequence of this, #React components must always start with a capital letter, or will otherwise be treated as an HTML element.





























