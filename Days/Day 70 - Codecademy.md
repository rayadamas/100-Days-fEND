# [11/19/2023, 12:46-13:46]
- **Today's Progress**: reviewing the EC quiz from yesterday then moving on to...
	- #React developer tools.
	- building a react forum project
- **Thoughts:** i'll have to use tomorrow's session to set up the debugging tooling on my desktop.
	- the project is flowing thus far, i hate that codecademy's format for things like this is for the student to self-click whether they've completed a task rather than actively letting you know your on the right track. 
---
# ![[Day 69 - Codecademy#Review]]
# React Developer Tools
- Use React Developer Tools to debug your React applications.
	- Effectively debugging applications is a cornerstone of programming. 
	- After creating a React App, an important next step is setting up your environment to debug it.
- This article assumes you are familiar with [create-react-app](https://www.codecademy.com/article/how-to-create-a-react-app) and [Chrome DevTools](https://www.codecademy.com/article/use-devtools). We’re also going to be briefly touching on _state_ and _props_ within a component, so it’s best if you have a basic understanding of these concepts before proceeding with this article!
## create-react-app
- Use create-react-app to easily create a React application on your own computer.
### 1. Install React Developer Tools
- Facebook created a Chrome extension to help with debugging React Apps. It is called _React Developer Tools_ and allows developers to inspect React components, view their properties, and interact with them while looking at the application in Google Chrome. You can add this functionality to Chrome by navigating to the extension page [here](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), selecting “Add to Chrome”, and following the installation prompts.
### 2. Inspect React Components
With the extension installed, if you start your React App (`npm start`) and visit the site in Chrome, the React Developer Tools icon in the Chrome menu bar should change from inactive:![reactDevtoolsInactive](https://content.codecademy.com/programs/react/react-developer-tools/react_devtools_inactive.png)to active:![reactDevtoolsActive](https://content.codecademy.com/programs/react/react-developer-tools/react_devtools_active.png)

This indicates that the site you are browsing is a React App in development build. When a page is using the production build of React, the icon will look like this:![reactDevtoolsActiveProduction](https://content.codecademy.com/programs/react/react-developer-tools/react-dev-tools-production-icon.png)
To open the React Developer Tools, first open Chrome DevTools (View > Developer > Developer Tools). On the same banner as Elements, Sources, Console, etc., there will be two new React tabs: _Components_ and _Profiler_. These two tabs will only appear on sites using React. (If they’re not visible, you’ll need to click on the arrow to expand the tabs selection.)

Click on the Components tab.

![reactDevToolsOpen](https://content.codecademy.com/programs/react/react-developer-tools/react-dev-tools-open.png)
Right now, all we can see is `App` itself. But we want to see the contents of `App` as well!

In the above image, you’ll see that the cursor is pointing to a gear icon. Click the gear icon to open up the settings, and then click on the Components tab in the pop up window.

![reactDevToolsFilter](https://content.codecademy.com/programs/react/react-developer-tools/react-dev-tools-components-filter.png)
By default, there is a filter that is causing the host (DOM) nodes to be hidden. Delete this filter for now and then exit out of the settings window. You can always go back into settings and apply your preferred filters!

Now you will see a tree of `App`‘s contents! As you hover over the elements on the left, they are highlighted in the rendered view, similar to Chrome DevTools. If you click on the elements in the left side of the window, their properties are exposed on the right side. (If your Chrome DevTools appear vertically on the left/right side of the window, `App` and its contents will appear on top, and their properties will be exposed underneath.):

![reactDevToolsSelect](https://content.codecademy.com/programs/react/react-developer-tools/react-dev-tools-content-tree.png)
You can also use the search box to locate elements by name:

![reactDevToolsSearch](https://content.codecademy.com/programs/react/react-developer-tools/react-dev-tools-search.png)
If you’ve played around with React Developer Tools before, you may notice that this looks a bit different than what you remember. If that’s the case, you may want to take a look at the [official React documentation](https://reactjs.org/blog/2019/08/15/new-react-devtools.html) for what’s changed or how to get the old version back if you’re more comfortable with that.

### 3. Modify Components with JavaScript
With React Developer Tools and the console, it is possible to modify rendered React components. This allows you to experiment with changing component values, calling methods, and testing the interaction between components.

You can access and update a component’s `state` and `props` inside the Components tab. Click and edit the `props` and `state` from the right side. For `state` to show up, you’ll first need to initialize the component with some state from inside your files.
![reactDevTools SelectComponent](https://content.codecademy.com/programs/react/react-developer-tools/react-dev-tools-edit-props-state.png)

It works with React Hooks, too!
![reactDevToolsSelectComponentHooks](https://content.codecademy.com/programs/react/react-developer-tools/react-dev-tools-edit-hooks.png)

You can also do this by selecting the component, switching over to the console view, and accessing the component using `$r`. By logging `$r`, you could see that this was indeed the component selected.
![reactDevToolsConsole](https://content.codecademy.com/programs/react/react-developer-tools/react-dev-tools-console.png)

With these tools, you’re now ready to begin debugging React Apps!

For more details and practice on how to use the updated tools, check out this [interactive tutorial](https://react-devtools-tutorial.now.sh/)!
==N==
### CodeyOverflow Forum quiz
- In this project, we will build the beginnings of a web forum!
	- A forum is an online discussion board where users can exchange their opinions on a variety of topics.
		- The most important component of a forum is the comment section.
			- This is what we’ll work on in this project.
				- In building this application, you will sharpen your skills in React components by practicing using props as well as defining, rendering, and referencing components.
				- If you get stuck during this project or would like to see an experienced developer work through it, click “**Get Unstuck**“ to see a **project walkthrough video**.
- ## Setting Up Header and Body
1. Take a look at the files provided for this project.
	- There is a file named **commentData.js** which contains an array of comment objects with `profileImg`, `username`, and `comment` as its properties.
		- You will use this to populate the comments on the forum.
		- Your comment section will be composed of `Card` components, which will be comprised of smaller `Header` and `Body` child components.
	- Next, **App.js** will contain the top-level component.
		- The data in **commentData.js** will be retrieved in:
			- **App.js** and flow downward from `App` to `Card` to `Header` and `Body`.
		- **index.js** will render the `App` component.
			- **style.css** and **index.html** handle the markup and styling of the forum.
- Once you feel comfortable with the structure of this application, move on to the next checkpoint.
```
commentData.js

export const comments = [
  {
    profileImg: 'https://images.unsplash.com/photo-1609992556706-14a7056ea745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    username: 'ScrungeCat',
    comment: 'My favorite types of cats are slightly weird looking ones!'
  },
  {
    profileImg: 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
    username: 'ChewToy',
    comment: 'I don\'t like cats at all.'
  },
  {
    profileImg: 'https://images.unsplash.com/photo-1563482776068-4dac10f9373d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    username: 'BuryHeadInSand',
    comment: 'Wild ostriches make the best pets.'
  }
]
```
2. Let’s start with the smallest component, the `Body`.
	- The `Body` is responsible for showing the comments that users have written.
		- It will work with the `comment` property of our passed-down `comments` object extracted from **commentData.js**.
	- Open up **Body.js** and define your `Body` component.
		- This component should receive `props`.
			- This `props` object contains all of the data on our comment, such as the username, profile image, and comment, but the `Body` works specifically with only the `comment` property.
	- Have the component return a `<p>` element that contains the `comment` property from `props`.
3. Export the `Body` component after its function definition so that it can be imported and used in **Card.js**.
```
Body.js

import React from 'react';

function Body(props) {
  const { commentData } = props;

  return (
    <>
      <p>{props.comment}</p>
    </>
  )
}

export default Body;
```
4. Open **Header.js** and define your `Header` component.
	- This component will be responsible for the `profileImg` and `username` properties of our passed-down `comments` object.
		- The `Header` component should receive `props`.
			- The component should return two elements, an `<img>` element whose `src` attribute will receive the `profileImg` property from `props`, and a `<h1>` element, displaying `username` from `props`.
5. Export the `Header` component after its function definition so that it can be imported and used in **Card.js**.
```
Header.js

import React from 'react';

function Header(props) {
  return (
    <>
      <img src={props.profileImg} />
      <h1> {props.username} </h1>
    </>
  )
};

export default Header;
```











































