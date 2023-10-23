# [10/23/2023, 13:24-14:24]
- **Today's Progress**: continuing w/ #DoM module: # Know When The DOM Is Ready. Next module is on Performance of one's code. 
- **Thoughts:** refresher on the WHY behind not front-loading one's JS at the beginning of an HTML file. i've always shrugged the performance aspect of coding off but it seems fairly straightforward at this point to write a simple check. ending this session on document fragments which chatty gave me an earlier rundown on. putting whatever the module's asking into the bot & having it explain or expound on something is such a value. 
---
# Know When The DOM Is Ready. 
## The DOM Is Built Incrementally & Sequentially
- A key thing to point out is that when the HTML is received and converted into tokens and built into the document object model, is that this is a sequential process.
	- When the parser gets to a `<script>` tag, it must wait to download the script file and execute that JavaScript code.
		- _This is the important part and the key to why the placement of the JavaScript file matters!_
- Let's look at some code to show (more or less) what's happening.
	- Take a look at this initial part of an HTML file:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="/css/styles.css" />
  <script>
    document.querySelector('footer').style.backgroundColor = 'purple';
  </script>
```
- `document.querySelector('footer').style.backgroundColor = 'purple';`:
	- This JavaScript line is intended to select the first `<footer>` element in the document and change its background color to purple.
		- However, since this script is in the head of the document and not deferred or placed at the end of the body, and there's no `DOMContentLoaded` event listener, it would likely throw an error if there's no `<footer>` element present in the DOM at the time this script runs.
			- So instead of returning a DOM element, it will return `null`.
			- This causes an error because it would be like running the following code:
```
null.style.backgroundColor = 'purple';
```
### The Content Is Loaded Event
- When the document object model has been fully loaded, the browser will fire an event.
- This event is called the `DOMContentLoaded` event, and we can listen for it the same way we listen to any other events:
```
document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
});
```
## Using the `DOMContentLoaded` Event
- Because we now know about the `DOMContentLoaded` event, we can use it to _keep_ our JS code in the `<head>`.
	- Let's update the previous HTML code to include this event:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="/css/styles.css" />
    <script>
      document.addEventListener('DOMContentLoaded', function () {
          document.querySelector('footer').style.backgroundColor = 'purple';
      });
    </script>
```
- `document.querySelector('footer').style.backgroundColor = 'purple';`:
	- Inside the event listener function, this line of code selects the first `<footer>` element found in the document using the `querySelector` method.
		- It then changes the `backgroundColor` style property of that `<footer>` element to `'purple'`.
			- Now, with the `DOMContentLoaded` event listener in place, this script will wait until the DOM is fully loaded before trying to find and style the `<footer>` element, thus avoiding a potential error that would occur if the `<footer>` element wasn’t yet available in the DOM.
	- We have the JavaScript code in the `<head>` element, but it is now wrapped in an event listener for the `DOMContentLoaded` event.
		- This will prevent the DOM-styling code from running when the browser gets to it.
			- Then, when the DOM has been constructed, the event will fire and this code will run.
				- If you're looking at somebody else's code, you may see that their code listens for the `load` event being used instead (e.g. `document.onload(...)`).
				- `load` fires later than `DOMContentLoaded` -- `load` waits until all of the images, stylesheets, etc. have been loaded (everything referenced by the HTML.)
				- Many older developers use `load` in place of `DOMContentLoaded` as the latter wasn't supported by the very earliest browsers.
					- But if you need to detect when your code can run, `DOMContentLoaded` is generally the better choice.
- However, just because you _can_ use the `DOMContentLoaded` event to write JavaScript code in the `<head>` that doesn't mean you _should_ do this.
==N==
# Add Page Content Efficiently

## Using A Loop To Add Content
- Let's take another look at the `for` loop from the last module, but this time without all of the event listener stuff:
```
for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    document.body.appendChild(newElement);
}
```
- is this code written efficiently?
	- This code is straightforward and does what it's intended to do - create 200 paragraph elements, each with a unique text content, and append them to the document body.
	- This code:
		- creates a paragraph element
		- adds some text to the paragraph
		- adds the paragraph to the page
			- ...and it does this two hundred times.
	- Since we want two hundred things done, the best way to do this is with a `for` loop, so that code is inescapable.
		- However, the code _inside the `for` loop_ is not all that efficient, and there are quite a few things we could do to improve this code. We could:
			- create some parent container element _outside of the loop_
			- we could append all new paragraph elements to this parent container
			- we append this parent container to the `<body>` element instead of appending each time through the loop
	 ```
	 const myCustomDiv = document.createElement('div');
	
	for (let i = 1; i <= 200; i++) {
	  const newElement = document.createElement('p');
	  newElement.innerText = 'This is paragraph number ' + i;
	
	  myCustomDiv.appendChild(newElement);
	}
	
	document.body.appendChild(myCustomDiv);
	```
