# Helicon JavaScript Sample App
This repository contains the files required to run the Radicalbit Platform JavaScript Quickstart.

The Radicalbit Platform is a simple, scalable, robust, code-free and generic platform to enable and productise the next generation of "online modified", real-time event stream ML/AI models.

## Sample App

This project is composed of a `index.html` and a `script.js` file that illustrates how to use the _Helicon Javascript SDK_.

The javascript usage of the sdk can be summarized in the lines below:

```javascript
// Create a new Helicon SDK istance
const heliconWriteClient = new Helicon.HeliconWriteClient('hostAddress', 'clientId', 'tenant');

// add some payload...
const record = {
  "name": "record1",
  "temperature": "29"
};

// and send it to the stream
heliconWriteClient.write('my_stream', record)
  .then(
    () => console.log('payload published!'),
    (errorMessage) => console.error(errorMessage)
);
```

## How to Run the app

Download the repo and open `index.html` in your favourite browser.
Alternatively, you can find a live functioning example [here](https://stackblitz.com/edit/helicon-javascript-quickstart-z8feqv?file=index.html)

## Support
We're always happy to help with any other questions you might have! [Send us an email](mailto:support@radicalbit.ai).
