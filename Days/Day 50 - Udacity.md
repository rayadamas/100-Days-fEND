# [10/30/2023, 11:32-12:47]
- **Today's Progress**: adding commits to a repo.
- **Thoughts:** 
---
- # Git Add
	- ## Move To Correct Project
		- If you've been following along, you should have two different directories with Git projects on your computer:
			- new-git-project - an empty directory that you converted to a Git repository using `git init`
			- course-git-blog-project - an existing blog project you retrieved using `git clone`
		- To avoid any confusion with existing commits, we'll be making our commits to the new-git-project Git repository.
			- On the Terminal, make sure you `cd` into the `new-git-project` directory. If you don't have a `new-git-project` directory, create it now. Once you're inside the directory, run the `git init` command. If you've already run `git init` before it's ok – running `git init` multiple times doesn't cause any problems since it just re-initializes the Git directory.
	- ## Status
		- I've said it a number of times already, but the `git status` command will be _extremely helpful_ in this lesson.
			- You should have it as your goal to run the `git status` command both _before_ and _after_ any other Git command.
	- ## Git Status Output Review
		- This is the output:
```
On branch master

Initial commit

nothing to commit (create/copy files and use "git add" to track)
```
- ### 💡 Changes in Git v2.14 💡
	- Remember that in Git version 2.14, the `git status` command changed the wording from "Inital commit" to the much clearer "No commits yet". So the output would be:
```
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```
- Notice that last line – `nothing to commit (create/copy files and use "git add" to track)`.
	- The `git status` output will give you advice or hints as to what you should do next.
	- Let's do what the feedback says and create some files.
	- ## Create An HTML File
		- First, create a file named `index.html`, and fill it with some starter code:
