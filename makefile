# Makefile

.PHONY: install #PHONY instal is a fact. not a name

install:
	npm ci # installing dependencies based on package.json

brain-games:
        node bin/brain-games.js # run the game from this file

publish:
        npm publish --dry-run
