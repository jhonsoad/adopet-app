/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostarComponent } from './postar.component';

describe('PostarComponent', () => {
  let component: PostarComponent;
  let fixture: ComponentFixture<PostarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
