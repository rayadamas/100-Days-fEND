# [11/5/2023, 16:08-17:12]
- **Today's Progress**: beginning the next module on #Conditionals_TernaryOp in #JSX. 
- **Thoughts:** i'll have to condition myself to be conscious of whether something evaluates to a **value** or another expression.
	- .map needed some extra attention, i think its the inline writing & use of an arrow function + the fact the example is only returning our string array that confused me as to what was actually happening when .map's called. referenced [[map()]] to ground. more of a paced session due to this which is FINE. 
---
- ### JSX Conditionals: The Ternary Operator
	- There’s a more compact way to write conditionals in JSX: the _ternary operator_.
		- The ternary operator works the same way in React as it does in regular JavaScript.
			- However, it shows up in React surprisingly often.
	- Recall how it works:
		- you write `x ? y : z`, where x, y, and z are all JavaScript expressions. When your code is executed, `x` is evaluated as either “truthy” or “falsy”. If `x` is truthy, then the entire ternary operator returns `y`. If `x` is falsy, then the entire ternary operator returns `z`.
- Here’s how you might use the ternary operator in a [JSX](https://www.codecademy.com/resources/docs/react/jsx) expression:
```
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
```
- #### quiz
1. Take a look at **app.js**.
	- On line 16, replace x, y, and z so that the expression returns `'kitty'` if `coinToss()` is `'heads'` and `'doggy'` if `coinToss()` is `'tails'`.
```
Before
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[x ? y : z]} />;

root.render(img);

After
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

root.render(img);
```
- ## Question
	- Why can I use a `ternary` operator inside a JSX expression but not an `if` statement?
		- ## Answer
			- We can use a `ternary` operator, also known as a `conditional` operator, inside a JSX expression because it will always evaluate to a value, where as an `if`/`else`/`else if` statement is not only not an expression (it’s a statement and will execute a statement based on the value of an expression), but will also not evaluate to a value.
				- In other words, we cannot use a statement where a value (or expression) is expected and for this reason, we cannot use statements, including the conditional `if`/`else`/`else if` statements, inside a JSX expression.
==N==
- ### JSX Conditionals: &&
	- We’re going to cover one final way of writing conditionals in React: the `&&` operator.
		- Like the ternary operator, `&&` is not React-specific, but it shows up in React very often.
			- In the last two exercises, you wrote statements that would sometimes render a kitty and other times render a doggy. `&&` would _not_ have been the best choice for that code.
				- `&&` works best for conditionals that will sometimes do an action but other times do _nothing at all_.
	- Here’s an example:
```
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);
```
- If the expression on the left of the `&&` evaluates as true, then the [JSX](https://www.codecademy.com/resources/docs/react/jsx) on the right of the `&&` will be rendered.
	- If the first expression is false, however, then the JSX to the right of the `&&` will be ignored and not rendered.
- #### quiz
1. You’ve been building a React website all about your favorite foods!
	- You’re excited to share your website with your friends, and yet at the same time, you fear the cruel, icy harshness of their judgment.
		- On line 15, use the `&&` operator to make it so that this expression:
```
<li>Nacho Cheez Straight Out The Jar</li>
```
- will only appear if `!judgmental`. Feel free to use the example code as a guide.
	- When you click Run, every time you refresh the browser, there will be a 50% chance that `judgmental` will be `true`. Refresh until you see both versions of your list.
```
Before
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      <li>Nacho Cheez Straight Out The Jar</li>
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

root.render(favoriteFoods);

After
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      { !judgmental && <li>Nacho Cheez Straight Out The Jar</li> }
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

root.render(favoriteFoods);
```
- ## Question
	- When should I use an `if` statement, a `ternary` operator, or the `&&` operator?
		- ## Answer
			- We should decide to use either an `if` statement, `ternary` operator, or the `&&` operator based on what is most concise while still maintaining readability.
			- Tips to help decide on which conditional statement or operator to use:
				- the `&&` and `ternary` operators are more concise, choose either of these when possible
					- choose the `&&` over a `ternary` when you want an action to occur (or not) based on a single condition
						- choose an `if`/`else`/`else if` statement when you need to extrapolate logic to make it easier to read and understand
==N==
- ### .map in JSX
	- The `.map()` array method comes up often in React. It’s good to get in the habit of using it alongside JSX.
		- If you want to create a list of JSX elements, then using `.map()` is often the most efficient way.
			- It can look odd at first:
```
const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>
```
- In the above example, we start out with an array of strings.
	- We call `.map()` on this array of strings, and the `.map()` call returns a new array of `<li>`s.
		- On the last line of the example, note that `{listItems}` will evaluate to an array, because it’s the returned value of `.map()`!
			- #JSX `<li>`s don’t have to be in an array like this, but they _can_ be.
```
// This is fine in JSX, not in an explicit array:
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>

// This is also fine!
const liArray = [
  <li>item 1</li>, 
  <li>item 2</li>, 
  <li>item 3</li>
];

<ul>{liArray}</ul>
```
- #### quiz
1. You can see that a `.map()` call is partially set up.
	- On line 10, write an expression to complete the `.map()` call.
		- This expression should consist of a `<li>` element containing the `person` variable.
			- Feel free to use the first example as a guide.
2. On line 14, call `root.render()`.
	- For `root.render()`‘s argument, write a `<ul>` element.
		- In between the `<ul>` tags, use curly braces to inject the `peopleList` variable.
```
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map((person,i) =>
  // expression goes here:
  <li>{person}</li>
);

// root.render goes here:
root.render(<ul>{peopleList}</ul>);
```
- ## Question
	- Can I use `.forEach()` to create a list of JSX elements?
		- ## Answer
			- We can use `.forEach()` to create a list of JSX elements from an array as long as we are using `.forEach()` from outside a JSX expression, as `.forEach()` does not evaluate to a value like `.map()` does.
				- That said, `.forEach()` takes a little more code to do the same thing that `.map()` can do.
					- For example:  
						- Using `.forEach()`:
```
const myArr = ['one', 'two', 'three'];

const myArrMadeFromForEach = []; // we create a new array which will evaluate to a value when we inject it into a JSX expression

myArr.forEach((item, i) => myArrMadeFromForEach.push(<li key={item+i}>{item}</li>)); // we push a JSX element containing a value to our 'myArrMadeFromForEach' because `.forEach()` does not return any value, nor does it mutate the array on which it is called

const myList = (
  <ul>{myArrMadeFromForEach}</ul> // `myArrMadeFromForEach` will evaluate to an array of `<li>` elements
)

ReactDOM.render(myList, document.getElementById('app'));


```
- Using `.map()`
```
import React from 'react';
import ReactDOM from 'react-dom';

const myArr = ['one', 'two', 'three'];

const myArrCreatedFromMap = myArr.map((item, i) => (<li key={item + i}>{item}</li>)); // `.map()` creates/returns a new array from calling a function on every element in the array it's called on

const myList = (
  <ul>{myArrCreatedFromMap}</ul> // `myArrCreatedFromMap` will evaluate to a list of `<li>` elements
)

ReactDOM.render(myList, document.getElementById('app'));
```


































