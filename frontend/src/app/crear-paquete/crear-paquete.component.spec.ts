import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CrearPaqueteComponent } from './crear-paquete.component';

describe('CrearPaqueteComponent', () => {
  let component: CrearPaqueteComponent;
  let fixture: ComponentFixture<CrearPaqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearPaqueteComponent],
      imports: [FormsModule, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate total correctly', () => {
    component.formData.tunnel = true;
    expect(component.calculateTotal()).toEqual(1800);
  });
});