```
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Blog Project</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <link rel="stylesheet" href="css/app.css">
</head>
<body>

    <script src="js/app.js"></script>
</body>
</html>

- Things to note, the code references a CSS file and a JavaScript file.
- Now create the CSS and JavaScript files. You can leave both of these files empty. We'll add content to them in a bit.
```
- ## Quick Git Status Check
	- We just made a number of changes to the repository by adding files and content. It's time to do a quick check-in with Git:
		- `$ git status`
	- ## Big Picture Review
		- What's also pretty neat about the output of the `git status` command is that it's telling us that the files are untracked by Git.
		- Let's do a quick review of what's going on and what we're about to do:
			- we have some new files that we want Git to start tracking
			- for Git to track a file, it needs to be committed to the repository
			- for a file to be committed, it needs to be in the Staging Index
			- the `git add` command is used to move files from the Working Directory to the Staging Index
			- there are currently three, untracked files in the Working Directory:
				- `index.html`
				- `app.css` in the `css` directory
				- `app.js` in the `js` directory
		- So the first step to getting any files committed to the repository is to add them from the Working Directory to the Staging Index.
		- We will be using the `git add` command to move all three of these files to the Staging Index.
	- ## Staging Files
		- Alrighty, it's go time! Run the following command on the Terminal which uses `git add` to add `index.html` to the Staging Index:
			- `$ git add index.html`
				- Note - we are _only_ adding the `index.html` file. We'll add the CSS and JavaScript files in just a second.
		- Running the `git add` command produces no output (as long as there wasn't an error).
		- So how do we have Git tell us what it did and has happened to the `index.html` file that was added?
			- That's what `git status` does.
			- You're probably sick of me stressing the importance of the `git status` command, but it's an extremely helpful command, especially if you're new to version control and/or the command line.
				- Let's check out the status of the project:
					- `$ git status`
	- ## Changes To Be Committed
		- There's now a new section in the output of `git status` - the "Changes to be committed" area!
			- This new "Changes to be committed" section displays files that are in the Staging Area!
				- Right now it only displays the `index.html` file, so this file is the only item on the Staging Index.
				- To continue this train of thought, if we made a commit right now, _only the index.html file would be committed_.
- TIP:
	- Did you also notice the helpful text that's located just beneath "Changes to be committed"?
		- It says `(use "git rm --cached <file>..." to unstage)` This is a hint of what you should do if you accidentally ran `git add` and gave it the wrong file.
			- As a side note, `git rm --cached` is not like the shell's `rm` command. `git rm --cached` will not destroy any of your work; it just removes it from the Staging Index.
	- Also, this used the word "unstage".
		- The act of moving a file from the Working Directory to the Staging Index is called "staging".
		- If a file has been moved, then it has been "staged".
			- Moving a file from the Staging Index _back_ to the Working Directory will unstage the file. If you read documentation that says "stage the following files" that means you should use the `git add` command.
	- ## Stage Remaining Files
		- The `index.html` file has been staged. Let's stage the other two files. Now we _could_ run the following:
			- `$ git add css/app.css js/app.js`
				- ...but that's a lot of extra typing. We could use a special command line character to help:
		- ### The Period `.`
			- The period refers to the current directory and can be used as a shortcut to refer to all files and directories (including all nested files and directories!).
				- `$ git add css/app.css js/app.js # would become $ git add .`
					- The only thing to be careful of is that you might accidentally include more files than you meant to.
					- Right now we _want_ both `css/app.css` and `js/app.js` to be staged, so running this command is fine right now.
						- But let's say you added some images to an `img` directory but didn't want to stage them just yet.
						- Running `git add .` _will_ stage them.
							- If you do stage files that you didn't mean to, remember that `git status` will tell you the command to use to "unstage" files.
	- ## Stage The Remaining Files
		- Let's use the shortcut to stage the remaining files:
			- `$ git add .`
==N==
- # Git Commit
	- ## Make A Commit	
		- To make a commit in Git you use the `git commit` command, but don't run it just yet.
			- Running this command will open the code editor that you configured way back in the first lesson.
				- If you **haven't** run this command yet:
					- `$ git config --global core.editor <your-editor's-config-went-here>`
				- ...go back to the Git configuration step and configure Git to use your chosen editor.
				- If you didn't do this step and you _already_ ran `git commit`, then Git _probably_ defaulted to using the "Vim" editor.
					- Vim is a popular editor for people who have been using Unix or Linux systems forever, but it's not the friendliest for new users. It's definitely not in the scope of this course. Check out [this Stack Overflow post on how to get out of Vim](https://stackoverflow.com/questions/11828270/how-to-exit-the-vim-editor) and return to the regular command prompt.
				- If you _did_ configure your editor, then go ahead and make a commit using the `git commit` command:
					- `$ git commit`
	- ## Code Editor Commit Message Explanation
		- Ok, switch back to the code editor. Here's what's showing in my editor:
```
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# On branch master
#
# Initial commit
#
# Changes to be committed:
#	new file:   css/app.css
#	new file:   index.html
#	new file:   js/app.js
#
```
- The first paragraph is telling us exactly what we need to do - we need to supply a message for this commit.
	- Also, any line that begins with the `#` character will be ignored.
		- Farther down it says that this will be the initial commit.
			- Lastly, it's giving us a list of the files that will be committed.
- Since this is the very first commit of the repository, we'll use the commit message "Initial commit".
	- The text "Initial commit" isn't special, but it's the de facto commit message for the _very first_ commit.
	- ## Finish Committing
		- Now save the file and close the editor window (closing just the pane/tab isn't enough, you need to close the code editor window that the `git commit` command opened).
	- ## Bypass The Editor With The `-m` Flag
		- TIP:
			- If the commit message you're writing is short and you don't want to wait for your code editor to open up to type it out, you can pass your message directly on the command line with the `-m` flag:
				- `$ git commit -m "Initial commit"`
					- In the example above, the text `"Initial commit"` is used as the commit message. Be aware that you can't provide a description for the commit, only the message part.
	- ## 2nd Commit - Add Changes
		- Here, add this just inside the `body` tag in `index.html`:
			- `<header>     <h1>Expedition</h1> </header>`
	- ## Multipurpose Git Add
		- Even though we used `git add` to add _newly created files_ to the Staging Index, we use the same command to move _modified files_ to the Staging Index.
			- Use the `git add` command to move the file over to the Staging Index, now. Verify that it's there with `git status`.
	- ## Second Commit
		- Now that we have a file with changes we can commit, let's make our second commit!
			- Use the `git commit` command to make a commit.
			- Use the commit message `Add header to blog`.
- ## What To Include In A Commit
	- **The goal is that each commit has a single focus.**
		- Each commit should record a single-unit change.
			- Now this can be a bit subjective (which is totally fine), but each commit should make a change to just one aspect of the project.
			- Now this isn't limiting the number of lines of code that are added/removed or the number of files that are added/removed/modified.
				- Let's say you want to change your sidebar to add a new image. You'll probably:
					- add a new image to the project files
					- alter the HTML
					- add/modify CSS to incorporate the new image
						- A commit that records all of these changes would be totally fine!
	- Conversely, a commit shouldn't include unrelated changes - changes to the sidebar _and_ rewording content in the footer.
		- These two aren't related to each other and shouldn't be included in the same commit.
			- Work on one change first, commit that, and then change the second one.
			- That way, if it turns out that one change had a bug and you have to undo it, you don't have to undo the other change too.
	- If a commit were erased, it should only remove one thing.
- # Commit Messages
	- ## Good Commit Messages
		- **Do**
			- do keep the message short (less than 60-ish characters)
			- do explain _what_ the commit does (not _how_ or _why_!)
		- **Do not**
			- do not explain _why_ the changes are made (more on this below)
			- do not explain _how_ the changes are made (that's what `git log -p` is for!)
			- do not use the word "and"
		- if you have to use "and", your commit message is probably doing too many changes - break the changes into separate commits
			- e.g. "make the background color pink _and_ increase the size of the sidebar"
	- The best way that I've found to come up with a commit message is to finish this phrase, "This commit will...". However, you finish that phrase, use _that_ as your commit message.
	- Above all, _**be consistent**_ in how you write your commit messages!
	- ## Explain the _Why_
		- When you're writing the commit message, the first line is the message itself. After the message, leave a blank line, and then type out the body or explanation including details about why the commit is needed (e.g. URL links).
		- This details section of a commit message _is_ included in the `git log`
- # Git Diff
	- ## Why Do We Need This
		- `git status` will tell us what files have been changed, but not what those changes actually were.
			- The `git diff` command is used to find out this information!
	- ## `git diff`
		- The `git diff` command can be used to see changes that have been made but haven't been committed, yet.
			- `$ git diff`
				- It's the same output that we say with `git log -p`!
==N==
- # Having Git Ignore Files
	- ## Why Should Files Be Ignored
		- Remember a couple sections back when we were learning about `git add`?
		- Instead of adding the files one by one, there was a special character that we could use to indicate the current directory and all subdirectories. 
			- That's right, the period (`.`)!
		- ### The Problem
			- Let's say you add a file like a Word document to the directory where your project is stored _but don't want it added to the repository_.
				- (You can simulate adding a Word document by running `touch project.docx`) Git will see this new file, so if you run `git status` it'll show up in the list of files.
					- The potential problem with having this file in your project is that, because `git add .` adds _all_ files, the Word document might get accidentally committed to the repository.
	- ## Git Ignore
		- If you want to keep a file in your project's directory structure but make sure it isn't accidentally committed to the project, you can use the specially named file, `.gitignore` (note the dot at the front, it's important!).
			- Add this file to your project in the same directory that the hidden `.git` directory is located.
				- All you have to do is list the _names_ of files that you want Git to ignore (not track) and it will ignore them.
	- Git knows to look at the contents of a file with the name `.gitignore`. Since it saw "project.docx"(==example==) in it, it ignored that file and doesn't show it in the output of `git status`.
	- ## #Globbing Crash Course
		- Let's say that you add 50 images to your project, but want Git to ignore all of them. Does this mean you have to list each and every filename in the `.gitignore` file? Oh gosh no, that would be crazy! Instead, you can use a concept called [globbing]([https://en.wikipedia.org/wiki/Glob_(programming)](https://en.wikipedia.org/wiki/Glob_(programming)).
	- Globbing lets you use special characters to match patterns/characters. In the `.gitignore` file, you can use the following:
		- blank lines can be used for spacing
		- `#` - marks line as a comment
		- `*` - matches 0 or more characters
		- `?` - matches 1 character
		- `[abc]` - matches a, b, _or_ c
		- `**` - matches nested directories - `a/**/z` matches
			- a/z
			- a/b/z
			- a/b/c/z
				- So if all of the 50 images are JPEG images in the "samples" folder, we could add the following line to `.gitignore` to have Git ignore all 50 images.
					- `samples/*.jpg`























