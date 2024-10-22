import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloNovoComponent } from './modulo-novo.component';

describe('ModuloNovoComponent', () => {
  let component: ModuloNovoComponent;
  let fixture: ComponentFixture<ModuloNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModuloNovoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
