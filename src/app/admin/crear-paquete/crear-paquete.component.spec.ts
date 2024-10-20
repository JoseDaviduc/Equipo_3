import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPaqueteComponent } from './crear-paquete.component';

describe('CrearPaqueteComponent', () => {
  let component: CrearPaqueteComponent;
  let fixture: ComponentFixture<CrearPaqueteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPaqueteComponent]
    });
    fixture = TestBed.createComponent(CrearPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
