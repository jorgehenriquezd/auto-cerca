import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAdComponent } from './slider-ad.component';

describe('SliderAdComponent', () => {
  let component: SliderAdComponent;
  let fixture: ComponentFixture<SliderAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
