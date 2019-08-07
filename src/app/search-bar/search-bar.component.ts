import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchEmitter = new EventEmitter<string>();
  @Input() searchLabel: string;
  searchValue: string;

  constructor() { }

  ngOnInit() {
  }

  defaultSearch() {

    console.log('hello' + this.searchValue);
    this.searchEmitter.emit(this.searchValue);
  }

}
