import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-stepper-conflict-check',
  templateUrl: './stepper-conflict-check.component.html',
  styleUrls: ['./stepper-conflict-check.component.css']
})
export class StepperConflictCheckComponent implements OnInit {
  @Output() stepperValueChange = new EventEmitter<number>();
  stepperIndex: number;
  categories: any;
  selected: string;
  constructor() {
    this.categories = [
      'Parties Search',
      'Deal Size',
      'Conflict Summary'
    ];
    this.selected = this.categories[0];
  }
  select(item, index: number) {
    this.selected = item;
    this.stepperIndex = index;
    this.stepperValueChange.emit(this.stepperIndex);
  }

  isActive(item) {
    return this.selected === item;
  }

  ngOnInit() {
  }

}
