FROM node:latest
COPY . /app
WORKDIR /app
RUN yarn install
EXPOSE 3000
CMD ["npm", "run", "start"]