#!/bin/bash

echo "This will remove all system containers, and remove all dangling images"
read -n 1 -r -p "Are you sure you want to continue? [Yn]: " answer
echo

if [[ ! $answer =~ [Yy] ]]; then
  exit
fi

running_containers=$(docker ps -a | wc -l)

# Check if any containers are running
#     1 - no running containers
#   > 1 -    running containers
if [ $running_containers -ne 1 ]; then
  # Stop running containers
  docker stop $(docker ps -a | tail -n+2 | awk '{ print $1 }')
  # Remove containers
  docker rm $(docker ps -a | tail -n+2 | awk '{ print $1 }')
fi

dangling_images=$(docker images -f "dangling=true" -q | wc -l)

# Remove dangling images
if [ $dangling_images -ge 0 ]; then
  docker rmi -f $(docker images -f "dangling=true" -q)
fi
