import { TestBed } from '@angular/core/testing';

import { MySpeacialLoggerService } from './my-speacial-logger.service';
import { LOG_LEVEL_TOKEN } from './app.tokes';
import { LogLevel } from './log-level';


describe('MySpeacialLoggerService', () => {
  let service: MySpeacialLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: LOG_LEVEL_TOKEN, useValue: LogLevel.INFO},
      ]
    });
    service = TestBed.inject(MySpeacialLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('TDD 왜 함 ㅡㅡ?', () => {
    service.info("test 1");
    service.info("test 2");
    expect(service.logs.length).toEqual(2);
  });
});
