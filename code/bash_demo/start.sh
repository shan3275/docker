#!/bin/bash

echo 'hello world'

cmd=""

while [[ $# -gt 0 ]]; do
    case "$1" in
    --tiktok)
        cmd="node ttLogin.js"
        shift 1
        ;;
    --youtube)
        cmd="node youtebeLogin.js"
        shift 1
        ;;
    --url)
        cmd="$cmd --url $2"
        shift 2
        ;;
    --tag)
        cmd="$cmd --tag $2"
        shift 2
        ;;
    *)
        break
        ;;
    esac
done

echo "$cmd"
