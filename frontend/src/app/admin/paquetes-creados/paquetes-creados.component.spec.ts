import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaquetesCreadosComponent } from './paquetes-creados.component';

describe('PaquetesCreadosComponent', () => {
  let component: PaquetesCreadosComponent;
  let fixture: ComponentFixture<PaquetesCreadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaquetesCreadosComponent]
    });
    fixture = TestBed.createComponent(PaquetesCreadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
