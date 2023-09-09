import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCadastroComponent } from './mobile-cadastro.component';

describe('MobileCadastroComponent', () => {
  let component: MobileCadastroComponent;
  let fixture: ComponentFixture<MobileCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
