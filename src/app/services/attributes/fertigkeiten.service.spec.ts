/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FertigkeitenService } from './fertigkeiten.service';

describe('FertigkeitenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FertigkeitenService]
    });
  });

  it('should ...', inject([FertigkeitenService], (service: FertigkeitenService) => {
    expect(service).toBeTruthy();
  }));
});
