import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  showPara = true;
  buttonClicks = [];
  onBtnClick() {
    this.showPara = !this.showPara;
    let logString = new Date().toLocaleString();
    logString += this.showPara ? "is displayed" : "is Hidden";
    this.buttonClicks.push(logString);
  }
  getBgColor(index) {
    console.log(index);
    return index >= 4 ? "blue" : "white";
  }
}
