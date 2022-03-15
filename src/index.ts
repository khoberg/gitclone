#!/usr/bin/env node

import * as parseGitUrl from 'git-url-parse';
import {execSync} from 'child_process'

const url = process.argv[2]

if (!url) {
    console.warn("Usage: gitclone [clone url]")
    process.exit(1)
}

const createDirs = async () => {
    const gitUrl = parseGitUrl(url)
    if (!gitUrl.resource || !gitUrl.owner || !gitUrl.name) {
        console.error("Invalid git url")
        process.exit(1)
    }

    try {
        execSync(`mkdir -p ~/${gitUrl.resource}/${gitUrl.owner}`, {
            stdio: "inherit"
        })
        execSync(`git clone ${url} ~/${gitUrl.resource}/${gitUrl.owner}/${gitUrl.name}`, {
            stdio: "inherit"
        })
    } catch (e) {
        // ignored
    }
    console.log(`${gitUrl.resource}/${gitUrl.owner}/${gitUrl.name}`)
}

createDirs().catch(console.error)
