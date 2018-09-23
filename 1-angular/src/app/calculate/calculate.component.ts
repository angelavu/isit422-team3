import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  qty = 0;     // These 2 lines are what I changed, these are this components “state”, or model
  cost = 0;    //  They are just normal class properties
  constructor() { }  // like any class, we can initialize values
  ngOnInit() { }  //  this is like “before page load” in WinForms or ASP, 
                  // if you want to run code before the page is displayed

}
