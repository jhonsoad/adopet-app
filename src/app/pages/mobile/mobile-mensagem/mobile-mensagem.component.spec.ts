import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMensagemComponent } from './mobile-mensagem.component';

describe('MobileMensagemComponent', () => {
  let component: MobileMensagemComponent;
  let fixture: ComponentFixture<MobileMensagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMensagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
