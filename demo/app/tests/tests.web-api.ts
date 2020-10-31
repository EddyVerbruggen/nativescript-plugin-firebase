const firebaseWebApi = require("@nativescript/firebase/app");

// TODO make this slightly more useful :P

describe("initializeApp", () => {
  it("exists", () => {
    expect(firebaseWebApi.initializeApp).toBeDefined();
  });
});
