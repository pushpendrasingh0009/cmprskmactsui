import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-conflict-check',
  templateUrl: './stepper-conflict-check.component.html',
  styleUrls: ['./stepper-conflict-check.component.css']
})
export class StepperConflictCheckComponent implements OnInit {

  categories: any;
  selected: string;
  constructor() {
    this.selected = 'Parties';
    this.categories = [
      'Parties',
      'Parties2',
      'Summary'
    ];
  }
  select(item) {
    this.selected = item;
  }

  isActive(item) {
    return this.selected === item;
  }

  ngOnInit() {
  }

}
