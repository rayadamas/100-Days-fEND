# [10/26/2023, 12:47-13:52]
- **Today's Progress**: continuing the Performance module w/ `setTimeout`
	- starting the Career Services modules
- **Thoughts:** reflecting on the course, some of the videos were too short & thus had a questionable level of relevancy. more extended pair-coding sessions would prove more useful. some of the quizzes were too simple, or simply said that the answer was correct w/o much to extract as far as reasoning for said answer. the content of this entire course is great if you've already had somewhat of an intro someplace else to coding, if this is the absolute initial learning one is doing, it may prove to be too high-level if this is a new subject for someone.
	- annoyed already this module is continuing w/ the 55s videos that could've easily been a paragraph w/ some pics. i can't even summarize & extract anything useful outta less than 1min
---
# setTimeout

## Running Code Later
- Similarly to `.addEventListener()` code being run at some later point, there is the `setTimeout()` function that will run code at a point later in time. The `setTimeout()` function takes:
	- a function to run at some later time
	- the number of milliseconds the code should wait before running the function
- Let's check out an example:
```
setTimeout(function sayHi() {
    console.log('Howdy');
}, 1000);
```
- If we ran this code, the string `'Howdy'` would appear in the console in about 1,000 milliseconds or in just about 1 second.
	- Since `setTimeout()` is an #API provided by the **browser**,
		- the call to `setTimeout()` gives the `sayHi()` function over to the browser which it starts a timer.
		- After the timer is finished, the `sayHi()` function moves to the Queue.
			- If the Call Stack is empty, then the `sayHi()` function is moved to the #Callstack and executed.
- An interesting aspect to `setTimeout()` is that we can pass it a delay of `0` milliseconds.
```
setTimeout(function sayHi() {
    console.log('Howdy');
}, 0);  // ← 0 milliseconds!
```
- One might think that since it has a delay of 0 milliseconds, that the `sayHi` function would run immediately.
- However, it still goes through the JavaScript Event Loop.
	- So the function is handed off to the browser where the browser starts a timer for 0 milliseconds.
		- Since the timer ends immediately, the `sayHi` function will move to the Queue, and then to the Call Stack once the Call Stack has finished executing any currently-running tasks.
		- So why is this helpful?
			- This technique can help us to convert potentially long-running code <> to one that's broken up to allow for the browser to handle user interactions!
- ### Break Up Long-Running Code
	- Let's write some code to create 20,000 paragraphs
		- We want to make sure our app is responsive to user interaction.
		- While JavaScript is running, the page is "busy" and the user won't be able to interact with the page (e.g. clicking a button, filling out a form).
			- This is because JavaScript runs _synchronously_.
				- So it will run to completion (creating, appending, and inserting all twenty thousand elements), and it does this _before_ it is able to respond to any actions the user has taken.
				- The function that creates all of these elements and adds them to the page will be in the Call Stack until it's completely finished.
					- One way to give the user a chance to interact with the page is to break up the adding of the content into chunks.
					- Let's do this with `setTimeout()`:
```
let count = 1

function generateParagraphs() {
    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= 500; i++) {
        const newElement = document.createElement('p');
        newElement.textContent = 'This is paragraph number ' + count;
        count = count + 1;

        fragment.appendChild(newElement);
    }

    document.body.appendChild(fragment);

    if (count < 20000) {
        setTimeout(generateParagraphs, 0);
    }
}

generateParagraphs();
```
- This code starts off by setting a `count` variable to `1`.
	- This will keep track of the number of paragraphs that have been added.
		- The `generateParagraphs()` function will add 500 paragraphs to the page each time it's invoked.
			- The interesting thing is that there's a `setTimeout()` call at the end of the `generateParagraphs()` function.
			- If there are less than twenty thousand elements, then the `setTimeout()` will be used to call the `generateParagraphs()` function.
				- If you try running this code on a page, you can still interact with the page while the code is running.
					- It doesn't lock up or freeze the page because of the `setTimeout()` calls.
