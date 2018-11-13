FROM node:8
WORKDIR /usr/src/client
EXPOSE 8080
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
CMD npm start