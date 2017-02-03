/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MagieComponent } from './magie.component';

describe('MagieComponent', () => {
  let component: MagieComponent;
  let fixture: ComponentFixture<MagieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
