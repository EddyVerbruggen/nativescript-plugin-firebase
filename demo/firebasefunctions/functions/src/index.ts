import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

export const helloWorldJson = functions.https.onRequest((request, response) => {
  response.json({"message": "Hello from Firebase!"});
});

// this is a proper callable function
export const helloName = functions.https.onCall((data, context) => {
  return {
    message: "Hello: " + data
  }
});