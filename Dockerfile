FROM node:22-alpine

RUN mkdir -p /home/node/portfolio && chown -R node:node /home/node/portfolio

WORKDIR /home/node/portfolio

COPY package.json yarn.lock ./

USER node

RUN yarn install

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "yarn", "start"]