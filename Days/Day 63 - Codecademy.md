# [11/12/2023, 15:22-16:37]
- **Today's Progress**: continuing w/ building out mt first #React app. 
	- starting `Components Render Other Components`
	- finished at the review section for this module, will review then attempt the challenge there tomorrow
- **Thoughts:** this feels like the 1st proper somewhat "in-depth" being explained what package.json/package-lock.json's purposes are.
	- the free trial was a one time thing, they not finna let you jugg that, so now i'd need a subscription to do the relevant projects, i get it but so dumb, i'd need that too because there's not presence of these quizzes on youtube, they're unlisted vids. just gonna continue past this. i'll still commit `myfirstreactapp` to the main repo and if another free trial or budgeted bread arises, i'll make that move, did it w/ JS i can do that here too.
	- disappointed i was only able to do like only a few projs w/ my free trial.
---
- ## 2. React App Structure
	- Change directories into
		- Change directories into the app you just created, and open the app in the text editor of your choice. You should see the following file structure:
```
myfirstreactapp
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── serviceWorker.js
│   └── setupTests.js
├── .gititgnore
├── package.json
├── package-lock.json
└── README.md
```
- `create-react-app` has taken care of setting up the main structure of the application as well as a couple of developer settings.
	- Most of what you see will not be visible to the visitor of your web app. React uses a tool called _webpack_ which transforms the directories and files here into static assets. Visitors to your site are served those static assets.
	- Don’t worry if you don’t understand too much about webpack for now.
		- One of the benefits of using `create-react-app` to set up our React application is that we’re able to bypass any sort of manual configuration for webpack. If you’re interested in delving deeper into it on your own, you can find a [high-level overview of webpack’s core concepts here](https://webpack.js.org/concepts/).
- **.gitignore**
	- This is the standard file used by the source control tool git to determine which files and directories to ignore when committing code. While this file exists, `create-react-app` did not create a git repo within this folder. If you take a look at the file, it has taken care of ignoring a number of items (even **.DS_Store** for Mac users):

![createReactAppGitIgnore](https://content.codecademy.com/programs/react/creating-a-react-app/react_gitignore.png)

- **package.json**
![package_json](https://content.codecademy.com/courses/React/react_setup-037-package-json.png)
- This file outlines all the settings for the React app.
	- `name` is the name of your app
	- `version` is the current version
	- `"private": true` is a failsafe setting to avoid accidentally publishing your app as a public package within the npm ecosystem.
	- `dependencies` contains all the required Node modules and versions required for the application. In the picture above, you’ll see six dependencies.
		- The first three, as you may have guessed, are for the purpose of testing.
		- The next two dependencies allow us to use `react` and `react-dom` in our JavaScript.
		- Finally, `react-scripts` provides a useful set of development scripts for working with React. In the screenshot above, the `react` version specified is `^16.13.1`. This means that npm will install the most recent major version matching 16.x.x. In contrast, you may also see something like `~1.2.3` in **package.json**, which will only install the most recent minor version matching 1.2.x.
	- `scripts` specifies aliases that you can use to access some of the `react-scripts` commands in a more efficient manner.
		- For example, running `npm test` in your command line will run `react-scripts test --env=jsdom` behind the scenes.
	- You will also see two more attributes, `eslintConfig` and `browserslist`. Both of these are Node modules having their own set of values.
		- `browserslist` provides information about browser compatibility of the app,
		- while `eslintConfig` takes care of the [code linting](https://stackoverflow.com/questions/8503559/what-is-linting).
- **node_modules**
	- This directory contains dependencies and sub-dependencies of packages used by the current React app, as specified by **package.json**. If you take a look, you may be surprised by how many there are.
		- Running `ls -1 | wc -l` within the **node_modules/** directory will yield more than 800 subfolders.
			- This folder is automatically added to the **.gitignore** for good reason! Don’t worry, even with all these dependencies, the basic app will only be around 50 KB after being [minified](https://techterms.com/definition/minification) and compressed for production.
- **package-lock.json**
	- This file contains the exact dependency tree installed in **node_modules/**.
		- This provides a way for teams working on private apps to ensure that they have the same version of dependencies and sub-dependencies.
			- It also contains a history of changes to **package.json**, so you can quickly look back at dependency changes.
- **public**
	- This directory contains assets that will be served directly without additional processing by webpack.
		- **index.html** provides the entry point for the web app.
			- You will also see a favicon (header icon) and a **manifest.json**.
				- The manifest file configures how your web app will behave if it is added to an Android user’s home screen (Android users can “shortcut” web apps and load them directly from the Android UI). You can read more about it [here](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/).
- **src**
	- This contains the JavaScript that will be processed by webpack and is the heart of the React app.
		- Browsing this folder, you see the main App JavaScript component (**App.js**), its associated styles (**App.css**), and test suite (**App.test.js**). **index.js** and its styles (**index.css**) provide an entry into the App and also kick off the **registerServiceWorker.js**.
			- This service worker takes care of caching and updating files for the end-user. It allows for offline capability and faster page loads after the initial visit. More of this methodology is available [here](https://developers.google.com/web/fundamentals/primers/service-workers).
- As your React app grows, it is common to add a **components/** directory to organize components and component-related files and a **views/** directory to organize React views and view-related files.
- ## 3. Starting the React App Development Server
	- As was stated in the success message when you ran `create-react-app`, you just need to run `npm start` in your app directory to begin serving the development server. It should auto-open a tab in your browser that points to `http://localhost:3000/` (if not, manually visit that address). You will find yourself looking at a page resembling the following image:

![default_react_app](https://content.codecademy.com/courses/React/react_setup-038-default-react-app.png)
- As stated, any changes to the source code will live-update here. Let’s see that in action.
	- Leave the current terminal tab running (it’s busy serving the React app) and open **src/App.js** in your favorite text editor.
		- You’ll see what looks like a mashup of JavaScript and HTML.
			- This is #JSX, which is how React adds XML syntax to JavaScript.
				- It provides an intuitive way to build React components and is compiled to JavaScript at runtime. We’ll delve deeper into this in other content, but for now, let’s make a simple edit and see the update in the browser.
- #### quiz
	- Change the main paragraph text to read `Hello Codecademy!` in **App.js** and save the file.
![react_setup](https://content.codecademy.com/courses/React/react_setup-039-app-js.png)
- If you left the terminal running, you should be able to switch over to your browser and see the update:

![edited_react_app](https://content.codecademy.com/courses/React/react_setup-040-edited-react-app.png)
- Congratulations! You’re now up and running with React. You can now begin adding functionality for your application.
- ## Next Steps
	- If you’d like to learn more about `create-react-app`, start with the [documentation on the create-react-app website](https://create-react-app.dev/docs/getting-started).
	- Since an important next step after creating a React App is to set up your environment to debug it, consider checking out our [React Developer Tools article](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-development-setup-and-ravenous-part-1/informationals/ready-react-developer-tools).
		- There, we use the initial skeleton created with `create-react-app` to get you ready to begin debugging React Apps.
==N==
- # COMPONENTS RENDER OTHER COMPONENTS
	- ## Components Interact
		- A React application can contain dozens, or even hundreds, of components.
		- Each component might be small and relatively unremarkable on its own.
			- When combined, however, they can form enormous, fantastically complex ecosystems of information.
		- In other words, React apps are made out of components, but what makes React special isn’t the components themselves.
			- What makes React special is the ways in which components _interact_.
				- This lesson is an introduction to _components interacting_.
					- After this lesson, you should be familiar with:
						- how components can reference other components.
						- how this allows us to separate our components into separate files
- ### **Question**
	- How different is React components interaction from javascript and HTML in the DOM?
		- ### **Answer**
			- It is about a few different things on the approach, while you would normally have the browser rendering each HTML file with event listeners from your javascript file so we can interact with the DOM, then again, that makes us have to create multiple HTML pages with their own JavaScript file.
				- When we talk about components interaction, we do not even think about how they interact with the DOM, but it all happens before they communicate anything to the browser, so by having component interaction we can set any changes needed and once done, React sends them to the browser, so it becomes more efficient to provide content that way if it is mainly streamlined through JavaScript.
==N==
- ### Returning Another Component
	- As we’ve seen before, each React component is responsible for one piece of the interface.
	- As the application grows in complexity, components need to be able to interact with each other to support the features needed.
		- So far, we’ve explored components that return [JSX](https://www.codecademy.com/resources/docs/react/jsx) elements, such as:
```
function PurchaseButton() {
  return <button onClick={()=>{alert("Purchase Complete")}}>Purchase</button>
}
```
- In this example, the React component is not interacting with other components.
	- However, you can have components interact with each other by passing information or even returning other components.
```
function PurchaseButton() {
  return <button onClick={()=>{alert("Purchase Complete")}}>Purchase</button>
}

function ItemBox() {
  return (
    <div>
      <h1>50% Sale</h1>
      <h2>Item: Small Shirt</h2>
      <PurchaseButton />
    </div>
  );
}
```
- In the above example, `ItemBox` returns an instance of `PurchaseButton`.
- #### quiz
- View **Profile.js** and observe how the `Picture` component is referenced inside of the `Profile` component. `Picture` is responsible for a piece of `Profile`.
	- Together, we exported only the `Profile` component to be rendered.
```
Profile.js

import React from 'react';

function Picture() {
  return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />;
}

function Profile() {
  return (
    <>
      <Picture />
      <h1>Name: Octavia</h1>
      <h2>Species: Octopus</h2>
       <h2>Class: Cephalopoda</h2>
    </>
  )
}

export default Profile;
```
- ### **Question**
	- What is a component’s instance?
		- ### **Answer**
			- Let’s remember that React components are above all JavaScript classes, they are all being created and extended from an already existing class from the React library: `Component`
```
class MyComponent extends React.Component{
...
```
- Now, because they’re extended from an existing class, their render method is 1, a requirement for every component and 2 what is called whenever we invoke the class, and thus that is what we see, the HTML return from that `render` method.
	- now instantiating a component is like invoking, you are trying to call the class and render its content, how React goes about it is using JSX which allows us to invoke a class component as if it was an HTML tag, so if I wanted to render whatever I have in the render method in `MyComponent` on the render’s return of another component I just need to use the class name in between the carrots like an opening/closing HTML tag:
```
class RenderingComponent extends React.Component {
  
  render(){
    return <MyComponent/>;
...
```
- That is what is called an instance, which it’s really just a version of the original class, and in the case of React, it will return whatever HTML it has in its own render method.
==N==
- ### Apply a Component in a Render Function
	- You may have noticed that you’ve seen this behavior before!
		- In the previous lessons, when we defined components and exported them.
		- We usually exported them into our top-level file, **App.js**
		- Inside **App.js**, we imported components and returned them inside our `App` component—which are then exported to be rendered!
```
import Button from './Button'

function App() {
  return <Button />;
}

export default App;
```
- This ability allows us to separate components into smaller functions and connect them together to make more complex components!
	- We can treat it as the `Button` component is a child of the parent `App` component.
		- By breaking a component into extracted smaller components, we can reuse the individual parts when necessary.
- #### quiz
1. The code editor has two files: **ProfilePage.js** and **NavBar.js**.
	- Complete the `<ProfilePage />` component by having it return a `<NavBar />` component above `<h1>All About Me!</h1>`.
		- Don’t forget to import the necessary component!
```
import React from 'react';
import NavBar from './NavBar';


function ProfilePage() {
  return (
    <div>
        <NavBar />  
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
  );
}

export default ProfilePage;

```
- ### Question
	- Why don’t I need a ReactDOM.render() for each component?
		- ### Answer
			- You don't need to use `ReactDOM.render()` for each component in a React application for several reasons:
				1. **Single Root Node**: React is designed to manage the entire state of your application and render it to the DOM from a single root node.
					- This root node is where your main component (often called `App` or something similar) is attached. `ReactDOM.render()` is used just once to mount this root component to the DOM.
				2. **Component Hierarchy**: React components are typically structured in a hierarchical manner, with parent components containing child components.
					- Once the root component is rendered using `ReactDOM.render()`, all its child components are automatically rendered as part of the component tree.
						- This hierarchical rendering is a core feature of React.
				3. **Efficiency and Performance**: If `ReactDOM.render()` was used for each component, it would be inefficient and could lead to performance issues.
					- React optimizes rendering and only updates parts of the DOM that have actually changed.
						- Using a single render point allows React to efficiently manage these updates.
				4. **State Management**: React's state management system is designed to work with this single entry point for rendering.
					- State and props flow down from the top of the component tree (the root component) and cause re-renders as necessary. Having multiple render points would complicate this system.


































