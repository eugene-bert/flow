FROM node:10.15.0
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node -r dotenv/config ./src/index.js
EXPOSE 8081

