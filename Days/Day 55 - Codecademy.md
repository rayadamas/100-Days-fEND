# [11/4/2023, 16:51-17:51]
- **Today's Progress**: starting off w/ learning about variables in #JSX. concluding before the next module on #Conditionals_TernaryOp in #JSX. 
- **Thoughts:** the syntax is definitely tricky because i'm thinking i'm about to type one lang but i'll forget that the convention is the inverse for the lang i should be typing, like self-closing tags, or esp whether to include quotations when working w/ attributes 
---
- ### Variables in JSX
	- When you inject JavaScript into [JSX](https://www.codecademy.com/resources/docs/react/jsx), that JavaScript is part of the same environment as the rest of the JavaScript in your file.
		- That means that you can access variables while inside of a JSX expression, even if those variables were declared outside of the JSX code block.
```
// Declare a variable:
const name = 'Gerdo';

// Access your variable inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;
```
- #### quiz
1. Replace `root.render()`‘s argument with a JSX `<h1></h1>`.
	- Using curly braces, set the `<h1></h1>` tag’s inner text equal to `theBestString`.
```
Before
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const theBestString = 'This text was accessed through a javascript variable';

root.render(___);

After
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const theBestString = 'This text was accessed through a javascript variable';

root.render(<h1>{theBestString}</h1>);
```
- ## Question
	- When should I assign a variable to a JavaScript expression that I want to use in a JSX expression?
- ## Answer
	- The use of variables to store JavaScript expressions will largely be based on preference.
		- However, we will usually want to use variables assigned to our JS expressions when our JS code would otherwise be hard to read/follow before using our JS expression inside of our JSX.
```
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>two + two = {2 + 2}</h1>, document.getElementById('app')); //Here, the JavaScript expression `2+2` is easy to read and understand what's going on in the code

import React from 'react';
import ReactDOM from 'react-dom';

const myFunc  = (a, b) => {
  //do some logic or calculations with parameters here
}


ReactDOM.render(<h1>{myFunc(3,4)}</h1>, document.getElementById('app')); //Here, we assign a function to the variable `myFunc` then call the myFunc fuction from inside our JSX - this is especially useful if the logic inside myFunc would be difficult to read and understand from inside a JSX expression
```
==N==
- ### Variable Attributes in JSX
	- When writing [JSX](https://www.codecademy.com/resources/docs/react/jsx), it’s common to use variables to set _attributes_.
		- Here’s an example of how that might work:
```
// Use a variable to set the `height` and `width` attributes:

const sideLength = "200px";

const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);
```
- Notice how in this example, the `<img />`‘s attributes each get their own line. This can make your code more readable if you have a lot of attributes for one element.
	- _Object properties_ are also often used to set attributes:
```
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);

const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);

const owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
); 
```
- #### quiz
1. On line 9, declare a new variable named `gooseImg`.
	- Set its value equal to a JSX `<img />` element.
		- Give the `<img />` an attribute with a _name_ of `src`.
			- Set the attribute’s _value_ equal to the variable `goose`.
2. Use `root.render()` to render `gooseImg`.
```
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
const goose =
  "https://content.codecademy.com/courses/React/react_photo-goose.jpg";

// Declare new variable here:
let gooseImg = (<img src={goose} />);
root.render(gooseImg);
```
- ## Question
	- Is using a variable to set an attribute better practice than using object properties to set attributes?
		- ## Answer
			- The decision to use a variable to set an attribute vs. using object properties to set attributes will depend on how many attributes with different values we would like to set
				- if we only need to set a single attribute value (or the same attribute value on multiple elements) we can easily use a variable,
					- but if we need to set multiple attribute values, using object properties may be a better choice.
- For example:
```
const myAttr = 'test'; // we can use a variable to set a single attribute value, or multiple of the same attribute value

const myElement = (
  <div>
    <h2 className={myAttr}>A New Heading</h2>
    <h2 className={myAttr}>Another Heading</h2>
    <h2 className={myAttr}>And Another Heading</h2>
  </div>
)

const myAttrObj = {
  attrOne: 'attrOne',
  attrTwo: 'attrTwo',
  attrThree: 'attrThree'
}; // we can use object properties to set multiple attribute values

const myJSXElement = (
  <nav>
    <span id={myAttrObj.attrOne}></span>
    <span id={myAttrObj.attrTwo}></span>
    <span id={myAttrObj.attrThree}></span>
  </nav>
 )
```
==N==
- ### Event Listeners in JSX
	- [JSX](https://www.codecademy.com/resources/docs/react/jsx) elements can have _event listeners_, just like HTML elements can.
		- Programming in React means constantly working with event listeners.
			- You create an event listener by giving a JSX element a special _attribute_.
				- Here’s an example:
```
<img onClick={clickAlert} />
```
- An event listener attribute’s _name_ should be something like `onClick` or `onMouseOver`:
	- the word `on` plus the type of event that you’re listening for.
	- Look through the [common components list in React docs](https://react.dev/reference/react-dom/components/common#) to browse supported event names.
- An event listener attribute’s _value_ should be a function.
	- The above example would only work if `clickAlert` were a valid function that had been defined elsewhere:
```
function clickAlert() {
  alert('You clicked this image!');
}

<img onClick={clickAlert} />
```
- Note that in HTML, event listener _names_ are written in all lowercase, such as `onclick` or `onmouseover`.
	- In JSX, event listener names are written in camelCase, such as `onClick` or `onMouseOver`.
- #### quiz
	- 1. Take a look at line 19. `root.render()` is being passed a `null` argument.
		- Render `kitty` by replacing the `null` with `kitty`.
	- 2. Add an `onClick` attribute to the `<img />` element. Set `onClick`‘s value equal to the `makeDoggy` function.
		- Remember, since attributes are a part of JSX expressions, you will need to _inject_ JavaScript in order to use `makeDoggy`.
			- Click Run, and then click on the browser image to change the kitty into a doggy.
```
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty" onClick={makeDoggy} />
);

root.render(kitty);
```
- ## Question
	- Why don’t we set the event listener attribute value to a function call?
		- ## Answer
			- If we set the event listener attribute value to a function call, the function will get called automatically on the page load (when our JSX element renders to the browser) instead of listening for the event and then calling the function.
				- For example:
```
import React from 'react';
import ReactDOM from 'react-dom';

function switchHeading() {
  console.log('switchHeading was called!'); 
}

const heading = (
  <h1 onClick={switchHeading}>Click Me!</h1> // onClick will listen for the click event, then will call switchHeading. When that occurrs we will see 'switchHeading was called!' logged to the console
  // if <h1 onClick={switchHeading()}>Click Me!</h1> is used instead, and we set onClick to a function call, we will see 'switchHeading was called!' logged to the console immediately when our JSX renders and not on the click event
)

ReactDOM.render(heading, document.getElementById('app'));
```
==N==
- ### JSX Conditionals: If Statements That Don't Work
	- Great work! You’ve learned how to use curly braces to inject JavaScript into a [JSX](https://www.codecademy.com/resources/docs/react/jsx) expression!
		- Here’s a rule that you need to know: you can not inject an `if` statement into a JSX expression.
			- This code will break:
```
(
  <h1>
    {
      if (purchase.complete) {
        'Thank you for placing an order!'
      }
    }
  </h1>
)
```
- What if you want a JSX expression to render but only under certain circumstances?
	- You can’t inject an `if` statement. What can you do?
- ## Question
	- Can I set my if statement equal to a function, then inject the function into a JSX expression?
		- ## Answer
			- We can! Because a JavaScript function is an expression and not a statement, we can inject a function that performs conditional logic into a JSX expression.
				- For example:
```
import React from 'react';
import ReactDOM from 'react-dom';

function myConditional () {
  const randNum = Math.floor(Math.random() * 11); // sets randNum to random integer from 0 to 10
  if(randNum >= 5){
    return 'Random number is greater than or equal to 5!'
  } else {
    return 'Random number is less than 5!';
  }
}

const heading = (
  <h1>{myConditional()}</h1> // the JavaScript expression, the myConditional function, can be injected into a JSX expression and will evaluate to either 'Random number is greater than or equal to 5!' or 'Random number is less than 5!' on page load
);

ReactDOM.render(heading, document.getElementById('app'));
```
- ### JSX Conditionals: If Statements That Do Work
	- How can you write a _conditional_ if you can’t inject an `if` statement into JSX?
		- One option is to write an `if` statement and _not_ inject it into [JSX](https://www.codecademy.com/resources/docs/react/jsx).
			- Look at **if.js**.
				- Follow the `if` statement, all the way from line 8 down to line 20.
					- **if.js** works because the words `if` and `else` are _not_ injected in between JSX tags. The `if` statement is on the outside, and no JavaScript injection is necessary.
					- This is a common way to express conditionals in JSX.
```
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

root.render(message);
```
- #### quiz
	- 1. Open **app.js**.
		- Starting on line 18, write an `if`/`else` statement, using **if.js** as a guide.
			- If `coinToss()` is equal to `'heads'`, execute `img = <img src={pics.kitty} />`.
				- Inside of the `else` clause, execute `img = <img src={pics.doggy} />`.
					- In other words, if the coin lands `heads`, then you should get a picture of a kitty, and if the coin lands `tails`, then you should get a picture of a doggy.
- 2. At the bottom of the file, call `root.render()`.
	- For `root.render()`‘s argument, pass in `img`.
		- Click Run. Refresh the browser several times. Does the picture change?
```
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads') {
  img = <img src={pics.kitty} />
} else {
  img = <img src={pics.doggy} />
}

root.render(img);
```
- ## Question
	- Is there a way to conditionally show or hide an element?
		- ## Answer
			- When using a conditional to render an element, we can return `null` for a condition to make sure an element does not render based on the condition.
				- For example:
```
import React from 'react';
import ReactDOM from 'react-dom';

function showOrHide () {
  let myHideObj = {
    hide: false
  }

  if (myHideObj.hide === false) {
    let innerElement = (
      <h1>Not hidden!</h1>  
    )
    return innerElement; // when myHideObj.hide property is set to false the if statement will return innerElement and will render the element
  } else {
    return null; // when myHideObj.hide property is set to true we can return null to make sure no element is rendered based on our condition
  }
}

const myElement = (
  <div>{showOrHide()}</div>
)

ReactDOM.render(myElement, document.getElementById('app'));
```




















