# [12/9/2023, 16:36-17:36]
- **Today's Progress**: working in Multiple Stylesheets
- **Thoughts:** very short session
---
# Multiple Stylesheets
- While inline styles and style object variables are valid methods of styling in React, it can become organizationally difficult to keep track of the styles being applied as your application grows.
	- One way to make styles modular, organized, and reusable is to create separate stylesheets for each component.
		- We can import a stylesheet by using the `import` keyword:
			- `import './App.css'`
- However, if we have multiple stylesheets with the same class names, the names can collide and create style conflicts.
	- One way to prevent this is to use CSS modules.
		- By importing it as a module, the styles will only be available for the component that imported the style.
			- This is done automatically by creating unique class names for each module.
				- This frees us from having to keep track of the class names we’ve used across stylesheets.
	- To use CSS modules, we begin by naming our stylesheet in this format, where `fileName` should be replaced with the name of the component you’re styling:
		- `fileName.module.css`
			- This indicates that the file should be processed as a CSS module.
				- Then, it must be imported into the file containing our component.
					- `import styles from './fileName.module.css'`
				- From this import, we can see that the `styles` object now holds the class selectors of `fileName.module.css`.
					- To access the selectors, we use the dot notation like so:
						- `<div className={styles.divStyle}></div>
- Note that we apply styles using the `className` attribute rather than `class`.
	- `class` is a reserved JavaScript keyword, so React uses `className` to avoid conflicts.
		- Although React does not have an opinion on how styles should be defined, this is the preferred method for styling in React, as it maintains the compositional philosophy of React.
## quiz
1. Let’s style Codey’s developer portfolio with CSS modules.
	- Take a look at the existing code. The webpage consists of two components, `Home` and `AttentionGrabber`.
		- Currently, they are unstyled. But, we have CSS modules **Home.module.css** and **AttentionGrabber.module.css** located inside the **styles** folder.
			- Open up **AttentionGrabber.js** and import the styles from **AttentionGrabber.module.css**. Store them in a `styles` object.
2. Apply the style to the `<h1>` element in the `AttentionGrabber` component.
	- Start by giving the `<h1>` tag a `className` attribute, then set the value to `styles.h1`.
3. Great! Next, style the `Home` component.
	- Open up **Home.js** and import the styles from **Home.module.css**. Store them into a `styles` object.
4. Style the `<div>` element by giving it the `className` attribute and the value `styles.div`.
	- Click Run, and observe the styles being applied!
```
AttentionGrabber.js

import React from "react";
import styles from "./styles/AttentionGrabber.module.css";

function AttentionGrabber() {
  return (
    <>
      <h1 className={styles.h1}>Hi! Welcome to my portfolio.</h1>
      <p>I'm a developer who likes designing user-friendly websites.</p>
    </>
  );
}

export default AttentionGrabber;

Home.js

import React from 'react';
import styles from "./styles/Home.module.css";
import  AttentionGrabber from './AttentionGrabber';

function Home() {
  return (
    <div className={styles.div}>
      <AttentionGrabber />
      <footer>Codey Cademy: Full-Stack Developer</footer>
    </div>
  );
}

export default Home


```















































