# [10/29/2023, 16:03-18:27]
- **Today's Progress**: still working through #Git module w/ Cloning an existing repo. 
- **Thoughts:** going through this is reminding me of all of the Buidlspace projects that had me doing these command line activities w/o fully knowing what i'm doing.
	- barreled through a few lessons just to get me through this module quicker since what i'm really being given is commands & explanations of such. 
---
- # Clone An Existing Repo
	- ## Why Clone?
		- First, what is cloning?
			- to make an identical copy
		- What's the value of creating an identical copy of something, and how does this relate to Git and version control?
		- Why would you want to create an identical copy? Well, when I work on a new web project, I do the same set of steps:
			- create an `index.html` file
			- create a `js` directory
			- create a `css` directory
			- create an `img` directory
			- create `app.css` in the css directory
			- create `app.js` in the js directory
			- add starter HTML code in `index.html`
			- add configuration files for linting (validating code syntax)
				- [HTML linting](http://htmlhint.com/)
				- [CSS linting](https://stylelint.io/)
				- [JavaScript linting](http://eslint.org/)
				- [configure my code editor](http://editorconfig.org/)
		- ...and I do this _every time_ I create a new project!...which is a lot of effort I'm putting in for each new project.
		- I didn't want to keep doing these same steps over and over, so I did all of the steps listed above one last time and created a starter project for myself.
			- Now when I create a new project, I just make an identical copy of that starter project!
			- The way that cloning relates to Git is that the command we'll be running on the terminal is `git clone`.
				- You pass a path (usually a URL) of the Git repository you want to clone to the `git clone` command.
	- ## Verify Terminal Location
		- TIP:
			- Now before you clone anything, make sure you are located in the correct directory on the command line. Cloning a project creates a new directory and places the cloned Git repository in it. The problem is that you can't have nested Git repositories. So make sure the terminal's current working directory isn't located in a Git repository. If your current working directory is not in your shell's prompt, type `pwd` to print the working directory.
	- ## Cloning The Blog Repository
		- The command is `git clone` and then you pass the path to the Git repository that you want to clone.
		- The project that we'll be using throughout this course is located at this URL: [https://github.com/udacity/course-git-blog-project](https://github.com/udacity/course-git-blog-project) So using this URL, the full command to clone blog project is:
			- `$ git clone https://github.com/udacity/course-git-blog-project`
	- ## Git Clone Output Explanation
		- Let's look briefly at the output that `git clone` displays.
			- The first line says "Cloning into 'course-git-blog-project'...".
				- Git is creating a directory (with the same name of the project we're cloning) and putting the repository in it...that's pretty cool!
					- The rest of the output is basically validation - it's counting the remote repository's number of objects, then it compresses and receives them, then it unpacks them.
	- ## Clone Project And Use Different Name
		- You just cloned the blog project for this course. Awesome job!
			- The command you ran in the terminal was:
				- `$ git clone https://github.com/udacity/course-git-blog-project`
					- ...which created a directory named `course-git-blog-project`.
				- What if you want to use a different name instead of the default one?
				- Yes, you could just run the command above and manually rename it in Finder/Windows Explorer or use `mv` on the terminal.
					- But that's too many steps for us! Instead, we'd rather clone the project and have it use a different name all in one go! But how do we do that?
		- ### Quiz Question
			- Why don't you check out [the documentation for `git clone`](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#Cloning-an-Existing-Repository) and pick the correct way to do it from the options below.
			- The command should clone the blog project repo and store it in a directory named `blog-project`.
				- git clone https://github.com/udacity/course-git-blog-project
	- ## Not In A Git Repository?
		- WARNING:
			- Here's a _very important_ step that often gets missed when you first start working with Git.
				- When the `git clone` command is used to clone a repository, it creates a new directory for the repository...you already know this.
				- _But, it doesn't change your shell's working directory._ It created the new repo inside the current working directory, which means that the current working directory is still _outside_ of this new Git repo! Make sure you `cd` into the new repository.
			- Remember to use the Terminal's command prompt as an aid - if you're in a directory that is a Git repository, the command prompt will include a name in parentheses.
	- ## Look At The Project
		- So you've cloned the project to your computer, and you've `cd`ed into it.
			- Open up the `index.html` file in your favorite browser.
	- ## Git Clone Recap
		- The `git clone` command is used to create an identical copy of an existing repository.
			- `$ git clone <path-to-repository-to-clone>`
			- This command:
				- takes the path to an existing repository
				- by default will create a directory with the same name as the repository that's being cloned
				- can be given a second argument that will be used as the name of the directory
				- will create the new repository inside of the current working directory
	- ## Helpful Links
		- [Cloning an Existing Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#Cloning-an-Existing-Repository)
		- [git clone docs](https://git-scm.com/docs/git-clone)
		- [git clone Tutorial](https://www.atlassian.com/git/tutorials/setting-up-a-repository)
	- ## Status Update
		- At this point, we have two Git repositories:
			- the empty one that we created with the `git init` command
			- the one we cloned with the `git clone` command
				- How can we find any information about these repositories?
				- Git's controlling them, but how can we find out what Git knows about our repos?
					- To figure out what's going on with a repository, we use the `git status` command.
					- Knowing the status of a Git repository is _extremely_ important, so head straight on over to the next concept: Determine A Repo's Status.
- # Determine A Repo's Status
	- Working with Git on the command line can be a little bit challenging because it's a little bit like a [black box](https://en.wikipedia.org/wiki/Black_box).
		- I mean, how do you know when you should or shouldn't run certain Git commands?
		- Is Git ready for me to run a command yet? What if I run a command but I think it didn't work...how can I find that out?
		- The answer to all of these questions is the `git status` command!
			- `$ git status`
				- The `git status` is our key to the mind of Git.
					- It will tell us what Git is thinking and the state of our repository as Git sees it.
						- When you're first starting out, you should be using the `git status` command __all of the time__!
							- You should get into the habit of running it after any other command.
							- This will help you learn how Git works and it'll help you from making (possibly) incorrect assumptions about the state of your files/repository.
			- ### Quiz Question
				- To answer this quiz, make sure you've `cd`ed into the `course-git-blog-project` project.
				- If you've been following along in this lesson and haven't added any files to this project, then what does running `git status` display?
					- `Your branch is up-to-date with 'origin/master'. nothing to commit, working directory clean`
- ## Git Status Output
	- The `git status` command will display a lot of information depending on the state of your files, the working directory, and the repository.
		- You don't need to worry too much about these, though...just run `git status` and it will display the information you need to know.
- ## Git Status Explanation
	- As you can see in the GIF above, running `git status` in the `course-git-blog-project` project produces the following output:
	- `On branch master Your branch is up-to-date with 'origin/master'. nothing to commit, working directory clean`
	- The output tells us two things:
		1. `On branch master` – this tells us that Git is on the `master` branch. You've got a description of a branch on your terms sheet so this is the "master" branch (which is the default branch). We'll be looking more at branches in lesson 5
		- `Your branch is up-to-date with 'origin/master'.` – Because `git clone` was used to copy this repository from another computer, this is telling us if our project is in sync with the one we copied from. We won't be dealing with the project on the other computer, so this line can be ignored.
		- `nothing to commit, working directory clean` – this is saying that there are no pending changes.
			- Think of this output as the "resting state"
			- This is the resting state because there are no new files, no changes have been made in files, nothing is in the staging area about to be committed...no change or action is pending, so that's why I like to call it the resting state.
		- ### 💡 Changes in Git v2.14 💡
			- In Git version 2.14, running the `git status` command in an empty directory changed the wording of "Inital commit" to the much clearer "No commits yet". So the output would be:
			```
			On branch master No commits yet  nothing to commit (create/copy files and use "git add" to track)
			```
		- ### Quiz Question
			- To answer this quiz, make sure you've `cd`ed into the `new-git-project` project.
			- If you've been following along in this lesson and haven't added any files to this project, then what does running `git status` display?
				- `On branch master Initial commit nothing to commit (create/copy files and use "git add" to track)`
- ## Explanation Of Git Status In A New Repo
	- This is the output of running `git status` in the `new-git-project` project:
```
$ git status
On branch master

Initial commit

nothing to commit (create/copy files and use "git add" to track)
```
- If you compare this to the `git status` output from the course-git-blog-project project, then you'll see that they're pretty similar.
	- The thing to note that's different is that this output includes the line `Initial commit`.
	- This is the tiniest bit confusing because there actually aren't any commits in this repository yet!
		- We haven't discussed making a commit yet, but when we do, we will be able to make an initial commit.
- Try running the command `git log` and check out its response:
```
$ git log
fatal: your current branch 'master' does not have any commits yet
```
- "Fatal"? Fortunately, it turns out that just means that the Git program is exiting because it can't find any work to do.
	- Git tells us this as if it were an error, but it's really not a problem.
- We've just taken a very brief look at the `git status` command.
	- Remember that the output of `git status` will change depending on if files have been added/deleted/modified, what's on the staging index, and the state of the repository

==N==
- # Displaying A Repository's Commits
	- ## Git Status & Opening The Project
		- You can see that `git status` tells us that there's "nothing to commit, working directory clean". That means we're good to go ahead and check out the project!
		- So open the project in your favorite code editor. If you haven't yet, take a minute or two to look at the project – look over the CSS and the JavaScript files, but look particularly at the HTML file.
	- ## The Git Log Command
		- Finding the answers to these questions is exactly what `git log` can do for us! Instead of explaining everything that it can do for us, let's experience it! Go ahead and run the `git log` command in the terminal:
			- `$ git log`
- ## Navigating The Log
	- If you're not used to a pager on the command line, navigating in [Less](https://en.wikipedia.org/wiki/Less_(Unix)) can be a bit odd. Here are some helpful keys:
		- to scroll **down**, press
		    - `j` or `↓` to move _down_ one line at a time
		    - `d` to move by half the page screen
		    - `f` to move by a whole page screen
		- to scroll **up**, press
		    - `k` or `↑` to move _up_ one line at a time
		    - `u` to move by half the page screen
		    - `b` to move by a whole page screen
				- press `q` to **quit** out of the log (returns to the regular command prompt)
==N==
- # Changing How Git Log Displays Information
	- We've been looking closely at all the detailed information that `git log` displays. But now, take a step back and look at all of the information as a whole
	- Let's think about some of these questions:
		- **the SHA** - `git log` will display the complete SHA for every single commit. Each SHA is unique, so we don't really need to see the _entire_ SHA. We could get by perfectly fine with knowing just the first 6-8 characters. Wouldn't it be great if we could save some space and show just the first 5 or so characters of the SHA?
		- **the author** - the `git log` output displays the commit author for _every single commit_! It could be different for other repositories that have multiple people collaborating together, but for this one, there's only one person making all of the commits, so the commit author will be identical for all of them. Do we need to see the author for each one? What if we wanted to hide that information?
		- **the date** - By default, `git log` will display the date for each commit. But do we really care about the commit's date? Knowing the date might be important occasionally, but typically knowing the date isn't vitally important and can be ignored in a lot of cases. Is there a way we could hide that to save space?
		- **the commit message** - this is one of the most important parts of a commit message...we usually always want to see this
	- What could we do here to not waste a lot of space and make the output smaller? We can use a **flag**.
		- > TIP:
			- This isn't a course on the command line, but a flag is used to alter how a program functions. For example, the `ls` command will list all of the files in the current directory. The `ls` command has a `-l` flag (i.e. `ls -l`) that runs the same `ls` command but alters how it works; it now displays the information in the _long_ format (the `-l` for _long_).
			 - Flags can be used to alter how a program functions and/or what is displayed. To learn more about command line programs and flags, check out our course [Linux Command Line Basics](https://www.udacity.com/course/linux-command-line-basics--ud595).
	- ## git log --oneline
		- The `git log` command has a flag that can be used to alter how it displays the repository's information.
		- That flag is `--oneline`:
			- `$ git log --oneline`
==N==
- # Viewing Modified Files
	- ## `git log --stat` Intro
		- The `git log` command has a flag that can be used to display the files that have been changed in the commit, as well as the number of lines that have been added or deleted. The flag is `--stat` ("stat" is short for "statistics"):
			- `$ git log --stat`
	- ## `git log --stat` Recap
		- To recap, the `--stat` flag is used to alter how `git log` displays information:
			- `$ git log --stat`
				- This command:
					- displays the file(s) that have been modified
					- displays the number of lines that have been added/removed
					- displays a summary line with the total number of modified files and lines that have been added/removed

==N==
- # Viewing File Changes
	- ## Viewing Changes
		- We know that `git log` will show us the commits in a repository, and if we add the `--stat` flag, we can see what files were modified and how many lines of code were added or removed. Wouldn't it be awesome if we could see exactly _what those changes were_?
			- Being able to see the exact changes that were made to a file is incredibly important! Being able to say, "oh, ok, so this commit adds 5 pixels of border-radius to the button!".
				- For example, in the blog project, the commit `a3dc99a` has the message "center content on page" and modifies the CSS file by adding 5 lines.
				- What are those five lines that were added? How can we figure out what those 5 lines are?
	- ## `git log -p`
		- The `git log` command has a flag that can be used to display the actual changes made to a file.
		- The flag is `--patch` which can be shortened to just `-p`:
			- `$ git log -p`
	- ## Annotated `git log -p` Output
		- Using the image above, let's do a quick recap of the `git log -p` output:
			- 🔵 - the file that is being displayed
			- 🔶 - the hash of the first version of the file and the hash of the second version of the file
			    - not usually important, so it's safe to ignore
			- ❤️ - the old version and current version of the file
			- 🔍 - the lines where the file is added and how many lines there are
			    - `-15,83` indicates that the old version (represented by the `-`) started at line 15 and that the file had 83 lines
			    - `+15,85` indicates that the current version (represented by the `+`) starts at line 15 and that there are now 85 lines...these 85 lines are shown in the patch below
			- ✏️ - the actual changes made in the commit
			    - lines that are red and start with a minus (`-`) were in the original version of the file but have been removed by the commit
			    - lines that are green and start with a plus (`+`) are new lines that have been added in the commit
	- ## `git log -p` Recap
		- To recap, the `-p` flag (which is the same as the `--patch` flag) is used to alter how `git log` displays information:
			- `$ git log -p`
				- This command adds the following to the default output:
					- displays the files that have been modified
					- displays the location of the lines that have been added/removed
					- displays the actual changes that have been made
==N==
- # Viewing A Specific Commit
	- ## Too Much Scrolling
		- The last few quizzes in the previous section had you scrolling and scrolling through the patch output just to get to the right commit so you could see _its_ info. Wouldn't it be super handy if you could just display a specific commit's details without worrying about all of the others in the repo?
			- providing the SHA of the commit you want to see to `git log`
			- use a new command `git show`
				- They're both pretty simple, but let's look at the `git log` way and then we'll look at `git show`.
					- You already know how to "log" information with:
						- `git log`
						- `git log --oneline`
						- `git log --stat`
						- `git log -p`
							- But did you know, you can supply the SHA of a commit as the final argument for all of these commands? For example:
								- `$ git log -p fdf5493`
		- By supplying a SHA, the `git log -p` command will _start at that commit_! No need to scroll through everything! Keep in mind that it will _also_ show all of the commits that were made _prior_ to the supplied SHA.
	- ## New Command: `git show`
		- The other command that shows a specific commit is `git show`:
			- `$ git show`
				- Running it like the example above will only display the most recent commit. Typically, a SHA is provided as a final argument:
					- `$ git show fdf5493`
			- ### What does `git show` do?
				- The `git show` command will show _only one commit_.
				- The output of the `git show` command is exactly the same as the `git log -p` command.
					- So by default, `git show` displays:
						- the commit
						- the author
						- the date
						- the commit message
						- the patch information
			- However, `git show` can be combined with most of the other flags we've looked at:
				- `--stat` - to show the how many files were changed and the number of lines that were added/removed
				- `-p` or `--patch` - this the default, but if `--stat` is used, the patch won't display, so pass `-p` to add it again
				- `-w` - to ignore changes to whitespace














