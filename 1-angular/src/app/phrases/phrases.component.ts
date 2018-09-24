import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phrases',
  templateUrl: './phrases.component.html',
  styleUrls: ['./phrases.component.css']
})
export class PhrasesComponent implements OnInit {

  num = 0;
  phrases = ["", "You are awesome!", "You can do this!", "Don't give up!",
            "Keep it up!", "You have the best style!", "You look great today!",
            "You are a winner", "Today is your lucky day!", "You are smart!"];

  constructor() { }

  ngOnInit() {
  }

}
