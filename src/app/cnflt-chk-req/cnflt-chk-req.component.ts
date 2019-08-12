import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cnflt-chk-req',
  templateUrl: './cnflt-chk-req.component.html',
  styleUrls: ['./cnflt-chk-req.component.css']
})
export class CnfltChkReqComponent implements OnInit {

  public PartiesName = '';
  public DealAmount = '$ ';
  constructor() { }

  ngOnInit() {
  }

  OnSearch(PartiesName, DealAmount) {
    // console.log(PartiesName);
    // console.log(DealAmount);
  }

}
