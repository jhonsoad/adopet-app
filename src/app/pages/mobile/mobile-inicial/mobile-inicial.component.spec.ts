import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileInicialComponent } from './mobile-inicial.component';

describe('MobileInicialComponent', () => {
  let component: MobileInicialComponent;
  let fixture: ComponentFixture<MobileInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileInicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
