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
