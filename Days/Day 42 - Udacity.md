# [10/22/2023, 18:33-19:34]
- **Today's Progress**: continuing module w/ working through the various *phases* of an event in the #DoM 
- **Thoughts:** the most confusion came from following the module's explanation of event delegation, but w/ #ChatGPT to run the example snippets through & ask questions this was mitigated. i have a much more clear understanding of what's happening when i see `document.body.xxx`, as well as seeing a parameter within a created event listener.  
---
### 💡 An "event" is an "evt" is an "e" 💡
- In the following example, I'm using a parameter with the name `event`.
```
const items = document.querySelectorAll('.quizzing-quizzes');
const el = items[1];

el.addEventListener('keypress', function (event) {
    console.log('You clicked on the 2nd quizzing-quizzes item!');
});

- Instead of `event`, the parameter's name could just as easily be:
	- `evt`
	- `e`
	- `theEvent`
	- `horse`
- The name `event` or `evt` does not provide any inherent meaning or special capabilities; there is nothing special to the name... it's just the name of the paramete
```
## The Default Action
- The event object stores a lot of information, and we can use this data to do all sorts of things.
	- However, one incredibly common reason that professionals use the event object for, is to ==prevent== the default action from happening.
		- Think about an anchor link on a webpage.
		- There are probably a couple dozen links on this page!
		- What if you wanted to run some code and display some output when you click on one of these links.
		- If you click on the link, it will automatically navigate you to the location listed in its `href` attribute:
			- that's what it does by default.
				- What about a form element?
				- When you submit a form, by default, it will send the data to the location in its `action` attribute.
				- What if we wanted to validate the data before sending it, though?
					- Without the event object, we're stuck with the default actions.
						- However, the event object has a `.preventDefault()` method on it that a handler can call to prevent the default action from occurring!
```
const links = document.querySelectorAll('a');
const thirdLink = links[2];

thirdLink.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Look, ma! We didn't navigate to a new page!");
});
```
==N==
# Avoid Too Many Events
- How many event listeners are created with this code?
```
const myCustomDiv = document.createElement('div');

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', function respondToTheClick(evt) {
        console.log('A paragraph was clicked.');
    });

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);
```
- In the provided code snippet, you are creating a `div` element,
	- then creating 200 `p` (paragraph) elements inside a for loop.
		- Each `p` element is getting a click event listener attached to it.
			- Therefore, 200 event listeners are created in total, each associated with a unique `p` element.
- Here's a breakdown of the steps happening in the code:
	1. A `div` element (`myCustomDiv`) is created.
	2. A for loop iterates 200 times.
	3. In each iteration:
	    - A new `p` element (`newElement`) is created.
	    - Text content is assigned to the `p` element.
	    - A click event listener is attached to the `p` element, which will log a message to the console when the `p` element is clicked.
	4. Each `p` element is appended to `myCustomDiv`.
	5. `myCustomDiv` is appended to `document.body`.
		- So, in summary, 200 event listeners are created, one for each `p` element.
## Refactoring The Number of Event Listeners
- Looking to the code above, we're creating a `<div>` element,
	- attaching two hundred paragraph elements,
		- and attaching an event listener with a `respondToTheClick` function to each paragraph as we create it.
			- There are a number of ways we could refactor this code.
			- For example, as of right now, we're creating two hundred different `respondToTheClick` functions (that all actually do the exact same thing!).
			- We could extract this function and just reference the function instead of creating two hundred different functions:
```
const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', respondToTheClick);

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);
```
- The key changes are as follows:
	1. **Separation of Concerns**:
	    - In the original code, the `respondToTheClick` function was defined within the `addEventListener` method call, inside the loop.
	    - In the revised code, the `respondToTheClick` function is defined separately outside of the loop. This separates the concern of defining the function from the loop that's creating and configuring the paragraph elements.
	2. **Memory Efficiency**:
	    - The revised code is more memory-efficient. In the original code, a new function object (`respondToTheClick`) was being created for each iteration of the loop (200 in total).
	    - In the revised code, a single `respondToTheClick` function object is created, and the same function object is used as the event listener for all 200 paragraph elements. This is a more efficient use of memory as only one function object is created and reused, instead of creating 200 separate function objects.
	3. **Code Reusability and Readability**:
	    - Defining the `respondToTheClick` function separately also improves code reusability and readability. If you need to change the behavior of the click event listener, you only need to change it in one place, making the code easier to maintain.
	    - The revised code is also easier to read and understand at a glance, since the function name `respondToTheClick` clearly communicates its purpose, and it's defined separately from the rest of the code.
