# [11/6/2023, 13:44-16:00]
- **Today's Progress**: Starting w/ `Keys` in #JSX. 
- **Thoughts:** love the questions at the bottom of each module. completed Adv JSX lesson module. concepts were not too mind-taxing but we'll see in the upcoming fr projects.
	- started a free trial so i can do the projects, hopefully i can cancel it, keep learning, then get it again once i complete a new module & arrive at a new set of projs.
	- got caught up in the 1st instance of rendering this h1 element but i had a constant misnamed from what was instructed.
	- forgot that in JSX the convention is `className`, not just `class`
	- stopping here at this project, annoyed it's either not compiling correct due to a logic error somewhere which i'll see better when less annoyed, OR it's the site's compiler playin w/ me idk. the code at the bottom's as far as i got. i don't wanna just click the box and move on to the next lesson so i'll start here tomorrow
---
- ### Keys
	- When you make a list in [JSX](https://www.codecademy.com/resources/docs/react/jsx), sometimes your list will need to include something called `keys`:
```
<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>
```
- A `key` is a JSX attribute.
	- The attribute’s _name_ is `key`.
		- The attribute’s _value_ should be something unique, similar to an `id` attribute.
- `keys` don’t do anything visible!
	- React uses them internally to keep track of lists.
		- If you don’t use keys when you’re supposed to, React might accidentally scramble your list items into the wrong order.
	- Not all lists need to have `keys`. A list needs `keys` if either of the following is true:
		1. The list items have _memory_ from one render to the next.
			- For instance, when a to-do list renders, each item must “remember” whether it was checked off.
				- The items shouldn’t get amnesia when they render.
		2. A list’s order might be shuffled.
			- For instance, a list of search results might be shuffled from one render to the next.
	- If neither of these conditions is true, then you don’t have to worry about `keys`. If you aren’t sure, then it never hurts to use them!
- #### quiz
	- 1. On line 10, give the `<li>` element a `key` attribute.
		- What should `key`'s _value_ be?
			- Each `key` must be a unique string that React can use to correctly pair each rendered element with its corresponding item in the array.
				- So, for each element in `people`, we must generate a unique value. How can you get `.map()` to produce unique keys?
	- First, add an `i` parameter to `.map()`'s inner function so that you can access each person’s unique index:
```
const peopleList = people.map((person, i) =>
```
- Now, you can get a unique key on each loop by adding the following attribute to the `<li>` element:
```
key={'person_' + i}


import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map((person,i) =>
  // expression goes here:
  <li key={"person_" + i}>{person}</li>
);

// root.render goes here:
root.render(<ul>{peopleList}</ul>);
```
- ## Question
	- Can I use the index of an element (passed to a method/looped over) as the `key` attribute’s value?
		- ## Answer
			- We can use the index of an element as the `key` attribute’s value, however, using only the index of an element as the `key` may cause some issues as the order of the elements may change and potentially render incorrect data specifically when a list can be reordered or filtered.
				- When a list of elements can be reordered or filtered we should use more unique keys for the elements.
==N==
- ### React.createElement
	- You can write React code without using [JSX](https://www.codecademy.com/resources/docs/react/jsx) at all!
	- The majority of React programmers do use JSX, but you should understand that it is possible to write React code without it.
		- The following JSX expression:
```
const h1 = <h1>Hello world</h1>;

- can be rewritten without JSX, like this:

const h1 = React.createElement(
  "h1",
  null,
  "Hello world"
);
```
- When a JSX element is compiled, the compiler _transforms_ the JSX element into the method that you see above:
	- `React.createElement()`.
		- Every JSX element is secretly a call to `React.createElement()`.
			- We won’t go in-depth into how `React.createElement()` works, but check out [the React documentation on `createElement()`](https://react.dev/reference/react/createElement) to learn more.
- #### quiz
	- 1. Take a look at the following JSX element:
```
const greatestDivEver = <div>i am div</div>;
```
- In **app.js**, create the above element _without_ using JSX.
```
// const greatestDivEver = React.createElement();
const greatestDivEver = React.createElement(
  "div",
  null,
  "i am div"
);
```
==N==
- ### Review
	- Congratulations! You have learned a wide variety of [JSX](https://www.codecademy.com/resources/docs/react/jsx) concepts. If you don’t feel like you’ve mastered them all yet, that’s okay! These concepts will come up again and again throughout your React learning journey.
		- You are now ready to put your JSX knowledge to use!
==N==
- ### Animal Fun Facts
	- In this project, we’ll build a program that allows users to click an animal on the screen in order to have a fun fact pop up.
		- Our program will display a selection of animals on the screen. We’ll be allowed to decide if we want to include a background or not. Clicking an animal will cause a fact to be randomly selected from a list of potential options. The selected fact will pop up on the screen. As we keep clicking, we’ll be able to see different facts.
1. On line 1 in **app.js**, you should see an import statement. This is importing the `animals` object from **animals.js**. Feel free to take a look at it now, but we’ll be coming back to it in later tasks.
	- For now, let’s import the `React` from `react` and `createRoot` from `react-dom/client`.
```
app.js

import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';
```
2. Click on **index.html** to find out the id of the HTML element to get a reference of.
	- Use this id and the `document` object to get a reference of this element and store it in a constant called `container`.
```
import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const myElement = document.getElementById('app');
```
3. Create a React root so you can render content using the `createRoot()` method, passing `container` as an argument. Store this root in a constant called `root`.
4. Add a `title` constant that will hold the value of the title. For now, set its value to an empty string.
	- In addition, create an `animalFacts` constant to hold the JSX expression that we’ll want to be compiled. Set its value to a `<h1>` element that contains our title.
		- We still shouldn’t see anything in the browser yet! We’ll have to wait until we write our React root’s `render()` method before anything shows up
5. We could fill in the empty string assigned to `title` if we wanted, but we could also leave it blank and let the JSX use a default value instead.
	- Using the ternary operator, let the `<h1>` heading use ‘Click an animal for a fun fact’ as the default if `title` is an empty string.
6. It’s time to call our `root`‘s `render()` method.
	- Let’s pass in `animalFacts` as the JSX expression that we want to be compiled and rendered.
		- When finished, click Save. If all goes well, we should see the text ‘Click an animal for a fun fact!’ appear on the screen!
7. Let’s add a background!
	- Somewhere above where `animalFacts` is defined, create a constant named `background`. Set its value to a `<img />` element.
		- Now let’s give it some attributes:
			- Give it a class of `'background'`
			- Let’s use `'ocean'` for `alt`.
			- Finally, use `'/images/ocean.jpg'` as the value of `src`.
8. Let’s reformat the JSX expression stored in `animalFacts` to include the `background` variable.
	- Wrap the current `<h1>` element and our new `background` variable inside of `<div></div>` tags. Since the expression is going to be multiple lines, wrap it in parentheses.
		- Click Save. If everything is working as it should, we should see our background image showing up underneath the title!
9. Use a [`for...in` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) to iterate over the `animals` object that we’re importing on line 1. Before the `animalFacts` definition, define an `images` array. For each animal, add a new `<img />` to that array.
	- Assuming `animal` is the placeholder variable in your `for...in` loop, each image should have the following attributes:
		- `key`: `{animal}`
		- `className`: `'animal'`
		- `alt`: `{animal}`
		- `src`: `{animals[animal].image}`
		- `aria-label`: `{animal}`
		- `role`: `'button'`
10. Now that we have our array of images, let’s inject it into the JSX expression.
	- Within the `animalFacts` JSX, underneath `{background}`, create a `<div>`. Give it a `className` attribute and set it equal to `'animals'`. Nest the array of images inside of this element.
		- Finally, click Save. We should see our animals!
11. Now that we have our animals displaying on the screen, we’re ready to add an event listener! But first, let’s write a function to handle this event.
	1. Create a function `displayFact()` that takes one parameter `e`, the event. We want this function to pick a random fun fact based on the selected animal.
	2. Inside of the function, use `e.target.alt` to get the name of the animal being clicked.
	3. Generate a random index and use it to access an element in the animal’s `.facts` array.
	4. Save the fun fact in a variable.
12. We need a place to display our facts. Create an empty `<p>` element in `animalFacts` and give it an `id` attribute equal to `'fact'`.
```
index,html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main id="app">
  </main>
	<script src="https://content.codecademy.com/courses/React/react-18-course-bundle.min.js"></script>
  <script src="/app.compiled.js"></script>
</body>
</html>

animals.js

export const animals = {
  dolphin: {
    image: '/images/dolphin.jpg',
    facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
  },
  lobster: {
    image: '/images/lobster.jpg',
    facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
  },
  starfish: {
    image: '/images/starfish.jpg',
    facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
  }
};

app.js

import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");

const root = createRoot(container);

const title = '';

const background = <img className="background" alt="ocean" src="/images/ocean.jpg" />;

function displayFact(e) {
  const animal = e.target.alt;
  const index = Math.floor(Math.random() + animals[animal].facts.length);
  const funFact = animals[animal].facts[index];
  const p = document.getElementById('fact');
  p.innerHTML = funFact;
}

const images = [];
for (const animal in animals) {
  const image = (
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact}
    />
  );

  images.push(image);
}

const showBack = true;
const animalFacts = (
  <div>
    <h1>{title === '' ? 'Click an animal for a fun fact!' : title}</h1>
    {showBack && background}
    <div className='animals'>{images}</div>
    <p id='fact'></p>
  </div>
);

root.render(animalFacts);
```






























