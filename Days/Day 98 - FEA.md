# [12/17/2023, 15:50-16:51]
- **Today's Progress**: what is #JSX 
- **Thoughts:** i feel like this module's examples
---
# What is JSX?
- JSX is just a tool that converts files like this:
```
let element =
  <div className='test'>
    Hello, world!
  </div>
```
- Into files like this:
```
let element =
  React.createElement(
    'div',
    { className: 'test' },
    "Hello, world!"
  )
```
- Simple, right? All JSX does is replace a file’s `<tags>` with equivalent calls to `React.createElement()`.
	- This reduces the amount of code you need to write, and allows editors to provide syntax highlighting for element trees.
		- As a result, it’ll make you way more productive — but more importantly — you’ll just have a whole lot more _fun_.
- So how does JSX do it? Actually, JSX itself doesn’t do _anything_. It’s just a language extension, so to use it you’ll need to compile your JSX files into JavaScript files.
	- As it happens, the editor in this course can handle the compilation for you. What’s more, it’ll even show you the compiled code if you click the _Compile_ button at the bottom left. Let’s use this feature to take a look at the four most important rules of JSX.
## 1. `<tags>` are elements
- JSX `<tags>` map to calls to `React.createElement()`.
```
index.js

let element = <h1>Hello, world</h1>

ReactDOM.render(element, document.getElementById('root'))

---

var element = React.createElement(
  "h1",
  null,
  "Hello, world"
)

ReactDOM.render(element, document.getElementById("root"))

index.html

<!DOCTYPE html>
<html>
  <head>
    <title>Untitled App</title>
    <script src="https://unpkg.com/react@16.9.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.9.0/umd/react-dom.development.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>

<!DOCTYPE html>
<html>
  <head>
    <title>Untitled App</title>
    <script src="https://unpkg.com/react@16.9.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.9.0/umd/react-dom.development.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>

```
## 2. JSX children become child elements
- The children of a JSX tag map to the third and subsequent arguments of `React.createElement()`, i.e. they become the element’s `props.children`.
	- JSX children can be text, elements, or a mix of both.
```
index.js

// Children can be text.
let textChildren = <p>What good is a phone call...</p>

// Children can be elements.
let elementChildren = <p><em>If you're unable...</em></p>

// Or they can be a mix of both.
let mixedChildren = <p>To <strong>speak?</strong></p>

ReactDOM.render(
  React.createElement(
    'div',
    null,
    textChildren,
    elementChildren,
    mixedChildren,
  ),
  document.getElementById('root')
)

// Children can be text.
var textChildren = React.createElement(
  "p",
  null,
  "What good is a phone call..."
)

// Children can be elements.
var elementChildren = React.createElement(
  "p",
  null,
  React.createElement("em", null, "If you're unable...")
)

// Or they can be a mix of both.
var mixedChildren = React.createElement(
  "p",
  null,
  "To ",
  React.createElement("strong", null, "speak?")
)

ReactDOM.render(
  React.createElement(
    "div",
    null,
    textChildren,
    elementChildren,
    mixedChildren
  ),

  document.getElementById("root")
)

index.html

<!DOCTYPE html>
<html>
  <head>
    <title>Untitled App</title>
    <script src="https://unpkg.com/react@16.9.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.9.0/umd/react-dom.development.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>

<!DOCTYPE html>
<html>
  <head>
    <title>Untitled App</title>
    <script src="https://unpkg.com/react@16.9.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.9.0/umd/react-dom.development.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>
```
## 3. JSX attributes become `props`
- Use `""` quotes when your `props` are strings
	- Use `{}` braces when your `props` are literals or variables
		- And use bare attribute names to indicate a value of `true`
