# Installation
- `git clone https://github.com/khoberg/gitclone.git && cd gitclone`
- `npm i`
- `npm build`
- add `source /PATH/TO/gitclone/bin/gitclone.sh` to `~/.zprofile` or similar

# Behavior
`gitclone` will clone into a directory based on the remote path. The path will be the `domainOfRepo/userName/repoName`.
It will then `cd` into that directory.

For example, `gitclone https://github.com/khoberg/gitclone.git` will clone into `~/github.com/khoberg/gitclone`
