import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"],
  animations: [
    trigger("scale", [
      state(
        "start",
        style({
          transform: "scale(.2)",
        })
      ),
      state(
        "finish",
        style({
          transform: "scale(1)",
        })
      ),
      transition("start => finish", [animate("1s")]),
    ]),
  ],
})
export class HeroComponent implements OnInit {
  constructor() {}
  state: string = "start";

  ngOnInit() {
    setTimeout(() => {
      this.state == "start" ? (this.state = "finish") : (this.state = "start");
    }, 1);
  }
}
