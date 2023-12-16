# [12/15/2023, 14:07-15:27]
- **Today's Progress**: starting a new course from the beginning, it's free but only due to the site being demonetized, so the quality might be higher than what i was doing, either way i'm still a noob so going over basics isn't a waste imo
- **Thoughts:** off rip i already appreciate that there's a companion vid here with someone walking through the entire lesson, i'm ignoring during my 1st attempt but it's cool to have and not search for. 
	- so in my self-typed addition to the 'script' tag, it's matches w/ how the render should look, but i'm missing a #HTML_element_li.
		- i let it out that's all.
	- i asked #ChatGPT for examples of how i would log diff parts of the Element obj cuz it wasn't clicking for me. i was neglecting to notice the logs in the rendered plane, effectively not seeing the changes i was making. 
---
# An app in one file
- [Build a React app in 2 minutes](https://www.youtube.com/watch?v=tgY9l8G1i_8)
- Have you worked with #JavaScript, #CSS and #HTML before? Great! That means you can do this exercise!
	- The result of this exercise is a single HTML file, which contains your first React app.
		- There are three steps, starting with:
## Step 1
- Copy this HTML into a new file and save it somewhere:
```
<!DOCTYPE html>
<html>
  <head>
    <title>I'm a React app!</title>
  </head>
  <body>
    <div id="root"></div>

    <script src="https://unpkg.com/react@16.9.0/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@16.9.0/umd/react-dom.production.min.js"></script>
  </body>
</html>
```
- This HTML file does two important things – it creates the div where your rendered content will live (with the id `root`), and it loads the two library files where React lives.
	- With that done, let’s move on to…
# Step 2
- Type this script into a new `<script>` tag at the end of your HTML file.
```
script to type into file

// The `React` variable is set by the first `<script>` tag
// in the above HTML file.
let createElement = React.createElement

let rootElement =
  createElement('div', {}, 
    createElement('h1', {}, "Contacts"),
    createElement('ul', {},
      createElement(
        'li',
        {},
        createElement(
          'a',
          { href: 'mailto:james@frontarm.com' },
          "James Nelson",
        ),
      ),
      createElement(
        'li',
        {},
        createElement(
          'a',
          { href: 'mailto:me@example.com' },
          "Me"
        )
      )
    )
  )

// The `ReactDOM` variable is set by the second `<script>` tag
// in the above HTML file
let domNode = document.getElementById('root')
ReactDOM.render(rootElement, domNode)


what i typed on my own

<!DOCTYPE html>
<html>
  <head>
    <title>I'm a React app!</title>
  </head>
  <body>
    <div id="root"></div>

    <script src="https://unpkg.com/react@16.9.0/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@16.9.0/umd/react-dom.production.min.js"></script>
    <script>
     let createElement = React.createElement;

     let rootElement =
       createElement('div', {},
        createElement('h1', {}, "Contacts"),
        createElement('ul', {},
          createElement(
           'li',
           {},
           createElement(
            'a',
            { href: 'mailto:james@fromtarm.com' },
            "James Nelson",
           ),
          ),
          createElement(
           'a',
           { href: 'mailto:me@fromtarm.com' },
           "Me",
          )
        ),
       );
     let domNode = document.getElementById('root');
     ReactDOM.render(rootElement, domNode);
    </script>
  </body>
</html>
```
- Phew, that was a bit of work, wasn’t it? But, hopefully all the repetition will have given you an idea of what that `createElement` method does. If not, maybe step three will help.
## Step 3
- Open your HTML file in a web browser, and check that the output looks like this:
```
<!DOCTYPE html>
<html>
  <head>
    <title>I'm a React app!</title>
  </head>
  <body>
    <div id="root"></div>

    <script src="https://unpkg.com/react@16.9.0/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@16.9.0/umd/react-dom.production.min.js"></script>
    <script>
     let createElement = React.createElement;

     let rootElement =
       createElement('div', {},
        createElement('h1', {}, "Contacts"),
        createElement('ul', {},
          createElement(
           'li',
           {},
           createElement(
            'a',
            { href: 'mailto:james@fromtarm.com' },
            "James Nelson",
           ),
          ),
           createElement(
            'li',
            {},
            createElement(
            'a',
            { href: 'mailto:me@fromtarm.com' },
            "Me",
           )
          )
        ),
       );
     let domNode = document.getElementById('root');
     ReactDOM.render(rootElement, domNode);
    </script>
  </body>
</html>
```
- Congratulations! You’ve made a simple React app, without even installing npm! And to celebrate, let’s have a look at how it works.
==N==
# Elements are just objects

##### Reference
- A DOM Node is a JavaScript object that represents a single HTML element.
	- You can use this object to read and modify the associated HTML element.
- Read more at [MDN](https://developer.mozilla.org/en/docs/Web/API/Node).
- 
- At it’s simplest, React is a library for creating and updating HTML elements.
	- `ReactDOM.render()` is the function that actually does the creating and updating.
	- It takes a React Element object that describes what to render, and uses this to update the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) node that’s passed in as the second argument.
- But wait a moment, isn’t `React.createElement()` creating elements? It is! But maybe not in the way you’d expect.
	- The **React Element** objects that `React.createElement()` returns are just plain old JavaScript objects that describe the DOM nodes that you’d like `ReactDOM.render()` to create.
		- They’re _not_ DOM nodes, and _not_ added to the document. They’re just objects.
- And they look a little something like this:
```
{
  // The type of element to use. It can be the name of a HTML element,
  // or can be a custom type (which we'll get to later).
  type: 'a',

  // Configures the created HTML element's attributes and children.
  props: {
    href: 'https://xkcd.com/221/',

    // If specified, this will contain the element's content. It can be
    // a string, an array, or another React Element.
    children: {
      type: 'img',
      props: {
        src: "https://imgs.xkcd.com/comics/random_number.png",
        alt: "RFC 1149.5 specifies 4 as the standard IEEE-vetted random number.",
      }
    },
  },
}
```
- The `React.createElement()` function takes three arguments: `type`, `props`, and `children`.
	- And returns an object just like the one above.
		- `React.createElement(type, props, children)`
- You can get a feel for this by passing different parts of a returned Element object to `console.log()`.
```
let element =
  React.createElement(
    // The first argument is the element's `type`
    'a',

    // The second argument is the element's `props`
    { href: 'https://xkcd.com/222/' },

    // Any further arguments, if given, are merged into to
    // `props` under the name `children`.
    React.createElement(
      'img',
      {
        src: "https://imgs.xkcd.com/comics/random_number.png",
        alt: "RFC 1149.5 specifies 4 as the standard IEEE-vetted random number.",
      }
    ),
    React.createElement(
      'span',
      null,
      'By Randall Munroe',
    )
  )

// Try logging different parts of the `element` object
console.log(element.props.children[0].type)
console.log(element.type) // i added
console.log(element.props) // i added
console.log(element.props.children[1].props.children)

ReactDOM.render(
  element,
  document.getElementById('root')
)
```
- You’ll find that `React.createElement()` is the most used function in any React app.











































