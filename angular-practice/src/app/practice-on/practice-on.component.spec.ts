import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeOnComponent } from './practice-on.component';

describe('PracticeOnComponent', () => {
  let component: PracticeOnComponent;
  let fixture: ComponentFixture<PracticeOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeOnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
