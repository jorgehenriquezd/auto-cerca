import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleShippedComponent } from './vehicle-shipped.component';

describe('VehicleShippedComponent', () => {
  let component: VehicleShippedComponent;
  let fixture: ComponentFixture<VehicleShippedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleShippedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleShippedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
