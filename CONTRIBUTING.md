# Contribution Guidelines

First of all, welcome to our project and thank you for showing interest in our project! We appreciate any meaningful contributions and PRs, as long as they abide by our [Code of Conduct](./CODE_OF_CONDUCT.md).
If you feel that any documentation is unclear or missing, feel free to open an issue about it.

If this is your first time contributing to an open-source project, fret not, this guide would explain everything! :)

We follow the [github flow](https://docs.github.com/en/get-started/quickstart/github-flow) to work on our projects in a consistent and maintainable way.


## Checking for some pre-requisites
- Open your terminal or command prompt and enter the command `git --version` to check whether git is installed. If it isn't installed, you could install it from [here](https://git-scm.com/downloads).
- Ensure that git works with your github account and that it's set up properly: https://docs.github.com/en/get-started/quickstart/set-up-git

## Setting up the project
Before starting to work on your issue, you need to go through some steps to set up the project:
- [Fork this repository to your account](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) and copy the link to this forked repository.
- Clone your forked repostory to your local environment by opening terminal or command prompt and running the command:
  ```
  git clone COPIED-LINK-TO-FORK
  ```
  (replace `COPIED-LINK-TO-FORK` by the link you copied in the previous step)
- Before making any changes, ensure that you are never working on the `main` branch, always create a new branch to ensure that you can create multiple contributions without getting troubled by merge conflicts due to huge changes between your forked repo and the original source repo. The `main` branch should always only be used for [syncing your `main` branch to the upstream `main` branch](https://twitter.com/i/status/1390382527588798477)(that is, the main branch of the original source repo), thus keeping all changes up-to-date. Create a new branch:
  ```
  git checkout -b suitable-branch-name
  ```
- Now you could working on the project! (for docs about how to setup/run the project locally, check the [README.md](./README.md) or the documentation linked in the README, if linked)


## Commiting the changes you made
- After you've worked on a sizable portion or a file needed for the contribution being added by you, you need to _add_ these files:
  ```
  git add filename1.ext filename2.ext
  ```
  eg: if you alterned `README.md`, run `git add README.md`. Or, you could add all altered files via `git add .`
- Now you need to _commit_ your changes, so that they can be saved to the branch by git:
  ```
  git commit -m "appropriate commit message"
  ```
  The commit message should be related to the scope of the changes made in the files added to this commit.
- In order for the changes made in your local repo to be visible on the forked repo on GitHub, you need to push your changes to github:
  ```
  git push -u origin branch-name
  ```
  (where `branch-name` is the name for the branch set by you earlier)

  
## Submitting a Pull Request
After making your changes, commiting and pushing them to your fork's branch, you need to open a Pull Request(PR) to suggest the changes you made to be merged into the original source repo.
You should see a quick option to do so appear at the top of your repository on GitHub. Click the "Pull Request" button to have GitHub automatically set up the pull request.

First, change the title of the pull request to match your branch name and add a descriptive description that gives the maintainers a good idea about what the PR is adding, and mention the related issue number by using `closed #NUM` in the description to link your PR to an issue, where NUM is the issue number you're working on.

Congratulations! You've submitted your first pull request! It will be reviewed as quickly as possible, so keep an eye out for comments, approvals, or requested changes.
  
  
