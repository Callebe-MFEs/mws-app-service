# Express Microservice

This project shows a small example of a backend microservice implemented using nodejs and express.

It also uses the @decorator/express and @decorator/di to better organize the code definition.

[git repository](https://dev.azure.com/IT-PRODUCTSENGINEERING/EA%20Playground/_git/express-microservice)

## Set up environment

This project requires node >= 18._ and npm >= 9._

Use Node Version Management to manage different versions of node and npm.

- [NVM (unix and MacOS)](https://github.com/nvm-sh/nvm)
- [NVM for Windows](https://github.com/coreybutler/nvm-windows)

With node and npm installed, run the commands bellow in the terminal to download and install dependencies.

```bash
$ git clone git@ssh.dev.azure.com:v3/IT-PRODUCTSENGINEERING/EA%20Playground/express-microservice
$ cd express-microservice
$ npm install
```

And the following commands are available to work in the project

```bash
# compile the project. generate assets under ./dist folder
$ npm run compile

# remove ./dist folder
$ npm run clean

# build the project. execute both, clean and compile commands in sequence
$ npm run build

# dev. used to launch application from compiled assets. builds and launchs application
$ npm run dev

# serve. Used to launch application from the typescript source code without building first.
# keep listening for file changes to reload application.
# useful for testing application while developping new features
$ npm run serve

# start. Launches application from ./dist folder. Most used when deployed
$ npm start
```

## Testing

```bash
# execute unit test once
$ npm run test

# execute unit test and keep listening for file changes
$ npm run tdd
```

all test execution generates a coverage report under `.coverage/` folder

## References

1. [@decorators/express](https://www.npmjs.com/package/@decorators/express)
2. [@decorators/di](https://www.npmjs.com/package/@decorators/di)
