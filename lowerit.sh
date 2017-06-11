#!/bin/sh
   # lowerit
   # convert all file names in the current directory to lower case
   # only operates on plain files--does not change the name of directories
   # will ask for verification before overwriting an existing file
   # via https://github.com/joakin/dotfiles/blob/master/bin/rename-camel-case-files-to-snake-case
for x in `ls`
do
    # if [ ! -f $x ]; then
    #    continue
    # fi
    
    lc=`echo $x | sed -e 's|\([A-Z]\)\([a-z]\)|_\1\2|g' -e 's/^_\(.*\)/\1/' | tr '[:upper:]' '[:lower:]'`
    if [ $lc != $x ]; then
        mv -i $x $lc
    fi
done