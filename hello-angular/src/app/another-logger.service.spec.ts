import { TestBed } from '@angular/core/testing';

import { AnotherLoggerService } from './another-logger.service';
import { LOG_LEVEL_TOKEN } from './app.tokes';
import { LogLevel } from './log-level';

describe('AnotherLoggerService', () => {
  let service: AnotherLoggerService;

  beforeEach(() => {
    // providers는 여기에다 설정해 준다.
    TestBed.configureTestingModule({
      providers: [
        { provide: LOG_LEVEL_TOKEN, useValue: LogLevel.INFO}
      ]
    });
    service = TestBed.inject(AnotherLoggerService);
  });
  // 문제없이 로직이 수행 되면 첫번째 인자로 설정한 값이 출력 됨
  it('should be created ', () => {
    expect(service).toBeTruthy();
  });
});
