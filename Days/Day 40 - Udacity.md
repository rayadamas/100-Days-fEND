# [10/20/2023, 15:28-16:30]
- **Today's Progress**: beginning Working with Browser Events in the #DoM module
- **Thoughts:** event syntax is straightforward. i tried adding a click listener to the provided HTML w/ no results for some reason. as it were that's the next activity in the module. i thought i already "forked" the proj code provided to practice on but when i tried to push the app.js updates my main branch was merged w/ itself? idk
---
## Lesson Overview
- **Events** - what they are
- **Responding to an event** - how to listen for an event and respond when one happens
- **Event Data** - harness the data that is included with an event
- **Stopping an event** - preventing an event from triggering multiple responses
- **Event Lifecycle** - the lifecycle stages of an event
- **DOM Readiness** - events to know when the DOM itself is ready to be interacted with
## Seeing An Event
- Fortunately, the Chrome browser has a special `monitorEvents()` function that will let us see different events as they are occurring.
	- [Console Utilities API reference](https://developer.chrome.com/docs/devtools/console/utilities/#monitorevents)
		- The monitorEvents function will keep spitting out all of the events that are happening on the targeted element until you refresh the page.
			- Alternatively, the Chrome browser _does_ offer an `unmonitorEvents()` function that will turn off the announcing of events for the targeted element:
```
// start displaying all events on the document object
monitorEvents(document);

// turn off the displaying of all events on the document object.
unmonitorEvents(document);
```
- ==`monitorEvents` is for development/testing purposes only.==

==N==
# Respond to Events
## An Event Target
- The Node Interface inherits from the `EventTarget` Interface.
	- Event Target <- Node <- Element
		- The [EventTarget page](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) says that EventTarget:
			- is an interface implemented by objects that can receive events and may have listeners for them.
			- and
			- Element, document, and window are the most common event targets, but other objects can be event targets too…
- EventTarget does not inherit any properties or methods from any other interfaces
	- However, every other interface inherits from it and therefore contain its properties and methods. This means that each of the following is an "event target";
		- the `document` object
		- a paragraph element
		- a video element
		- etc.
	- Remember that both the _**document**_ object and _**any DOM element**_ can be an event target
		- why is this?
			- ...because both the Element Interface and the Document Interface inherit from the EventTarget Interface.
			- So any individual element inherits from the Element Interface, which in turn inherits from the EventTarget Interface.
				- Likewise, the document object comes from the Document Interface, which in turn inherits from the EventTarget Interface.
- If you take a look at the EventTarget Interface, you'll notice that it doesn't have _any_ properties and only three methods! These methods are:
	- `.addEventListener()`
	- `.removeEventListener()`
	- `.dispatchEvent()`
		- The one that we'll be looking at for the rest of this course will be the `.addEventListener()` method.
## Adding An Event Listener
- Using the `.addEventListener()` method will let us _listen for_ events and respond to them!
	- We can:
		- listen for an event
		- listen to an event
		- hook into an event
		- respond to an event
			- How to set an event listener:
```
<event-target>.addEventListener(<event-to-listen-for>, <function-to-run-when-an-event-happens>);
```
- So an event listener needs three things:
	1. an event target - this is called the ==**target**==
		- The `<event-target>` (i.e. the _target_) goes right back to what we just looked at: everything on the web is an event target (e.g. the `document` object, a `<p>` element, etc.).
	 2. the type of event to listen for - this is called the ==**type**==
		- The `<event-to-listen-for>` (i.e. the _type_) is the event we want to respond to. It could be a click, a double click, the pressing of a key on the keyboard, the scrolling of the mouse wheel, the submitting of a form...the list goes on!
	 3. a function to run when the event occurs - this is called the ==**listener**==
		- The `<function-to-run-when-an-event-happens>` (i.e. the _listener_) is a function to run when the event actually occurs.
```
const mainHeading = document.querySelector('h1');

mainHeading.addEventListener('click', function () {
  console.log('The heading was clicked!');
});

- Let's break down the snippet above:
	- the target is the first `<h1>` element on the page
	- the event type to listen for is a `"click"` event
	- the listener is a function that logs `"The heading was clicked!"` to the console
```
==N==
## Add Event Listener to the Project
### app.js
```
document.body.addEventListener('click', function () {
 //changing page heading
 const heading = document.querySelector('h1');
 heading.style.backgroundColor = 'red';
});
```
- Is there a difference between these two:
```
- document.addEventListener()
- myHeading.addEventListener() (assume the myHeading variable is an element)
```
1. **`document.addEventListener()`**:
    - This method attaches an event listener to the entire document.
    - It's common to use this when you want to listen for events that might be dispatched by multiple elements or when you're unsure which specific element will dispatch the event.
	    - For example, if you're listening for a `DOMContentLoaded` event to check when the HTML document has been completely loaded and parsed, you'd attach it to the `document`.
    - It can also be used for event delegation. This is when you listen for events on a common ancestor of multiple elements, and then use the `event.target` to determine which specific element was interacted with.
2. **`myHeading.addEventListener()`**:
    - This method attaches an event listener to the specific element referred to by the `myHeading` variable.
    - It's used when you want to specifically target one element and listen for events on that one element only.
    - Assume `myHeading` refers to an `<h1>` element. If you add an event listener using this method, it will only listen for events on that particular `<h1>` element.
- In short, the primary difference is the element to which the event listener is attached: the entire document versus a specific element. Which one you choose to use depends on the context and the specific needs of your application.
- https://developer.mozilla.org/en-US/docs/Web/Events

==N==
## Removing An Event Listener
- We say that we can use an event target's `.addEventListener()` method to start listening for specific events and respond to them.
	- Let's say you only want to listen for just the first click event, respond to it, and ignore all other click events.
		- The `.addEventListener()` event will listen for and respond to ==_all_== click events.
		- (The newest version of the `.addEventListener()` specification _does_ allow for an object to be passed as a third parameter. This object can be used to configure how the `.addEventListener()` method behaves. Of note, there is an option to listen for only a single event. However, this configuration object is not widely supported just yet).
### Brief review of object equality: Are Objects Equal in JavaScript
- Equality is a common task in most programming languages, but in JavaScript, it can be a little bit tricky because JavaScript does this thing called type coercion where it will try to convert the items being compared into the same type. (e.g. string, number,).
	- JavaScript has the double equality (`==`) operator that _will allow type coercion_.
	- It also has the triple equality (`===`) symbol that will prevent type coercion when comparing.

- Will the following equality test result in `true` or `false`?
```
{ name: 'Richard' } === { name: 'Richard' }
- False
```
- In the given example, you have two distinct objects (each created in a different memory location) with the same content.
	- Since they don't reference the same memory location, the comparison will return `false`.
		- If you need to check if two objects have the same content, you would need a deep comparison function or use some utility like lodash's `_.isEqual` method.



