- What if we moved all of the listeners to the `<div>` instead?
```
const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

myCustomDiv.addEventListener('click', respondToTheClick);

document.body.appendChild(myCustomDiv);
```
- Now there is only:
	- a single event listener
	- a single listener function
		- Now the browser doesn't have to store in memory two hundred different event listeners and two hundred different listener functions. 
			- However, if you test the code above, you'll notice that we've lost access to the individual paragraphs.
			- There's no way for us to target a specific paragraph element.
			- So how do we combine this efficient code with the access to the individual paragraph items that we did before?
				- We use a process called **event delegation**.
- Here are the key changes to the revised code snippet:
	1. **Event Delegation**:
	    - Instead of attaching an individual click event listener to each of the 200 paragraph elements within the loop, a single click event listener is now attached to the parent `div` element (`myCustomDiv`).
	    - This technique is called event delegation. It takes advantage of the fact that events bubble up through the DOM tree. When any of the paragraph elements are clicked, the event bubbles up to the `div`, and the single event listener on the `div` handles the event.
	2. **Reduced Number of Event Listeners**:
	    - In the original code, 200 separate event listeners were created, one for each paragraph element.
	    - In this revised code, only one event listener is created and attached to the `div` element. This is more memory efficient and can improve performance, especially when dealing with a large number of elements.
	3. **Simplified Loop**:
	    - The loop now solely focuses on creating the paragraph elements and appending them to the `div`. It's simpler and more straightforward, with the event handling logic completely separated out.
	4. **Maintained Separation of Concerns and Reusability**:
	    - The `respondToTheClick` function remains defined separately, which continues to make the code organized, reusable, and easy to maintain.
			- These changes reflect a more optimized and clean approach to handling events in a scenario where many elements share the same event handling logic. Through event delegation, the code is now more memory-efficient and easier to manage.
## Event Delegation
- Event Delegation is the process of delegating to a parent element the ability to manage events for child elements.
	- We are able to do this by making use of:
		- the event object and its `.target` property
		- the different phases of an event
- The **event object** has a `.target` property. This property references the _target_ of the event.
	- Let's say that you click on a paragraph element. Here's roughly the process that happens:
		1. a paragraph element is clicked
			- the event goes through the capturing phase
				- it reaches the target
					- it switches to the bubbling phase and starts going up the DOM tree
						- when it hits the `<div>` element, it runs the listener function
							- inside the listener function, `event.target` is the element that was clicked
- So `event.target` gives us direct access to the paragraph element that was clicked.
	- Because we have access to the element directly, we can access its `.textContent`, modify its styles, update the classes it has - we can do anything we want to it!
```
const myCustomDiv = document.createElement('div');

function respondToTheClick(evt) {
    console.log('A paragraph was clicked: ' + evt.target.textContent);
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

myCustomDiv.addEventListener('click', respondToTheClick);
```
- Here's a breakdown of what's happening in the code:
	1. **Element Creation**:
	    - A `div` element is created and stored in the variable `myCustomDiv`.
	    - Inside a for loop, 200 `p` (paragraph) elements are created. Each paragraph is given a text content indicating its number in the sequence.
	    - Each `p` element is appended as a child to `myCustomDiv`.
	2. **Appending to Document**:
	    - `myCustomDiv`, now containing 200 `p` elements, is appended to the `document.body`.
	3. **Event Listener Addition**:
	    - An event listener for the 'click' event is added to `myCustomDiv` after it has been appended to the document body. This is an example of event delegation.
	    - The event listener is set up to call the function `respondToTheClick` whenever a click event occurs within `myCustomDiv`.
	4. **Event Handling**:
	    - The `respondToTheClick` function is defined to handle click events. It takes an event object (`evt`) as a parameter.
	    - Within this function, `console.log` is used to log a message indicating that a paragraph was clicked, along with the text content of the clicked paragraph.
	    - The `evt.target` property is used to access the element that was actually clicked. Since the event listener is on `myCustomDiv`, but the click events are bubbling up from the `p` elements, `evt.target` will reference the specific `p` element that was clicked.
