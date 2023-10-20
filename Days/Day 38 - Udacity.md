# [10/18/2023, 20:56-21:58]
- **Today's Progress**: going back through the update existing page content section alongside the provided proj code. 
- **Thoughts:** caught back up to the quiz question i wasn't able to duplicate. still returning `null` from the console for some reason, idk if it's the question or me. think it's #Udacity fr. next section deals w/ styling a page's content. The #DoM's a new set of syntax but in practice has been fine to maneuver. Seems it'd be more on a case-basis one would need to do this. 
---
# An Element's inner HTML
```
const card = document.querySelector('.card');
undefined
card.innerHTML
'\n              <img srcset="site-files/assets/module-dfnd%401x.png 1x, site-files/assets/module-dfnd%402x.png 2x" src="./site-files/module-dfnd@1x.png" class="card--image" alt="New!" speechify-initial-font-family="&quot;Open Sans&quot;, sans-serif" speechify-initial-font-size="16px">\n              <div class="card__content" speechify-initial-font-family="&quot;Open Sans&quot;, sans-serif" speechify-initial-font-size="16px">\n                <h6 class="turquoise" speechify-initial-font-family="&quot;Open Sans&quot;, sans-serif" speechify-initial-font-size="9px">New!</h6>\n                <p class="card__content--h5 slate strong" speechify-initial-font-family="&quot;Open Sans&quot;, sans-serif" speechify-initial-font-size="16px">Data Foundations Nanodegree</p>\n                <p class="x-small mb-0" speechify-initial-font-family="&quot;Open Sans&quot;, sans-serif" speechify-initial-font-size="13px">Enroll Now</p>\n              </div>\n            '
```

# An Element's text content
```
card.textContent
'\n              \n              \n                New!\n                Data Foundations Nanodegree\n                Enroll Now\n              \n            '
```
```
const heading = $0;
undefined

heading
<h6 class=​"text-center" speechify-initial-font-family=​"&quot;Open Sans&quot;, sans-serif" speechify-initial-font-size=​"13px">​Our Amazing Community​</h6>​
heading.textContent = 'Our Amazing Community <em>go crazy</em>!';
'Our Amazing Community <em>go crazy</em>!'

heading.innerHTML = 'Our Amazing Community <em>go crazy</em>!';
'Our Amazing Community <em>go crazy</em>!'
```
```
const card = document.querySelector('.card');
undefined

card.textContent
'\n              \n              \n                New!\n                Data Foundations Nanodegree\n                Enroll Now\n              \n            '

card.innerText
'NEW!\n\nData Foundations Nanodegree'
```

# Creating new Elements
```
document.createElement('span');
<span>​</span>​

const container = document.createElement('span');
undefined

container
<span>​</span>​

container.textContent(', roight neow!');
VM28298:1 Uncaught TypeError: container.textContent is not a function
    at <anonymous>:1:11
(anonymous) @ VM28298:1
container.textContent = ', roight neow!';
', roight neow!'

container
<span>​, roight neow!​</span>​

```

# Insert Adjacent HTML
```
const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';
undefined

mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);
```

==N==
# Remove Page Content
- Specifically, we'll look at these new methods:
	- `.removeChild()`
	- `.remove()`

- In the process, you'll also learn about these two properties:
	- `.firstElementChild`
	- `.parentElement`

# Node: removeChild() method
- The **`removeChild()`** method of the [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) interface removes a child node from the DOM and returns the removed node.
- So just like the `.appendChild()` method, the `.removeChild()` method requires:
	- a parent element
	- the child element that will be removed
```
Syntax:
<parent-element>.removeChild(<child-to-remove>);
removeChild(child)
```
- Just like the `.appendChild()` method, there's a (somewhat minor) drawback to the `.removeChild()` method. Both methods:
	- require access to parent to function
		- Just like the `.firstElementChild` property can be called on a parent element to access its first element, every element also has a `parentElement` property that refers to its parent
			- So if we have access to the child element that we're about to add or remove, you can use the `parentElement` property to "move focus" to the element's parent.
				- Then we can call `.removeChild()` (or `.appendChild()`) on that referenced parent element.
```
const mainHeading = document.querySelector('h1');

mainHeading.parentElement.removeChild(mainHeading);
```
# Element: remove() method
- The **`Element.remove()`** method removes the element from the DOM.
```
Syntax:
remove()

const mainHeading = document.querySelector('h1');

mainHeading.remove();
```
- The difference is that with `.removeChild()` must be called on the parent of the element being removed and must be passed the child to be removed
	- while `.remove()` can be called directly on the element to delete.




































