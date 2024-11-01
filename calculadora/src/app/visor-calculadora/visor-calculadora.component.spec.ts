import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorCalculadoraComponent } from './visor-calculadora.component';

describe('VisorCalculadoraComponent', () => {
  let component: VisorCalculadoraComponent;
  let fixture: ComponentFixture<VisorCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisorCalculadoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisorCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
