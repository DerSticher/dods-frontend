import { Component, Input } from '@angular/core';

@Component({
  selector: 'dods-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() options: any;
  @Input() placeholder: string = 'Bitte auswählen';
  @Input() disabled: boolean = false;


  private value:any = {};
  private _disabledV:string = '0';

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
