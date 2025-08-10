version=$(jq -r '.version' < package.json)

git pull
npx alex-c-line edit-env LAST_UPDATED $(date -Iseconds)
docker build -t alex-g-bot-2:$version .

docker stop alex-g-bot-2
docker rm alex-g-bot-2

docker run -d --name alex-g-bot-2 alex-g-bot-2:$version
