# Git Commands

git init - Create a new git repository
git status - View the changes to your project
git add - Add files to staging area
git commit - Creates a new commit with files from staging area
git log - View recent commits

The goal is to get all that code up to github
How we're going to securely communicate with github from the command line.Let's setup SSH(secure shell),this is a secure way for 2 machines
to communicate in order secure boly ushin setup SSH key

ls -a ~/.ssh - Check for existing key

eval "$(ssh-agent -s)" - check if SSH agent is running

ssh-add ~/.ssh/id_rsa - provide path to provide key,we don't want the pubfile we want the private file,identity has been added

Now we're ready to take the public key file and give that to 3rd party sevices like git
