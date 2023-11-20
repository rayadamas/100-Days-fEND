# [11/20/2023, 12:42-13:44]
- **Today's Progress**: setting up the debugging extensions on desktop, then reviewing steps 1-5 i've already completed w/ this quiz, then continuing with such. 
	- completed the Components Interacting module excluding the tasks behind the paywall 😒
	- next module is Learning Hooks in #React 
- **Thoughts:** [Learn React Codey Overflow Forum](https://www.youtube.com/watch?v=fK7HgalJF7s) this code along was a big help in verifying i wasn't making mistakes as i walked-through the exercise. feeling like the various components, as a general term not actual ones, make sense individually, as i can even see in some instances how they interweave w/ one another, like Card being the parent "container" for the Head & Body sections, which are Card's children, or how App is the file responsible for the rendering we want to occur, but visualizing each piece as a portion of a whole, almost like a template so to speak, i need more practice.
---
# ![[Day 70 - Codecademy#CodeyOverflow Forum quiz]]
## Setting Up Card
6. Great job! Let’s take a brief detour back to **App.js**.
	- Currently, the `App` component is empty.
	- This is the top-level component and it is responsible for returning the interface to be rendered.
		- In this case, it will be returning an instance of the `Card` component for every comment in **commentData.js**.
- In the `App` component body, map over the `comments` array with the argument named `comment` and return an instance of the `Card` component.
	- For each component, give it an attribute named `commentObject` and the value `{comment}`.
```
App.js

import React from "react";
import { comments } from "./commentData";

function App() {
  return (
    <div>
      {
        comments.map(comment =>
          <Card commentObject={comment} />
        )
      }
    </div>
  );
}


how it looks if i click FORMAT CODE

import React from "react";
import { comments } from "./commentData";

function App() {
  return (
    <div>
      {comments.map((comment) => (
        <Card commentObject={comment} />
      ))}
    </div>
  );
}
- it adds in a closing parethesis, making 'comment' an appear as an arg, idk why
```

7. Nice! You’ve set up `App` to pass down information to the `Card` component. Let’s put the pieces together.
	- Open **Card.js** and import the `Header` and `Body` components.
		- `Card` will be the outer “shell” that contains our two smaller components:
			- `Card` is the parent,
			- and `Header` and `Body` are the child components.
	- Begin defining the `Card` component.
		- `Card` should receive `props`.
			- `Card` should return an instance of the `Header` component, and an instance of the `Body` component.
```
Card,js

import React from 'react';
import Header from './Head.js';
import Body from './Body.js';

function Card(props) {
  return (
    <>
      <Header />
      <Body />
    < />
  );
}
```
8. Previously in **App.js**, you’ve passed down a `commentObject` attribute to `Card` which contains an object with three properties (`profileImg`, `username`, and `comment`).
	- It’s time to access those and finally pass them to the children components: `Header` and `Body`.
	- `Header` expects two props:
		- `profileImg` and `username`.
	- Give the `Header` instance an attribute named `profileImg` and the value of `props.commentObject.profileImg`.
9. Next, give the `Header` instance an attribute named `username` and the value of `props.commentObject.username`.
10. The `Body` instance expects a `comment` prop.
	- Give the `Body` instance an attribute named `comment` and the value of `props.commentObject.comment`.
11. Now, export the `Card` component so it can be imported and used.
```
Card.js

import React from 'react';
import Header from './Head.js';
import Body from './Body.js';

function Card(props) {
  return (
    <>
      <Header profileImg={props.commentObject.profileImg} username={props.commentObject.username} />
      <Body comment={props.commentObject.comment} />
    < />
  );
}

export default Card;
```
12. Open up **App.js** again, and import the `Card` component which is now defined and exported.
13. Then, export the `App` component.
```
App,js

import React from "react";
import { comments } from "./commentData";
import Card from "./Card";

function App() {
  return (
    <div>
      {
        comments.map(comment =>
          <Card commentObject={comment} />
        )
      }
    </div>
  );
}

export default App;
```
14. Open up **index.js** and import the `App` component.
15. As you may recall, **index.js** is largely responsible for only rendering the `App` component.
	- Use `.createRoot()` to supply a container where you will render the `App` component.
		- Then, use `.render()` to render it into the DOM!
			- If you’ve succeeded, you should see three comments rendered on the web browser, engaging in a riveting discussion about animals.
```
index.js

import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

createRoot(
  document.getElementById('app')
).render(<App />);
```









































