# [12/18/2023, 13:45-14:55]
- **Today's Progress**: Try out #JSX 
- **Thoughts:** this example too me a while, i needed to read through the code to understand which elements needed to be refactored. i decided to just comment out the code to be changed so i had an easier reference point. my refactor also includes a container div, whereas the solution just has the variable declaration and goes right into forming the contact list. 
---
# Try Out JSX
- The best way to get familiar with JSX is to try it out. So let’s do that!
	- The editor on the left contains `createElement` based code for a contact list.
		- **Your task is to refactor this code with JSX instead of `createElement()`.**
			- Once you’ve gotten rid of the last `createElement()` (or gotten stuck), take a look at my solution to see how it compares to your own.
## About the editor
**This editor lets you see your results as you type.** To enter the live editing mode, just click the button at the top right — you can switch back to these instructions at any time by clicking it again.

If you’d like to run your results past a friend, colleague, or someone in the slack community, then click the **fork** button to get a link that you can share.

It’s also possible to reset any exercise to its original state, and to export the source as a zip file — just click the three dots next to save.
```
index.js

	let createElement = React.createElement

let rootElement =
  <div>
    <div className="ContactList">
      <h2 className="ContactList-title">Contacts</h2>
      <div className="Contact">
        <div className="Contact-avatar">JN</div>
        <span className="Contact-name">James Nelson</span>
        <a href="mailto:james@frontarm.com">james@frontarm.com</a>
      </div>
      <div className="Contact">
        <div className="Contact-avatar">M</div>
        <span className="Contact-name">Me</span>
        <a href="mailto:me@example.com">me@example.com</a>
      </div>
    </div>
  </div>
//   createElement('div', {}, 
//     createElement('div', { className: 'ContactList' },
//       createElement('h2', { className: 'ContactList-title' }, 'Contacts'),
//       createElement(
//         'div',
//         { className: 'Contact' },
//         createElement('div', { className: 'Contact-avatar' }, "JN"),
//         createElement('span', { className: 'Contact-name' }, "James Nelson"),
//         createElement(
//           'a',
//           { href: 'mailto:james@frontarm.com' },
//           "james@frontarm.com",
//         ),
        
//       ),
//       createElement(
//         'div',
//         { className: 'Contact' },
//         createElement('div', { className: 'Contact-avatar' }, "M"),
//         createElement('span', { className: 'Contact-name' }, "Me"),
//         createElement(
//           'a',
//           { href: 'mailto:me@example.com' },
//           "me@example.com"
//         )
//       )
//     )
//   )

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























































