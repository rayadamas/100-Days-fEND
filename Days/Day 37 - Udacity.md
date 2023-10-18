# [10/17/2023, 20:28-21:28]
- **Today's Progress**: continuing w/ updating existing page content w/ #Udacity 
- **Thoughts:** late night session. running into issues duplicating this example of `appendChild` in the browser. i have to go backwards and update my forked proj code at pace w/ the videos for this particular to be relieved in action. 
---
## 💡Project Code 💡
- Instructions and a walkthrough of the project were in the previous section. You can clone the project from the GitHub link below. Look back at the previous section to see detailed information about the project and a walkthrough video.

- Project repository: [https://github.com/udacity/course-JS-and-the-DOM](https://github.com/udacity/course-JS-and-the-DOM)

- Write the DOM code necessary to select the _first_ element with class: `card`

		document.querySelector('.card');

- Let's store the first `.card` element in a variable for easy access:
`const nanodegreeCard = document.querySelector('.card');`

## An Element's Inner HTML
- Every element inherits properties and methods from the Element Interface (remember this from the previous lesson!).
	- This means that every element has an `.innerHTML` property.
		- This property, as it's rightly named, represents the markup of the element's content.
			- We can use this property to:
				- get an element's (and all of its descendants!) HTML content
				- set an element's HTML content

### 💡 Innie vs Outie 💡
- The `.innerHTML` property sets or returns the HTML content _inside_ the selected element (i.e. between the tags).
- There's also the rarely used `.outerHTML` property. `.outerHTML` represents the HTML element itself, _as well as its children_.

```
<h1 id="pick-me">Greetings To <span>All</span>!</h1>

const innerResults = document.querySelector('#pick-me').innerHTML;
console.log(innerResults); // logs the string: "Greetings To <span>All</span>!"

const outerResults = document.querySelector('#pick-me').outerHTML;
console.log(outerResults); // logs the string: "<h1 id="pick-me">Greetings To <span>All</span>!</h1>"
```

## An Element's Text Content
- So `.innerHTML` will get/set an element's _HTML_ content. If we just want the text content, we can use the fantastically named `.textContent` property!
- The `.textContent` property will:
	- set the text content of an element and all its descendants
	- return the text content of an element and all its descendants

`nanodegreeCard.textContent = "I will be the updated text for the nanodegreeCard element!";`

- Passing any text that _looks_ like HTML to the `.textContent` property will ==still be displayed as text==
	- It will _not_ be displayed as HTML when the element is rendered.

- If you'd like to update an element, _including_ its HTML, then you need to use the `.innerHTML` property:
```
myElement.textContent = 'The <strong>Greatest</strong> Ice Cream Flavors'; // doesn't work as expected

myElement.innerHTML = 'The <strong>Greatest</strong> Ice Cream Flavors';  // works as expected
```

## An Element's Text Content - Version 2!
- Like the `.textContent` property, the `.innerText` property can be used to get/set an element's text content, but there are some important differences between the two properties.
- `.textContent` sets/gets the text content of an element...pretty clear and simple.
- `.innerText` returns the text as it would be seen visually
- If CSS is used to hide any text inside that element, `.innerText` _will not_ return that text, while `.textContent` _will_ return it.
	- The `.textContent` property has been a standard for quite a long time. Conversely, `.innerText` property is a relatively new addition to the HTML specification. It has been around for a while but was not fully supported by all browsers because it was not a part of the HTML specification.

# Add New Page Content
## createElement() method
- In an [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) document, the **`document.createElement()`** method creates the HTML element specified by _tagName_, or an [`HTMLUnknownElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLUnknownElement) if _tagName_ isn't recognized.
```
createElement(tagName)
createElement(tagName, options)
- A string that specifies the type of element to be created. The [`nodeName`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName "nodeName") of the created element is initialized with the value of _tagName_.
- Returns new element
```

```
// creates and returns a <span> element
document.createElement('span');

// creates and returns an <h3> element
document.createElement('h3');
```

- Creating an element...just creates it. It doesn't add it to the DOM.
	- Since the element isn't added to the DOM, it doesn't appear in the page
		- We can use the `.appendChild()` method to add an element to the page
- Now, to use the `.appendChild()` method, it needs to be **called on another element**, not the `document` object!
```
// create a brand new <span> element
const newSpan = document.createElement('span');

// select the first (main) heading of the page
const mainHeading = document.querySelector('h1');

// add the <span> element as the last child element of the main heading
mainHeading.appendChild(newSpan);
```
- The element that is about to be appended is added as the last child.
	- So, in the example above, the `<span>` element will appear in the DOM as a child of the `<h1>`...but it will appear _at the end_, after all text and any other elements that might be in the `<h1>`.
## ⚠️ `.appendChild()` Needs An Element! ⚠️

- When you're using the `.appendChild()` method, it must be called on an existing element.
	- To be clear, you can't call this on the `document` object, so the following will result in an error:
```
const newSpan = document.createElement('span');

// causes an error
document.appendChild(newSpan);
```

## Creating Text Nodes
- Just like you created new elements with the `.createElement()` method, you can also create new _text_ nodes using the `.createTextNode()` method. Take a look at the following code that:
	- creates a paragraph element
	- creates a text node
	- appends the text node to the paragraph
	- appends the paragraph to the tag
```
const myPara = document.createElement('p');
const textOfParagraph = document.createTextNode('I am the text for the paragraph!');

myPara.appendChild(textOfParagraph);
document.body.appendChild(myPara);

- However, since you already know about the `.textContent` property, the code below will provide the exact same result:

const myPara = document.createElement('p');

myPara.textContent = 'I am the text for the paragraph!';
document.body.appendChild(myPara);

- Therefore, instead of creating a new text node and appending it to an element, it's faster and easier to just update the element's text with the `.textContent` property.
```

## Inserting HTML In Other Locations
- By definition, the `.appendChild()` method will add an element as the last child of the parent element.
	- It's impossible to put it as the first child or anywhere else...it has to be the last child.
- Enter the `.insertAdjacentHTML()` method! The `.insertAdjacentHTML()` method has to be called with two arguments:
	- the location of the HTML
	- the HTML text that is going to be inserted
		- The second argument _text_ of `insertAdjacentHTML()` method parses the specified _text_ as HTML and inserts the resulting nodes into the DOM tree at a specified position
- The first argument to this method will let us insert the new HTML in one of four different locations
	- `beforebegin` – inserts the HTML text as a previous sibling
		- `afterbegin` – inserts the HTML text as the first child
			- `beforeend` – inserts the HTML text as the last child
				- `afterend` – inserts the HTML text as a following sibling
```
<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    Existing text/HTML content
    <!-- beforeend -->
</p>
<!-- afterend -->
```
- Here's how we'd call `.insertAdjacentHTML()`:
```
const mainHeading = document.querySelector('#main-heading');
const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';

mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);
```








