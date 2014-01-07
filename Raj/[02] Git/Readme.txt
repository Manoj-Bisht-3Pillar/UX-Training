/**
 * Install Git s/w
 */

// In git bash, register username and email in local for a user
	$ git config --global user.name "raj.bharti"
	$ git config --global user.email "raj.bharti@3pillarglobal.com"

// If you want to check your setting you can use the command.
	$ git config --list


/**
 * Create GitHub Account
 */


/**
 * Create SSH Key 
 */

	$ ssh-keygen –t rsa –C"raj.bharti@3pillarglobal.com"


/**
 * Uploading project in GitHub
 */
 
// Create a repo in GitHub
// Create a folder in local

// Initialize project
	$ git init


// Add your project files in staging area
	$ git add .

// Add deleted files in staging area
	$ git add -u .


// Check the status of your files in project folder
	$ git status

// Commit the project in local repository
	$ git commit -m "Message"

// Check commit logs by Command
	$ git log


// Connect to remote server to upload the project to GitHub (one time setup)
	$ git remote add origin “Repo path on GitHub”

// Push Project to GitHub
	$ git push origin master

// To get the latest
	$ git pull origin master