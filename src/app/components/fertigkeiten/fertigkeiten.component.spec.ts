/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FertigkeitenComponent } from './fertigkeiten.component';

describe('FertigkeitenComponent', () => {
  let component: FertigkeitenComponent;
  let fixture: ComponentFixture<FertigkeitenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertigkeitenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FertigkeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
