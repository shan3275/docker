FROM node:16.15.0
COPY . /app
WORKDIR /app
RUN ["npm", "install"]
RUN ["npm", "install", "-g", "npm@8.10.0"]
EXPOSE 8080/tcp
CMD [ "node", "server.js" ]