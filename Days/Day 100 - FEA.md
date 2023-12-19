# [12/19/2023, 12:40-13:45]
- **Today's Progress**: Create React App
	- Imports & #JSX
- **Thoughts:** made this app separate from my repo w/ the rest of the days/where this file will be placed.
---
# Create React App
- While browsers have come a long way in the last few years, there’s still a bunch of things that they don’t do so well. They:
	- Can’t `import` packages reliably
	- Don’t provide a good way to import styles alongside your components
	- Can’t compile #JSX performantly
	- Don’t support the latest [ESNext](https://kangax.github.io/compat-table/esnext/) features
- Sure, it’s _possible_ to patch together an app with `<script>` tags and HTML files, but it automatically means you miss out on all of the above. And even if you _do_ manage to make it work at the start, as the project grows it’ll quickly become hard to manage.
	- To smooth out these problems, most modern apps have a **build system**:
		- a piece of software which takes the app’s _source_ files, and processes them into distributable files that can be run directly by the browser. And of all the build systems I’ve seen, **Create React App** is by far the simplest. It’s configuration-free, it supports JSX, and as a bonus it’s also maintained by Facebook (like React itself).
- Throughout this course, a number of examples require a build system. As it so happens, the editor actually _includes_ a build system — so it’s entirely possible to complete the examples without ever leaving your browser! But say that you do want to try the examples in your own editor. In that case, the simplest way to do so is with Create React App — so let’s see how to set it up.
## Prerequisites
- There’s a few things to check before you start.
1. I’m assuming that you’re already familiar with [command line basics](https://www.git-tower.com/blog/command-line-cheat-sheet/) like `ls` and `cd`.
2. You’ll need to have a recent version of [Node.js](https://nodejs.org/) installed. You can check this by running `npx nyancat` from your terminal — if you see a rainbow, then Node.js is up to date.
## Generating a project skeleton
- We’ll start by asking Create React App to create a project skeleton.
```
$ npm init react-app skynet
```
- The `npm` command is included with [Node.js](https://nodejs.org/en/).
	- Calling this command will create a bunch of files in the `skynet` directory. There’s a bit of magic going on, so let me explain.
		- The first two words in the above shell command — `npm init` — are often used by themselves to create a new `package.json` file. But the third word — `react-app` — tells npm to looks for a package whose name _ends_ with `react-app`, but _begins_ with `create-` — and to use that package to initialize the project instead. As a result, npm looks for the `create-react-app` package, then downloads it and uses it to create the `skynet` directory.
## Start the development server
- Now that you’ve initialized a project skeleton, let’s start it up by changing into the project directory and calling `npm run start`.
```
$ cd skynet
$ npm run start
```
- To shut down the development server, just hit `ctrl-c` (yep, that’s control — even on a mac).
- If everything is working, this should start a development server, and open your browser to a page that looks something like this:
![](https://frontarm.com/static/media/create-react-app.b5503e0d.gif)
## Make a change
- As you can see, React is asking you to edit `src/App.js`, so go ahead and change the text to something hilarious, and then save the file. For now, don’t worry too much about how all this works — we’ll be covering it over the next couple sections.
---
- Done? Great! Did you notice how when you saved the file, the browser reloaded your app with the new text? You are actually following along in your own terminal, right? Great! That means that you’ve built your own brand new app! And to celebrate, let’s take a look at the most important file.
## `src/index.js`
- If everything has gone right, then you should now have a file called `index.js`. This is your app’s entry point, and it should look something like this:
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```
- See the highlighted line? Pretty familiar, right? The only difference from what you’ve already seen is that React is rendering a _custom_ element type — which we’ll cover in the next section.
- As for the rest of the file, there’s two things going on. First, there’s the service worker stuff. This is completely unnecessary. You can just delete it. Then, there’s the `import` statements — and we’ll learn more about them in the next lesson! See you there.
==N==
# Imports and JSX
- If you’ve used any language _other_ than JavaScript, then you’re probably already familiar with the concept of imports and exports. It’s simple, really: one file exports something, and then another file imports and uses it.
	- `export const billionaireFriends = []`
- By splitting functions across multiple files, it becomes possible to create more maintainable software, _and to share code between projects_.
	- This is particularly important, because in apps using any kind of build system, to access React itself you’ll need to `import` it.
```
index.js

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  React.createElement('h1', {}, "Hello, world"),
  document.getElementById('root')
)
```
- It’s basically the same demo that you’ve already seen, but with two minor differences:
	- Instead of manually including `<script>` tags via an `index.html` file, it leaves all this to the build system.
	- Instead of accessing React through a global `React` object, it explicitly `import`s it.
		- But wait a minute, that second point is actually more important than it looks. Let me explain why.
## Importing `React`
- Remember how JSX compiles `<tags>` into calls to `React.createElement()`?
	- This is an important detail to remember, because it has an important consequence when using `import`. Let me demonstrate by converting the above example to JSX.
```
index.js

import ReactDOM from 'react-dom'

ReactDOM.render(
  <h1>Hello, world</h1>,
  document.getElementById('root')
)

errorReferenceError: React is not defined
    at Proxy.module (index.js:5:2)
    at e.execute (https://frontarm.com/8058525ee5952d818c1c0e294c9d4365.js:1:29826)
    at handleUnrequiredPrepared (https://frontarm.com/8058525ee5952d818c1c0e294c9d4365.js:1:26656)

```
- After converting to JSX, there’s no longer any call to `React.createElement()` — so I’ve removed the `React` import. But wait a minute — the console says that `React` is not defined. That’s odd?
	- As you may suspect, I’m being a purposefully obtuse here. The reason that the above demo doesn’t work, of course, is that it _does_ in fact call `React.createElement()` — because that’s what the JSX compiles to. If you don’t believe me, go ahead and click the editor’s _Compiled_ button to see the code that is actually being run.
- Here’s the thing to remember:
	- **When you use JSX in a file, you’ll need to `import` React!**
	- Since you need to get into the practice of this, why not fix the above example by adding an `import` now? Don’t worry, I’ll wait here!
```
index.js

import ReactDOM from 'react-dom'
import React from 'react'

ReactDOM.render(
  <h1>Hello, world</h1>,
  document.getElementById('root')
)
```
- A little housekeeping before we continue: for the rest of this course, I’ll be importing React with `import` statements instead of `<script>` tags. After all, that’s how React works in the real world.
	- Speaking of the real world, if you want to try out this course’s examples locally, then you can! Any `index.js` file with an `import React from "react"` statement is designed to work both in the build-in editor, _and_ in a Create React App project. Just copy it across to your filesystem (along with any dependency files) and you’ll be right to go.
		- Of course, maybe you don’t want to worry with Create React App right now, and you’re happy sticking with the built-in editor. That’s fine too! In fact, I think we’ve talked quite enough about build systems for one course, so let’s dive into some code and build something useful.







































