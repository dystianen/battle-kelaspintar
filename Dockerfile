# develop stage
FROM node:18-slim as develop-stage
LABEL maintainer="infra-team@kelaspintar.co.id"
WORKDIR /app
COPY package.json ./

COPY . .

RUN yarn

RUN yarn build

CMD [ "yarn","start","-p","3000" ]

EXPOSE 3000
