#!/bin/bash

PACK_DIR=package;

publish() {
    cd $PACK_DIR
    echo 'Publishing to npm...'
    # note that when using a tag: don't use regular version numbers as you can't publish those as 'latest' later
#    npm publish *.tgz --tag next
    npm publish *.tgz
}

./pack.sh && publish
