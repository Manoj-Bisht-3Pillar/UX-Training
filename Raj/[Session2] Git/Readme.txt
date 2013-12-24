/**
 * Create SSH Key 
 */

ssh-keygen –t rsa –C"raj.bharti@3pillarglobal.com"


/** 
 * Check your SSH Key from GitBash 
 */

ssh –T git@github.com


/**
 * Upload project in GitHub
 */
 
git init
git add .
git status
git commit -m "Message"
git log
git remote add origin “Repo path on GitHub”
git push origin master