# [12/8/2023, 14:05-15:05]
- **Today's Progress**: starting the React module, #React Styles
	- Style Syntax
- **Thoughts:** getting an intro from #ChatGPT 1st
	- what it gave me wasn't too helpful but my prompt was borderless and open-ended. 
	- both quizzes have been straight-forward. i did have it backwards on the 2nd however. I had the values wrapped in single-quotes w/o adding px, thinking that was the syntax, but to have the px be assumed, the numeric need not be wrapped in anything.
---
**What We'll Cover:**
1. **The Basics of CSS in React:** We'll start by understanding how CSS is used in React, delving into inline styles and the classic approach of linking external CSS files.
    
2. **CSS Modules:** Learn how to locally scope your CSS in React to avoid style conflicts, with a deep dive into CSS Modules.
    
3. **Styled Components:** We'll explore the power of styled-components, a popular library for writing CSS in JS, which allows for dynamic styling and theming.
    
4. **Tailwind CSS with React:** A look into how utility-first CSS frameworks like Tailwind can be integrated into React apps for rapid UI development.
    

**Practical Example:** To solidify your understanding, we will work on a practical example where we create a small React app and apply different styling techniques. We will build a user profile card, first using basic CSS, then enhancing it with CSS Modules, followed by styled-components, and finally integrating Tailwind CSS.
# REACT STYLES
## Intro to Styling React Apps
- Styling is a critical aspect of any React application as it can impact the user experience and help create a distinct identity for your application.
	- As your application grows in complexity, the way you style becomes increasingly important.
	- It’s essential to choose the right approach to keep your styles organized and manageable.
		- In this lesson, we will cover the basics of styling in React, including the different approaches and techniques you can use.
			- We’ll start with a discussion of inline and object variable styling and explain the unique syntax rules that are specific to React.
				- Next, we’ll dive into CSS modules and show you how to use them to make your styles modular and reusable.
- By the end of this lesson, you will have a solid foundation in React styling and be equipped with the knowledge to style your components in a way that makes them maintainable, scalable, and organized.
### quiz
- Take a brief look at how styling is done in the example provided in the code editor.
	- Pay attention to how the stylesheets are organized, including the naming conventions, file structure, and how the styles are applied to the components. We’ll dive into more detail on this in the lesson.
```
TitleScreen.js

// Import React library
import React from 'react';
// Import CSS module for styling this component
import styles from './TitleScreen.module.css'

// Define the TitleScreen functional component
function TitleScreen() {
  // Return JSX (JavaScript XML) that defines the UI of this component
  return (
    // React Fragment, a common pattern for returning multiple elements without adding extra nodes to the DOM
    <>
      {/* 'menuWrapper' div - serves as a container for the whole title screen */}
      <div className={styles.menuWrapper}>
        {/* 'menuTop' div - contains the title section of the screen */}
        <div className={styles.menuTop}>
          {/* Title of the game "Bread First Search" */}
          <div>
            <h1>Bread First Search</h1>
          </div>
        </div>
        {/* 'menuBottom' div - contains the description and play button */}
        <div className={styles.menuBottom}>
          {/* Game description */}
          <p>
            Think you've got a great eye? Challenge yourself to hunt down slices of bread hidden in a maze!
          </p>
          {/* Play button with a specific style from the CSS module */}
          <button className={styles.btn}>Play</button>
        </div>
      </div>          
    </>
  )
}

// Export the TitleScreen component so it can be used in other parts of the app
export default TitleScreen;
```
- This React code defines a component named `TitleScreen`, which is a functional component.
	- It uses a CSS module (`TitleScreen.module.css`) for styling, ensuring that the styles are scoped to this component only, thus avoiding conflicts with other global styles.
		- The component itself is structured with a `menuWrapper` div containing two parts:
			- `menuTop` for the title and
			- `menuTop` for the game description and play button.
				- This pattern of organizing code and styling is a common practice in React development, enhancing readability and maintainability.
