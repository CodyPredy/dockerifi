# dockerfing your app

Dockerizing React and NodeJS Environment into two separate containers.

# Quick start

## Client

Use [Client Readme](./client/README.md)

## Server

Use [Server Readme](./server/README.md)

# AWS

## Push docker images to AWS

Pushes both the client and the server images with the `latest` tag.

To push one of them use the `--only-client` or `--only-server` (eg. bellow).

In order to add a tag use the `--server-tag X` and `--client-tag Y`
E.g.

./bin/push-changes.sh --server-tag 2.2 --only-server
./bin/push-changes.sh --client-tag 2.2 --only-client
./bin/push-changes.sh --server-tag 1.4
./bin/push-changes.sh --client-tag 2.1 --server-tag 3.0
./bin/push-changes.sh --only-client

# Bonus
To cleanup any dangling docker images use `./bin/clean-docker.sh`.
To startup client and server docker containers on local environment use `./bin/start-dev.sh`.
