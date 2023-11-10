# [11/10/2023, 12:54-13:54]
- **Today's Progress**: starting COMPONENTS AND ADVANCED JSX, Use Multiline JSX in a Component.
	- done with the module but will save the review/review exercise for tomorrows sesh. 
- **Thoughts:** feeling p comfortable w/ the nested #JSX within #Javascript syntax so far.
	- the only trip up this session was forgetting the `return` keyword but otherwise it was a easy flow. 
---
- # Use Multiline JSX in a Component
	- In this lesson, you will learn some common ways that [JSX](https://www.codecademy.com/resources/docs/react/jsx) and React components work together.
	- You’ll get more comfortable with both JSX and React components while picking up some new tricks.
		- Take a look at this HTML:
```
<blockquote>
  <p>
    The world is full of objects, more or less interesting; I do not wish to add any more.
  </p>
  <cite>
    <a target="_blank"
      href="https://en.wikipedia.org/wiki/Douglas_Huebler">
      Douglas Huebler
    </a>
  </cite>
</blockquote>
```
- How might you make a React component return this HTML?
	- Select **QuoteMaker.js** to see one way of doing it.
```
import React from 'react';

function QuoteMaker() {
    return (// <----------------------------
      <blockquote>
        <p>
          The world is full of objects, more or less interesting; I do not wish to add any more.
        </p>
        <cite>
          <a target="_blank"
            href="https://en.wikipedia.org/wiki/Douglas_Huebler">
            Douglas Huebler
          </a>
        </cite>
      </blockquote>
    );// <----------------------------
};

export default QuoteMaker;
```
- The key thing to notice in `QuoteMaker` is the parentheses in the `return` statement, on lines 4 and 16.
	- Until now, your function component `return` statements have looked like this, without any parentheses:
		- `return <h1>Hello world</h1>;`
	- However, ==a multi-line JSX expression should always be wrapped in parentheses!==
		- That is why `QuoteMaker`‘s return statement has parentheses around it.
- ## quiz
1. Here’s another quote, formatted in the same way:
```
<blockquote>
  <p>
    What is important now is to recover our senses.
  </p>
  <cite>
    <a target="_blank" 
      href="https://en.wikipedia.org/wiki/Susan_Sontag">
      Susan Sontag
    </a>
  </cite>
</blockquote>
```
- In **MyQuote.js**, write a React component that returns this HTML.
	- Use **QuoteMaker.js** as a guide! Remember to import `React` at the top of the file, and remember to export your component at the bottom of the file.
```
MyQuote.js

import React from 'react';

function NewQuote() {
  return (
    <blockquote>
  <p>
    What is important now is to recover our senses.
  </p>
  <cite>
    <a target="_blank" 
      href="https://en.wikipedia.org/wiki/Susan_Sontag">
      Susan Sontag
    </a>
  </cite>
</blockquote>
  );
};

export default NewQuote;

app,js

import React from 'react';
import MyQuote from './MyQuote'
import NewQuote from './MyQuote'

function App() {
    return (
      <MyQuote />
    );
};

export default App;
```
- ## Question
	- Why not put an opening container element tag after the `return` keyword instead of an opening parentheses?
		- ## Answer
			- Although using an opening container element tag after the `return` statement will work, given that the first opening tag belongs to the same element as the final closing tag of the JSX expression and the first opening tag follows the `return` statement on the same line, it can make our code harder to read, it can make it less organized, and if we forget to put the first opening tag on the same line as the `return` statement, the JavaScript engine will automatically insert a semicolon after the `return` statement and will not return our component, but will instead stop executing the `render()` function.
==N==
- ### Use a Variable Attribute in a Component
	- Take a look at this JavaScript object named `redPanda`:
```
const redPanda = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width: '200px'
};
```
- How could you render a React component with an image of `redPanda` and its properties?
	- Select **RedPanda.js** to see one way to do this.
		- Note all the curly brace JavaScript injections inside the `return` statement.
		- You can, and often will, inject JavaScript into [JSX](https://www.codecademy.com/resources/docs/react/jsx) inside the `return` statement.
- #### quiz
1. Select **Owl.js**.
	- Start by importing `React` from the React library.
2. Let’s create our component.
	- In **Owl.js**, declare a new function component named `Owl`. `Owl` should return an empty `<div></div>`.
	- Feel free to use **RedPanda.js** for guidance.
3. Although you’re not done with the component, export it so that you can see your progress being rendered in the browser window as you work.
	- At the bottom of the **Owl.js** file, default export your Owl component.
4. Our `owl` object has 2 properties, `title` and `src` which has a link to an image. We’ll display both of these, starting with the `title`.
	- _Nest_ an `<h1>` element inside of your `<div>` element.
		- Use the value of `owl.title` as the content of the `<h1>` element. Remember, you will have to use curly braces to access `owl.title`, since it is a JavaScript property.
			- Don’t forget to wrap the whole multi-line JSX expression in parentheses!
5. Still inside of the `<div></div>` tags, make a new line after the `<h1></h1>` tags.
	- On your new line, add an `<img />` element.
		- Your `<img />` should have two attributes:
			- an `src` of `owl.src`
			- an `alt` of `owl.title`
```
Owl.js

import React from 'react';

const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};

//Define function component here:
function Owl() {
  return (
    <div>
      <h1>{owl.title}</h1>
      <img src={owl.src}
        alt={owl.title} 
        />
    </div>
  )
};

export default Owl;
```
- ## Question
	- Why would we want to use variables to set a component’s attributes?
		- ## Answer
			- We can use variables, including object properties, to set a component’s attributes to keep our component easy to read and organized, but more importantly, we can use variables to set attributes so that our attributes can be dynamic and/or can be changed easily!
				- Consider the following examples, given that we may change the component’s attributes multiple times:  
					- This first example would be eaiser to make changes to the attributes:
```
import React from 'react';
import ReactDOM from 'react-dom';

let myAttributes = { //here we can easily change the path to the image and the description because we can find our attributes easily at the top of our file and don't have to search through our component for them
  attrOne: 'path/to/image', 
  attrTwo: 'description of image'
}

class MyComponent extends React.Component {
  render() {
    return (
      <section>
        <h1>Hello World</h1>
        <img src={myAttributes.attrOne} alt={myAttributes.attrTwo} />
      </section>
    )
  }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('app')
);

- Whereas this would be more difficult to make changes to:

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render() {
    return ( //the attributes here would be more difficult to change when we want to change the src path and/or the alt attribute because we would have to search through the file for the attributes we want to change
      <section> 
        <h1>Hello World</h1>
        <img src='path/to/image' alt='description of image' /> 
      </section>
    )
  }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('app')
);
```
==N==
- ### Putting Logic in a Function Component
	- A function component must have a `return` statement. However, that isn’t _all_ that it can have.
	- You can also put simple calculations that need to happen before returning your [JSX](https://www.codecademy.com/resources/docs/react/jsx) element within the function component.
		- Here’s an example of some calculations that can be done inside a function component:
```
function RandomNumber() {
  //First, some logic that must happen before returning
  const n = Math.floor(Math.random() * 10 + 1);
  //Next, a return statement using that logic: 
  return <h1>{n}</h1>
}

- Watch out for this common mistake:

function RandomNumber() {
  return (
    const n = Math.floor(Math.random() * 10 + 1);
    <h1>{n}</h1>
  )
}

- In the above example, the line with the `const n` declaration will cause a syntax error, as it should come before the `return`.
```
- #### quiz
1. Let’s make a function component with some logic in it.
	- Start by importing `React` from the React library at the top of the **Friend.js** file.
2. Create a new function component named `Friend`.
	- Your function component should just return an empty `<div>` for now.
3. Although you’re not done with the component, export it so that you can see your progress being rendered in the browser window as you work.
	- At the bottom of your **Friend.js** file, default export your Friend component
4. Time to add some logic.
	- Before the `return` statement, declare a new variable named `friend`.
		- Set `friend` equal to either `friends[0]`, `friends[1]`, or `friends[2]`, depending on which friend sounds most appealing to you.
5. Inside the `<div>` element in the `return` statement, add an `<h1>` element.
	- Inside of the `<h1></h1>` tags, inject `friend.title`.
6. Finally, let’s meet your new friend by adding a picture of them.
	- Still inside of the `<div></div>` tags, make a new line after the `<h1></h1>` tags.
		- On the new line, add an `<img />` element. Give the `<img />` tag an attribute of `src` with the value of `{friend.src}`.
```
import React from 'react';
const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys! Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

// New function component starts here:
function Friend() {
  const friend = friends[2];
  return (
    <div>
      <h1>
        {friend.title}
      </h1>
      <img
        src={friend.src}
       />
    </div>
  );
};

export default Friend;
```
- ## Question
	- When should I use logic inside of render vs logic inside of the class declaration?
		- ## Answer
			- When we have simple logic, think logic that is easy to read and understand, we can put it in our render function. If instead we have logic that we would not want to be re-created each time the render function is called, or logic that is harder to read/understand, think function definitions, event handler functions etc, we should put that logic inside the class declaration.
- For example:
```
import React from 'react';
import ReactDOM from 'react-dom';

class MyNumbers extends React.Component {
  multiplySomeNumbers(n) { //We define the `multiplySomeNumbers` method inside our class declaration because we won't want `multiplySomeNumbers` to be re-created each time the render function is called. Also, if instead we defined this logic inside of `render`, it may be hard to read/understand or convoluted.
    if(n > 10) {
      return n * 5;
    } else if (n > 5) {
      return n * 10;
    } else {
      return n * 2
    }
  }
  render() {
    const n = Math.floor(Math.random() * 12 + 1); //We can keep simple logic like this inside our `render` method.
    return (
    	<div>
      	<h1>The starting number is {n}. After doing some calculations....the number is {this.multiplySomeNumbers(n)}. </h1> 
      </div>
    )
  }
}

ReactDOM.render(<MyNumbers />, document.getElementById('app'));
```
==N==
- ### Use a Conditional in a Function Component
	- How might you use a _conditional_ statement inside of a function component?
	- Select **TodaysPlan.js** to see one way of doing it.
		- Notice that the `if` statement is located _inside_ of the function component, but _before_ the `return` statement.
```
TodaysPlan.js

import React from 'react';

function TodaysPlan() {
    let task;
    let apocalypse = false;
    if (!apocalypse) {
      task = 'learn React.js'
    } else {
      task = 'run around'
    }
    return <h1>Today I am going to {task}!</h1>;
}

export default TodaysPlan;
```
- #### quiz
1. Select **TonightsPlan.js**. You’ll see a variable named `fiftyFifty`.
	- `fiftyFifty` will equal `true` half the time and `false` half the time.
		- Begin by writing the skeleton of a new function component named `TonightsPlan`.
2. At the bottom of **TonightsPlan.js**, default export your component to see your progress as you work.
3. Create your first condition.
	- If `fiftyFifty` is true, then `TonightsPlan` should return this element:
```
<h1>Tonight I'm going out WOOO</h1>
```
4. Create your second condition.
	- If `fiftyFifty` is _false_, then `TonightsPlan` should return this element:
```
<h1>Tonight I'm going to bed WOOO</h1>
```
5. Run your code and determine what tonight’s plan is.
```
import React from 'react';

const fiftyFifty = Math.random() < 0.5;

// New function component starts here:
function TonightsPlan() {
  if(fiftyFifty) {
    return <h1>Tonight I'm going out WOOO</h1>
  } else {
    return <h1>Tonight I'm going to bed WOOO</h1>
  }
};

export default TonightsPlan;
```
- ## Question
	- Can I change a component’s attribute values using a conditional statement in the `render` function?
		- ## Answer
		- Absolutely! We can change attribute values of components/elements based on a condition - this functionality is useful in many cases, including changing a `className` based on a condition.
			- For example, say we want to render a button and want it to have a different background color based on a condition - to add this functionality to our component we need to set the `className` attribute value based on said condition like this:
```
import React from 'react';
import ReactDOM from 'react-dom';

class MyButton extends React.Component {
  render() {
    let colorChoice = 'blue';
    let buttonClassName;

    if(colorChoice === 'red'){
      buttonClassName = 'red-button';
    } else {
      buttonClassName = 'blue-button';
    }

    return (
    <button className={buttonClassName}>Here's a button!</button> // the className attribute can be set by injecting JS into our component, in this example className is set based on a condition
    )
  }
};

ReactDOM.render(
  <MyButton />,
  document.getElementById('app')
);

- Then in our CSS we would have something like this:

.red-button {
  background-color: red;
}

.blue-button {
  background-color: blue
}
```
==N==
- ### Event Listener and Event Handlers in a Component
	- Your function components can include event handlers.
		- With event handlers, we can run some code in response to interactions with the interface, such as clicking.
```
function MyComponent(){
  function handleHover() {
    alert('Stop it.  Stop hovering.');
  }
  return <div onHover={handleHover}></div>;
}
```
- In the above example, the event handler is `handleHover()`.
	- It is passed as a prop to the JSX element `<div>`.
	- We’ll discuss more on props in a later lesson, but for now, understand that props are information passed to a JSX tag.
		- The logic for what should happen when the `<div>` is hovered on is contained inside the `handleHover()` function. The function is then passed to the `<div>` element.
			- Event handler functions are defined inside the function component and, by convention, start with the word “handle” followed by the type of event it is handling.
				- There’s a small quirk you should watch out for. Take a look at this line again:
					- `return <div onHover={handleHover}></div>`
						- The `handleHover()` function is passed without the parentheses we would typically see when calling a function.
						- This is because passing it as `handleHover` indicates it should only be called once the event has happened.
						- Passing it as `handleHover()` would trigger the function immediately, so be careful!
- #### quiz
1. In **Button.js**, find the `<button></button>` tags inside of the `return` statement.
	- Give this `<button>` element an `onClick` attribute.
		- The attribute’s _value_ should be the `handleClick` function.
```
import React from 'react';

function SubmitButton() {
  function handleClick() {
    alert('Submission Successful.');
  }
  return <button onClick={handleClick}>Submit</button>;
}

export default SubmitButton;

```
- ## Question
	- Can I call multiple event handlers in response to a single event?
		- ## Answer
			- By passing an anonymous function, or a named function, with multiple event handler calls as the function body, to our event listener (like `onClick`, `onKeyUp`, `onChange`, etc) we can call multiple event handlers in response to a single event.
				- For example:  
					- Using an anonymous function:
```
import React from 'react';
import ReactDOM from 'react-dom';

class MyButton extends React.Component {
  eventHandler1() {
    console.log('eventHandler1 called!');
  }

  eventHandler2() {
    console.log('eventHandler2 called!');
  }

  render() {
    return ( 
      <button onClick={() => {
        this.eventHandler1();
        this.eventHandler2();
      }}>Here's a button!</button> // here `onClick` is set to an anonymous function where the function body contains multiple function calls that will be triggered on the click event of the button
    )
  }
};

ReactDOM.render(
  <MyButton />,
  document.getElementById('app')
);

- and using a named function:

import React from 'react';
import ReactDOM from 'react-dom';

class MyButton extends React.Component {
  eventHandler1() {
    console.log('eventHandler1 called!');
  }

  eventHandler2() {
    console.log('eventHandler2 called!');
  }

  handleClick = () => {
    this.eventHandler1();
    this.eventHandler2();
  }

  render() {
    return (
      <button onClick={this.handleClick}>Here's a button!</button> // here `onClick` is set to a named function `handleClick` where the function body contains multiple function calls that will be triggered on the click event of the button
    )
  }
};

ReactDOM.render(
  <MyButton />,
  document.getElementById('app')
);
```






