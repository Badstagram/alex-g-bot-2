FROM node:24.5.0

WORKDIR /opt/bot

# Copy package.json and package-lock.json
COPY package.json .
COPY package-lock.json .

RUN ["pnpm", "install"]

COPY tsconfig.json .
COPY .env .
COPY src/ src/
COPY prisma/ prisma/

# Generate Prisma Client
RUN ["pnpx", "prisma", "migrate", "deploy"]
RUN ["pnpx", "prisma", "generate"]

ENTRYPOINT ["pnpm", "run", "start"]
