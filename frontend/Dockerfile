FROM node:8
WORKDIR /usr/src/app
EXPOSE 8080
COPY package.json .
RUN npm install
COPY . .
CMD npm run startdev