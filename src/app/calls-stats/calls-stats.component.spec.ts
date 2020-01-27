import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsStatsComponent } from './calls-stats.component';

describe('CallsStatsComponent', () => {
  let component: CallsStatsComponent;
  let fixture: ComponentFixture<CallsStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