- #ChatGPT
	1. **Variable Declaration**:
		- A variable `count` is declared and initialized to `1`.
			- This variable will be used to keep track of the number of paragraphs generated.
	2. **Function Declaration**:
		- A function named `generateParagraphs` is declared.
			- This function is responsible for creating and appending paragraphs to the webpage.
	3. **Document Fragment Creation**:
		- Inside the function, a `DocumentFragment` is created by calling `document.createDocumentFragment()`.
			- Document fragments are lightweight containers for storing DOM nodes, and appending a document fragment to the DOM is faster compared to appending nodes individually.
	4. **Loop**:
		- A for loop is initiated which iterates 500 times, from `i = 1` to `i = 500`.
		- In each iteration:
			- A new paragraph element (`<p>`) is created using `document.createElement('p')`.
				- The text content of the new paragraph is set to "This is paragraph number " followed by the value of `count`.
					- The value of `count` is then incremented by 1.
			- The new paragraph element is appended to the document fragment using `fragment.appendChild(newElement)`.
	5. **Appending to Document**:
		- After the loop, the document fragment, which now contains 500 new paragraph elements, is appended to the `body` of the document using `document.body.appendChild(fragment)`.
	6. **Recursion**:
		- A check is performed to see if the value of `count` is less than 20,000.
			- If it is, `setTimeout` is used to call `generateParagraphs` again after a delay of 0 milliseconds.
				- This is a form of recursion, where the function calls itself until a certain condition is met.
			- The `setTimeout` function is used here to allow the browser to render the newly added paragraphs and process any pending events before the next batch of paragraphs is generated.
	7. **Initial Function Call**:
		- Finally, `generateParagraphs` is called for the first time to kickstart the process.

==N==
# ReadMe Intro
# What is Documentation?
# [Writing READMEs README](https://github.com/udacity/ud777-writing-readmes#writing-readmes-readme)
- Udacity's course _Writing READMEs_ explains the importance of documenting your work. Here, you can find some supplemental resources for writing good READMEs.
## [Resources](https://github.com/udacity/ud777-writing-readmes#resources)
- [Choose A License](http://choosealicense.com/) - Helpful website for picking out a license for your project.
- [Github flavored markdown reference](https://help.github.com/categories/writing-on-github/) - Github's own documentation about documentation.
## [Sample READMEs](https://github.com/udacity/ud777-writing-readmes#sample-readmes)
- [Udacity Feedback Chrome Extension](https://github.com/udacity/frontend-grading-engine) - A front-end grading engine built by Cameron Pittman, a content developer at Udacity. The documentation is thorough and complete, so anybody can use it!
- [factory_bot](https://github.com/thoughtbot/factory_bot) - An open source project maintained by thoughtbot. Great example of simple instructions to get you set up, which then links to external documentation.
- [can.viewify](https://github.com/zkat/can.viewify) - Awesome example of someone documenting her personal projects concisely.
- [create-your-own-adventure](https://github.com/udacity/create-your-own-adventure) - This README for Udacity's Git and Github course.
# [Anatomy of a README](https://www.youtube.com/watch?v=i602s2RxWR0&t=153s)
- **Overview**
    - A readme file serves as a guide for potential users of your code.
	    - The primary audience is other humans.
		    - The goal is to provide enough context for users to get started with your code.
- **Example Project: Ledbetter**
    - A project maintained by GitHub.
	    - The focus is not on what Ledbetter does, but on how its README is structured and written.
- **Starting with a Title and Description**
    - Vital components to frame the rest of the documentation.
	    - A brief 1-2 sentence description can capture the essence of the project.
		    - A good description frames the reader's experience.
- **Visual Elements**
    - If applicable, include your project's logo to make the README visually appealing.
- **Essential Information**
    - Information crucial for understanding the code.
        - Dependencies: Other software or libraries that are necessary.
	        - Installation instructions.
		        - Common usage.
		        - Known bugs or issues.
    - It's emphasized there's no universal standard for READMEs.
        - Some might be brief; others could be extensive.
	        - The length is determined by the project's needs.
		    - The primary goal is clarity, ensuring users understand the essentials.
- **Avoiding Assumptions**
    - Don't presume what the end user already knows.
    - Considerations:
        - Steps to get the code up and running.
        - Pre-existing requirements (what should be installed or configured).
        - Potential areas of confusion for newcomers.
- **Getting Started/Installation Section**
    - Helpful for guiding users through the initial setup.
	    - Outlines any preliminary tasks before using the code.
- **Inclusion of Example Code**
    - Provides a clear illustration of how to utilize the code properly.
	    - Aids in bridging potential knowledge gaps.
- **Mindfulness of Assumptions**
    - Developers must be cautious of the knowledge they presume users possess.
	    - Consider from the perspective of a complete beginner.
	        - Example:
		        - A recipe that calls for a "poached egg" might alienate newcomers if it doesn't explain the term.
- **Level of Detail**
    - The amount of detail in the README is at the developer's discretion.
	    - For complex concepts, additional details can be beneficial for the user.











































