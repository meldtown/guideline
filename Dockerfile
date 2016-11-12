FROM node
MAINTAINER Alexandr Marchenko <marchenko.alexandr@gmail.com>

COPY package.json /
RUN npm install -s
RUN mkdir /code
WORKDIR /code