```
index.js

let form =
  <form>
    <input value="Test 1" tabIndex={3} />
    <input
      // The `value` prop will have the string value `"Test"`
      value="Test 2"

      // The `tabIndex` prop will have the number value `2`
      tabIndex={2}

      // The `hidden` prop will have the boolean value `true`
      hidden
    />
    <input value="Test 3" tabIndex={1} />
  </form>
  
ReactDOM.render(form, document.getElementById('root'))

var form = React.createElement(
  "form",
  null,
  React.createElement("input", {
    value: "Test 1",
    tabIndex: 3
  }),
  React.createElement("input", {
    // The `value` prop will have the string value `"Test"`
    value: "Test 2",

    // The `tabIndex` prop will have the number value `2`
    tabIndex: 2,

    // The `hidden` prop will have the boolean value `true`
    hidden: true
  }),

  React.createElement("input", {
    value: "Test 3",
    tabIndex: 1
  })
)

ReactDOM.render(form, document.getElementById("root"))


index.html

<!DOCTYPE html>
<html>
  <head>
    <title>Untitled App</title>
    <script src="https://unpkg.com/react@16.9.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.9.0/umd/react-dom.development.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>

<!DOCTYPE html>
<html>
  <head>
    <title>Untitled App</title>
    <script src="https://unpkg.com/react@16.9.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.9.0/umd/react-dom.development.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>
```
## 4. `{}` interpolates children
- When a pair of `{}` braces is encountered within a JSX element, it’s value will be interpolated in.
	- You can interpolate anything that can be passed as an element’s children, including text, elements, or even arrays — which we’ll cover in a few lessons time.
```
index.js

let hello1 = "World"
let hello2 = <strong style={{color: '#61dafb'}}>React!</strong>

let hellos =
  <div>
    <div>Hello, {hello1}</div>
    <div>Hello, {hello2}</div>
  </div>
  
ReactDOM.render(hellos, document.getElementById('root'))

var hello1 = "World"
var hello2 = React.createElement(
  "strong",
  { style: { color: "#61dafb" } },
  "React!"
)

var hellos = React.createElement(
  "div",
  null,
  React.createElement("div", null, "Hello, ", hello1),
  React.createElement("div", null, "Hello, ", hello2)
)

ReactDOM.render(hellos, document.getElementById("root"))


index.html

<!DOCTYPE html>
<html>
  <head>
    <title>Untitled App</title>
    <script src="https://unpkg.com/react@16.9.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.9.0/umd/react-dom.development.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>

<!DOCTYPE html>
<html>
  <head>
    <title>Untitled App</title>
    <script src="https://unpkg.com/react@16.9.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.9.0/umd/react-dom.development.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>
```
## Empty `<>` tags
- A pair of empty `<>` and `</>` tags get’s turned into a `React.Fragment` element, i.e. an element that doesn’t map to DOM nodes.
	- Fragments are useful for returning multiple cells or list items from a component.
```
index.js

let ListItemsComponent = () =>
  <>
    <li>Item 1</li>
    <li>Item 2</li>
  </>

let listElement =
  <ul>
    <ListItemsComponent />
  </ul>

ReactDOM.render(listElement, document.getElementById('root'))

index.html

<!DOCTYPE html>
<html>
  <head>
    <title>JSX Example</title>
    <script src="https://unpkg.com/react@16.4.1/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.4.1/umd/react-dom.development.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>
```
## `{...object}` acts like `Object.assign()`
- Passing `{...object}` as an attribute will add _all_ of the properties of the object as separate attributes. It’s a bit calling `Object.assign()` on the props that you’ll pass to `createElement()`.
	- Combining JSX’s `{...object}` with destructuring assignment and rest parameters is a great way to pass through some of an element’s props to a child.
```
index.js

const Panel = ({ active, style, ...other }) =>
  <div
    style={{
      ...style,
      color: active ? 'red' : undefined,
    }}
    {...other}
  />

let element =
  <Panel active>
    Active!
  </Panel>
  
ReactDOM.render(element, document.getElementById('root'))


index.html

<!DOCTYPE html>
<html>
  <head>
    <title>JSX Example</title>
    <script src="https://unpkg.com/react@16.4.1/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.4.1/umd/react-dom.development.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>
```
- Throughout this course, I’ll be switching back and forth between JSX and raw `createElement()` — just so you can see how they both work.
	- For your own projects though, I highly recommend that you stick with JSX.
		- Of course, this means that you’ll need a build system like Create React App, and that’s why we’ll cover it _right_ after a quick exercise.











































