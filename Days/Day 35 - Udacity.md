# [10/15/2023, 19:57-21:04]
- **Today's Progress**: continuing DOM lessons w/ Nodes, Elements, and Interfaces. 
- **Thoughts:** wish these lessons had more practice quizzes in-between rather than just "read all these linked docs". easy study sesh. 
---
# [HTML Parsing Overview](https://www.youtube.com/watch?v=B2UPRofY5ig&t=3s)
- HTML parsing is a crucial step in rendering web pages, where the HTML document is analyzed and converted into a structure that can be manipulated and rendered by the browser.
	- The primary aim is to transform the raw text of HTML into a structured format.
- Angle Brackets and Tags
    - In HTML, text enclosed within angle brackets (`< >`) represents a tag which holds special significance.
	    - Tags are the building blocks of HTML and define the structure and content of the web document.
- Tokenization Process
    - Tokenization is the initial phase of HTML parsing.
	    - During tokenization, the HTML text is scanned, and chunks of text are identified as distinct entities, known as tokens.
		    - Tokens include start tags, end tags, attribute names, attribute values, text, comments, and others.
			    - For instance, when the tokenizer encounters `<HTML>`, it emits a token recognized as `StartTag:HTML`.
		- Following this, a `StartTag:head` token would be generated upon encountering `<head>`, and the process continues for other tags.
- Emitting Tokens
    - As tokens are identified, they are emitted and become ready for the next phase of the parsing process.
	    - The emission of tokens is sequential and follows the order in which tags and other text are encountered in the HTML document.
- Consumption of Tokens and Node Object Creation
    - Concurrently, as tokens are being generated, another process consumes these tokens.
	    - This process is responsible for converting tokens into node objects, which are elements of the Document Object Model (DOM).
		    - The DOM represents a structured, hierarchical tree of nodes that mirrors the structure of the HTML document.
			    - The creation of node objects is essential as it facilitates the manipulation and rendering of the HTML document within the browser.
- Interaction Between Tokenizer and Node Object Creation Process
    - The tokenizer and the node object creation process work in tandem to ensure a seamless transformation of HTML text into a structured DOM.
	    - The efficient interaction between these processes is crucial for the timely rendering of web pages.
- Significance
    - Understanding the mechanics of HTML parsing, including tokenization and node object creation, is fundamental for web developers to troubleshoot rendering issues and optimize webpage performance.


## [Nodes](https://www.youtube.com/watch?v=GfeCBh7dsW4&t=85s)
- **Definition and Comparison**:
    - _Node and node_:
        - **Node (capital N)**: Comparable to a class in Object-Oriented Programming (OOP).
        - **node (lowercase n)**: Comparable to an object in OOP.
        - If unfamiliar with OOP, think of **Node as a blueprint** and **node as a real building** constructed from that blueprint.
    - _Object-Oriented Programming (OOP)_:
        - A programming paradigm that utilizes objects and classes for organizing code.
        - **Classes** act as blueprints for objects, encapsulating data and behaviors relevant to that type of object.
- **Blueprint Analogy**:
    - **Node (Blueprint)**:
        - Contains **data** about a model (e.g., a building), referred to as **properties**.
            - Example Properties: Color of the building, number of doors, number of windows.
        - Lists **capabilities** of the model, referred to as **methods**.
            - Example Methods: An alarm system for security, a sprinkler system for lawn maintenance.
    - **node (Real Building)**:
        - Actual instances constructed based on the blueprint.
        - Inherits the properties and methods defined by the blueprint.
- **Interface**:
    - Another term for blueprint, especially in computing and programming context.
    - Specifies the **properties and methods** to be implemented by entities adhering to the interface.
    - Provides a way to ensure a certain level of **consistency and contract adherence** among different objects or nodes.
- **Delving Deeper into Node's Properties and Methods**:
    - The transcript hints at a more detailed examination of Node's properties and methods, which could entail:
        - Exploring **specific properties and methods** that are common or essential in a given context.
        - Understanding how these properties and methods are **implemented** in real-world examples of nodes.
        - Discussing the **interaction** between different nodes, and between nodes and other parts of a system.
