import * as functions from "firebase-functions";

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send(`Hello from Firebase!!! ${request.query.text}`);
});

export const helloWorldJson = functions.https.onRequest((request, response) => {
  response.json({"message": "Hello from Firebase!"});
});

// this is a callable (from code) function
export const helloName = functions.https.onCall((data, context) => {
  return {
    message: `Hello: ${data}`
  }
});


/*
// Examples of scheduled functions (these require at least the 'Blaze' plan)

exports.scheduledFunction = functions.pubsub.schedule('every 2 minutes').onRun((context) => {
  console.log('This will be run every 2 minutes!');
  return null;
});

exports.scheduledFunctionCrontab = functions.pubsub.schedule('5 11 * * *')
  .timeZone('America/New_York') // Users can choose timezone - default is America/Los_Angeles
  .onRun((context) => {
    console.log('This will be run every day at 11:05 AM Eastern!');
    return null;
  }
);

*/