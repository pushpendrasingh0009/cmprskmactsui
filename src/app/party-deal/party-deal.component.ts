import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-party-deal',
  templateUrl: './party-deal.component.html',
  styleUrls: ['./party-deal.component.css']
})
export class PartyDealComponent implements OnInit {

  PartiesName = '';
  DealAmount = '$ ';
  constructor() { }

  ngOnInit() {
  }



  OnSearch(PartiesName, DealAmount){
    console.log(PartiesName);
    console.log(DealAmount);
  }

}
