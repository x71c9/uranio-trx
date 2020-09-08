FROM node:14.9.0
WORKDIR /app
COPY ./urn-trx/package.json /app
COPY ./tsconfig.json /
RUN npm install
COPY ./urn-trx /app
CMD ["npm", "run", "dev"]
