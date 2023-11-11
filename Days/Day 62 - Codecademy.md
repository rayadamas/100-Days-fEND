# [11/11/2023, 16:07-17:11]
- **Today's Progress**: starting with `Creating a React Apps`. 
	- **Thoughts:** i spent the 1st 30m reviewing yesterdays notes, then the latter 1/2 of the hour was spent updating node & npm on the desktop. will continue w/ the setup tomorrow starting w/  `React App Structure`
---
- # Creating a React App
	- Use create-react-app to easily create a React application on your own computer.
		- ## Introduction
			- _React_ is a user interface framework developed by Facebook.
			- It has a quickly growing developer adoption rate and was ranked as the most loved web framework in the [2019 Stack Overflow developer survey](https://insights.stackoverflow.com/survey/2019#most-loved-dreaded-and-wanted). This article will walk you through setting up your first React app and assumes you are familiar with text editors and command line navigation.
				- **Note**: We recommend using `create-react-app` to focus on learning React. You will be able to take what you learn here and apply it to React frameworks like [Next.js](https://nextjs.org/).
		- ## Getting Ready
			- We will be using the _Node package manager (npm)_, so you will need to have _Node_ installed on your computer. To check if you have Node installed, run this command in your terminal:
				- `node -v`
					- If you have Node installed, this command will return a version number, like `v12.18.1`.
					- If it’s not already installed, follow the steps in [Setting Up Node Locally](https://www.codecademy.com/content-items/c4fe3060dbc61fc82d810c4ea06c29a8) before moving on.
			- When you install Node, you automatically get npm installed on your computer as well. However, npm is a separate project from Node.js, and tends to update more frequently. As a result, even if you’ve just installed Node (and therefore npm), it’s a good idea to update your npm. Luckily, npm knows how to update itself!
				- To upgrade on Windows, follow the steps found [in the npm documentation](https://docs.npmjs.com/try-the-latest-stable-version-of-npm).
- ## 1. Setting Up the Boilerplate Application
	- It is possible to manually create a React app, but Facebook has created a Node package [_create-react-app_](https://create-react-app.dev/) to generate a boilerplate version of a React application.
	- Besides providing something that works out-of-the-box, this has the added benefit of providing a consistent structure for React apps that you will recognize as you move between React projects. It also provides an out-of-the-box build script and development server.
		- We will use _npx_, a package runner tool that comes with npm 5.2+ and higher, to install and run `create-react-app`. This will ensure that the latest version of `create-react-app` is used.
			- Open up your terminal.
				- If you’ve never installed `create-react-app` before, you can simply run this command:
```
npx create-react-app myfirstreactapp
```
- Upon completion, you will get some quick tips on how to use the application:
![createReactAppCommands](https://content.codecademy.com/programs/react/creating-a-react-app/npm_react_commands.png)
- Before we run the app, let’s take a look around the app structure and see what it contains.



















































