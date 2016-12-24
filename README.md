# Fedor

## master

http://rua-assets-frankfurt.s3-website.eu-central-1.amazonaws.com/fi/ 

http://rua-assets-frankfurt.s3-website.eu-central-1.amazonaws.com/fedor/

## dev

http://rua-assets-dev.s3-website.eu-central-1.amazonaws.com/fi/ 

http://rua-assets-dev.s3-website.eu-central-1.amazonaws.com/fedor/


Style guide project

Main purpose is to have single reusable stylesheet for future redesign tasks

React and webpack used just for hot reload capabilities for nice development flow

Styles itself does not depend on any scripts

### Icons

Icons are build separately by different build job and can be found here: http://rua-icons-fi.s3-website.eu-central-1.amazonaws.com/

# Docker

Docker image is used to reduce build time in pipelines

Each time you upgrade dependencies from package.json you should run:

	docker build . -t mac2000/fedor

to check is it working you may run:

	docker run --rm -v %cd%/dist:/code/dist mac2000/fedor npm run dist -s

to publish image run:

	docker push mac2000/fedor

for push you need to login first using:

	docker login
