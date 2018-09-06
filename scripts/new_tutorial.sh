#!/bin/bash

cd $(dirname $0)/..

REF_DIR=tutorials/template

TUT_NUM=1

while true; do
    TUTORIAL="tutorial${TUT_NUM}"
    TUTORIAL_DIR=tutorials/$TUTORIAL

    [ ! -d $TUTORIAL_DIR ] && break
    let TUT_NUM=TUT_NUM+1
done

echo "About to create dir $TUTORIAL_DIR"
echo "Press <return>"
read

#TUTORIAL_DIR=TUTORIAL1; mkdir -p $TUTORIAL_DIR/css; mkdir -p $TUTORIAL_DIR/js; touch $TUTORIAL_DIR/index.html; touch $TUTORIAL_DIR/css/style.css; touch $TUTORIAL_DIR/js/TUTORIAL_DIR.js; cp -a TUTORIAL_DIR.html.template $TUTORIAL_DIR/js/TUTORIAL_DIR.js

#mkdir -p $TUTORIAL_DIR/
 
echo; echo "Copying files:"
cp -av $REF_DIR/   $TUTORIAL_DIR/

echo; echo "Directory structure created:"
find $TUTORIAL_DIR/ -type f -exec ls -al {} \;

