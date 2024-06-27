FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --silent
RUN npm prune --omit-dev
COPY . .
EXPOSE 80
CMD [ "node", "app.js" ]
