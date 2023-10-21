# [10/21/2023, 15:16-16:26]
- **Today's Progress**: continuing module w/ *removing* an event listener. 
- **Thoughts:** these lessons are flowing nicely. 
---
- Given this code:
`function quiz() { ... } var a = {     myFunction: quiz }; var b = {     myFunction: quiz }`
- Does the following code evaluate to `true` or `false`?
`a.myFunction === b.myFunction`

- The code `a.myFunction === b.myFunction` will evaluate to `true`.
	- Here's why:
		- Both `a.myFunction` and `b.myFunction` are referencing the same function `quiz` in memory.
			- When the `===` operator compares function references, it checks if they point to the exact same function in memory.
				- Since both properties (`myFunction` from both `a` and `b`) are pointing to the same `quiz` function, the comparison will return `true`.
- Why care about any of this object/function equality?
	- The reason is that the `.removeEventListener()` method requires you to pass _the same exact listener function_ to it as the one you passed to `.addEventListener()`.
- Let's see some pseudo-code for the `.removeEventListener()`:
`<event-target>.removeEventListener(<event-to-listen-for>, <function-to-remove>);`
- So an event listener needs three things:
	1. an event target - this is called the **target**
	2. the type of event to listen for - this is called the **type**
	3. the function to remove - this is called the **listener**
		- Remember, the _listener_ function must be the _exact_ same function as the one used in the `.addEventListener()` call...not just an identical looking function
- This code will successfully add and then remove an event listener:
```
function myEventListeningFunction() {
    console.log('howdy');
}

// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', myEventListeningFunction);

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', myEventListeningFunction);

- It works because both `.addEventListener()` and `.removeEventListener`:
	- have the same _target_
	- have the same _type_
	- and pass _the exact same listener_
```
- This code will unsuccessfully remove an event listener:
```
// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', function myEventListeningFunction() {
    console.log('howdy');
});

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', function myEventListeningFunction() {
    console.log('howdy');
});

- why does this _not_ work?
	- both `.addEventListener()` and `.removeEventListener` have the same _target_
		- both `.addEventListener()` and `.removeEventListener` have the same _type_
			- `.addEventListener()` and `.removeEventListener` have their own distinct _listener_ functions...they do not refer to the exact same function (**this is the reason the event listener removal fails!**)
				- Two functions can look the same, but live in two different places in memory.
```
==N==
# Phases of an Event
- Thinking about nodes and how the DOM is structured, after running the code below, which event listener will fire first when the page is clicked? Write out your answer and your explanation of why it will be in that order:
```
document.addEventListener('click', function () {
   console.log('The document was clicked');
});

document.body.addEventListener('click', function () {
    console.log('The document body was clicked');
});
```
- Explanation:
	- This behavior is due to event propagation in the DOM, which has two main phases: capturing (or capture) phase and bubbling phase.
		1. **Capturing Phase**: Events start from the `document` and work their way down the DOM tree to the target element where the event occurred.
		2. **Bubbling Phase**: After reaching the target, events then bubble up from the target element back to the `document`.
			- By default, when you add an event listener in JavaScript using `addEventListener`, it's added in the bubbling phase unless otherwise specified.
				- So, when you click on the page (assuming you're clicking within the `<body>` tag and not on any other element like a button or link inside the body), the click event starts at the target (some element inside the body or the body itself), and then bubbles up.
					- As it bubbles up, the first event listener it encounters is the one attached to `document.body`, and then as it continues to bubble up, it encounters the one attached to `document`.
						- That's why the `document.body` listener fires first, followed by the `document` listener.
- There are three different phases during the lifecycle of an event. They are:
	- the **capturing** phase
	- the **at target** phase
	- and the **bubbling** phase
		- Most event handlers run during the **at target** phase, such as when you attach a click event handler to the button.
			- The event arrives at the button (its **target**), and there's only a handler for it right there, so the event handler gets run.
				- But sometimes you have a collection of items -- such as a list -- and want to have one handler cover every item (and still have the option of individual handlers for some items.)
				- By default, if you click on a child item and a handler doesn't intercept the click, the event will "bubble" upward to the parent, and keep bubbling until something handles it or it hits the document.
					- Capturing, on the other hand, lets the parent intercept an event before it reaches a child.
	- So of the three phases in an event, which one does the `.addEventListener()` method actually use? And, how can we change it?
		- Up until this point, we've only seen the `.addEventListener()` method called with _two_ arguments, the:
			- event _type_
			- and the _listener_
				- There's actually a _third_ argument to the `.addEventListener()` method; the _useCapture_ argument
					- **By default, when `.addEventListener()` is called with only two arguments, the method defaults to using the bubbling phase.**

- The code below uses `.addEventListener()` with only two arguments, so it will invoke the listener during the bubbling phase:
```
document.addEventListener('click', function () {
   console.log('The document was clicked');
});
```
- However, in this code, `.addEventListener()` is called with _three arguments_ with the third argument being `true` (meaning it _should invoke the listener earlier, during the capturing phase_!).
```
document.addEventListener('click', function () {
   console.log('The document was clicked');
}, true);
```
## The Event Object
- When an event occurs, the browser includes an **event object**.
	- This is just a regular JavaScript object that includes a ton of information about the event itself.
		- According to MDN, the `.addEventListener()`'s _listener_ function receives:
			- a notification (an object that implements the Event interface) when an event of the specified type occurs
- Up until this point, I've been writing all of the _listener_ functions without any parameter to store this event object.
	- Let's add a parameter so we _can_ store this important information:
```
document.addEventListener('click', function (event) {  // ← the `event` parameter is new!
   console.log('The document was clicked');
});

- Notice the new `event` parameter that's been added to the listener function.
- Now when the listener function is called, it is able to store the event data that's passed to it!
```

==N==






































