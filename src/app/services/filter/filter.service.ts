import { Injectable } from '@angular/core';
import { Attribut } from './../../classes/attribut';

@Injectable()
export class FilterService {

  constructor() { }

  public filter(filter: any, data: Attribut[]): Attribut[] {
      let filteredData: Attribut[] = [];

      for (var i = 0; i < data.length; i++) {
          let shouldReturn = true;

          for (let key in filter) {
              if (!(key in data[i] && data[i][key] == filter[key])) {
                  shouldReturn = false;
                  break;
              }
          }

          if (shouldReturn) {
              filteredData.push(data[i]);
          }
      }
      return filteredData;
  }
}
