# [10/27/2023, 16:11-17:11]
- **Today's Progress**: continuing module on writing meaningful READMEs. next is Collaboration using #Github. 
- **Thoughts:** completed readme module. was a good lightweight refresher on markdown.
	- jumped to a different program, What is Version Control?, as i didn't have the expected knowledge of git for the next section focusing on github.
	- made it to the terminology portion but will have to spend time in my next session reviewing such. 
---
# Readable READMEs with Markdown
- A README file can be written in various formats, including as a web page or a plain text file.
- The focus of this lesson is on generating READMEs using a language called Markdown.
- # Basic Markdown Syntax
	- ## Markdown 101
		- **What is Markdown?**
			- Markdown is a lightweight markup language.
			- It allows users to generate well-formatted documents, which are then translated into HTML.
			- Widely used platforms such as GitHub, Stack Overflow, Slack, and Reddit utilize versions of Markdown for efficient content formatting.
		- **Advantages of Using Markdown for READMEs**:
		- **Skim-friendly**: Markdown can make READMEs easily skim-able, aiding the reader in quickly grasping essential information.
			- Example: Comparing two recipes with the same content, a well-formatted (using Markdown) recipe is often preferred as it's easier to skim and follow.
		- **Markdown's Impact on Readability**:
			- Proper utilization of Markdown's features can enhance the readability of READMEs.
			- It's crucial to harness the full potential of Markdown to ensure content is accessible and comprehensible.
- But as it turns out, there are many different _dialects_ of Markdown, just like in a spoken language.
	- Each of these dialects is known as a _flavor_ of Markdown.
		- Most of these dialects are pretty much the same, with only minor differences.
- Since your READMEs will ultimately end up on GitHub, we'll be using **GitHub Flavored Markdown**.
- ### Feeling Bold?
	- To make text **bold**, surround it with double asterisks. So this code:
		- `Isn't today a **wonderful** day?`
			- becomes: Isn't today a **wonderful** day?
	- This reads a bit more nicely than a `<strong>` tag would in HTML, and takes considerably fewer keystrokes to type out.
- ### _Italics_, I tell you!
	- To _italicize_ text, surround it with underscores. So this code:
		- `And in that moment I thought to myself: _Did I turn off the stove?_`
		- becomes: And in that moment I thought to myself: _Did I turn off the stove?_
	- Much like the previous example, this code reads much more like English, which is great for when you're skimming the original document.
- ### To `code`, or not to `code`?
	- Inline `code` is useful for indicating that you're writing code and not a regular word.
		- For this, you'll surround text in backticks (``, not a single quote). So this code:
			- ``You should use the `strong` tag.``
			- becomes: You should use the `strong` tag.
- ### The Title Sequence
	- Headings are even simpler! For `h1` through `h6` tags, all you'll need is a `#` before your text.
		- The number of `#`s you include tells Markdown which header tag you're using. For example:
			- `## This is an h2.`
				- `### This is an h3.`
		- becomes...
			- ### This is an h2.
				- #### This is an h3.
