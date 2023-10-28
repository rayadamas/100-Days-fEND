# [10/28/2023, 17:17-18:28]
- **Today's Progress**: starting w/ a review of [[Day 47 - Udacity]], then continuing on w/ #Git and #Git_versioncontrol terminology. 
- **Thoughts:** from working w/ #Github as an amateur on my own, i'm already familiar w/ some of the terms.
	- skipping section on how to setup git on MacOS. 
	- downloaded updated #Git on desktop and followed all config instructions. 
	- spent a decent amount of time trying to setup this example dir in my present `100 Days fEND` dir on desktop but wasn't able to do so i think due to OneDrive. otherwise i don't see how the path isn't clear, i'm able to init and create a new dir just fine, just not where i'd like it to be. 
---
- # #Git_versioncontrol workflow
	- **Main Concepts**:
		- **Git Repository**:
		    - An organized collection of files that can be used with version control.
		    - Comprises three main areas:
			- **Three Main Areas of Git**:
			    1. **Working Directory**:
			        - The area where you make changes to files.
			        - When you start with git, you might not immediately realize these distinct areas exist due to a lack of visual cues.
			    2. **Staging Index**:
			        - An intermediary area where you place files that are about to be committed.
			        - It is essential for moving files to the repository.
			    3. **Repository**:
			        - The area where committed files are stored safely.
			        - Represents the version history of the project.
		- **Interacting with Git**:
		    - Git uses a shell command to move files between the three areas.
			    - Initially, a new git repository is empty (repository section has no files).
		    - Git is aware of new files, and such files can be symbolized with a green star for illustration.
			    - Files aren't directly added to the repository. They are moved to the staging index first.
		    - After staging, files can be committed to the repository.
		- **Process of Committing Changes**:
			1. Add a new file or modify an existing one.
			2. Move the changes to the staging index.
			3. Commit the changes to the repository.
- The HTML file has HTML and CSS changes on the Staging Index and an additional HTML change in the Working Directory. From what you've learned so far with how committing works, what do you think will get committed if a commit were made right now?
	- If a commit were made right now, only the changes that are in the Staging Index would be committed.
		- This means that the HTML and CSS changes that are currently staged would be committed to the repository.
			- The additional HTML change that is in the Working Directory and not yet staged would not be included in this commit.

==N==
- ## First Time Git Configuration
	- Before you can start using Git, you need to configure it. Run each of the following lines on the command line to make sure everything is set up.
```
# sets up Git with your name
git config --global user.name "<Your-Full-Name>"

# sets up Git with your email
git config --global user.email "<your-email-address>"

# makes sure that Git output is colored
git config --global color.ui auto

# displays the original state in a conflict
git config --global merge.conflictstyle diff3

git config --list
```
- ### Git & Code Editor
	- The last step of configuration is to get Git working with your code editor.
		- #### VSCode Setup
			- `git config --global core.editor "code --wait"`
==N==
# Intro, Create a #Git repo
- # Create A Repo From Scratch
	- Before you can make commits or do anything else with a git repository, the repository needs to actually exist.
		- To create a new repository with Git, we'll use the `git init` command.
			- The `init` subcommand is short for "initialize", which is helpful because it's the command that will do all of the initial setup of a repository.
			- We'll be using the following terminal commands in this lesson:
				- `ls` - used to list files and directories
				- `mkdir` - used to create a new directory
				- `cd` - used to change directories
				- `rm` - used to remove files and directories
- ## Create Course Directories
	- We're about to create a new project for this course. If you already have a location on your computer where you put all your projects, then keep doing what you're doing. I'll be storing all of my work in a directory called `udacity-git-course`.
	- If you want to follow along with me:
		- create a directory called `udacity-git-course`
			- inside that, create another directory called `new-git-project`
				- use the `cd` command to move into the `new-git-project` directory
					- If you're a copy/paster like me, just run this command on the terminal - `mkdir -p udacity-git-course/new-git-project && cd $_`
						- (Before running this command, make sure you `cd` to where you want these files stored. For example, if you want the files stored on your Desktop, then make sure you `cd` to the Desktop before running the command.)
- ## Git Init
	- Fantastic work - we're all set up and ready to start using the `git init` command!
	- This is one of the easiest commands to run. All you have to do is run `git init` on the terminal
- After running `git init`, the text "Initialized empty Git repository in " followed by a path. should have appeared. The question is, has anything changed with your command prompt? If so, what?
	- the word **master**
- ## Git Init's Effect
	- Running the `git init` command sets up all of the necessary files and directories that Git will use to keep track of everything.
		- All of these files are stored in a directory called `.git` (notice the `.` at the beginning - that means it'll be a hidden directory on Mac/Linux).
			- This `.git` directory _is the "repo"_! This is where git records all of the commits and keeps track of everything!
- ## .Git Directory Contents
	- Here's a brief synopsis on each of the items in the `.git` directory:
		- **config file** - where all _project specific_ configuration settings are stored.  
			- From the [Git Book](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration):  
				- Git looks for configuration values in the configuration file in the Git directory (.git/config) of whatever repository you’re currently using. These values are specific to that single repository.
					- For example, let's say you set that the global configuration for Git uses your personal email address.
					- If you want your work email to be used for a specific project rather than your personal email, that change would be added to this file.
		- **description file** - this file is only used by the GitWeb program, so we can ignore it
		- **hooks directory** - this is where we could place client-side or server-side scripts that we can use to hook into Git's different lifecycle events
		- **info directory** - contains the global excludes file
		- **objects directory** - this directory will store all of the commits we make
		- **refs directory** - this directory holds pointers to commits (basically the "branches" and "tags")
			- Remember, other than the "hooks" directory, you shouldn't mess with pretty much any of the content in here.
			- The "hooks" directory _can_ be used to hook into different parts or events of Git's workflow, but that's a more advanced topic that we won't be getting into in this course.
- ## Git Init Recap
	- Use the `git init` command to create a new, empty repository in the current directory.
		- `$ git init`
	- Running this command creates a hidden `.git` directory.
		- This `.git` directory is the brain/storage center for the repository.
			- It holds all of the configuration files and directories and is where all of the commits are stored.












































