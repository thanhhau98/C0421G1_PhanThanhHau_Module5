import { Component } from '@angular/core';
import {IRatingUnit} from './irating-unit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ratingBars: IRatingUnit[] = [
    {value : 1 , active : false},
    {value : 2 , active : false},
    {value : 3 , active : false},
    {value : 4 , active : false},
    {value : 5 , active : false},
    {value : 6 , active : false},
    {value : 7 , active : false},
    {value : 8 , active : false},
    {value : 9 , active : false},
    {value : 10 , active : false}
  ];
  title = 'angular-rating-bar';
  ratingBarParent: IRatingUnit;
  setItem(item: IRatingUnit) {
    this.ratingBarParent = item;
    for (let i = 0 ; i < item.value ; i++){
      this.ratingBars[i].active = true;
    }
  }
}
