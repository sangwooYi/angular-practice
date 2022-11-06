import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TstCompComponent } from './tst-comp.component';

describe('TstCompComponent', () => {
  let component: TstCompComponent;
  let fixture: ComponentFixture<TstCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TstCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TstCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