- In summary, this code efficiently sets up a single event listener on a parent `div` element to handle click events for all 200 child `p` elements. When any of these `p` elements are clicked, the event bubbles up to `myCustomDiv`, triggering `respondToTheClick` and logging which paragraph was clicked based on its text content. This is a more memory-efficient approach compared to attaching individual event listeners to each `p` element.
### Checking the Node Type in Event Delegation
- In the code snippet we used above, we added the event listener directly to the `<div>` element.
	- The _listener_ function logs a message saying that a paragraph element was clicked (and then the text of the target element).
	- This works perfectly!
		- However, there is nothing to _ensure_ that it was actually a `<p>` tag that was clicked before running that message.
			- In this snippet, the `<p>` tags were direct children of the `<div>` element, but what happens if we had the following HTML:
```
<article id="content">
  <p>Brownie lollipop <span>carrot cake</span> gummies lemon drops sweet roll dessert tiramisu. Pudding muffin <span>cotton candy</span> croissant fruitcake tootsie roll. Jelly jujubes brownie. Marshmallow jujubes topping sugar plum jelly jujubes chocolate.</p>

  <p>Tart bonbon soufflé gummi bears. Donut marshmallow <span>gingerbread cupcake</span> macaroon jujubes muffin. Soufflé candy caramels tootsie roll powder sweet roll brownie <span>apple pie</span> gummies. Fruitcake danish chocolate tootsie roll macaroon.</p>
</article>
```
- In this [filler text](http://www.cupcakeipsum.com/), notice that there are some `<span>` tags. If we want to listen to the `<article>` for a click on a `<span>`, you _might_ think that this would work:
```
document.querySelector('#content').addEventListener('click', function (evt) {
    console.log('A span was clicked with text ' + evt.target.textContent);
});
```
- This will work, but there's a major flaw.
	- The listener function will still fire when *either one* of the paragraph elements is clicked, too!
	- In other words, this listener function is not verifying that the target of the event is _actually a `<span>` element_.
		- Let's add in this check:
```
document.querySelector('#content').addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'SPAN') {  // ← verifies target is desired element
        console.log('A span was clicked with text ' + evt.target.textContent);
    }
});
```
- Remember that every element inherits properties from [the Node Interface](https://developer.mozilla.org/en-US/docs/Web/API/Node).
- One of the properties of the Node Interface that is inherited is `.nodeName`.
	- We can use this property to verify that the target element is actually the element we're looking for.
		- When a `<span>` element is clicked, it will have a `.nodeName` property of `"SPAN"`, so the check will pass and the message will be logged.
			- However, if a `<p>` element is clicked, it will have a `.nodeName` property of `"P"`, so the check will fail and the message will _not_ be logged.
## ⚠️ The `nodeName`'s Capitalization ⚠️
- The `.nodeName` property will return an _uppercase_ string, not a _lowercase_ one.
	- So when you perform your check make sure to either:
		- check for capital letters
		- convert the `.nodeName` to lowercase
```
// check using capital letters
if (evt.target.nodeName === 'SPAN') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}

> // convert nodeName to lowercase
if (evt.target.nodeName.toLowerCase() === 'span') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}
```
- The `nodeName` property returns the name of the node in uppercase, as per the HTML specification.
	- Therefore, if you're checking the `nodeName` property against a string, you would typically ensure that the string is uppercase to match the behavior of `nodeName`.
		- For example, you would check if `evt.target.nodeName === 'SPAN'` to see if the target element is a `span` element.

































