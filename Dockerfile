FROM node:24.5.0

WORKDIR /opt/bot

# Copy package.json and package-lock.json
COPY package*.json .

RUN ["npm", "install"]
RUN ["npm", "install", "-g", "tsx"]

COPY tsconfig.json .
COPY .env .
COPY src/ src/

ENTRYPOINT ["npm", "run", "start"]