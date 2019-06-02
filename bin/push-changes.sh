#!/bin/bash

while [ $# -gt 0 ]; do
  case $1 in
    --only-client)
      only_client=true;;
    --only-server)
      only_server=true;;
    --server-tag)
      server_tag=$2
      shift;;
    --client-tag)
      client_tag=$2
      shift;;
    esac
    shift
done

if [ -z $server_tag ]; then
  server_tag=latest
fi

if [ -z $client_tag ]; then
  client_tag=latest
fi

if [[ $only_client = true && $only_server = true ]]; then
  echo 'If you want both server and client, do not pass any of those 2 flags'
  echo '\t--only-server and --only-client are mutually exclusive'
  exit
fi

## AWS CLI
# Login
$(aws ecr get-login --no-include-email --region us-east-2)

## Client
if [ -z $only_server ]; then
  # Build client
  docker build -t dockerifi-client:$client_tag ./client/

  # Tag client
  docker tag dockerifi-client:$client_tag 303881595170.dkr.ecr.us-east-2.amazonaws.com/dockerifi-client:$client_tag

  # Push client
  docker push 303881595170.dkr.ecr.us-east-2.amazonaws.com/dockerifi-client:$client_tag
fi

## Server
if [ -z $only_client ]; then
  # Build server
  docker build -t dockerifi-server:$server_tag ./server/

  # Tag server
  docker tag dockerifi-server:$server_tag 303881595170.dkr.ecr.us-east-2.amazonaws.com/dockerifi-server:$server_tag

  # Push server
  docker push 303881595170.dkr.ecr.us-east-2.amazonaws.com/dockerifi-server:$server_tag
fi
