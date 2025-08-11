#!/bin/bash

version=$(jq -r '.version' < package.json)

update_db=false

while getopts d flag
do
    case "${flag}" in
        d) update_db=true
        ;;
    esac
done


git pull
npx alex-c-line edit-env LAST_UPDATED $(date -Iseconds)
docker build -t alex-g-bot-2:$version .

docker stop alex-g-bot-2
docker rm alex-g-bot-2

if [ "$update_db" = true ]; then
    npx prisma migrate deploy
fi

docker run -d --name alex-g-bot-2 alex-g-bot-2:$version
