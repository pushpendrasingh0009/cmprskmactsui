import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stepper-conflict-check',
  templateUrl: './stepper-conflict-check.component.html',
  styleUrls: ['./stepper-conflict-check.component.css','./responsiveskin.min.css','./checkout_1230.min.css']
})
export class StepperConflictCheckComponent implements OnInit {

  categories: any;
  selected :any;
  constructor() {
    this.categories = [
       'Parties',
       'Parties2',
       'Summary'
    ]; 
  }
  select(item) {
    this.selected = (this.selected === item ? null : item); 
  };

  isActive(item) {
      return this.selected === item;
  };

  ngOnInit() {
  }

}
