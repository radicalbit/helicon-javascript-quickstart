# Helicon SDK

Helicon sdk is a javascript library that allows web clients to interact with the Helicon streams api server.
In this repository you will find some examples on how to use it.


## Usage

Usage of the library is pretty straightforward:

```javascript
// Create a new Helicon SDK istance
const helicon = new Helicon('tenant', 'clientId');

// add some payload...
const record = {
  "name": "record1",
  "temperature": "29"
};

// and send it to the stream
helicon.publish('my_stream', record)
  .then(
    () => console.log('payload published!'),
    (errorMessage) => console.error(errorMessage)
);
```
## How to run the Example
A complete example of the usage of this library can be found in the `example/` directory.

To run it, follow those steps:

1. run `yarn install` and then `yarn build` in the root directory of this repository

2. run `yarn install` and then `yarn start` in the `example` directory
