# Fedor

Style guide project

Main purpose is to have single reusable stylesheet for future redesign tasks

React and webpack used just for hot reload capabilities for nice development flow

Styles itself does not depend on any scripts

### Buttons

.fd-btn-primary, .fd-btn-secondary

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
