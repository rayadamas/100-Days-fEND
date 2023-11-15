# [11/15/2023, 9:19-10:22]
- **Today's Progress**: reviewing [[Day 65 - Codecademy]], then starting w/ `Pass props From Component To Component` and it's quiz. 
	- **Thoughts:** in the 1st quiz i improperly was wrapping the function i was trying to import into app.js in quotes. i also forgot the `./` convention for a sec. in app.js it took a moment to realize the tag to be displayed IS the component named Player, not a `card` or `h2` etc.
	- good flowing session today, no hangups in the theory, just syntax hiccups/oversights. 
---
# ![[Day 65 - Codecademy#^364ef6]]
- ## quiz
	1. Your mission is to pass a `prop` _to_ `Player` _from_ `App`.
		- Ensure that `Player` can accept props by changing the function definition to include `props` in the parameter.
	2. Next, display the name of the song in the `<h1></h1>` tag by injecting the `songName` value from `props`.
	3. Display the name of the artist in the `<h2></h2>` tag by injecting the `artist` value from `props`.
	4. Since `App` is passing props _to_ `Player`, `App` is the parent and `Player` is the child.
		- Inside of **Player.js**, export the component to be used in **App.js**.
	5. Open **App.js**. Import the `Player` component in **App.js**.
	6. In the `App` component, call the `Player` component with the attributes `songName`, giving it a string of your favorite song, and the `artist` of the song.

```
Player.js

import React from 'react';

function Player(props) {
  return (
    <>
      <h1>{props.songName}</h1>
      <h2>{props.artist}</h2>
    </>
  );
}

export default Player;

App.js

import React from 'react';
import Player from './Player';

function App() {
  return <Player songName="Water" artist="Tyla" />
}

export default App;
```
- ### Question
	- In the context of this [exercise 63](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-101-components-interacting-u/lessons/this-props/exercises/pass-props-inter-component), can props only be passed down the component tree?
		- ### Answer
			- Yes, props can only be passed down the component tree, or from parent to child components.
				- It is not possible to pass props from a component to its parent or to its siblings within the same parent component.
					- However, you can pass data, but not props, to the parent by linking a callback function to the child component.

==N==
- ### Render Different UI Based on props
	- You can do more with props than just display them.
	- You can also use props to make decisions.
```
function LoginMsg(props) {
  if (props.password === 'a-tough-password') {
    return <h2>Sign In Successful.</h2>
  } else {
    return <h2>Sign In Failed..</h2>
  }
}
```
- In this example, we use the props passed in to make a decision rather than rendering the value to the screen.
	- If the `password` received is equal to `'a-tough-password'`, the resulting message in `<h2></h2>` will be different!
		- The passed-in `password` is not displayed in either case!
			- The prop is used to _decide_ what will be displayed.
				- This is a common technique.
- ## quiz
	1. Select **Greeting.js**.
		- Look in the function component definition. You can see that `Greeting` now expects _two_ props: `name` and `signedIn`.
			- Notice that `props.signedIn` is _not_ located inside of a `return` statement.
				- This means that `Greeting` will never display the value of `signedIn`.
					- But `Greeting` _will_ use that value to decide which message to display.
			- Look at `Greeting` until you feel like you understand how it works, and then open **App.js**.
			- Give the `Greeting` component an additional attribute of `signedIn` with the value of `false`.
2. In **App.js**, change the value of `signedIn` to make `<Greeting />` display a friendly greeting again.
```
Greeting.js

import React from 'react';

function Greeting(props) {
  if (props.signedIn == false) {
    return <h1>Please login.</h1>;
  } else {
    return (
      <>
        <h1>Welcome back, {props.name}!</h1>
        <article>
          Latest Movie: A Computer Bug's Life
        </article>
      </>
    )
  }
}

export default Greeting;

App.js

import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <h1>
        MovieFlix
      </h1>
      <Greeting name="Alison" signedIn={true} />
    </div>
  );
}

export default App;
```
==N==
### Put an Event Handler in a Function Component
- You can, and often will, pass functions as [`props`](https://www.codecademy.com/resources/docs/react/props).
	- It is especially common to pass _event handler_ functions.
- In the next exercise, we will pass an event handler function as a prop.
	- However, we have to _define_ an event handler before we can pass one anywhere.
	- In this exercise, we will define an event handler function.
		- How do we define an event handler in #React?
			- We define an event handler as a method on the function component!
				- Take a look at the **Example.js** file in the code editor.
					- On lines 4 through 8, an _event handler_ method is defined.
					- On line 10, that event handler method is attached to an _event_ (a click event, in this case).
```
Example.js

import React from 'react';

function Example() {
  function handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }
  return (
      <h1 onClick={handleEvent}>
        Hello world
      </h1>
    );
}
```
- ## quiz
1. Select **Talker.js**.
	- Here we have a function named `talk()` that alerts ten thousand “blah”s to your screen.
		- You will eventually use `talk()` as an event handler.
			- There’s a problem:
				- `talk` is defined outside of the `Talker` component.
	- Rewrite `talk()`, so that it is a method defined inside the `Talker` component.
		- Look at **Example.js** if you get stuck!
	- Once you’re done, delete the original `talk()` function before clicking Run.
```
Talker.js(before)

import React from 'react';
import Button from './Button';

function talk() {
  let speech = '';
  for (let i = 0; i < 10000; i++) {
    speech += 'blah ';
  }
  alert(speech);
}

function Talker() {
  return <Button />;
}

export default Talker;

(after)

import React from "react";
import Button from "./Button";

function Talker() {
  function talk() {
    let speech = "";
    for (let i = 0; i < 10000; i++) {
      speech += "blah ";
    }
    alert(speech);
  }
  return <Button />;
}

export default Talker;

```
- ### Question
	- In the context of this [exercise 25](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-101-components-interacting-u/lessons/this-props/exercises/event-handler-component-class), what other event handlers are there?
		- ### Answer
			- React supports a large variety of event handlers for many different actions, including clipboard events such as copying and pasting, keyboard events like pressing a key, form events such as submitting a form, mouse events like the `onClick` event covered in this exercise, and many more.
				- Several common event handlers are listed as follows:
					- The `onDoubleClick` event handler is similar to `onClick`, but triggers when there is a double click, or two clicks in quick succession.
					- `onDrag` is another event handler used when an element or text selection is being dragged on a page.
					- `onInput` is used for when the values of input elements have been altered.
					- The `onKeyDown` event handler occurs when the user presses any keyboard key.
					- The `onSubmit` event handler triggers when a form has been submitted.
						- To check out all the available event handlers, you can see the official React documentation, under the `SyntheticEvent` section.



































