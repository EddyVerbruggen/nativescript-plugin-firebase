import { Component, OnInit } from "@angular/core";
const firebase = require("nativescript-plugin-firebase/app");

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
})

export class AppComponent implements OnInit {

  ngOnInit(): void {
    firebase.initializeApp({
      persist: false
    }).then(() => {
      console.log("Firebase initialized");
    });
  }

}
