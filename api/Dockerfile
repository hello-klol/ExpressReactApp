FROM node:8
WORKDIR /usr/src/api
EXPOSE 3000
COPY package.json .
RUN npm install
COPY . .
CMD npm start