# Getting started

## Prerequisites

To install Motor CMS from this template repository, you need the following software installed on your machine:

* Git
* Docker
* Some terminal software

## Installation

### Demo / production

```zsh
# Clone the repository
git clone https://github.com/motor-cms/motor-template

# Change into the newly cloned repository
cd motor-template

# Copy example environment file
cp .env.example .env

# Change into the docker subdirectory
cd docker

# Start docker containers
docker-compose -p motor-nx up -d

# Run the app container and, from within the container shell, seed the database
docker exec -it motor-nx-app-1 /bin/bash

# This happens in the container shell
php artisan db:seed
```

## Development version

```zsh
# Clone the repository
git clone https://github.com/motor-cms/motor-template

# Change into the newly cloned repository
cd motor-template

# Copy example environment file
cp .env.example .env

# Clone the development versions of the respective packages
mkdir packages
cd packages

git clone -b 2.0 git@github.com:motor-cms/motor-core.git
git clone -b 2.0 git@github.com:motor-cms/motor-admin.git
git clone -b 2.0 git@github.com:motor-cms/motor-media.git

# Change into the docker subdirectory
cd ../docker

# Start docker containers
docker-compose -f docker-compose-dev.yml -p motor-nx-dev up -d

# Run the app container and, from within the container shell, seed the database
docker exec -it motor-nx-app-1 /bin/bash

# The following commands are to be run in the container shell
docker exec -it motor-nx-dev-app-1 /bin/bash
php artisan db:migrate
php artisan db:seed

# Update composer dependencies
COMPOSER=composer-dev.json composer update
```
