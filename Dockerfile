FROM node:14.9.0
WORKDIR /app
COPY package.json /app
COPY ../tsconfig.json /app
RUN npm install
COPY . /app
CMD ["npm", "run", "dev"]
