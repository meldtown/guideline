FROM node
MAINTAINER Alexandr Marchenko <marchenko.alexandr@gmail.com>

COPY package.json /usr/local/lib/
RUN cd /usr/local/lib && npm install -s

ENV PATH /usr/local/lib/node_modules/.bin:$PATH
ENV NODE_PATH /usr/local/lib/node_modules

RUN mkdir /code
WORKDIR /code

