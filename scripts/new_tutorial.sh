#!/bin/bash

cd $(dirname $0)/..

REF_DIR=tutorials/template

TUT_NUM=1

while true; do
    TUTORIAL="tutorial${TUT_NUM}"
    TUTORIAL_DIR=tutorials/$TUTORIAL

    #[ ! -d $TUTORIAL_DIR ] && break

    #set -x
    EXISTS=$(find tutorials/ -type d -name "tutorial${TUT_NUM}*" | wc -l)
    #echo $EXISTS
    [ "$EXISTS" = "0" ] && break

    let TUT_NUM=TUT_NUM+1
done

echo "About to create dir $TUTORIAL_DIR"
echo "Press <return>"
read

#mkdir -p $TUTORIAL_DIR/
 
echo; echo "Copying files:"
cp -av $REF_DIR/   $TUTORIAL_DIR/

echo; echo "Directory structure created:"
find $TUTORIAL_DIR/ -type f -exec ls -al {} \;

