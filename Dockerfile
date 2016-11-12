FROM node
MAINTAINER Alexandr Marchenko <marchenko.alexandr@gmail.com>

COPY package.json /usr/local/lib
RUN cd /usr/local/lib && npm install -s
RUN mkdir /code
WORKDIR /code
