#  Dockerfile for Node Express Backend

FROM node:14.18-alpine

WORKDIR /app

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
COPY . .

# Exports
EXPOSE 3001

CMD ["npm","start"]