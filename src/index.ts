#!/usr/bin/env node

import * as parseGitUrl from 'git-url-parse';
import {execSync} from 'child_process'

const url = process.argv[2]

if (!url) {
    console.log("Usage: gitclone [clone url]")
    process.exit(1)
}

const createDirs = async () => {
    const gitUrl = parseGitUrl(url)

    execSync(`mkdir -p ~/${gitUrl.resource}/${gitUrl.owner}`, {
        stdio: "inherit"
    })
    execSync(`git clone ${url} ~/${gitUrl.resource}/${gitUrl.owner}/${gitUrl.name}`, {
        stdio: "inherit"
    })
}

createDirs().catch(console.error)
