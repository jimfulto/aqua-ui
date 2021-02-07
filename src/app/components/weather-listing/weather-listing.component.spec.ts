import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherListingComponent } from './weather-listing.component';

describe('WeatherListingComponent', () => {
  let component: WeatherListingComponent;
  let fixture: ComponentFixture<WeatherListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
