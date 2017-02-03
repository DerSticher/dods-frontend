/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PersoenlichComponent } from './persoenlich.component';

describe('PersoenlichComponent', () => {
  let component: PersoenlichComponent;
  let fixture: ComponentFixture<PersoenlichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoenlichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoenlichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
