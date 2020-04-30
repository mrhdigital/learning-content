# Git Basic Interview Questions

1. What is the difference between Git and GitHub?

  * Git is version control software that let's users create repositories for recording changes to
  a poject.
  * GitHub stores these repositories online.

2. Why would you use Git?

 * To track changes that developers make to a project, especially collaborarive ones. the
 branch system also prevents users from writing code thar would mess a project up.

3. Why would you use GitHub?

 * To store projects remotely and allow users to collaborate on a project anywhere with an Internet
 connection.

4. What is the first step necessary to create a _local_ Git repository?

 * use command: `git init`

5. Once a repository is created and linked to GitHub, what are the three commands you need to do each time you create or modify files to send something up to GitHub?

 * `git add.`
 * `git commit -m <comment>`
 * `git push origin <branch name>`

6. How do you update your local repository from GitHub?
 * `git pull origin <branch name>`

7. What is one way to create a new branch?
 * `git branch <branchname>`

8. What is one way to check and see what branch you are currently in? (a terminal/bash command)?

 * `git branch`

9. What is it called when you make a request on GitHub to merge a branch into another branch?
 
  * A merge.

10. How would you delete a _local_ Git repository?

 * `rm -R .git`

11. What does `git clone` do?

* It clone a GitHub repo to a local machine.

12. What is "branching" for?

* So that all collaborators on a project can work at the same time
without writing code that conflits with other parts of the project.
