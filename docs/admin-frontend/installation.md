# Installation

## Prerequisites

To install the VueJS admin frontend for the headlines Motor backend, you need the following software installed on your machine:

* Git
* nodejs 18+
* Some terminal software

## Development version

```zsh
# Clone the repository
git clone git@github.com:motor-cms/motor-nx-template.git

# Change into the newly cloned repository
cd motor-nx-template

# Clone the development versions of the respective packages
mkdir packages
cd packages

git clone git@github.com:motor-cms/motor-nx-core.git
git clone git@github.com:motor-cms/motor-nx-admin.git
git clone git@github.com:motor-cms/motor-nx-media.git

cd ..

# Install nodejs dependencies
npm install

# Start the development server
npm run dev
```

## Demo / production

Soon&trade;
