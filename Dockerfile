FROM node
MAINTAINER Alexandr Marchenko <marchenko.alexandr@gmail.com>

COPY package.json /tmp
RUN cd /tmp && npm install -s
RUN mkdir /code && mv /tmp/node_modules /code

WORKDIR /code
