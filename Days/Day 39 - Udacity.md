# [10/19/2023, 17:03-18:03]
- **Today's Progress**: learning how to access a page's style and how to manipulate such. 
- **Thoughts:** a lot of the #DoM properties continue to be very straightforward in their application, simple note taking session. 
---
# Style Page Content
- In this section, we'll be looking at controlling page and element styling using the following properties and methods:
	- `.style.<prop>`
	- `.cssText`
	- `.setAttribute()`
	- `.className`
	- `.classList`
# CSS Specificity

Level of Specificity | CSS Rule
--- | ---
Least specific | rules in a stylesheet
More specific | rules in a `<style>` tag
Most specific | rules in a tag's style attribute
- According to the MDN, "specificity" is:
	- the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied.
		- Basically, the closer the style rule is to an element, the more specific it is.
			- For example, a rule in a style attribute on an element will override a style rule for that element in a CSS stylesheet. There is also the specificity of the _type_ of selector being used. An _ID_ is more specific than a _class_.
## Modifying an Element's Style Attribute
```
const mainHeading = document.querySelector('h1');

mainHeading.style.color = 'red';

- when using the `.style` property, you can only modify _one_ CSS style at a time.
	- That's why the previous code has `.style.color = 'red'` and not just `.style = 'red'`
```
## Adding Multiple Styles At Once
- We've seen how the `.style.<property>` syntax will let us change _just one_ piece of styling for an element.
	- So if we wanted to set an element's color, background color, and font size, we'd have to use three separate lines of code:
```
const mainHeading = document.querySelector('h1');

mainHeading.style.color = 'blue';
mainHeading.style.backgroundColor = 'orange';
mainHeading.style.fontSize = '3.5em';
```
##### we can use the `.style.cssText` property to set multiple CSS styles at once!
```
const mainHeading = document.querySelector('h1');

mainHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';
```
- Notice that when using the `.style.cssText` property, you write the CSS styles just as you would in a stylesheet;
	- so you write `font-size` rather than `fontSize`. This is different than using the individual `.style.<property>` way.
## Setting An Element's Attributes
- Another way to set styles for an element is to bypass the `.style.<property>` and `.style.cssText` properties altogether and use the `.setAttribute()` method:
```
const mainHeading = document.querySelector('h1');

mainHeading.setAttribute('style', 'color: blue; background-color: orange; font-size: 3.5em;');
```
### `.setAttribute()` Is Not Just For Styling
- You can use this method to set _any_ attribute for an element. If you want to give an element an ID, you can do that!:
```
const mainHeading = document.querySelector('h1');

// add an ID to the heading's sibling element
mainHeading.nextElementSibling.setAttribute('id', 'heading-sibling');

// use the newly added ID to access that element
document.querySelector('#heading-sibling').style.backgroundColor = 'red';

- The last two lines could've been combined into one to bypass setting an ID and just styling the element directly:

mainHeading.nextElementSibling.style.backgroundColor = 'red';
```
## Accessing an Element's Classes
- The first element property we'll look at is the `.className` property.
	- This property returns a string of all of the element's classes.
		- If an element has the following HTML:
```
<h1 id="main-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1>

- We could use .className to access the list of classes:

const mainHeading = document.querySelector('#main-heading');

// store the list of classes in a variable
const listOfClasses = mainHeading.className;

// logs out the string "ank-student jpk-modal"
console.log(listOfClasses);

- The `.className` property returns a space-separated string of the classes.
	- This isn't the most ideal format, unfortunately.
		- We can, however, convert this space-separated string into an array using the JavaScript string method, `.split()`:

const arrayOfClasses = listOfClasses.split(' ');

// logs out the array of strings ["ank-student", "jpk-modal"]
console.log(arrayOfClasses);

```
- Now that we have an _array_ of classes, we can do any data-intensive calculations:
	- use a `for` loop to loop through the list of class names
	- use `.push()` to add an item to the list
	- use `.pop()` to remove an item from the list
- `.className` is a property, so we can set its value just by assigning a string to the property:
```
mainHeading.className = "im-the-new-class";

- The above code _erases_ any classes that were originally in the element's `class` attribute and replaces it with the single class `im-the-new-class`.
```
### The `.classList` Property
- The `.classList` property is newer than the `.className` property, but is much nicer, check it out:
```
<h1 id="main-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1>

const mainHeading = document.querySelector('#main-heading');

// store the list of classes in a variable
const listOfClasses = mainHeading.classList;

// logs out ["ank-student", "jpk-modal"]
console.log(listOfClasses);
```
- The **`Element.classList`** is a read-only property that returns a live [`DOMTokenList`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList) collection of the `class` attributes of the element.
	- This can then be used to manipulate the class list.
		- Using `classList` is a convenient alternative to accessing an element's list of classes as a space-delimited string via [`element.className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className).
- The `.classList` property has a number of properties of its own. Some of the most popularly used ones are:
	- `.add()` - to add a class to the list
	- `.remove()` - to remove a class from the list
	- `.toggle()` - to add the class if it doesn't exists or remove it from the list if it does already exist
	- `.contains()` - returns a boolean based on if the class exists in the list or not

==N==



































