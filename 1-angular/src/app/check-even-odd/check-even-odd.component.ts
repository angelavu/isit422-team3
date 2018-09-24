import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-even-odd',
  templateUrl: './check-even-odd.component.html',
  styleUrls: ['./check-even-odd.component.css']
})
export class CheckEvenOddComponent implements OnInit {

  inputNum:number;
  checkMessage = '';

  update( inputNum:number ) { 
    this.inputNum = inputNum; 
  }

  checkEvenOdd( ) {
    if ( this.inputNum%2 == 0)
      return this.checkMessage = "It's even!";
    else  
      return this.checkMessage = "It's odd!";
  }

  constructor() { }

  ngOnInit() {
  }

}
