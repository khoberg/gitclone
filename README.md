# Installation
- `git clone https://github.com/khoberg/gitclone.git && cd gitclone`
- `npm i`
- `npm build`
- add alias
  - add `alias gitclone="/path/to/gitclone/target/index.js"`

# Behavior
gitclone will clone into a directory based on the path given. The path will be the `domainOfRepo/userName/repoName`. 

For example, `gitclone https://github.com/khoberg/gitclone.git` will clone into `~/github.com/khoberg/gitclone`
