import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherRegistrationComponent } from './weather-registration.component';

describe('WeatherRegistrationComponent', () => {
  let component: WeatherRegistrationComponent;
  let fixture: ComponentFixture<WeatherRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
