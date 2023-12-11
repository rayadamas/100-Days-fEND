# [12/10/2023, 16:28-17:28]
- **Today's Progress**: #React Styles module review
	- reading ahead to the next module on React Forms
- **Thoughts:** co-review w/ #ChatGPT 
---
# REACT STYLES
## Review
# React components can be styled in a number of different ways: inline styling, object variable styling, stylesheets, and CSS modules.
### 1. **Inline Styling**
- Inline styling in React is done by adding the `style` attribute directly to the JSX elements. Styles are defined as an object where the properties are in camelCase.
- **Example**:
```
const MyComponent = () => {
  return <div style={{ color: 'blue', fontSize: '20px' }}>Hello, React!</div>;
};
```
### 2. **Object Variable Styling**
- This approach involves defining the styles in a JavaScript object outside the component and then referencing that object in the component's `style` attribute.
- **Example**:
```
const styles = {
  container: {
    color: 'green',
    fontSize: '18px'
  }
};

const MyComponent = () => {
  return <div style={styles.container}>Hello, React!</div>;
};
```
### 3. **Stylesheets**
- Traditional CSS stylesheets can also be used. You create a `.css` file with your styles and import it into your React component file.
- **Example**:
    - CSS (`MyComponent.css`):
```
.container {
  color: red;
  font-size: 16px;
}
```
```
React Component:

import './MyComponent.css';

const MyComponent = () => {
  return <div className="container">Hello, React!</div>;
};
```
### 4. **CSS Modules**
- CSS Modules help in scoping CSS by automatically creating a unique class name for each style. You create a `.module.css` file and import the styles as an object.
- **Example**:
    - CSS Module (`MyComponent.module.css`):
```
.container {
  color: purple;
  font-size: 14px;
}

React Component:

import styles from './MyComponent.module.css';

const MyComponent = () => {
  return <div className={styles.container}>Hello, React!</div>;
};
```
- Each of these methods has its own use case and benefits.
	- Inline styling is quick and easy for small components or dynamic styles, object variable styling is good for shared styles or slightly larger style objects, stylesheets are great for larger applications where you want to maintain traditional CSS files, and CSS Modules are perfect for component-level styles without worrying about class name collisions.
# Inline styling can be used to apply styles to a single element. Inline styling can be done by giving the element an attribute named `style` whose value is an object literal surrounded in curly braces.
- `<h1 style={{color: "red"}}> Hello, World! </h1>`
- That's correct! Inline styling in React is used to apply styles directly to a single element.
	- This method is particularly useful when you want to style an individual element without affecting others. Let's dive a bit deeper into this:
- **Attribute Name:**
	- The `style` attribute is used to define the inline styles for an element.
- **Object Literal:**
	- The value of the `style` attribute is an object literal, which is surrounded by curly braces `{}`. In this object, the properties are written in camelCase (e.g., `backgroundColor` instead of `background-color` in standard CSS).
- **Style Properties and Values:**
	- Each key-value pair in the object literal represents a CSS property and its value. For example, `color: 'red'` applies a red color to the text of the element.
### Example:
- Here's a simple example of how you can use inline styling in a React component:
```
const MyComponent = () => {
  return (
    <div style={{ color: 'blue', fontSize: '20px', backgroundColor: 'yellow' }}>
      This is an inline-styled element!
    </div>
  );
};
```
- In this example:
	- The `<div>` element is given an inline `style` attribute.
	- The value of the `style` attribute is an object `{}` containing the styles.
	- The properties `color`, `fontSize`, and `backgroundColor` are defined in camelCase.
	- The values of these properties (`'blue'`, `'20px'`, `'yellow'`) are applied to the element.
		- This approach is particularly useful for dynamically changing styles or for small scale styling where a separate CSS file or class might be overkill.
			- However, it's generally advisable to use stylesheets or CSS modules for more complex or reusable styles to maintain cleaner and more manageable code.
# An object variable can also be used to apply a style to a single element. The syntax is similar to inline styling, but rather than passing an object literal, the name of the variable is passed instead.
- `const myStyle = { color: "red" }`
- `<h1 style={myStyle}> Hello, World! </h1>`
- Absolutely right! When using object variable styling in React, the concept is quite similar to inline styling, but with a key difference: instead of defining the style object directly in the JSX element's `style` attribute, the styles are defined in a separate variable, and then this variable is referenced in the JSX.
	- Here's a breakdown of how it works:
		- **Define the Style Object:**
			- Create a JavaScript object that contains the styles you want to apply. The properties in this object are written in camelCase, mirroring CSS properties.
		- **Assign to a Variable:**
			- This object is assigned to a variable, often defined outside the component for clarity and reusability.
		- **Pass Variable to `style` Attribute:**
			- Instead of an object literal, you pass the name of the variable to the `style` attribute of your JSX element.
### Example:
- Let's look at an example to illustrate this:
```
// Define the styles in an object
const divStyle = {
  color: 'green',
  fontSize: '24px',
  border: '1px solid black'
};

const MyComponent = () => {
  // Apply the styles using the variable
  return (
    <div style={divStyle}>
      This div is styled using an object variable.
    </div>
  );
};
```
- In this example:
	- The `divStyle` object is defined with the desired styles.
	- In `MyComponent`, the `divStyle` variable is passed to the `style` attribute of the `<div>` element.
- This method of styling is more organized than inline styling, especially when the same style object needs to be reused in multiple components or multiple times within the same component. It keeps the JSX cleaner and separates concerns, making the code more maintainable.
# Style names in React must be in camelCase. For example, `background-color` becomes `backgroundColor`.
# In React, a number style value is automatically interpreted with `px`
# Styles can be separated and stored into CSS module files. The styles can be imported and used by applying `className` attributes to the relevant elements.


































