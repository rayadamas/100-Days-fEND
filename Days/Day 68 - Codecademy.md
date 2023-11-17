# [11/17/2023, 13:46-14:48]
- **Today's Progress**: reviewing yesterday's lesson before moving onto props.children. 
	- competed the Props module, leaving the review + quiz for tomorrow
- **Thoughts:** in the [[Day 68 - Codecademy#Giving Default Values to props]] quiz i struggled w/ the correct syntax, declaring a variable whose name and value are wrapped in curly braces was not familiar to me. in the return statement i neglected to update it to said new variable. 
---
# ![[Day 67 - Codecademy#handleEvent, onEvent, and props.onEvent]]
# props.children
- Every component’s `props` object has a property named `children`.
	- `props.children` will return everything in between a component’s opening and closing #JSX tags.
		- So far, all of the components that you’ve seen have been _self-closing tags_, such as `<MyFunctionComponent />`.
		- They don’t have to be!
			- You could write `<MyFunctionComponent></MyFunctionComponent>`, and it would still work.
	- `props.children` would return everything in between `<MyFunctionComponent>` and `</MyFunctionComponent>`.
		- By using `props.children`, we can separate the outer component, `MyFunctionComponent` in this case, from the content, which makes it flexible and reusable.
- Look at **BigButton.js**.
	- In _Example 1,_ `<BigButton>`‘s `props.children` would equal the text, “I am a child of BigButton.”
		- In _Example 2,_ `<BigButton>`‘s `props.children` would equal a `<LilButton />` component.
			- In _Example 3,_ `<BigButton>`‘s `props.children` would equal `undefined`.
	- If a component has more than one child between its JSX tags, then `props.children` will return those children in an array.
		- However, if a component has only one child, then `props.children` will return the single child, _not_ wrapped in an array.
```
BigButton.js

import React from 'react';
import LilButton  from './LilButton';

function BigButton(props) {
  console.log(props.children);
  return <button>I am a Big Button.</button>;
}

export default BigButton;

// Example 1
<BigButton>
  I am a child of BigButton.
</BigButton>


// Example 2
<BigButton>
  <LilButton />
</BigButton>


// Example 3
<BigButton />
```
## quiz
1. Select **App.js**.
	- Notice that `App` renders two `<List>` instances, and that each `<List>` has at least one `<li>` child.
		- Now open **List.js**, and take a look at the `List` component.
			- Think about the fact that each `List` instance is going to be rendered with two JSX tags:
```
<List>  // opening tag
</List> // closing tag
```
- …and that there will be at least one `<li></li>` child in between those tags:
```
<List>  // opening tag
  <li></li> // child
</List> // closing tag
```
- Click Run.
2. You can see two list _titles_ in the browser, but no list _items!_ How can you make the list items appear?
	- Open **List.js**. In the return statement of the `List` component, in between `<ul></ul>` tags, add `{props.children}`.
3. **Optional Task**: Each `<List></List>` instance is passed a singular title: “Living Musician” and “Living Cat Musician,” respectively.
	 - Somehow, each `<List></List>` counts its list items and automatically adds an “s” to the end of its title if the count is greater than one. We could add a second piano cat, and the second list title would automatically pluralize.
		- See if you can figure out how the instances of the `List` component class are automatically pluralizing their titles
```
App.js

import React from 'react';
import List from './List';

function App() {
  return (
    <div>
      <List type='Living Musician'>
        <li>Sachiko M</li>
        <li>Harvey Sid Fisher</li>
      </List>
      <List type='Living Cat Musician'>
        <li>Nora the Piano Cat</li>
      </List>
    </div>
  );
}

export default App;

List.js

import React from 'react';

function List(props) {
  let titleText = `Favorite ${props.type}`;
  if (props.children instanceof Array) {
    titleText += 's';
  }
  return (
    <div>
      <h1>{titleText}</h1>
      <ul>
        {props.children}
      </ul>
    </div>
  );
}

export default List;
```
- ### Question
	- In this [exercise 26](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-101-components-interacting-u/lessons/this-props/exercises/this-props-children), we learned how to obtain all the children of a component at once using `this.props.children`. However, is there a way to obtain or work with the individual children of a component?
		- ### Answer
			- Yes, React provides a helpful API for working with a component’s children through `React.Children`.
				- Some of the helpful functionality it provides are as follows:
					- You can turn the data structure returned by `this.props.children` into a flat array with keys assigned to each child, using `React.Children.toArray()`.
						- This is one of the common methods to be able to access each individual child of the component.
					- You can also map a function on each individual child using `React.Children.forEach()`.
					- And, you can also get the number of children of the component using `React.Children.count()`.
						- In addition to these, there are a few other useful methods provided by `React.Children`, which you can check out in the official documentation.
==N==
# Giving Default Values to props
- Take a look at the `Button` component.
	- Notice that on line 6, `Button` expects to receive a prop named `text`.
		- The received `text` will be displayed inside of a `<button>` element.
- What if nobody passes any `text` to `Button`?
	- If nobody passes any `text` to `Button`, then `Button`‘s display will be blank.
		- It would be better if `Button` could display a default message instead.
			- You can make this happen by specifying a default value for the prop. There are three ways to do this!
				- The first method is adding a `defaultProps` static property to the component:
```
function Example(props) {
  return <h1>{props.text}</h1>
}

Example.defaultProps = {
  text: 'This is default text',
};

- You can also specify the default value directly in the function definition:

function Example({text='This is default text'}) {
   return <h1>{text}</h1>
}

- Lastly, you can also set the default value in the function body:

function Example(props) {
  const {text = 'This is default text'} = props;
  return <h1>{text}</h1>
}

- If an <Example /> doesn’t get passed any text, then it will display “This is default text”.
- If an <Example /> does get passed some text, then it will display that passed-in text.
```
## quiz
1. In **Button.js**, give the `text` prop a default value.
	- Set the default value to `'Default Text of Big Button'`. Then, retrieve the `text` prop between the `<button>` tags.
		- Run your code. The button’s appearance should change!
2. In **App.js**, give `<Button />` the `text` attribute with the value `""`.
	- Your new `prop` should override the default, making the `<button>` element empty once again.
```
Button.js

import React from 'react';

function Button(props) {
  const {text ='Default Text of Big Button'} = props;
    return (
      <button>{text}</button>
    );
}

export default Button;

App.js

import React from 'react';
import Button from './Button.js';

function App() {
  return <Button text="" />;
}

export default App
```
- ### Question
	- In the context of this [exercise 32](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-101-components-interacting-u/lessons/this-props/exercises/defaultprops), should we always set `defaultProps` for every prop value of the component?
		- ### Answer
			- You do not always have to set `defaultProps` for every single prop value of a component.
				- In some cases, it can be important to do so. `defaultProps` should be used for any props that are required for the component, such as an input value. Also, props that will cause errors if they are missing a value, or cause the display to appear unsatisfactorily should be given a default value so that the page can still run smoothly.







































