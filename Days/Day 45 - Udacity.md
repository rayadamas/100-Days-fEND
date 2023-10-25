# [10/25/2023, 13:44-14:50]
- **Today's Progress**: starting w/ the intro to the #Callstack 
- **Thoughts:** copious loops btwn the #DoM, the event loop, and JS's event loop. annoying that some of the quiz popups just disappears so i lose that answer's explanation.
---
## The Call Stack
- The JavaScript engine keeps a call stack (basically a list) of the functions that are running.
	- When a function is invoked, it is added to the list.
		- When all of the code inside a function has been run, then the function is removed from the call stack.
		- A function doesn't have to complete before another function is added to the call stack.
- How many items (frames) will be on the stack when the code reaches the `"stop here"` comment?
```
function quiz () {
  var y = 'yes';
  questions();
  fun();
}
function questions () {
  var y = 'no';
  return 7;
}
function are () {
  return 3;
}
function fun () {
  are();
  // stop here
}

quiz()

- When `// stop here` is reached, both `quiz` and `fun` are on the stack.

---

- Use this code for the following question.

function dolphins () {
  // stop here
  return 'llamas';
}
function rhinos () {
  var y = 'no';
  return penguins();
}
function penguins () {
  return camels();
}
function camels () {
  return dolphins();
}

rhinos()

- Put the function names in the correct order they would appear when the `// stop here` comment is reached. Remember to put the oldest/initial at the bottom of the stack. Assume there is no "<main>"/default frame.
	- dolphins
	- camels
	- penguins
	- rhinos
```
==N==
# The Event Loop

## Code Synchronicity
- In the previous section on the Call Stack, we used the terms:
	- run-to-completion
	- single-threaded
- Another term for this is **synchronous**.
	- By definition, "synchronous" means:
		- existing or occurring at the same time
- All of the code we've been looking at runs in order, at the same time.
	- Functions are added to the call stack, and then removed from the call stack when they've completed.
	- However, there is some code that is _not_ synchronous - meaning that the code is written just like any other code, but it is executed at some later point in time.
		- Does this sound familiar at all? You've just been working with it:
			- **eventListeners**
```
const links = document.querySelectorAll('input');
const thirdField = links[2];

thirdField.addEventListener('keypress', function handleKeyPresses(event) {
    console.log('a key was pressed');
});

- _Most_ of this code is synchronous like you're used to.
	- But the event listener's function `handleKeyPresses` is _not_ invoked immediately, it's invoked at some later point in time.
- Where does the code go? What about the "call stack" that we learned about? Is it hidden in the call stack somewhere?
```
- Look at this snippet:
```
console.log('howdy');
document.addEventListener('click', function numbers() {
    console.log('123');
});
console.log('ice cream is tasty');
```
- The code will run in this order:
	1. `'howdy'` will be logged to the console
		- `'ice cream is tasty'` will be logged to the console
- The string `'123'` will only be logged if there's a click.
	- If the page is never clicked, then this code might not ever run
		- But where is it? Where did the `numbers` function holding the `console.log('123');` code go?
- #### Running Code Later
	- But the same questions exist for this code as it does for the `.addEventListener()` code:
		- where does the function go to wait?
		- how does the function get run when it needs to?
			- This happens because of the JavaScript Event Loop!
## The JavaScript Event Loop
- The simplest explanation of JavaScript's _concurrency model_ uses two rules:
	- If some JavaScript is running, let it run until it is finished ("run-to-completion").
	- If no JavaScript is running, run any pending event handlers.
		- Since most JavaScript is run in response to an event, this is known as an _event loop_:
			- Pick up the next event, run its handler, and repeat.
		- There are three parts you have to think about around the event loop:
			- the #Callstack 
			- Web APIs/the browser
			- an Event Queue
- Not all of the code that we write is 100% _JavaScript_ code.
	- Some of the code is interacting with the Web APIs (also known as "browser APIs").
		- There are many more examples, but both `.addEventListener()` and `setTimeout()` are Web APIs.
```
- Let's look back at this code:

console.log('howdy'); // 1
document.addEventListener('click', // 2
  function numbers() {
    console.log('123');
});
console.log('ice cream is tasty'); // 3
```
- First, the browser runs this block of code to completion
	- that is, steps 1, 2, and 3.
		- Step 2 passes an event handler (`numbers`) to the browser for future use:
			- the browser will hold this function until there's a click event.
	- What happens if someone clicks before this block of code is done?
	- When there is a click event and there is code already running, the `numbers` function can't just be added directly to the Call Stack because of JavaScript's run-to-completion nature;
		- we can't interrupt any code that might currently be happening.
			- So the function is placed in the Queue.
			- When all of the functions in the Call Stack have finished (also known as _idle time_), then the Queue is checked to see if anything is waiting.
				- If something is in the Queue, then it's run, creating an entry on the call stack.
- IMPORTANT:
	- The key things to remember here are 1) current synchronous code runs to completion, and 2) events are processed when the browser isn't busy. Asynchronous code (such as loading an image) runs outside of this loop and sends an event when it is done.

- What is the order that the `iceCream` function goes through if the `<footer>` is clicked?
```
const pageFooter = document.querySelector('#page-footer');

