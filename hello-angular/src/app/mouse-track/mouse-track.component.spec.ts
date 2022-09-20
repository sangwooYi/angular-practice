import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MouseTrackComponent } from './mouse-track.component';
import { LOG_LEVEL_TOKEN } from '../app.tokes';
import { LogLevel } from '../log-level';
import { MySpeacialLoggerService } from '../my-speacial-logger.service';
import { AnotherLoggerService } from '../another-logger.service';


describe('MouseTrackComponent', () => {
  let component: MouseTrackComponent;
  let fixture: ComponentFixture<MouseTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseTrackComponent ],
      providers: [ 
        MySpeacialLoggerService,
        AnotherLoggerService,
        { provide: LOG_LEVEL_TOKEN, useValue: LogLevel.INFO} ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // 테스트 할 코드를 아래와같이 작성해서 확인한다.
  it('마우스 클릭때마다 로그 적재', () => {
    const trackZone = fixture.debugElement.query(By.css('.track-zone'));
    // 그냥 특정 이벤트를 발생 시킴
    trackZone.triggerEventHandler("click", { clientX: 1, clientY: 1});
    expect(component.loggerService.log.length).toEqual(2);
  });

});
