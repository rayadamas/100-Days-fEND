# [12/16/2023, 12:44-13:48]
- **Today's Progress**: Props and Styling
	- #JSX tomorrow
- **Thoughts:** quiz kinda smacked me about, i understood how i was intended to plug in utilizing the className prop as opposed to the style prop, i checked the CSS doc to make sense of what i needed to pull in, 5 diff CSS props, but i was unsure how to do so. looked at the solution i confirmed WHAT i needed was correct, and where i wanted to put them was correct.
	- there's NOT videos w/ each lesson so that's disappointing but these past 2 lessons have been decent
---
# The props object
- Every React element has a `props` object. For elements representing #HTML_tag, this is just an object containing [DOM properties](https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties).
	- For example, if you want to render this HTML using `ReactDOM.render()`:
		- `<a id="home" href="https://frontarm.com/">Frontend Armory</a>`
			- Then you’ll need to pass in an element whose `props` contain one entry for each of the `<a>` tag’s attributes:
```
index.js

ReactDOM.render(
  React.createElement(
    'a',
    {
      id: 'home',
      href: 'https://frontarm.com/',
    },
    'Frontend Armory',
  ),
  document.getElementById('root')
)
```
- Simple, right? There’s just one problem:
	- _Not all HTML attributes map directly to props._
