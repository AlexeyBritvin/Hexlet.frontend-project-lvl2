install:
	npm i

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm run test

gendiff:
	node bin/gendiff.js
