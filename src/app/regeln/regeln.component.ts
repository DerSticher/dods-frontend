import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dods-regeln',
  templateUrl: './regeln.component.html',
  styleUrls: ['./regeln.component.scss']
})
export class RegelnComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather HALLO WELT'];

  constructor() { }

  ngOnInit() {
  }

}
