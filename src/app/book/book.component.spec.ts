/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    console.log("component = ",component)
    expect(component.getLeftPageIdx(1)).toBe(1);
    expect(component.getLeftPageIdx(2)).toBe(1);
    expect(component.getLeftPageIdx(3)).toBe(3);
    expect(component.getLeftPageIdx(4)).toBe(3);

    expect(component.getRightPageIdx(1)).toBe(2);
    expect(component.getRightPageIdx(2)).toBe(2);
    expect(component.getRightPageIdx(3)).toBe(4);
    expect(component.getRightPageIdx(4)).toBe(4);
  });
});
