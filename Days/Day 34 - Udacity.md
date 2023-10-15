# [10/14/2023, 16:19-17:16, 18:04-18:52]
- **Today's Progress**: Formal intro into the DOM module. 
- **Thoughts:** these lessons are unchecked so I think they must've been bonus during the original track cuz i have 100% completion besides the career modules. 
---
## Course Outline

You'll be learning so many things in this course! Here are the topics for each lesson:

- **Lesson 1** - The Document Object Model
- **Lesson 2** - Creating Content with JavaScript
- **Lesson 3** - Working with Browser Events
- **Lesson 4** - Performance

In Lesson 1, we'll take a dive into what the Document Object Model (DOM) is, how it gets created, and how we can access it with JavaScript.

In Lesson 2, you'll learn to interact with page content using JavaScript. You'll use the skills gained from the first lesson to JavaScript and the DOM to update existing page content, create new page content, add new content to the page, programmatically remove page content, and finally how to style page elements.

In Lesson 3, you'll learn about browser events. There is an entire world of thousands of browser events that are happening when you interact with a website. You can't see them directly, but you'll learn about them, how to listen for them, and how to respond when they occur.

In Lesson 4, you'll learn about Performance. It's never too early to start thinking about the performance implications of code. In this course we'll be writing code that can drastically change website (both its content and its looks!), so we need to make sure that the code we write is both functional and efficient.

==N==
# The #DoM (https://www.youtube.com/watch?v=gndOFastyus)
- The HTML specification outlines rules for processing received data in HTML.
	- Text within angle brackets in HTML represents tags with special meanings.
		- Tags are processed by the browser, and encountering a tag emits a token.
			- The token for a StartTag in HTML is emitted when a tag is encountered.
				- The tokenization process is carried out by a component known as the tokenizer.
- Another process operates alongside the tokenizer to consume tokens and convert them into node objects.
	- The first HTML token is converted into an HTML node.
		- Subsequent tokens are consumed, creating corresponding nodes (e.g., the head node).
			- Tokens emitted by the tokenizer include both start and end tokens, which indicate relationships between nodes.
				- For instance, the StartTag head token precedes the EndTag HTML token, indicating that the head node is a child of the HTML node.
					- The meta and link nodes are children of the head node, establishing a hierarchical structure.
						- The process continues until all tokens have been consumed, resulting in the creation of the Document Object Model (DOM).
							- The tokens are:
								- DOCTYPE
								- start tag
								- end tag
								- comment
								- character
								- end-of-file
- The DOM is a tree structure representing the content and properties of the HTML, including relationships between nodes.
	- Each node within the DOM contains its properties, such as the image node having a source attribute.
		- The DOM serves as a comprehensive parsed representation of the HTML markup.

- To recap the video, the following steps happen:
	- HTML is received
	- HTML tags are converted to tokens
	- Tokens are converted to Nodes
	- Nodes are converted to the DOM

- The DOM is standardized by the W3C. There are a number of specifications that make up the DOM, here are few:
	- Core Specification
	- Events Specification
	- Style Specification
	- Validation Specification
	- Load and Save Specification
# The DOM is a model (representation) of the relationships and attributes of the HTML document that was received
## The DOM Recap

The DOM stands for "Document Object Model" and is a tree-like structure that is a representation of the HTML document, the relationship between elements, and contains the content and properties of the elements.

- The DOM is _not_:
	- part of the JavaScript language

- The DOM is:
	- constructed from the browser
		- globally accessible by JavaScript code using the `document` object



































