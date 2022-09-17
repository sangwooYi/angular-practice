import { TestBed } from '@angular/core/testing';

import { MySpeacialLoggerService } from './my-speacial-logger.service';

describe('MySpeacialLoggerService', () => {
  let service: MySpeacialLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySpeacialLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
