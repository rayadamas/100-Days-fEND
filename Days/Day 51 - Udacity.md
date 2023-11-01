# [10/31/2023, 16:49-18:06]
- **Today's Progress**: I've the module directly in front of me, Tagging, Branching, and Merging, and the one after that until i'm complete w/ this #Git detour.
	- moving onto Undoing Changes module. finished w/ baby #Git side-lessons. 
- **Thoughts:** straight theory-based studies.
---
- # Tagging
	- ## Git Tag Command
		- Pay attention to what's shown (just the SHA and the commit message)
		- The command we'll be using to interact with the repository's tags is the `git tag` command:
			- `$ git tag -a v1.0`
				- This will open your code editor and wait for you to supply a message for the tag.
				- In the command above (`git tag -a v1.0`) the `-a` flag is used.
					- This flag tells Git to create an _annotated_ flag. If you don't provide the flag (i.e. `git tag v1.0`) then it'll create what's called a _lightweight_ tag.
						- Annotated tags are recommended because they include a lot of extra information such as:
							- the person who made the tag
							- the date the tag was made
							- a message for the tag
		- ## Verify Tag
			- `git tag`
		- ## Git Log's --decorate Flag
			- The `--decorate` flag will show us some details that are hidden from the default view.
		- ## 💡 `--decorate` Flag Changes in Git 2.13 💡
			- In the 2.13 update to Git, the `log` command has changed to automatically enable the `--decorate` flag. This means that you do not need to include the `--decorate` flag in your command, since it is automatically included, anyway! So the following commands result in the exact same output:
				- `$ git log --decorate $ git log`
		- ## Deleting A Tag
			- A Git tag can be deleted with the `-d` flag (for _delete_!) and the name of the tag:
				- `$ git tag -d v1.0`
			- ### By default, a Git tag will not appear in a log. What flag must be used to display the tag information in the output of `git log`?
				- `--decorate`
		- ## Adding A Tag To A Past Commit
			- All you have to do is provide the SHA of the commit you want to tag!
				- `$ git tag -a v1.0 a87984`
					- (after popping open a code editor to let you supply the tag's message) this command will tag the commit with the SHA `a87084` with the tag `v1.0`. Using this technique, you can tag any commit in the entire git repository
==N==
- # Branching
	- ## The `git branch` command
		- The `git branch` command is used to interact with Git's branches:
			- `$ git branch`
				- It can be used to:
					- list all branch names in the repository
					- create new branches
					- delete branches
						- If we type out just `git branch` it will list out the branches in a repository.
	- ## Create A Branch
		- To create a branch, all you have to do is use `git branch` and provide it the name of the branch you want it to create. So if you want a branch called "sidebar", you'd run this command:
			- `$ git branch sidebar`
	- ## The `git checkout` Command
		- Remember that when a commit is made that it will be added to the current branch.
			- So even though we created the new `sidebar`, no new commits will be added to it since we haven't _switched to it_, yet.
			- If we made a commit right now, that commit would be added to the `master` branch, _not_ the `sidebar` branch.
				- To switch between branches, we need to use Git's `checkout` command.
					- `$ git checkout sidebar`
						- It's important to understand how this command works. Running this command will:
							- remove all files and directories from the Working Directory that Git is tracking
							- (files that Git tracks are stored in the repository, so nothing is lost)
							- go into the repository and pull out all of the files and directories of the commit that the branch points to
								- So this will remove all of the files that are referenced by commits in the master branch.
								- It will replace them with the files that are referenced by the commits in the sidebar branch.
						- The funny thing, though, is that both `sidebar` and `master` are pointing _at the same commit_, so it will look like nothing changes when you switch between them. But the command prompt will show "sidebar"
	- ## Branches In The Log
		- The branch information in the command prompt is helpful, but the clearest way to see it is by looking at the output of `git log`.
			- But just like we had to use the `--decorate` flag to display Git tags, we need it to display branches.
				- `$ git log --oneline --decorate`
	- ## The Active Branch
		- The command prompt will display the _active_ branch.
		- But this is a special customization we made to our prompt.
			- If you find yourself on a different computer, the _fastest_ way to determine the active branch is to look at the output of the `git branch` command.
			- An asterisk will appear next to the name of the active branch.
	- ## Delete A Branch
		- A branch is used to do development or make a fix to the project that won't affect the project (since the changes are made on a branch).
			- Once you make the change on the branch, you can combine that branch into the `master` branch (this "combining of branches" is called "merging" and we'll look at it shortly).
				- Now after a branch's changes have been merged, you probably won't need the branch anymore.
				- If you want to delete the branch, you'd use the `-d` flag.
					- The command below includes the `-d` flag which tells Git to _delete_ the provided branch (in this case, the "sidebar" branch).
						- `$ git branch -d sidebar`
			- One thing to note is that you can't delete a branch that you're currently on.
				- So to delete the `sidebar` branch, you'd have to switch to either the `master` branch or create and switch to a new branch.
		- #Git won't let you delete a branch if it has commits on it that aren't on any other branch (meaning the commits are unique to the branch that's about to be deleted).
			- If you created the `sidebar` branch, added commits to it, and then tried to delete it with the `git branch -d sidebar`, Git wouldn't let you delete the branch because you can't delete a branch that you're currently on.
			- If you switched to the `master` branch and tried to delete the `sidebar` branch, Git _also_ wouldn't let you do that because those new commits on the `sidebar` branch would be lost!
				- To force deletion, you need to use a capital D flag - `git branch -D sidebar`.
==N==
- # Merging
	- Remember that the purpose of a topic branch (like `sidebar`) is that it lets you make changes that do not affect the `master` branch.
		- Once you make changes on the topic branch, you can either decide that you don't like the changes on the branch and you can just delete that branch, or you can decide that you want to keep the changes on the topic branch and combine those changes in with those on another branch.
- Combining branches together is called **merging**.
	- Git can automatically merge the changes on different branches together.
		- This branching and merging ability is what makes Git _incredibly powerful_! You can make small or extensive changes on branches, and then just use Git to combine those changes together.
	- Pay attention to the two main types of merges in Git:
		- a regular **merge**
		- a **Fast-forward merge**.
	- ## The Merge Command
		- The `git merge` command is used to combine Git branches:
			- `$ git merge <name-of-branch-to-merge-in>`
				- When a merge happens, Git will:
					- look at the branches that it's going to merge
					- look back along the branch's history to find a single commit that _both_ branches have in their commit history
					- combine the lines of code that were changed on the separate branches together
					- makes a commit to record the merge
		- ### Fast-forward Merge
			- In our project, I've checked out the `master` branch and I want _it_ to have the changes that are on the `footer` branch.
				- If I wanted to verbalize this, I could say this is - "I want to merge in the `footer` branch".
					- That "merge in" is important; when a merge is performed, the _other_ branch's changes are brought into the branch that's currently checked out.
					- When we merge, we're merging some other branch into the current (checked-out) branch.
					- We're not merging two branches into a new branch.
					- We're not merging the current branch into the other branch.
				- Now, since `footer` is directly ahead of `master`, this merge is one of the easiest merges to do.
		- Merging `footer` into `master` will cause a **Fast-forward merge**.
			- A Fast-forward merge will just move the currently checked out branch _forward_ until it points to the same commit that the other branch (in this case, `footer`) is pointing to.
				- `$ git merge footer`
	- ## Perform A Regular Merge
		- Let's do the more common kind of merge where two _divergent_ branches are combined.
			- To merge in the `sidebar` branch, make sure you're on the `master` branch and run:
				- `$ git merge sidebar`
					- Because this combines two divergent branches, a commit is going to be made.
					- And when a commit is made, a commit message needs to be supplied.
						- Since this is a _merge commit_ a default message is already supplied.
							- You can change the message if you want, but it's common practice to use the default merge commit message. So when your code editor opens with the message, just close it again and accept that commit message.
==N==
- # Merge Conflicts
	- When a merge fails, it's called a **merge conflict**.
	- If a merge conflict does occur, Git will try to combine as much as it can, but then it will leave special markers (e.g. `>>>` and `<<<`) that tell you where you need to manually fix.
		- ### What Causes A Merge Conflict
			- Git tracks _lines_ in files.
				- A merge conflict will happen when _the exact same line(s)_ are changed in separate branches.
					- For example, if you're on a `alternate-sidebar-style` branch and change the sidebar's heading to "About Me" but then on a different branch and change the sidebar's heading to "Information About Me", which heading should Git choose?
					- You've changed the heading on both branches, so there's no way Git will know which one you actually want to keep.
	- ## Forcing A Merge Conflict!
		- Remember that a merge conflict occurs when _the exact same line(s) are changed in separate branches_. Let's alter the page's heading on two different branches. So Let's:
			- change the heading on the `master` branch
			- create a `heading-update` branch _that's located on the commit right before the recently modified `master` branch_
			- change the _same_ heading
			- switch back to the `master` branch
			- merge in the `heading-update` branch
	- ## Merge Conflict Output Explained
		- The output that shows in the Terminal is:
			- `$ git merge heading-update  Auto-merging index.html CONFLICT (content): Merge conflict in index.html Automatic merge failed; fix conflicts and then commit the result.`
	- ## Merge Conflict Indicators Explanation
		- The editor has the following merge conflict indicators:
			- `<<<<<<< HEAD` everything below this line (until the next indicator) shows you what's on the current branch
			- `||||||| merged common ancestors` everything below this line (until the next indicator) shows you what the original lines were
			- `=======` is the end of the original lines, everything that follows (until the next indicator) is what's on the branch that's being merged in
			- `>>>>>>> heading-update` is the ending indicator of what's on the branch that's being merged in (in this case, the `heading-update` branch)
	- ## Resolving A Merge Conflict
		- Git is using the merge conflict indicators to show you what lines caused the merge conflict on the two different branches as well as what the original line used to have. So to resolve a merge conflict, you need to:
			- choose which line(s) to keep
			- remove all lines with indicators
==N==
- # Modifying The Last Commit
	- ## Changing The Last Commit
		- You've already made plenty of commits with the `git commit` command. Now with the `--amend` flag, you can alter the _most-recent_ commit.
			- `$ git commit --amend`
				- If your Working Directory is clean (meaning there aren't any uncommitted changes in the repository), then running `git commit --amend` will let you provide a new commit message.
					- Your code editor will open up and display the original commit message. Just fix a misspelling or completely reword it! Then save it and close the editor to lock in the new commit message.
	- ## Add Forgotten Files To Commit
		- Alternatively, `git commit --amend` will let you include files (or changes to files) you might've forgotten to include.
			- Let's say you've updated the color of all navigation links across your entire website.
			- You committed that change and thought you were done.
			- But then you discovered that a special nav link buried deep on a page doesn't have the new color.
			- You _could_ just make a new commit that updates the color for that one link, but that would have two back-to-back commits that do practically the exact same thing (change link colors).
				- Instead, you can amend the last commit (the one that updated the color of all of the other links) to include this forgotten one. To do get the forgotten link included, just:
					- edit the file(s)
					- save the file(s)
					- stage the file(s)
					- and run `git commit --amend`
						- So you'd make changes to the necessary CSS and/or HTML files to get the forgotten link styled correctly, then you'd save all of the files that were modified, then you'd use `git add` to stage all of the modified files (just as if you were going to make a new commit!), but then you'd run `git commit --amend` to update the most-recent commit instead of creating a new one.
	- ## What Is A Revert?
		- When you tell Git to **revert** a specific commit, Git takes the changes that were made in commit and does the exact opposite of them.
			- If a character is added in commit A, if Git _reverts_ commit A, then Git will make a new commit where that character is deleted.
				- It also works the other way where if a character/line is removed, then reverting that commit will _add_ that content back
	- ## The `git revert` Command
		- Now that I've made a commit with some changes, I can revert it with the `git revert` command
			- `$ git revert <SHA-of-commit-to-revert>`
				- `git revert` command tells us what it reverted
			- This command:
				- will undo the changes that were made by the provided commit
				- creates a new commit to record the change
==N==
- # Resetting Commits
	- ## Reset vs Revert
		- Reverting creates a new commit that reverts or undos a previous commit.
		- Resetting, on the other hand, _erases_ commits!
			- This is one of the few commands that lets you erase commits from the repository.
				- To alleviate the stress a bit, Git _does_ keep track of everything for about 30 days before it completely erases anything. To access this content, you'll need to use the `git reflog` command. Check out these links for more info:
					- [git-reflog](https://git-scm.com/docs/git-reflog)
	- ## Relative Commit References
		- You already know that you can reference commits by their SHA, by tags, branches, and the special `HEAD` pointer.
		- Sometimes that's not enough, though.
			- There will be times when you'll want to reference a commit relative to another commit.
				- For example, there will be times where you'll want to tell Git about the commit that's one before the current commit...or two before the current commit.
			- There are special characters called "Ancestry References" that we can use to tell Git about these relative references.
				- Those characters are:
					- `^` – indicates the parent commit
					- `~` – indicates the _first_ parent commit
			- Here's how we can refer to previous commits:
			- the parent commit – the following indicate the parent commit of the current commit
			    - HEAD^
			    - HEAD~
			    - HEAD~1
			- the grandparent commit – the following indicate the grandparent commit of the current commit
			    - HEAD^^
			    - HEAD~2
			- the great-grandparent commit – the following indicate the great-grandparent commit of the current commit
			    - HEAD^^^
			    - HEAD~3
				- The main difference between the `^` and the `~` is when a commit is created _from a merge_.
					- A merge commit has _two_ parents.
					- With a merge commit, the `^` reference is used to indicate the _first_ parent of the commit while `^2` indicates the _second_ parent.
						- The first parent is the branch you were on when you ran `git merge`
							- while the second parent is the branch that was merged in.
- ## The `git reset` Command
	- The `git reset` command is used to reset (erase) commits:
		- `$ git reset <reference-to-commit>`
			- It can be used to:
				- move the HEAD and current branch pointer to the referenced commit
				- erase commits
				- move committed changes to the staging index
				- unstage committed changes
- ## Git Reset's Flags
	- The way that Git determines if it erases, stages previously committed changes, or unstages previously committed changes is by the flag that's used. The flags are:
		- `--mixed`
		- `--soft`
		- `--hard`
- ## Reset's `--mixed` Flag
	- Let's look at each one of these flags.
		- `* 9ec05ca (HEAD -> master) Revert "Set page heading to "Quests & Crusades"" * db7e87a Set page heading to "Quests & Crusades" * 796ddb0 Merge branch 'heading-update'`
			- Using the sample repo above with `HEAD` pointing to `master` on commit `9ec05ca`, running `git reset --mixed HEAD^` will take the changes made in commit `9ec05ca` and move them to the working directory.
- ## Reset's `--soft` Flag
	- Let's use the same few commits and look at how the `--soft` flag works:
		- `* 9ec05ca (HEAD -> master) Revert "Set page heading to "Quests & Crusades"" * db7e87a Set page heading to "Quests & Crusades" * 796ddb0 Merge branch 'heading-update'`
			- Running `git reset --soft HEAD^` will take the changes made in commit `9ec05ca` and move them directly to the Staging Index.
- ## Reset's `--hard` Flag
	- Last but not least, let's look at the `--hard` flag:
		- `* 9ec05ca (HEAD -> master) Revert "Set page heading to "Quests & Crusades"" * db7e87a Set page heading to "Quests & Crusades" * 796ddb0 Merge branch 'heading-update'`
			- Running `git reset --hard HEAD^` will take the changes made in commit `9ec05ca` and erases them.



