pageFooter.addEventListener('click', function iceCream () {
    const footerDetails = document.querySelector('#details');
    
    footerDetails.textContent = 'Everyone should eat ice cream!';
});

- browser
- queue
- #Callstack 
```
- #ChatGPT explanation. 
	1. **Event Triggering**:
		- User clicks on the `<footer>` element with the ID `page-footer`.
	2. **Event Listener Activation**:
		- The `click` event listener on `pageFooter` is activated, which in turn invokes the `iceCream` function.
	3. **Function Execution**:
		- The `iceCream` function begins executing its body.
	4. **Element Selection**:
		- The line `const footerDetails = document.querySelector('#details');` is executed. This line selects the element with the ID `details` from the document and stores a reference to it in the constant `footerDetails`.
	5. **Text Content Update**:
		- The line `footerDetails.textContent = 'Everyone should eat ice cream!';` is executed. This line updates the `textContent` property of the `footerDetails` element to the string `'Everyone should eat ice cream!'`.
	6. **Function Completion**:
		- The `iceCream` function reaches the end of its body and completes execution.
	7. **Event Propagation (if not stopped)**:
		- If there are any other `click` event listeners on ancestor elements of the `<footer>` or on the document/window itself, the event would continue propagating through the DOM tree. However, there's nothing in the provided code snippet that would stop event propagation or handle it at a higher level.
# [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- **Introduction**:
    - Presenter: **Philip Roberts**
        - Works at **Andea**
        - From Edinburgh, Scotland
    - Topic: **Understanding the Event Loop in JavaScript**
- **Background**:
    - 18 months ago, Philip, as a professional JavaScript developer, pondered:
        - How JavaScript works behind the scenes?
        - What is V8, Chrome's Runtime?
        - The concept of single-threaded nature of JavaScript and how callbacks work.
- **Key Concepts**:
    - **JavaScript**:
        - Single-threaded, concurrent language.
        - Comprises:
            - Call stack
            - Event loop
            - Callback queue
            - Other APIs and stuff
        - Compared to V8, which has:
            - Call stack
            - Heap (memory)
    - **Call Stack**:
        - A data structure that records where in the program we are.
        - When we step into a function, we push something onto the stack.
        - When we return from a function, we pop off the top of the stack.
    - **Blocking**:
        - Refers to any slow operation that stops or delays further execution.
        - Examples: Network requests, large loops, image loading.
        - Blocking can result in a non-responsive user interface.
    - **Asynchronous Callbacks**:
        - Almost all browser functions are asynchronous.
        - They run some code and then execute a callback later.
        - Helps in managing and organizing blocking behavior.
    - **Event Loop**:
        - Helps in concurrency.
        - JavaScript Runtime is single-threaded but the browser isn't.
        - Browser provides additional tools such as Web APIs (e.g., DOM, AJAX, setTimeout).
        - Web APIs handle concurrent operations outside the JavaScript thread.
        - Event Loop's role:
            - Check the call stack and the callback queue.
            - If the stack is empty, pushes the first thing on the queue onto the stack, effectively running it.
- **Examples and Demonstrations**:
    - **Call Stack Visualization**:
        - Function execution sequence and how they get pushed and popped from the stack.
    - **Error Handling**:
        - When an error occurs, browsers show a stack trace, displaying the state of the stack when the error happened.
        - "Blowing the stack": When there are too many function calls (like in a recursion), browsers will stop it after a limit.
    - **Blocking Demonstration**:
        - Synchronous requests result in blocking. During a synchronous operation, UI becomes non-responsive.
    - **Asynchronous Callbacks Visualization**:
        - setTimeout is used to demonstrate how asynchronous operations work.
        - Web APIs handle the timer (e.g., setTimeout) and push the callback to a task queue when it's done.
        - The event loop then checks if the stack is empty and if there's a callback in the task queue, pushing it onto the stack to be executed.
- **Conclusion**:
    - Understanding the intricacies of the Event Loop, Callback Queue, and Web APIs is crucial for effective JavaScript programming.
    - Knowledge aids in writing non-blocking code, ensuring smooth user experiences.







