## Prop naming
- When creating React elements, your `props` need to be named after #DoM properties — _not HTML attributes_.
	- If you’re familiar with the DOM, this shouldn’t be a problem. If not, check out the article [HTML attributes vs. DOM properties](https://frontarm.com/articles/html-vs-dom-attributes/).
- There’s a few of these naming differences you’ll come across rather frequently:
	- Instead of **`class`**, you must use the **`className`** prop to set CSS classes
	- Instead of a **`for`** attribute on your `<label>` elements, you must use a **`htmlFor`** prop
	- Instead of passing a string for **`style`**, you must use an object with camelCased names
	- Instead of **`tabindex`**, you’ll need to use a **`tabIndex`** prop (note the capitalization)
- Remembering these differences can be a bit of a pain.
	- But unless you’re building rockets or medical devices, trial and error probably won’t hurt. And as a bonus, memorizing these differences will help you even outside of the React ecosystem!
## Styling
- Styling a React element is as simple as passing in `className` and/or `style` props.
	- But _which one should you use?_
		- Actually, _either is fine_.
		- There are times you can’t beat the convenience of adding a short `style` prop. And there are times when you’ll use `className` to access the extra power provided by CSS.
			- In fact, there’s nothing wrong with mixing and matching `style` and `className`, like in this demo. You can get a feel for how each works by changing the background and border colors.
##### Limitations of style prop
- If you want to use selectors, including pseudo-selectors like `:hover`, then you’ll need to use `className`.
```
index.js
let createElement = React.createElement

const square = createElement(
  'div',
  {
    // The `style` prop accepts an object of styles
    style: {
      width: '100px',
      height: '100px',
      backgroundColor: 'red',
      margin: '10px',
    }
  }
)

const container = createElement(
  'div',
  {
    // The `className` prop set's the element's CSS class.
    // The `blue-border` class is defined in styles.css.
    className: 'blue-border', 
  },

  // The remaining arguments list the element's children
  square,
  square
)

ReactDOM.render(
  container,
  document.getElementById('root')
)

styles.css

.blue-border {
  border: 3px solid blue;
}

.blue-border:hover {
  border-style: dotted;
}

index.html

<!DOCTYPE html>
<html>
  <head>
    <title>Untitled App</title>
    <script src="https://unpkg.com/react@16.9.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.9.0/umd/react-dom.development.js"></script>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>

```
## Let’s style the contact list
- Now that you’re a pro on style, it’s time to put your knowledge to use. So let’s pretty up the contact list from earlier.
	- For this exercise, I recommend that you use CSS with `className` props. I’ve added a stylesheet and a corresponding `<link>` tag to the HTML for you.
```
index.js

let createElement = React.createElement

let rootElement =
  createElement('div', { className: 'ContactList' }, 
    createElement('h1', { className: 'ContactList-title' }, "Contacts"),
    createElement('div', {},
      createElement(
        'div',
        { className: 'Contact' },
        createElement('div', { className: 'Contact-avatar' }, "JN"),
        createElement('span', { className: 'Contact-name' }, "James Nelson"),
        createElement(
          'a',
          { href: 'mailto:james@frontarm.com' },
          "james@frontarm.com",
        ),
        
      ),
      createElement(
        'div',
        { className: 'Contact' },
        createElement('div', { className: 'Contact-avatar' }, "M"),
        createElement('span', { className: 'Contact-name' }, "Me"),
        createElement(
          'a',
          { href: 'mailto:me@example.com' },
          "me@example.com"
        )
      )
    )
  )

// The `ReactDOM` variable is set by the second `<script>` tag
// in the above HTML file
let domNode = document.getElementById('root')
ReactDOM.render(rootElement, domNode)

styles.css

body {
  background-color: #f4f8ff;
  font-family: Arial, Helvetica, sans-serif;
}

.ContactList {
  background-color: white;
  box-shadow:
    1px 1px 3px rgba(0, 0, 0, 0.05),
    4px 4px 8px rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}
.ContactList > p {
  padding: 5px 15px;
  font-size: 13px;
}
.ContactList-title {
  border-bottom: 1px solid #f0f4fc;
  color: #777;
  font-size: 13px;
  font-weight: bold;
  line-height: 42px;
  margin: 0;
  padding: 5px 15px 0;
  text-transform: uppercase;
}
.ContactList > button {
  background-color: #12c8ba;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  margin: 10px 15px;
  padding: 10px 15px;
}
.ContactList-refresh {
  background-color: #bbb;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  position: absolute;
  right: 15px;
  top: 12px;
  transition: background-color 150ms ease-out;
}
.ContactList-refresh:hover {
  background-color: #dd3c6f;
}

.Contact {
  border-bottom: 1px solid #f0f4fc;
  color: rgba(0, 0, 0, 0.73);
  font-family: Lato, sans-serif;
  padding: 7px 15px 10px;
}
.Contact-avatar {
  background-color: #8233ff;
  border-radius: 50%;
  color: white;
  float: left;
  height: 32px;
  line-height: 32px;
  margin: 3px 7px 0 0;
  position: relative;
  text-align: center;
  width: 32px;
}
.Contact-avatar > img {
  border-radius: 50%;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 32px;
}
.Contact-error {
  color: #dd3c6f;
  font-size: 13px;
}
.Contact-name {
  font-weight: bold;
}
.Contact > a {
  display: block;
  margin-top: 5px;
}
.Contact-actions {
  margin-left: 40px;
  margin-top: 10px;
}
.Contact-actions > button {
  background-color: #aaa;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  margin-right: 10px;
  padding: 5px 10px;
  transition: background-color 150ms ease-out;
}
.Contact-actions > button:hover {
  background-color: #999;
}
.Contact-actions > .Contact-actions-edit:hover {
  background-color: #8233ff;
}
.Contact-actions > .Contact-actions-delete:hover {
  background-color: #dd3c6f;
}

.ContactForm {
  padding: 4px 15px 4px 54px;
}
.ContactForm > label {
  display: block;
  font-size: 12px;
  font-weight: bold;
  margin: 10px 0;
}
.ContactForm > label > span {
  display: block;
  margin-bottom: 3px;
}
.ContactForm > label > input {
  font-size: 14px;
  padding: 4px 8px;
}
.ContactForm > button {
  background-color: #aaa;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  margin: 0 10px 10px 0;
  padding: 10px 15px;
}
.ContactForm > button.ContactForm-save-button {
  background-color: #12c8ba;
}
.ContactForm-error {
  margin: 4px 0;
  color: #dd3c6f;
}

index.html

<!DOCTYPE html>
<html>
  <head>
    <title>Untitled App</title>
    <script src="https://unpkg.com/react@16.9.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.9.0/umd/react-dom.development.js"></script>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>
```
- If you’ve given the exercise a decent crack, and would like to check your answer against mine, then go ahead! Just click the _Solution_ button at the bottom of the editor.
	- One thing you probably noticed while working through this exercise is that typing out `createElement` for each element is _painful_. Luckily, React has a solution…
















