- #ChatGPT 
 - However, there are a few optimizations and considerations that could be made to improve its efficiency or readability:
	1. **Document Fragment**:
	    - Appending elements to the DOM is a relatively expensive operation because it can cause the page to re-render.
		    - A more efficient approach could be to use a `DocumentFragment` to temporarily hold the newly created elements, and then append the fragment to the `document.body` all at once after the loop:
	```
	const fragment = document.createDocumentFragment();
	for (let i = 1; i <= 200; i++) {
	    const newElement = document.createElement('p');
	    newElement.textContent = 'This is paragraph number ' + i;
	    fragment.appendChild(newElement);
	}
	document.body.appendChild(fragment);
	
	- This way, you'll minimize the number of times the browser has to re-render the page, which can lead to a performance improvement, especially as the number of elements increases
	```
	2. **Template Literals**:
	- For improved readability and conciseness, you could use template literals instead of string concatenation for constructing the text content:
	```
	newElement.textContent = `This is paragraph number ${i}`;
	```
	3. **`const` versus `let`**:
		- You've used `const` for `newElement`, which is good practice as it makes it clear that `newElement` will not be reassigned.
	4. **Separation of Concerns**:
		- While this code snippet is simple, as your code grows, it's a good practice to separate the logic into functions to improve readability, reusability, and testing. For example, you might create a function to create a new paragraph element, and another function to append elements to the DOM.
	5. **Avoid Magic Numbers**:
		- In programming, a "magic number" is a bare number used in code without explanation. It might be clearer to future readers of your code (or future-you) if you replaced `200` with a named constant that describes what the number represents.
	6. **Inlining Element Creation and Content Assignment**:
		- You could further shorten the code by inlining the creation and content assignment of the new element:
	```
	for (let i = 1; i <= 200; i++) {
	    const newElement = document.createElement('p');
	    newElement.textContent = `This is paragraph number ${i}`;
	    fragment.appendChild(newElement);
	}
	```
- How can we _prove_ it's better?
	- We can test the time it takes to actually run this code!
## Testing Code Performance
- The standard way to measure how long it takes code to run is by using `performance.now()`.
	- `performance.now()` returns a timestamp that is measured in milliseconds, so it's extremely accurate. How accurate? Here's what the its documentation page says:
> 		accurate to five thousandths of a millisecond (5 microseconds)
- If you've ever used a timing procedure in another programming language, then you might've heard of Epoch time (also called #Unix time or POSIX time).
	- These tools tell you the time that has passed since 1/1/1970 (the first of January).
		- The browser's `performance.now()` method is slightly different in that it starts measuring from the time the page loaded.
			- Detailed information can be found on its documentation page: [performance.now() on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)
### Performance: now() method
- The **`performance.now()`** method returns a high resolution timestamp in milliseconds.
	- It represents the time elapsed since [`Performance.timeOrigin`](https://developer.mozilla.org/en-US/docs/Web/API/Performance/timeOrigin) (the time when navigation has started in window contexts, or the time when the worker is run in [`Worker`](https://developer.mozilla.org/en-US/docs/Web/API/Worker) and [`ServiceWorker`](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker) contexts).
		- `now()`
- These are the steps to use `performance.now()` to measure the speed of your code:
	1. use `performance.now()` to get the initial start time for the code
		- run the code you want to test
			- execute `performance.now()` to get another time measurement
				- subtract the initial time from the final time
- Adding two hundred paragraphs to the page is actually going to be relatively quick, so let's slow things down by using a set of nested `for` loops that just count from one to a hundred...one hundred times!
	```
	for (let i = 1; i <= 100; i++) { 
	  for (let j = 1; j <= 100; j++) {
	    console.log('i and j are ', i, j);
	  }
	}
	```
	- Next, we'll add in the `performance.now()` code to measure how long these loops take:
```
const startingTime = performance.now();

for (let i = 1; i <= 100; i++) { 
  for (let j = 1; j <= 100; j++) {
    console.log('i and j are ', i, j);
  }
}

const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
```


