==N==
# More Markdown Syntax
- ## More Markdown
	- Dive into the [Markdown documentation](https://help.github.com/articles/markdown-basics/), and explore more ways to write beautiful READMEs.
		- A few important items you may want to write and should pay extra attention to include:
			- Ordered and unordered lists
			- Links and images
			- Large blocks of code
- ### HTML Is Still a Thing
	- Something to keep in mind when using Markdown is that HTML is still valid in Markdown.
		- If there's ever something fancy you can't accomplish with just Markdown, it's okay to fall back to HTML.
			- The catch here is that you may be overcomplicating your life.
				- If you need to fall back to plain HTML, there's a good chance that you could communicate whatever it is you are trying to say in a simpler format.
- ### Working with `.md` Files
	- Much like how your HTML files should be saved with a `.html` extension, your Markdown files should be saved with a `.md` extension.
		- Markdown itself can't be opened in the browser like an HTML document.
			- If you want to preview your Markdown files, [Dillinger](http://dillinger.io/) is a great online resource for you to do so.
		- If you are using Sublime Text, there is a [plugin](https://packagecontrol.io/packages/GitHub%20Flavored%20Markdown%20Preview) you can download to let you preview Markdown files right on your computer.
		- If you are using Atom text editor, Markdown preview is baked right into the program (in the 'Packages' menu).
	- Here's a link to the basic [Markdown documentation](https://help.github.com/articles/markdown-basics/). You can also check out the differences in GitHub flavored Markdown [here](https://help.github.com/articles/github-flavored-markdown/).
		- To preview Markdown in the browser, try [Dillinger](http://dillinger.io/).
# Markdown Syntax Practice
```
<!-- 

Copy this code into a text editor with Markdown preview,
OR, you can use Dillinger (https://dillinger.io).

Rewrite this HTML as Markdown.
Take note of:
- How much less code you are writing.
- How readable Markdown vs. HTML is.

Once you're done, go ahead and submit.
You don't need to paste the code back in here.

-->

<h1>My Fabulous Recipe</h1>

<p>This recipe for <strong>cereal and milk</strong> has been passed down my family for months.</p>

<h2>Ingredients</h2>

<ul>
    <li>Cereal (you can find cool cereals <a href="www.example.com/coolcereals">here</a>)</li>
    <li>Milk</li>
</ul>

<h2>Directions</h2>

<p>If I were writing these out as <em>code</em>, it might look something like this:</p>

<pre><code>if bowl is empty:
    add cereal
if bowl only has cereal in it:
    add milk
</code></pre>
</body>
```

# My Fabulous Recipe

This recipe for **cereal and milk** has been passed down my family for months.

## Ingredients


- [Cereal](you can find cool cereals here)www.example.com/coolcereals))
- Milk


## Directions

If I were writing these out as *code*, it might look something like this:

```if bowl is empty:
    add cereal
if bowl only has cereal in it:
    add milk
```

==N==
# What is Version Control?
- the main point of a version control system is to help you maintain a detailed history of the project as well as the ability to work on different versions of it.
- ## #Git_versioncontrol
	- imagine you're working on a big puzzle with your friends. Each time you add a few pieces to the puzzle, you take a photo of it.
		- Now, if you ever realize that you made a mistake or want to see what the puzzle looked like a few steps back, you can just look at the previous photos.
		- If you really messed up and want to start over from an earlier point, you can just take out the pieces until it matches one of your photos and then continue from there.
- Version control is like those photos for computer code.
	- Every time you make changes, you save a "photo" or version.
		- If you make a mistake or want to go back to how things were, you can easily do that by looking at the older versions.
			- And just like with the puzzle, multiple people can work on the code, and version control helps everyone see what changes have been made by whom.
	- ## VCS Info
		- There are [a number of Version Control Systems out there](https://en.wikipedia.org/wiki/List_of_version_control_software). This alone should prove that version control is incredibly important. Three of the most popular version control systems are:
			- [Git](https://git-scm.com/)
			- [Subversion](https://subversion.apache.org/)
			- [Mercurial](https://www.mercurial-scm.org/)
				- There are two main types of version control system models:
					- the _centralized model_ - all users connect to a central, master repository
					- the _distributed model_ - each user has the entire repository on their computer
		- ### Further Research
			- [Centralized vs. DVCS from the Atlassian Blog](http://blogs.atlassian.com/2012/02/version-control-centralized-dvcs/)
			- [Distributed version control on Wikipedia](https://en.wikipedia.org/wiki/Distributed_version_control)
- # Version Control In Daily Use
	- ## Version Control Is Everywhere
		- Practically every writing application ever used has an undo feature.
			- You can think of this as a form of version control, but it's a rather limited form of version control.
	- ## Revision History Isn't Powerful Enough
		- Google Docs' Revision history page is incredibly powerful! I've used it on several occasions to salvage text that I'd written at one point, erased, and then realized I actually _did_ want to keep.
		- But for all its ability, it's not as powerful as we'd like.
			- What's it missing? A few that I can think of are:
				- the ability to label a change
				- the ability to give a detailed explanation of why a change was made
				- the ability to move between different versions of the same document
				- the ability to undo change A, make edit B, then get back change A without affecting edit B
		- The version control tool, Git, can do all of those things - _and more_
- # Git and Version Control Terminology
	- ## Terminology
	- ## Version Control System / Source Code Manager
		- A **version control system** (abbreviated as **VCS**) is a tool that manages different versions of source code.
		- A **source code manager** (abbreviated as **SCM**) is another name for a version control system.
			- Git is an SCM (and therefore a VCS!).
				- The URL for the Git website is [https://git-scm.com/](https://git-scm.com/) (see how it has "SCM" directly in its domain!).
	- ## Commit
		- Git thinks of its data like a set of snapshots of a mini filesystem.
			- Every time you **commit** (save the state of your project in Git), it basically takes a picture of what all your files look like at that moment and stores a reference to that snapshot.
				- You can think of it as a save point in a game - it saves your project's files and any information about them.
		- Everything you do in Git is to help you make commits, so a commit is _the_ fundamental unit in Git.
	- ## Repository / repo
		- A **repository** is a directory which contains your project work, as well as a few files (hidden by default on Mac OS X) which are used to communicate with Git.
			- Repositories can exist either locally on your computer or as a remote copy on another computer.
				- A repository is made up of commits.
	- ## Working Directory
		- The **Working Directory** is the files that you see in your computer's file system.
			- When you open your project files up on a code editor, you're working with files in the Working Directory.
				- This is in contrast to the files that have been saved (in commits!) in the repository.
					- When working with Git, the Working Directory is also different from the command line's concept of the _current working directory_ which is the directory that your shell is "looking at" right now.
	- ## Checkout
		- A **checkout** is when content in the repository has been copied to the Working Directory.
	- ## Staging Area / Staging Index / Index
		- A file in the Git directory that stores information about what will go into your next commit. You can think of the **staging area** as a prep table where Git will take the next commit. Files on the Staging Index are poised to be added to the repository.
	- ## SHA
		- A **SHA** is basically an ID number for each commit. Here's what a commit's SHA might look like: `e2adf8ae3e2e4ed40add75cc44cf9d0a869afeb6`.
			- It is a 40-character string composed of characters (0–9 and a–f) and calculated based on the contents of a file or directory structure in Git. "SHA" is shorthand for "Secure Hash Algorithm". If you're interested in learning about hashes, check out our [Intro to Computer Science course](https://www.udacity.com/course/intro-to-computer-science--cs101).
	- ## Branch
		- A **branch** is when a new line of development is created that diverges from the main line of development. This alternative line of development can continue without altering the main line.
		- Going back to the example of save point in a game, you can think of a branch as where you make a save point in your game and then decide to try out a risky move in the game. If the risky move doesn't pan out, then you can just go back to the save point. The key thing that makes branches incredibly powerful is that you can make save points on one branch, and then switch to a different branch and make save points there, too.
- With this terminology in mind, let's take a high-level look at how we'll be using Git by looking at the typical workflow when working with version control.








































