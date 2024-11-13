# Makefile

.PHONY: install #PHONY instal is a fact. not a name

install:
	npm ci # installing dependencies based on package.json

brain-games:
        node bin/brain-games.js # run the game from this file

publish:
        npm publish --dry-run

.PHONY: lint

lint:
        npx eslint .

brain-even:
        node bin/brain-even.js

brain-calc:
        node bin/brain-calc.js

brain-gcd:
        node bin/brain-gcd.js

brain-progression:
        node bin/brain-progression.js

brain-prime:
        node bin/brain-prime.js
