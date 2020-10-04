install:
	npm i

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm run test

test-coverage:
	npm run test -- --coverage --coverageProvider=v8

gendiff:
	node bin/gendiff.js
