import { Component, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-pre-conflict-chk',
  templateUrl: './pre-conflict-chk.component.html',
  styleUrls: ['./pre-conflict-chk.component.css']
})
export class PreConflictChkComponent implements OnInit {

  stepperValue = 0;

  constructor() { }

  ngOnInit() {
  }

  changeSteppervalue(value: number) {
    this.stepperValue = value;
  }

}
