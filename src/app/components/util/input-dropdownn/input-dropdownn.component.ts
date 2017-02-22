import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dods-input-dropdownn',
  templateUrl: './input-dropdownn.component.html',
  styleUrls: ['./input-dropdownn.component.scss']
})
export class InputDropdownnComponent {

  @Input() options: any = ['a', 'b', 'c'];
  @Input() placeholder: string;
  private inputText: string;
  @Output() textUpdated = new EventEmitter();

  constructor() {

  }

  onClick(option) {
    this.inputText = option;
    this.onInputChange();
  }

  onInputChange() {
    this.textUpdated.emit(this.inputText);
  }

}
