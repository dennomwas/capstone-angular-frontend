import { TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';


import { ForecastService } from './forecast.service';

describe('ForecastService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpModule]
  }));

  it('should be created', () => {
    const service: ForecastService = TestBed.get(ForecastService);
    expect(service).toBeTruthy();
  });
});
