FROM node:carbon-slim

# Create app directory
WORKDIR /mediun_api

# Install app dependencies
COPY package.json /mediun_api/
RUN npm install

# Bundle app source
COPY . /mediun_api/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
