githubFetcher
=============

Fetches Github repositories by username and sorts them by stargazers.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Build Status](https://travis-ci.org/jusantana/GithubFetcher.svg?branch=master)](https://travis-ci.org/jusantana/GithubFetcher)

## Getting Started

Clone this repository into your local machine.

### Prerequisites

Node and Npm are required for this program to work. Npm comes with node and can be downloaded from https://nodejs.org/en/download/.
Alternatively, you can use the following commands to install Node.
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install nodejs
node -v // To check installation was successful
```

## Installing

First, cd into your project directory.
Second, run the following command.
```
npm install
```
If successful the command will install all dependencies.

## Usage
This program accepts two arguments, Github username, and sorting order.
`./bin/run [username] [asc||desc]`
#### Example
```
./bin/run oclif asc
```
returns:

   ![Screenshot from 2019-11-23 20-19-48](https://user-images.githubusercontent.com/31261222/69487836-cc792f80-0e2e-11ea-8f9d-dc228546eee1.png)
   
#### Flags
`-v or --version` Prints out version number.
`-h or --help` Prints out help.
`--verbose` Turns on verbose mode.

## Running the tests

To run the tests use command: 
```
npm test
```

### Coding style tests

The test will check coding style with eslint.
Tests will fail if eslint finds errors.

## Built With

* [Oclif](https://github.com/oclif/oclif) - CLI program framework
* [Axios](https://github.com/axios/axios) - Promise based HTTP client


## Authors

* **Julian Santana** - [Jusantana](https://github.com/jusantana)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
