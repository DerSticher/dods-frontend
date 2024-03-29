/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KarmaComponent } from './karma.component';

describe('KarmaComponent', () => {
  let component: KarmaComponent;
  let fixture: ComponentFixture<KarmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
