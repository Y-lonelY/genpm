#!/bin/bash

function gen() {
  echo "You have selected the mode $1"

  echo "Cleaning the current directory..."
  find . -type 'd' | grep -v ".git" | xargs rm -rf
  rm -vf ./*

  echo "Merging from $1..."
  git merge origin "$1" --strategy-option theirs
  git add .
  git commit -m "feat: init the $1 mode"
  git push

  echo "Bye, have a good time~🍄"
}

function choose() {
  PS3="please select the mode: "
  options=("pure" "ts" "react")
  # opt 表示 value, $REPLY 表示 key(即用户输入)
  select opt in "${options[@]}"; do 

    case "$REPLY" in

    1 ) gen "$opt";break;;
    2 ) gen "$opt";break;;
    3 ) gen "$opt";break;;
    # 如果为 quit 则推出
    # $(( ${#options[@]}+1 )) ) echo "Goodbye!"; break;;
    # 如果都不匹配，则报错
    *) echo "Maybe later, byebye~~";break;;

    esac
  done
}


function help() {
    echo "Usage: bash control.sh <command> [options]"
    echo ""
    echo "Commands:"
    echo "gen   [options] [name] [project]   Generate the target name modules."
}

if [ "$1" == "help" ]; then
  help
elif [ "$1" == "" ]; then
  choose
elif [ "$1" == "gen" ];then
  # 传递第二个参数之后的所有成员（包含第二个参数）
  gen "${@:2}"
else
  help
fi