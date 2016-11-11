# Fedor

Style guide project

Main purpose is to have single reusable stylesheet for future redesign tasks

React and webpack used just for hot reload capabilities for nice development flow

Styles itself does not depend on any scripts


## Atoms

### Container

max-width: 1320px and reuse it in DemoWrapper?

### Typo

[Bootstrap sample](http://getbootstrap.com/css/#type)

Single/multiple line samples, colored samples

Alignment (with tablet/mobile overrides)

Transforms (e.g. .fd-text-lowercase, .fd-text-uppercase, .fd-text-capitalize)

Links (normal, hover, dotted, none, text)

### Colors

Grayscale color samples

Secondary color samples

Primary color samples

Note: .fd-bg-pink, .fd-text-pink - for background and color

### Input

Simple form input text, date, number, url

### Select

one of possible ways .select>select

### Buttons

.fd-btn-primary, .fd-btn-secondary

### Checkbox

single, multiple (single row, multiple rows)

### Radio

multiple

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
