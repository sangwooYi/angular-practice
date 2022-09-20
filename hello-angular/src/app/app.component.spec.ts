import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LOG_LEVEL_TOKEN } from './app.tokes';
import { LogLevel } from './log-level';
import { HonorPipe } from './honor.pipe';
import { MouseTrackComponent } from './mouse-track/mouse-track.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MouseTrackComponent,
        HonorPipe,
      ],
      providers: [ { provide: LOG_LEVEL_TOKEN, useValue: LogLevel.INFO} ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
