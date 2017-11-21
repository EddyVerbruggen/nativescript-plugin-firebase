import { Component, OnInit } from "@angular/core";
const firebase = require("nativescript-plugin-firebase/app");

@Component({
  selector: "ns-items",
  moduleId: module.id,
  templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    firebase.initializeApp();
  }

  public login(): void {
    console.log(">>> login");
    firebase.auth().signInAnonymously()
        .then(() => console.log("Logged in"))
        .catch(err => console.log("Login error: " + err));
  }
}