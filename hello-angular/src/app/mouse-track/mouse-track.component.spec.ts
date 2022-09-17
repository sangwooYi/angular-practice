import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseTrackComponent } from './mouse-track.component';

describe('MouseTrackComponent', () => {
  let component: MouseTrackComponent;
  let fixture: ComponentFixture<MouseTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
