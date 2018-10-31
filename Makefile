build:
	docker build . -t danedmunds/pem-to-jwk

lint:
	./node_modules/.bin/standard

lint-fix:
	./node_modules/.bin/standard --fix