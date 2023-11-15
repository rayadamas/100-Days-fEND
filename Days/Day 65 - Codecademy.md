# [11/14/2023, 13:08-14:08]
- **Today's Progress**: continuing w/ how to pass #React_props to a #React_Components after i review [[Day 64 - Codecademy]]
- **Thoughts:** i'm understanding #React_Components & #React_props decently well.
---
- # Pass `props` to a Component
	- To take advantage of [`props`](https://www.codecademy.com/resources/docs/react/props), we need to _pass information_ to a React component.
		- In the previous exercise [[Day 64 - Codecademy]], we rendered an empty `props` object because we did not pass any `props` to our `PropsDisplayer` component.
			- How do we pass `props`?
				- By giving the component an _attribute_:
					- `<Greeting name="Jamel" />`
			- Let’s say that you want to pass a component the message, `"We're great!"`. Here’s how you can do it:
				- `<SloganDisplay message="We're great!" />`
			- As you can see, to pass information to a component, you need a _name_ for the information that you want to pass.
				- In the above example, we used the name `message`. You can use any name you want.
					- If you want to pass information that isn’t a string, then wrap that information in curly braces.
						- Here’s how you would pass an array:
							- `<Greeting myInfo={["Astronaut", "Narek", "43"]} />`
			- In this next example, we pass several pieces of information to `<Greeting />`.
				- The values that aren’t strings are wrapped in curly braces:
					- `<Greeting name="The Queen Mary" city="Long Beach, California" age={56} haunted={true} />`
	- ## quiz
		1. Inside the `App` top-level component, find the line where we call the `PropsDisplayer` component.
			- Modify this line so that `PropsDisplayer` is called with a prop named `myProp` and the string value `"Hello"`.
```
import React from 'react';
import ReactDOM from 'react-dom';

import PropsDisplayer from './PropsDisplayer';

function App() {
  return <PropsDisplayer myProp="Hello" />;
}

export default App;
```
==N==
- ### Question
	- In the context of this [exercise 35](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-101-components-interacting-u/lessons/this-props/exercises/pass-props-component), how can we access the individual elements or values of a prop which is an array or object?
		- ### Answer
			- When passing in a prop which is an array or an object, you can access the elements or values as you would normally.
				- For example, with a prop that is an array, you can access an element using the index as follows,
```
/* A component with an array as a prop */
<SomeComponent arr={["A", "B"]} />

/* To access the second element of the array */
this.props.arr[1]

- If the prop is an object, you can access a specific value using the corresponding key,

/* A component with an object as a prop */
<SomeComponent obj={{key: "value"}} />

/* To access the value of the key */
this.props.obj["key"]
```
==N==
- # Render a Component's props
	- [Props](https://www.codecademy.com/resources/docs/react/props) allow us to customize the component by passing it information.
		- We’ve learned how to _pass_ information to a component’s `props` object.
		- You will often want a component to _display_ the information that you pass.
			- To make sure that a function component can use the `props` object, define your function component with `props` as the parameter:
```
function Button(props) {
  return <button>{props.displayText}</button>;
}
```
- In the example, `props` is accepted as a parameter, and the object values are accessed with the dot notation accessors pattern (`object.propertyName`).
	- Alternatively, since `props` is an object, you can also use destructuring syntax like so:
```
function Button({displayText}) {
  return <button>{displayText}</button>;
}
```
- ## quiz
1. Explore the code in the code editor.
	- **Product.js** contains the outline of a component responsible for displaying the products of an e-commerce site.
		- **App.js** contains the top-level `App` component, which calls the `Product` component with three pieces of information:
			- `name`,
			- `price`,
			- and `rating`.
				- However, the `Product` component does not accept props.
					- In **Product.js**, modify the `Product` component so that it accepts `props` in the function definition.
2. Next, display the name of the product in the `<h1></h1>` tag by injecting the `name` value from `props`.
3. For the `<h2></h2>` tag, inject the `price` value from `props`.
4. Finish it off by injecting the `rating` value from `props` within the `<h3></h3>` tags.
5. In **App.js**, test out your code by tweaking the value of `name`, `price`, and `rating`.
	- Click Run. Once the browser refreshes, new information about a product should appear on the screen.
		- added the `$` string
```
Product.js

import React from 'react';

function Product(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <h3>{props.rating}</h3>
    </div>       
  );
}

export default Product;


App.js

import React from 'react';
import Product from './Product'

function App() {
  return <Product name="Apple Watch" price = {'$' + 399} rating = "4.5/5.0" />;
}

export default App;

```
- ### Question
	- In the context of this [exercise 19](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-101-components-interacting-u/lessons/this-props/exercises/render-component-props), we know that we can pass prop values inside of the curly braces, but can we also perform expressions within them?
		- ### Answer
			- Yes, any valid JavaScript expression can be placed inside of the curly braces.
				- The curly braces are special characters that tell the parser that there is JavaScript code inside, and to run it as such.
					- As a result, you can run any JavaScript expression inside of it, and it will be evaluated before the resulting HTML is returned.
					- For example, in the following code, the expression inside the curly braces will be evaluated as JavaScript before the entire `<h1>` element is returned.
					- `return <h1>{ this.props.value * 10 }</h1>`
==N==
- ### Pass props From Component To Component
	- You have learned how to pass a `prop` to a component:
		- `<Greeting firstName="Esmerelda" />`
	- You have also learned how to access and display a passed-in `prop`:
		- `return <h1>{props.firstName}</h1>;`
	- The most common use of [`props`](https://www.codecademy.com/resources/docs/react/props) is to pass information to a component from _a different component_.
		- Props in React travel in a one-way direction, from the top to bottom, parent to child.
			- Let’s explore the parent-child relationship of passing `props` a bit further.
```
function App() {
    return <Product name="Apple Watch" price = {399} rating = "4.5/5.0" />;
}
```
- In this example, `App` is the parent and `Product` is the child.
	- `App` passes three props to `Product` (`name`, `price`, and `rating`), which can then be read inside the child component.
		- Props passed down are immutable, meaning they cannot be changed.
			- If a component wants new values for its props, it needs to rely on the parent component to pass it new ones.






































