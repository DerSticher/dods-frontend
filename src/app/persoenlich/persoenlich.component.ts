import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dods-persoenlich',
  templateUrl: './persoenlich.component.html',
  styleUrls: ['./persoenlich.component.scss']
})
export class PersoenlichComponent implements OnInit {
  public optionsGeschlecht:Array<string> = ['weiblich', 'männlich']

  constructor() { }

  ngOnInit() {
  }

}
