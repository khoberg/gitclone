#!/usr/bin/env bash

GIT_CLONE_PATH=$(dirname "$0")
function gitclone() {
  CDDIR=$("$GIT_CLONE_PATH"/../target/index.js "$@") && cd ~/$CDDIR || echo $CDDIR
}
