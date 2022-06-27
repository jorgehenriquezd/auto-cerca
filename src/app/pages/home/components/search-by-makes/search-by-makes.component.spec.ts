import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByMakesComponent } from './search-by-makes.component';

describe('SearchByMakesComponent', () => {
  let component: SearchByMakesComponent;
  let fixture: ComponentFixture<SearchByMakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByMakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByMakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