- In the DOM, everything is a node.
	- The term "node" refers to any type of object within the DOM hierarchy.
		- There are several types of nodes, but the most common ones you'll work with are element nodes and text nodes.
### Types of Nodes:
1. **Element Nodes:** Represent elements such as `<div>`, `<span>`, `<p>`, etc.
2. **Text Nodes:** Contain text content of an element.
3. **Attribute Nodes:** Represent attributes of an element.
4. **Comment Nodes:** Represent comments in the HTML.
5. **Document Node:** Represents the entire document and is, essentially, the root node.

## Elements
- Element nodes represent HTML elements in the document.
	- They can have attributes (like `id`, `class`, etc.) and can contain other element nodes as well as text nodes.
- the Element Interface is that it is a descendent of the Node Interface

### Key Properties and Methods:
- **children:** A collection of an element’s child element (not text nodes).
- **childNodes:** A collection of an element’s child nodes (including text nodes).
- **firstChild and lastChild:** The first and last child of an element, respectively.
- **nextSibling and previousSibling:** The next and previous sibling of an element, respectively.
- **getAttribute(attributeName):** Gets the value of the specified attribute.
- **setAttribute(attributeName, value):** Sets the value of the specified attribute.

## Interfaces
Interfaces in the DOM provide a way for your code to interact with the elements in a document. There are many interfaces in the DOM, but some of the most common ones you'll work with include:

### Key Interfaces:
1. **Node Interface:** The foundational interface that represents a single node in the document tree, upon which many other interfaces are based.
2. **Element Interface:** Extends the `Node` interface, representing a single element in the document.
3. **Document Interface:** Represents the entire document, inheriting from the `Node` interface, and serves as the entry point into the web page's content.
4. **EventTarget Interface:** A critical interface implemented by all nodes in an HTML document, allowing them to receive events (like clicks or user input).

### Common Methods:
- **addEventListener(type, listener[, options]):** Adds an event listener of a specified type to an element.
- **removeEventListener(type, listener[, options]):** Removes an event listener from an element.
- **dispatchEvent(event):** Dispatches an event to this interface, invoking the affected EventListeners in the appropriate order.

==N==
# Query Selectors in DOM
- Query selectors are methods provided by the Document Object Model (DOM) to access and manipulate DOM elements. They are highly useful for DOM traversal and manipulation, allowing developers to select elements based on CSS selector syntax. Below is an overview of `querySelector` and `querySelectorAll` methods.

## `querySelector`
- The `querySelector` method returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, `null` is returned.

```
element.querySelector(selectors);

```

### Parameters:
- **selectors:** A string containing one or more CSS selectors separated by commas.
```
let firstHeading = document.querySelector('h1');
// This will select the first <h1> element in the document.

```

### Return Value:
- A single `Element` object representing the first element in the document that matches the specified set of CSS selectors, or `null` if there are no matches.

==N==
## `querySelectorAll`
- The `querySelectorAll` method returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
```
element.querySelectorAll(selectors);

```
### Parameters:
- **selectors:** A string containing one or more CSS selectors separated by commas.
```
let allParagraphs = document.querySelectorAll('p');
// This will select all <p> elements in the document.
```
### Return Value:
- A `NodeList` object representing all elements in the document that match the specified set of CSS selectors.
### Key Differences between `querySelector` and `querySelectorAll`:
1. **Single vs. Multiple Elements:**
    - `querySelector` returns the first matching element.
    - `querySelectorAll` returns all matching elements.
2. **Return Type:**
    - `querySelector` returns a single `Element` object.
    - `querySelectorAll` returns a `NodeList` object.
3. **Performance:**
    - `querySelector` is faster if only one element is needed.
    - `querySelectorAll` could be slower if there are many matching elements, as it returns all of them.