## Inline Styles and Style Object Variables
- There are many different ways to use styles in React.
	- This exercise is focused on two of them: _inline styles_ and _style object variables_.
		- An inline style is a style that’s written as an _attribute_, like this:
			- `<h1 style={{ color: 'red' }}>Hello world</h1>`
			- Notice that it has double curly braces.
				- The outer curly braces are to note that everything between should be read as JavaScript.
				- The _inner_ curly braces create a JavaScript object literal.
		- However, using inline styles can quickly become messy if you want to apply more than just a few styles.
			- An alternative is to store a style object in a _variable_ and then inject that variable as the value of the `style` attribute.
				- To do this, we can initialize an object with properties and values like so:
```
const darkMode = {
  color: 'white',
  background: 'black';
};

- Then, the object can be injected to style a component:

<h1 style={darkMode}>Hello world</h1>
```
### quiz
1. Let’s practice styling components using both inline styles and style object variables.
	- Open **StyleDemo.js**. Starting with inline styling, style the first `<h1>` element inside the `StyleDemo` component.
		- Give the `<h1>` element an attribute with the _name_ of `style`. The attribute’s _value_ should evaluate to this object:
- 
```
{ background: 'lightgreen', color: 'darkgreen' }
```
2. Next, let’s style using a style object variable.
- On a new line, declare a new constant named `myStyle`. Set `myStyle` equal to this object:
```
{  background: 'lightblue',  color: 'darkblue'}
```
3. Style the second `<h1>` element by giving it an attribute with the _name_ of `style`. The attribute’s _value_ should be `myStyle`.
```
StyleDemo.js

import React from 'react';

function StyleDemo() {
  const myStyle = {
    background: 'lightblue',
    color: 'darkblue'
  };

  return (
    <>
      <h1 style={{ background: 'lightgreen', color: 'darkgreen' }}>Style This With Inline Styling</h1>
      <h1 style={myStyle}>Style This With Style Object Variable</h1>
    </>
  );
}

export default StyleDemo
```
==N==
# Style Syntax
- There are a few things to keep in mind when styling components with [JSX](https://www.codecademy.com/resources/docs/react/jsx).
	- Just like how we reference CSS properties in [the `style` object of the DOM](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) in JavaScript, we write CSS property names using _camelCase_ in React:
		- `const styles = { marginTop: '20px', backgroundColor: 'green'  };`
- This syntax comes from a small rule.
	- A hyphen is a reserved operator in JavaScript.
		- If we use `background-color`, the hyphen is then interpreted as a minus sign.
		- Thus, we want to be consistent with the property names in the DOM `style` JavaScript object and use camel case.
- In regular JavaScript, style _values_ are almost always strings.
	- Even if a style value is numeric, you usually have to write it as a string so that you can specify a unit.
		- For example, you’d write `'450px'` or `'20%'`.
		- If you write a style value as a _number_, then the unit `'px'` is assumed.
			- For example, if you want a font size of 30px, you can write:
				- `{ fontSize: 30 }`
					- Specifying the `'px'` unit in a string will still work, although it’s redundant.
			- If you want to use units other than `'px'`, you can use a string:
				- `{ fontSize: "2em" }`
	- [A few specific styles](https://github.com/facebook/react/blob/4131af3e4bf52f3a003537ec95a1655147c81270/src/renderers/dom/shared/CSSProperty.js#L15-L59) will _not_ automatically fill in the `px` for you.
		- These are styles where you aren’t likely to use `'px'` anyway, so you don’t really have to worry about them.
## quiz
1. Open **StyleDemo.js**.
	- Find your style object variable, and give it two more properties: a `marginTop` of `'100px'`, and a `fontSize` of `'50px'`.
2. Next, test out React’s value syntax by changing any property values that end in `'px'` from strings into numbers.
```
StyleDemo.js

import React from 'react';
const myStyle = {
  background: 'lightblue',
  color: 'darkblue',
  marginTop: 100,
  fontSize: 50
}

function StyleDemo() {
  return <button style={myStyle}>button</button>
}

export default StyleDemo
```








































