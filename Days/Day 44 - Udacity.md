# [10/24/2023, 17:13-18:16]
- **Today's Progress**: continuing w/ Code Performance module
- **Thoughts:** reviewing notes from [[Day 43 - Udacity]]. docfrags are straightforward, a temp piece of a #DoM structure used as a workaround. didn't realize that React is just a virtual #DoM library. now we get to the weeds of the #Callstack. 
---
## Using a Document Fragment
- With our prev code we have to create a extraneous `<div>` element _just to hold all the `<p>` tags so we can add them all at once_ and then we append this `<div>` to the `<body>` element.
	- So in the end, we have an extra `<div>` that isn't really needed.
	- It was just around because we wanted to add each new `<p>` to it instead of to the `<body>`.
		- Why are we doing this?
		- The browser is constantly working to make the screen match the DOM.
			- When we add a new element, the browser has to run through a `reflow` calculation (to determine the new screen layout) and then `repaint` the screen.
			- This takes time.
				- If we had added each new paragraph to the body element, then the code would've been a lot slower, because this would cause the browser to go through the reflow and repaint process _for each paragraph_.
				- We really only want the browser to do this once, so we need to attach each new paragraph to something, but we don't want to have an extra, unneeded element to get added to the DOM.
- This is exactly why we have the **DocumentFragment**!
	- According to the documentation,
		- **DocumentFragment**:
			- represents a minimal document object that has no parent.
			- It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document.
				- So it's like creating another lightweight DOM tree
			- The key difference is that because the document fragment isn't part of the active document tree structure, changes made to the fragment don't affect the document, cause reflow, or incur any performance impact that can occur when changes are made.
				- In other words, changes made to a DocumentFragment happen off-screen; there's no reflow and repaint cost while you build this
- We can use the `.createDocumentFragment()` method to create an empty DocumentFragment object.
	- This code looks so very similar to `document.createElement()`
```
const myDocFrag = document.createDocumentFragment();
```
- Let's rewrite our code to use a DocumentFragment instead of the `<div>`:
	```
	const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>
	
	for (let i = 0; i < 200; i++) {
	    const newElement = document.createElement('p');
	    newElement.innerText = 'This is paragraph number ' + i;
	
	    fragment.appendChild(newElement);
	}
	
	document.body.appendChild(fragment); // reflow and repaint here -- once!
	```
==N==
## Reflow & Repaint
- **Reflow** is the process of the browser laying out the page.
	- It happens when you first display the DOM (generally after the DOM and CSS have been loaded), and happens again every time something could change the layout.
		- This is a fairly _expensive_ (slow) process.
- **Repaint** happens after reflow as the browser draws the new layout to the screen.
	- This is fairly quick, but you still want to limit how often it happens.
		- For example, if you add a CSS class to an element, the browser often recalculates the layout of the entire page—that's one reflow and one repaint!

- Adding a single CSS class could trigger reflow. Explain why adding some CSS to an element might cause reflow to happen:
	1. **Geometry Changes**:
		- Adding a CSS class can change the geometry of an element—its dimensions, position, margin, padding, border, etc.
			- When these properties change, the browser needs to recompute the layout to accommodate the new geometry.
	2. **Parent-Child Dependencies**:
		- The geometry of an element can depend on the geometry of its ancestors and descendants.
		- A change to one element can therefore cascade through the document, causing reflows in other parts of the document tree.
			- For example, if a CSS class changes the width of an element, its children might need to be re-laid out to fit the new width, and its parent might need to be re-laid out to accommodate the new position or size of the element.
	3. **Content Changes**:
		- If a CSS class changes the content of an element (for instance, through the `content` property in a `::before` or `::after` pseudo-element), this can trigger a reflow as the browser adjusts the layout to fit the new content.
	4. **Visibility Changes**:
		- Changing the visibility of an element by adding a CSS class that sets `display: none` or `visibility: hidden` will also trigger a reflow as the browser adjusts the layout to the changes.
	5. **Flexbox or Grid Layouts**:
		- In modern layout models like #CSS_flexbox or #CSS_grid, changing a CSS class can trigger complex reflow as these layouts involve resolving constraints and alignment between elements.
	6. **Fixed or Absolute Positioning**:
		- Adding a CSS class that changes the positioning model of an element (e.g., from static positioning to absolute or fixed positioning) can trigger a reflow as the browser needs to resolve the new position of the element and adjust the layout of other elements accordingly.
	7. **Table Layouts**:
		- In a table layout, changing a CSS class can trigger reflow because the dimensions of a cell can affect the dimensions of the entire row and column.
			- Optimizing for reflow is an essential part of front-end optimization, and understanding the causes of reflow can help developers write more performant CSS and JavaScript. By minimizing the number of reflows, and by minimizing the cost of each reflow, developers can create smoother, faster webpages.
