import { Component, OnInit } from '@angular/core';
import {Calculator} from '../calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  cal: Calculator = {
    number1 : 0,
    number2 : 0,
    calculated : ''
  };
  constructor() { }

  calculatorNumber(cal: Calculator){
    switch (cal.calculated) {
      case '+' : return  cal.number1 + cal.number2;
      case '-' : return  cal.number1 - cal.number2;
      case '*' : return  cal.number1 * cal.number2;
      case '/' : return  cal.number1 / cal.number2;
    }
  }

  ngOnInit(): void {
  }

}
