import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesCalculadoraComponent } from './botoes-calculadora.component';

describe('BotoesCalculadoraComponent', () => {
  let component: BotoesCalculadoraComponent;
  let fixture: ComponentFixture<BotoesCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotoesCalculadoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoesCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
