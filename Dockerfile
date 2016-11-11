FROM node

RUN mkdir /code
WORKDIR /code

COPY package.json /code
RUN npm install -s