- Say you're writing the next great blogging platform, and you want to have a "remove spam" button for the administrator. Your HTML looks like this:
	```
	<div id="comments">
	  <div class="comment"> <!-- some content --> </div>
	  <div class="comment"> <!-- some content --> </div>
	  <div class="comment"> <!-- some content --> </div>
	</div>
	
	- When we run the spam filter, we discover comments one and two have to be removed.
	```
	- If we simply call `.removeChild()` for each of the two comments that need to be removed, that's one reflow and one repaint _for each change_
		- (so a total of 2 reflows and 2 repaints).
			- We could rebuild the whole thing in a `DocumentFragment` and replace `#comments` -- that's the time to rebuild (possibly involving reading files or data), plus at least one reflow and one repaint.
			- Or we could _hide_ `#comments`, delete the spam, and show it again -- that's surprisingly fast, to the cost of one reflow and two repaints (and little else).
				- It's fast because hiding doesn't change the layout, it just erases that section of the screen (1 repaint). When you make the changed section visible again, that's a reflow and a repaint.
					```
					// hide #comments
					document.getElementById("comments").style.display = "none";
					
					// delete spam comments
					
					// show #comments
					document.getElementById("comments").style.display = "block";
					```
					- In general, if you have to make a group of changes, ==hide/change== ==all/show== is a great pattern to use if the changes are relatively contained.
## Virtual DOM
- This is why #React and other "virtual DOM" libraries are so popular.
	- You don't make changes to the DOM, but make changes to another structure (a "virtual DOM") and the library calculates the best way to update the screen to match.
	- The catch is you then have to rework your code to use whatever library you're adopting, and sometimes you can do a better job updating the screen yourself (because you understand your own unique situation).
==N==
# The #Callstack 
## Single Threading
- You might've heard that JavaScript is **single-threaded** but what does that mean?
- According to Wikipedia, single-threading is:
> 		the processing of one command at a time ([source](https://en.wikipedia.org/wiki/Thread_(computing)#Single_threading))
- The opposite of single-threading, is multithreading.
	- We're going to take a look at JavaScript's single-threaded model and how/why we should write our code to take advantage of it:
```
function addParagraph() {
    const para = document.createElement('p');
    para.textContent = 'JavaScript is single threaded!';
    document.body.appendChild(para);
}

function appendNewMessage() {
    const para = document.createElement('p');
    para.textContent = "Isn't that cool?";
    document.body.appendChild(para);
}

addParagraph();
appendNewMessage();
```
- Keeping JavaScript's single-threaded nature in mind, let's break this down in the order it'll run:
	- the `addParagraph()` function is declared on line 1
	- the `appendNewMessage()` function is declared on line 6
		- `addParagraph()` is called on line 13
		    - execution moves into the function and executes all three lines in order
		    - now that the function is finished, execution returns to where it was called
		- the `appendNewMessage()` function is called on line 14
		    - execution moves into the function and executes all three lines in order
		    - now that the function is finished, execution returns to where it was called
	- the program ends because all lines of code have been executed
- Take note:
	- First, is the run-to-completion nature of the code.
		- When `addParagraph()` is invoked on line 13, _all of the code in the function gets executed_:
			- it doesn't just execute some lines and leave other lines to be executed later.
				- The entire block of code is run.
	- Second, is that `addParagraph()` is invoked, runs, and finishes _before_ `appendNewMessage()` is invoked (including a possible reflow and repaint);
		- JavaScript doesn't execute multiple lines/functions at the same time (this is single-threading...processing one command at a time!).
###### ?
- once `addParagraph()` has been invoked and it runs the lines of code inside the `addParagraph()` function, how does it know to go back to `appendNewMessage()`? How does it keep track of that?
	- Here's how it works in your code:
		1. When the script starts executing, the call stack is empty.
		2. The `addParagraph()` function is called, so a new frame is pushed onto the call stack.
			- This frame contains information about the `addParagraph` function.
		3. The `addParagraph()` function executes its code, creating and appending a paragraph element to the document.
		4. Once `addParagraph()` has finished executing, its frame is popped off the call stack, and control returns to the script at the point after the `addParagraph()` call.
		5. Now, `appendNewMessage()` is called, so a new frame for `appendNewMessage` is pushed onto the call stack.
		6. The `appendNewMessage()` function executes its code, creating and appending another paragraph element to the document.
		7. Once `appendNewMessage()` has finished executing, its frame is popped off the call stack, and the script has reached its end.
- What if we changed this code slightly to create nested functions:
```
function addParagraph() {
    const para = document.createElement('p');
    para.textContent = 'JavaScript is single threaded!';

    appendNewMessage();
    document.body.appendChild(para);
}

function appendNewMessage() {
    const para = document.createElement('p');

    para.textContent = "Isn't that cool?";
    document.body.appendChild(para);
}

addParagraph();
```
- Notice that the call to `appendNewMessage()` is located _inside the_ `addParagraph()` _function_.
	- First, `addParagraph()` is invoked.
		- Then `appendNewMessage()` is invoked on line 5.
			- Once `appendNewMessage()` has finished running, execution returns and finishes running the last line of code in the `addParagraph()` function
				- ...but how does it know how to do that? How does the JavaScript engine know where it left off and how to get back to it?
## The #Callstack 
- In JavaScript, the execution of code is controlled by a #Callstack, which is a data structure that operates on a ==Last In, First Out== #LiFo principle.
	- When a function is called, a new frame is pushed onto the call stack.
		- This frame contains the information about the function, its arguments, local variables, and the position in the script where the function was called.
			- When a function completes its execution, its frame is popped off the stack, and control returns to the position in the script from which the function was called.
- This way, JavaScript keeps track of where it is in the script, and what it needs to do next, by using the call stack to manage the flow of execution.


































